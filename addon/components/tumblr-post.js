import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tumblr-post'],
  classNameBindings: ['isCollapsed:tumblr-post-collapsed'],
  postsRoute: null,
  collapsible: false,
  collapsed: true,
  formatDates: true,

  collapsedText: 'View More',
  expandedText: 'Collapse Post',

  isCollapsed: Ember.computed('collapsible', 'collapsed', function () {
    return this.get('collapsible') && this.get('collapsed');
  }),

  expandButtonText: Ember.computed('isCollapsed', 'collapsedText', 'expandedText', function () {
    return this.get('isCollapsed') ? this.get('collapsedText') : this.get('expandedText');
  }),

  actions: {
    expand() {
      this.toggleProperty('collapsed');
    }
  }
});
