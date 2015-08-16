import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('blog');
  this.route('linked-blog');
  this.route('collapsed-blog');
  this.route('uncollapsed-blog');
  this.route('sorted-blog');
  this.route('no-format-blog');
  this.route('error-blog');
  this.route('post', { path: '/posts/:post_id' });
});

export default Router;
