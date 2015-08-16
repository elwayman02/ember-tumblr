import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tumblr-blog'],
  posts: [],
  postsRoute: null,
  collapsible: false,
  collapseByDefault: true,
  sortBy: [''],
  sortedPosts: Ember.computed.sort('posts', 'sortBy')
});
