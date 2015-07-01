import DS from 'ember-data';
import Post from './tumblr-post';

const attr = DS.attr;

export default Post.extend({
  text: attr('string'),
  source: attr('string')
});
