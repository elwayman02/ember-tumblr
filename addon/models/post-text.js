import DS from 'ember-data';
import Post from './post';

const attr = DS.attr;

export default Post.extend({
  title: attr('string'),
  body: attr('string')
});
