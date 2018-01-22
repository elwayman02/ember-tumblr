import { isPresent } from '@ember/utils';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  /**
   * Post Type
   *
   * @property type
   * @type {String}
   * @default ''
   */
  type: '',

  /**
   * Use Post Type to determine model name for serializing
   *
   * @method modelNameFromPayloadKey
   * @param {String} payloadKey The incoming payload key
   * @return {String} The modified key
   */
  modelNameFromPayloadKey(payloadKey) {
    const type = this.get('type');
    if (isPresent(type)) {
      return this._super(`${payloadKey.substring(0, payloadKey.length-1)}-${type}`);
    }
    return this._super(payloadKey);
  },

  /**
   * Normalize the payload to match our models
   *
   * @method normalizePayload
   * @param {Object} payload The incoming payload
   * @return {Object} The modified payload
   * @public
   */
  normalizeResponse(store, primaryModelClass, payload) {
    if (payload.response && payload.response.posts) {
      let type = this.get('type') ? `-${this.get('type')}` : '';
      let data = payload.response.posts.map((post) => {
        post.date = this.normalizeDate(post.date);
        delete post.tags;
        return {
          id: post.id,
          type: `tumblr-post${type}`,
          attributes: post
        };
      });
      return { data };
    }
    return payload;
  },

  /**
   * Convert date from Tumblr API format to ISO string
   *
   * @method normalizeDate
   * @param {String} date The date string
   * @return {Date} normalized date object
   * @private
   */
  normalizeDate(date) {
    date = date.split(' ');
    date.pop(); // remove GMT from date string
    return `${date.join('T')}.000Z`;
  }
});
