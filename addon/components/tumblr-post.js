import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tumblr-post'],
  postsRoute: null,
  collapsible: false,
  collapsed: false,

  isCollapsed: Ember.computed('collapsible', 'collapsed', function () {
    return this.get('collapsible') && this.get('collapsed');
  }),

  expandText: Ember.computed('isCollapsed', function () {
    return this.get('isCollapsed') ? 'View More' : 'Collapse Post';
  }),

  actions: {
    expand() {
      this.toggleProperty('collapsed');
    }
  }
});
