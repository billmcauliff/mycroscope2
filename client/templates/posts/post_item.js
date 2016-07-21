Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },


  // commentsCount: function() {
  //   return Comments.find({postId: this._id}).count();
  // },

upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  }, 
// Removed this because it is addressed in the book - pluralize - registerHelper - Chap 13
  // commentsSingularOrPlural: function(commentsCount){
  //     var comment = {};
  //         if (Comments.find({postId: this._id}).count() === 1){
  //           comment = "comment";
  //         } else {
  //           comment = "comments";
  //         }
          
  //       return comment;
  //     }
    }
);

Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },
});