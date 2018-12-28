import axios from 'axios'
import store from './store'
import NProgress from 'nprogress'
import router from './router'

axios.interceptors.request.use(
  (config) => {
    NProgress.start()
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Accept-Language'] = 'en'
    config.headers['Accept'] = 'application/json'

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response
  },
  (error) => {
    NProgress.done()
    const originalRequest = error.config
    if (error.response.status === 401 && error.response.data.message == "Unauthenticated.") {
      store.dispatch('responseMessage', {
        type: 'warning',
        text: 'No tiene una sesión activa, por favor vuelva a iniciar sesión.',
        title: 'Sesión Expirada!',
        modal: true
      })
      .then(async () => {
        await store.dispatch('cleanSession')
        router.push({ name: 'login' })
      })
    }
    if (error.response.status === 401 && error.response.data.message == "Denied") {
      store.dispatch('responseMessage', {
        type: 'error',
        text: 'No tiene permisos para realizar esta acción.',
        title: 'Acceso Denegado!',
        modal: true
      })
    }
    if (error.response.status === 404) {
      router.push({ name: '404' })
    }
    if (error.response.status >= 500) {
      const msj = error.response.data
      store.dispatch('responseMessage', {
        type: 'error',
        text: msj,
        title: 'Error',
        modal: true
      })
    }
    return Promise.reject(error)
  }
)