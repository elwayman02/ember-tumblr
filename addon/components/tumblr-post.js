import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  /**
   * Class names for the component
   * @type {Array.string}
   * @default
   */
  classNames: ['tumblr-post'],

  /**
   * Class names bound to other properties
   * @type {Array.string}
   * @default
   */
  classNameBindings: ['isCollapsed:tumblr-post-collapsed'],

  /**
   * Route to link posts to
   * @type {string}
   * @default
   */
  postsRoute: null,

  /**
   * Determines whether or not the blog can collapse its posts
   * @type {boolean}
   * @default
   */
  collapsible: false,

  /**
   * Post should be collapsed if possible
   * @type {boolean}
   * @default
   */
  collapsed: true,

  /**
   * Use date formatting
   * @type {boolean}
   * @default
   */
  formatDates: false,

  /**
   * Text to display when post is collapsed
   * @type {string}
   * @default
   */
  collapsedText: 'View More',

  /**
   * Text to display when post is expanded
   * @type {string}
   * @default
   */
  expandedText: 'Collapse Post',

  /**
   * Is post collapsed?
   * @type {boolean}
   * @default
   */
  isCollapsed: computed('collapsible', 'collapsed', function () {
    return this.get('collapsible') && this.get('collapsed');
  }),

  /**
   * Choose which text to display, depending on whether the component is collapsed
   * @type {string}
   * @default
   */
  expandButtonText: computed('isCollapsed', 'collapsedText', 'expandedText', function () {
    return this.get('isCollapsed') ? this.get('collapsedText') : this.get('expandedText');
  }),

  actions: {
    /** Expand/collapse the component */
    expand() {
      this.toggleProperty('collapsed');
    }
  }
});
