import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  type: '',

  modelNameFromPayloadKey(payloadKey) {
    const type = this.get('type');
    if (Ember.isPresent(type)) {
      return this._super(`${payloadKey.substring(0, payloadKey.length-1)}-${type}`);
    }
    return this._super(payloadKey);
  },

  normalizePayload(payload) {
    if (payload.response && payload.response.posts) {
      const posts = payload.response.posts.map(function (post) {
        delete post.tags;
        return post;
      });
      return { posts: posts };
    }
    return payload;
  }
});
