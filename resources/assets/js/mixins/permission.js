 import { mapGetters } from 'vuex'

export default {
	data () {
      return {
      	permissions: [
      	  {
      	  	name: 'home',
      	  	values: [1, 2]
      	  },
      	  {
      	  	name: 'graphics',
      	  	values: [2]
      	  },
      	  {
      	  	name: 'billboards',
      	  	values: [1, 2, 3]
      	  },
      	  {
      	  	name: 'reports',
      	  	values: [1, 2, 3]
      	  },
      	  {
      	  	name: 'profile',
      	  	values: [1, 2, 3]
      	  },
      	  {
      	  	name: 'alert',
      	  	values: [2]
      	  },
      	  {
      	  	name: 'users',
      	  	values: [1]
      	  },
      	  {
      	  	name: 'admin',
      	  	values: [1]
      	  },
      	]
      }
    },

    computed: mapGetters([
      'currentUser'
    ]),

    methods: {
      permission (url) {
      	if (this.currentUser) {
	      const profile = this.currentUser.profile;
	      const lengthPermissions = this.permissions.length;
	      let found = false;
		  for(let i = 0; i < lengthPermissions; i++) {
			if (this.permissions[i].name == url && this.permissions[i].values.includes(profile)) {
			  found = true;
			  break;
			}
		  }
	      return found;
      	}
      }
    }
}