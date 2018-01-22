import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  /**
   * Tumblr Application API Key
   * @type {string}
   * @default
   */
  apiKey: '',

  /**
   * Tumblr Blog URL
   * @type {string}
   * @default
   */
  blogUrl: '',

  /**
   * Tumblr API Hostname
   * @type {string}
   * @default
   */
  host: 'https://api.tumblr.com',

  /**
   * Post Type
   * @type {string}
   * @default
   */
  type: '',

  /**
   * Build path from type
   * @returns {string} API path with type string appended
   */
  pathForType() {
    const type = isPresent(this.get('type')) ? `/${this.get('type')}` : '';
    return `posts${type}`;
  },

  /**
   * Build namespace from blogURL
   * @returns {string} Tumblr API namespace with blogURL appended
   */
  namespace: computed('blogURL', function () {
    return `v2/blog/${this.get('blogUrl')}`;
  }),

  /**
   * Build hash for AJAX call
   * Appends API key and sets data type
   * @returns {object} hash of AJAX options
   */
  ajaxOptions() {
    const hash = this._super.apply(this, arguments);
    hash.data = hash.data || {};
    hash.data.api_key = this.get('apiKey');
    hash.dataType = 'jsonp';
    return hash;
  }
});
