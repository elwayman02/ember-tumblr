import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  /**
   * Post Type
   * @type {string}
   * @default
   */
  type: '',

  /**
   * Use Post Type to determine model name for serializing
   * @param {string} payloadKey The incoming payload key
   * @returns {string} The modified key
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
   * @param {object} payload The incoming payload
   * @returns {object} The modified payload
   */
  normalizePayload(payload) {
    if (payload.response && payload.response.posts) {
      const posts = payload.response.posts.map(function (post) {
        post.date = new Date().toDateString(post.date);
        delete post.tags;
        return post;
      });
      return { 'tumblr-posts': posts };
    }
    return payload;
  }
});
