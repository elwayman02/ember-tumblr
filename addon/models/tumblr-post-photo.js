import DS from 'ember-data';
import Post from './tumblr-post';

const attr = DS.attr;

export default Post.extend({
  //photos
  caption: attr('string'),
  width: attr('number'),
  height: attr('number')
});
