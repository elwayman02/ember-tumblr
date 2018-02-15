import Post from './tumblr-post';
import attr from 'ember-data/attr';

export default Post.extend({
  title: attr('string'),
  body: attr('string')
});
