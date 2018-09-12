var dashboardApp = new Vue({
  el: '#dashboard',
  data: {
    name : "Project Dashboard",
    "short_description": "Build a visualization layer for the project dashboard",
    "start_date" : "2018-07-01",
    "target_date" : "2018-11-03",
    "budget" : "4950000",
    "spent" : "3456700",
    "projected_spend": "4740500",
    "weekly_effort_target": 400,
    tasks: [
      {
        "id": '',
        "title": '',
        "type" :'',
        "size" : '',
        "team" : '',
        "status":'',
        "start_date": '',
        "close_date": '',
        "hours_worked":'',
        "perc_complete":'',
        "current_sprint" : '',
      },

    ]
  },
  computed: {
    days_left: function() {
      return moment(this.target_date).diff(moment(),'days');
     },

    pretty_target_date: function() {
      return this.pretty_date(this.target_date)
    }
  },
  methods: {
    pretty_date: function(d) {
      return moment(d).format('l')
    },
    fetchTasks() {
        fetch('https://raw.githubusercontent.com/tag/iu-msis/dev/public/p1-tasks.json')
        .then(response => response.json() )
        // this is the same as .then(function(response) {return response.json()} )
        .then( json => {this.tasks = json } )
        .catch(function(err) {
          console.log('FETCH ERROR: ');
          console.log(err);

          })
        },
        gotoTask(tid) {
          window.location = 'task.html?taskId=' + tid;
        }
      },
      created: function() {
        this.fetchTasks()
  }
})
