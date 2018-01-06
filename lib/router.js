import { Meteor } from 'meteor/meteor';

Router.configure({
    layoutTemplate: 'layout'

});

Router.route('/', {name : 'home'})
Router.route('/tuto', {name : 'tuto'});
Router.route('/exo', {name : 'exo'});
Router.route('/DL', {name : 'DL'});
Router.route('/AP', {name : 'AP'});
Router.route('/VPN', {name : 'VPN'});
Router.route('/CTC', {name : 'contact'});
Router.route('/FLC', {name : 'FLC'});
Router.route('/Note', {name : 'Note'});




// PostsListController = RouteController.extend({
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



