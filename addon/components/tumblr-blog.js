import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tumblr-blog'],
  posts: Ember.A([]),
  postsRoute: null,
  collapsible: false,
  collapseByDefault: true,
  formatDates: true,
  sortBy: [],
  sortedPosts: Ember.computed.sort('posts', 'sortBy')
});
