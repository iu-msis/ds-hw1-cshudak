var userApp = new Vue({
  el: '#userProfile',
  data: {
      userData: {}
    },

  methods: {

    fetchUser() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json() )
        // this is the same as .then(function(response) {return response.json()} )
        .then( json => {userApp.userData = json.results[0]})
        .catch(err => {
          console.log(err);

          })
        }
    },

    computed: {
      age: function() {
        return moment().diff(this.userData.dob.date,'years')
      },
      pretty_date: function() {
        return moment(this.userData.dob.date).format('YYYY-MM-DD')
      }

    },
      created() {
        this.fetchUser();
      }
})
