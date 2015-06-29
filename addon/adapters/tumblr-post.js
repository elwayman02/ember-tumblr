import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  apiKey: '',
  blogUrl: '',
  type: '',
  host: 'https://api.tumblr.com',
  pathForType() {
    const type = Ember.isPresent(this.get('type')) ? `/${this.get('type')}` : '';
    return `posts${type}`;
  },
  namespace: Ember.computed(function () {
    return `v2/blog/${this.get('blogUrl')}`;
  }),
  ajaxOptions() {
    const hash = this._super.apply(this, arguments);
    hash.data = hash.data || {};
    hash.data.api_key = this.get('apiKey');
    hash.dataType = 'jsonp';
    return hash;
  }
});
