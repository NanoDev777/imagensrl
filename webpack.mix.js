let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sourceMaps()

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'axios',
    '@google/markerclusterer',
    'google-maps',
    'moment',
    'nprogress',
    'vee-validate',
    'vue-router',
    'vue-snotify',
    'vuetify',
    'vuex',
    'vuex-persistedstate'
  ])
}