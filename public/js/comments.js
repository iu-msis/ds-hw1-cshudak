var commentsApp = new Vue ({
el: '#commentBody',
data: {
  comment: [],
  commentForm: {}
},

methods: {
  handleNewComment(e) {
    e.preventDefault();

const s = JSON.stringify (this.commentForm);
console.log(s);

fetch('api/comment.php', {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: s
})
.then(function(response)  {
  console.log(response);
  return response.json();
})
.then( json => {this.comment.push(json)})
.catch( err => {
  console.error('COMMENT POST ERROR');
  console.error(err);
})

  this.commentForm = this.fetchEmptyCommentForm();
},

fetchEmptyCommentForm() {
  return{
    comment:null
  }
},
},


created() {

  fetch('.../api/comment.php')
  .then( response => response.json() )
  .then( json => {commentApp.comment = json} )
  .catch( err => {
    console.log('COMMENT FETCH ERROR');

  })
}
})
