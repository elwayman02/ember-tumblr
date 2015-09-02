import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
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
    if (Ember.isPresent(type)) {
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
  normalizePayload(payload) {
    if (payload.response && payload.response.posts) {
      const posts = payload.response.posts.map((post) => {
        post.date = this.normalizeDate(post.date);
        delete post.tags;
        return post;
      });
      return { 'tumblr-posts': posts };
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
