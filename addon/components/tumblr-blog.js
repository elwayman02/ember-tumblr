import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Component.extend({
  /**
   * Class names for the component
   * @type {Array.string}
   * @default
   */
  classNames: 'tumblr-blog',

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
   * Default all posts to collapsed
   * @type {boolean}
   * @default
   */
  collapseByDefault: true,

  /**
   * Use date formatting
   * @type {boolean}
   * @default
   */
  formatDates: true,

  /**
   * Display an error message instead of attempting to render posts when none are returned
   * @type {boolean}
   * @default
   */
  showErrors: true,

  /**
   * Error message to display when no posts were found
   */
  errorMessage: "We're sorry, we were unable to retrieve any posts. Please check back later!",

  /**
   * Configurable Sort Options
   * @type {Array.string}
   * @default
   */
  sortBy: null,

  /**
   * Posts to be displayed
   * @type {Array.Tumblr-Post}
   * @default
   */
  posts: A([]),

  /**
   * Sorted array of posts
   * @type {Array.Tumblr-Post}
   * @default
   */
  sortedPosts: computed.sort('posts', 'sortBy'),

  init() {
    this._super(...arguments);

    this.set('sortBy', []);
  }
});
