var commentsApp = new Vue({
	el: '#commentMain',
	data: {
		comment: [],
		commentForm: {}
	},

  methods: {
  		handleCommentPost(e) {
  			e.preventDefault();

  			const s = JSON.stringify(this.commentForm);
  			console.log(s);


  			fetch('api/comment.php', {
  					method: "POST",
  					headers: {
  						"Content-Type": "application/json; charset=utf-8"
  					},
  					body: s
  				})

  				.then(function (response) {
  					console.log(response);
  					return response.json();
  				})
  				.then(json => {
  					this.comment.push(json)
  				})
  				.catch(err => {
  					console.error('COMMENT POST ERROR');
  					console.error(err);
  				})
  			this.commentForm = this.getEmptyCommentForm();
  		},

  		getEmptyCommentForm() {
  			return {
  				comment: null
  			}
  		},
  	},

    created() {
    		fetch('api/comment.php')
    			.then(response => response.json())
    			.then(json => {
    				commentsApp.comment = json
    			})
    			.catch(err => {
    				console.log('COMMENT FETCH ERROR:');
    				console.log(err);
    			})
    	}
    })
