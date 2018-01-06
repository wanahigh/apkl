var require = meteorInstall({"lib":{"collections":{"UserCol.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections/UserCol.js                                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
éUserID = new Mongo.Collection('userID');
///////////////////////////////////////////////////////////////////////////////////////////////////

},"comments.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections/comments.js                                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Comments = new Mongo.Collection('comments');
Meteor.methods({
  commentInsert: function (commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);
    if (!post) throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    }); // update the post with the number of comments

    Posts.update(comment.postId, {
      $inc: {
        commentsCount: 1
      }
    }); // create the comment, save the id

    comment._id = Comments.insert(comment); // now create a notification, informing the user that there's been a comment

    createCommentNotification(comment);
    return comment._id;
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections/notifications.js                                                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Notifications = new Mongo.Collection('notifications');
Notifications.allow({
  update: function (userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = function (comment) {
  var post = Posts.findOne(comment.postId);

  if (comment.userId !== post.userId) {
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections/posts.js                                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  Tasks: () => Tasks
});
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Tasks = new Mongo.Collection('tasks');
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"permissions.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/permissions.js                                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
  return doc && doc.userId === userId;
};
///////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/router.js                                                                                 //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
let Meteor;
module.watch(require("meteor/meteor"), {
    Meteor(v) {
        Meteor = v;
    }

}, 0);
Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/tuto', {
    name: 'tuto'
});
Router.route('/exo', {
    name: 'exo'
});
Router.route('/DL', {
    name: 'DL'
});
Router.route('/AP', {
    name: 'AP'
});
Router.route('/VPN', {
    name: 'VPN'
});
Router.route('/CTC', {
    name: 'contact'
});
Router.route('/FLC', {
    name: 'FLC'
});
Router.route('/Note', {
    name: 'Note'
}); // PostsListController = RouteController.extend({
//     template: 'postsList',
//     increment: 5,
//     postsLimit: function() {
//         return parseInt(this.params.postsLimit) || this.increment;
//     },
//     findOptions: function() {
//         return {sort: this.sort, limit: this.postsLimit()};
//     },
//     subscriptions: function() {
//         this.postsSub = Meteor.subscribe('posts', this.findOptions());
//     },
//     posts: function() {
//         return Posts.find({}, this.findOptions());
//     },
//     data: function() {
//         var self = this;
//         return {
//             posts: self.posts(),
//             ready: self.postsSub.ready,
//             nextPath: function() {
//                 if (self.posts().count() === self.postsLimit())
//                     return self.nextPath();
//             }
//         };
//     }
// });
//
// NewPostsController = PostsListController.extend({
//     sort: {submitted: -1, _id: -1},
//     nextPath: function() {
//         return Router.routes.newPosts.path({postsLimit: this.postsLimit() + this.increment})
//     }
// });
//
// BestPostsController = PostsListController.extend({
//     sort: {votes: -1, submitted: -1, _id: -1},
//     nextPath: function() {
//         return Router.routes.bestPosts.path({postsLimit: this.postsLimit() + this.increment})
//     }
// });
//
// Router.route('/pub', {
//     name: 'publication',
//     controller: NewPostsController
// });
//
// Router.route('/new/:postsLimit?', {name: 'newPosts'});
//
// Router.route('/best/:postsLimit?', {name: 'bestPosts'});
//
//
// Router.route('/posts/:_id', {
//     name: 'postPage',
//     waitOn: function() {
//         return [
//             Meteor.subscribe('singlePost', this.params._id),
//             Meteor.subscribe('comments', this.params._id)
//         ];
//     },
//     data: function() { return Posts.findOne(this.params._id); }
// });
//
// Router.route('/posts/:_id/edit', {
//     name: 'postEdit',
//     waitOn: function() {
//         return Meteor.subscribe('singlePost', this.params._id);
//     },
//     data: function() { return Posts.findOne(this.params._id); }
// });
//
// Router.route('/submit', {name: 'postSubmit'});
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"fixtures.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// server/fixtures.js                                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// server/main.js                                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Meteor.startup(() => {// code to run on server at startup
}); // mail //*
///////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/collections/UserCol.js");
require("./lib/collections/comments.js");
require("./lib/collections/notifications.js");
require("./lib/collections/posts.js");
require("./lib/permissions.js");
require("./lib/router.js");
require("./server/fixtures.js");
require("./server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL1VzZXJDb2wuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9jb21tZW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb25zL25vdGlmaWNhdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9jb2xsZWN0aW9ucy9wb3N0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL3Blcm1pc3Npb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvcm91dGVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyLDqVVzZXJJRCIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsIkNvbW1lbnRzIiwiTWV0ZW9yIiwibWV0aG9kcyIsImNvbW1lbnRJbnNlcnQiLCJjb21tZW50QXR0cmlidXRlcyIsImNoZWNrIiwidXNlcklkIiwiU3RyaW5nIiwicG9zdElkIiwiYm9keSIsInVzZXIiLCJwb3N0IiwiUG9zdHMiLCJmaW5kT25lIiwiRXJyb3IiLCJjb21tZW50IiwiXyIsImV4dGVuZCIsIl9pZCIsImF1dGhvciIsInVzZXJuYW1lIiwic3VibWl0dGVkIiwiRGF0ZSIsInVwZGF0ZSIsIiRpbmMiLCJjb21tZW50c0NvdW50IiwiaW5zZXJ0IiwiY3JlYXRlQ29tbWVudE5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbnMiLCJhbGxvdyIsImRvYyIsImZpZWxkTmFtZXMiLCJvd25zRG9jdW1lbnQiLCJsZW5ndGgiLCJjb21tZW50SWQiLCJjb21tZW50ZXJOYW1lIiwicmVhZCIsIm1vZHVsZSIsImV4cG9ydCIsIlRhc2tzIiwid2F0Y2giLCJyZXF1aXJlIiwidiIsIlJvdXRlciIsImNvbmZpZ3VyZSIsImxheW91dFRlbXBsYXRlIiwicm91dGUiLCJuYW1lIiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsVUFBVSxJQUFJQyxNQUFN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBOUMsT0FBTytDLE9BQVAsQ0FBZSxNQUFNLENBQ25CO0FBQ0QsQ0FGRCxFLENBS0EsVyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiw6lVc2VySUQgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlcklEJyk7IiwiQ29tbWVudHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY29tbWVudHMnKTtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICBjb21tZW50SW5zZXJ0OiBmdW5jdGlvbihjb21tZW50QXR0cmlidXRlcykge1xuICAgIGNoZWNrKHRoaXMudXNlcklkLCBTdHJpbmcpO1xuICAgIGNoZWNrKGNvbW1lbnRBdHRyaWJ1dGVzLCB7XG4gICAgICBwb3N0SWQ6IFN0cmluZyxcbiAgICAgIGJvZHk6IFN0cmluZ1xuICAgIH0pO1xuICAgIFxuICAgIHZhciB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcbiAgICB2YXIgcG9zdCA9IFBvc3RzLmZpbmRPbmUoY29tbWVudEF0dHJpYnV0ZXMucG9zdElkKTtcblxuICAgIGlmICghcG9zdClcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtY29tbWVudCcsICdZb3UgbXVzdCBjb21tZW50IG9uIGEgcG9zdCcpO1xuICAgIFxuICAgIGNvbW1lbnQgPSBfLmV4dGVuZChjb21tZW50QXR0cmlidXRlcywge1xuICAgICAgdXNlcklkOiB1c2VyLl9pZCxcbiAgICAgIGF1dGhvcjogdXNlci51c2VybmFtZSxcbiAgICAgIHN1Ym1pdHRlZDogbmV3IERhdGUoKVxuICAgIH0pO1xuICAgIFxuICAgIC8vIHVwZGF0ZSB0aGUgcG9zdCB3aXRoIHRoZSBudW1iZXIgb2YgY29tbWVudHNcbiAgICBQb3N0cy51cGRhdGUoY29tbWVudC5wb3N0SWQsIHskaW5jOiB7Y29tbWVudHNDb3VudDogMX19KTtcbiAgICBcbiAgICAvLyBjcmVhdGUgdGhlIGNvbW1lbnQsIHNhdmUgdGhlIGlkXG4gICAgY29tbWVudC5faWQgPSBDb21tZW50cy5pbnNlcnQoY29tbWVudCk7XG4gICAgXG4gICAgLy8gbm93IGNyZWF0ZSBhIG5vdGlmaWNhdGlvbiwgaW5mb3JtaW5nIHRoZSB1c2VyIHRoYXQgdGhlcmUncyBiZWVuIGEgY29tbWVudFxuICAgIGNyZWF0ZUNvbW1lbnROb3RpZmljYXRpb24oY29tbWVudCk7XG4gICAgXG4gICAgcmV0dXJuIGNvbW1lbnQuX2lkO1xuICB9XG59KTtcbiIsIk5vdGlmaWNhdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbm90aWZpY2F0aW9ucycpO1xuXG5Ob3RpZmljYXRpb25zLmFsbG93KHtcbiAgdXBkYXRlOiBmdW5jdGlvbih1c2VySWQsIGRvYywgZmllbGROYW1lcykge1xuICAgIHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBkb2MpICYmIFxuICAgICAgZmllbGROYW1lcy5sZW5ndGggPT09IDEgJiYgZmllbGROYW1lc1swXSA9PT0gJ3JlYWQnO1xuICB9XG59KTtcblxuY3JlYXRlQ29tbWVudE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgdmFyIHBvc3QgPSBQb3N0cy5maW5kT25lKGNvbW1lbnQucG9zdElkKTtcbiAgaWYgKGNvbW1lbnQudXNlcklkICE9PSBwb3N0LnVzZXJJZCkge1xuICAgIE5vdGlmaWNhdGlvbnMuaW5zZXJ0KHtcbiAgICAgIHVzZXJJZDogcG9zdC51c2VySWQsXG4gICAgICBwb3N0SWQ6IHBvc3QuX2lkLFxuICAgICAgY29tbWVudElkOiBjb21tZW50Ll9pZCxcbiAgICAgIGNvbW1lbnRlck5hbWU6IGNvbW1lbnQuYXV0aG9yLFxuICAgICAgcmVhZDogZmFsc2VcbiAgICB9KTtcbiAgfVxufTsiLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBjb25zdCBUYXNrcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd0YXNrcycpOyIsIi8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgb3ducyB0aGUgZG9jdW1lbnRzXG5vd25zRG9jdW1lbnQgPSBmdW5jdGlvbih1c2VySWQsIGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy51c2VySWQgPT09IHVzZXJJZDtcbn1cbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5Sb3V0ZXIuY29uZmlndXJlKHtcbiAgICBsYXlvdXRUZW1wbGF0ZTogJ2xheW91dCdcblxufSk7XG5cblJvdXRlci5yb3V0ZSgnLycsIHtuYW1lIDogJ2hvbWUnfSlcblJvdXRlci5yb3V0ZSgnL3R1dG8nLCB7bmFtZSA6ICd0dXRvJ30pO1xuUm91dGVyLnJvdXRlKCcvZXhvJywge25hbWUgOiAnZXhvJ30pO1xuUm91dGVyLnJvdXRlKCcvREwnLCB7bmFtZSA6ICdETCd9KTtcblJvdXRlci5yb3V0ZSgnL0FQJywge25hbWUgOiAnQVAnfSk7XG5Sb3V0ZXIucm91dGUoJy9WUE4nLCB7bmFtZSA6ICdWUE4nfSk7XG5Sb3V0ZXIucm91dGUoJy9DVEMnLCB7bmFtZSA6ICdjb250YWN0J30pO1xuUm91dGVyLnJvdXRlKCcvRkxDJywge25hbWUgOiAnRkxDJ30pO1xuUm91dGVyLnJvdXRlKCcvTm90ZScsIHtuYW1lIDogJ05vdGUnfSk7XG5cblxuXG5cbi8vIFBvc3RzTGlzdENvbnRyb2xsZXIgPSBSb3V0ZUNvbnRyb2xsZXIuZXh0ZW5kKHtcbi8vICAgICB0ZW1wbGF0ZTogJ3Bvc3RzTGlzdCcsXG4vLyAgICAgaW5jcmVtZW50OiA1LFxuLy8gICAgIHBvc3RzTGltaXQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wYXJhbXMucG9zdHNMaW1pdCkgfHwgdGhpcy5pbmNyZW1lbnQ7XG4vLyAgICAgfSxcbi8vICAgICBmaW5kT3B0aW9uczogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiB7c29ydDogdGhpcy5zb3J0LCBsaW1pdDogdGhpcy5wb3N0c0xpbWl0KCl9O1xuLy8gICAgIH0sXG4vLyAgICAgc3Vic2NyaXB0aW9uczogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHRoaXMucG9zdHNTdWIgPSBNZXRlb3Iuc3Vic2NyaWJlKCdwb3N0cycsIHRoaXMuZmluZE9wdGlvbnMoKSk7XG4vLyAgICAgfSxcbi8vICAgICBwb3N0czogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiBQb3N0cy5maW5kKHt9LCB0aGlzLmZpbmRPcHRpb25zKCkpO1xuLy8gICAgIH0sXG4vLyAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHBvc3RzOiBzZWxmLnBvc3RzKCksXG4vLyAgICAgICAgICAgICByZWFkeTogc2VsZi5wb3N0c1N1Yi5yZWFkeSxcbi8vICAgICAgICAgICAgIG5leHRQYXRoOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wb3N0cygpLmNvdW50KCkgPT09IHNlbGYucG9zdHNMaW1pdCgpKVxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5uZXh0UGF0aCgpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9O1xuLy8gICAgIH1cbi8vIH0pO1xuLy9cbi8vIE5ld1Bvc3RzQ29udHJvbGxlciA9IFBvc3RzTGlzdENvbnRyb2xsZXIuZXh0ZW5kKHtcbi8vICAgICBzb3J0OiB7c3VibWl0dGVkOiAtMSwgX2lkOiAtMX0sXG4vLyAgICAgbmV4dFBhdGg6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICByZXR1cm4gUm91dGVyLnJvdXRlcy5uZXdQb3N0cy5wYXRoKHtwb3N0c0xpbWl0OiB0aGlzLnBvc3RzTGltaXQoKSArIHRoaXMuaW5jcmVtZW50fSlcbi8vICAgICB9XG4vLyB9KTtcbi8vXG4vLyBCZXN0UG9zdHNDb250cm9sbGVyID0gUG9zdHNMaXN0Q29udHJvbGxlci5leHRlbmQoe1xuLy8gICAgIHNvcnQ6IHt2b3RlczogLTEsIHN1Ym1pdHRlZDogLTEsIF9pZDogLTF9LFxuLy8gICAgIG5leHRQYXRoOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgcmV0dXJuIFJvdXRlci5yb3V0ZXMuYmVzdFBvc3RzLnBhdGgoe3Bvc3RzTGltaXQ6IHRoaXMucG9zdHNMaW1pdCgpICsgdGhpcy5pbmNyZW1lbnR9KVxuLy8gICAgIH1cbi8vIH0pO1xuLy9cbi8vIFJvdXRlci5yb3V0ZSgnL3B1YicsIHtcbi8vICAgICBuYW1lOiAncHVibGljYXRpb24nLFxuLy8gICAgIGNvbnRyb2xsZXI6IE5ld1Bvc3RzQ29udHJvbGxlclxuLy8gfSk7XG4vL1xuLy8gUm91dGVyLnJvdXRlKCcvbmV3Lzpwb3N0c0xpbWl0PycsIHtuYW1lOiAnbmV3UG9zdHMnfSk7XG4vL1xuLy8gUm91dGVyLnJvdXRlKCcvYmVzdC86cG9zdHNMaW1pdD8nLCB7bmFtZTogJ2Jlc3RQb3N0cyd9KTtcbi8vXG4vL1xuLy8gUm91dGVyLnJvdXRlKCcvcG9zdHMvOl9pZCcsIHtcbi8vICAgICBuYW1lOiAncG9zdFBhZ2UnLFxuLy8gICAgIHdhaXRPbjogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiBbXG4vLyAgICAgICAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKCdzaW5nbGVQb3N0JywgdGhpcy5wYXJhbXMuX2lkKSxcbi8vICAgICAgICAgICAgIE1ldGVvci5zdWJzY3JpYmUoJ2NvbW1lbnRzJywgdGhpcy5wYXJhbXMuX2lkKVxuLy8gICAgICAgICBdO1xuLy8gICAgIH0sXG4vLyAgICAgZGF0YTogZnVuY3Rpb24oKSB7IHJldHVybiBQb3N0cy5maW5kT25lKHRoaXMucGFyYW1zLl9pZCk7IH1cbi8vIH0pO1xuLy9cbi8vIFJvdXRlci5yb3V0ZSgnL3Bvc3RzLzpfaWQvZWRpdCcsIHtcbi8vICAgICBuYW1lOiAncG9zdEVkaXQnLFxuLy8gICAgIHdhaXRPbjogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiBNZXRlb3Iuc3Vic2NyaWJlKCdzaW5nbGVQb3N0JywgdGhpcy5wYXJhbXMuX2lkKTtcbi8vICAgICB9LFxuLy8gICAgIGRhdGE6IGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9zdHMuZmluZE9uZSh0aGlzLnBhcmFtcy5faWQpOyB9XG4vLyB9KTtcbi8vXG4vLyBSb3V0ZXIucm91dGUoJy9zdWJtaXQnLCB7bmFtZTogJ3Bvc3RTdWJtaXQnfSk7XG5cblxuXG5cbiIsIlxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG59KTtcblxuXG4vLyBtYWlsIC8vKlxuIl19
