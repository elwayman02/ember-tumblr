import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('blog');
  this.route('linked-blog');
  this.route('post', { path: '/posts/:post_id' });
});

export default Router;
