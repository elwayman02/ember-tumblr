import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tumblr-blog'],
  postsRoute: null,
  collapsible: false,
  collapsedByDefault: true
});
