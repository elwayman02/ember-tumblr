import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
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
