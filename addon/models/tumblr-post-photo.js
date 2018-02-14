import DS from 'ember-data';
import Post from './tumblr-post';
import { alias } from '@ember/object/computed'

const attr = DS.attr;

export default Post.extend({
  caption: attr('string'),
  
  photos: attr(), 
  photoCount: alias('photos.length')  
});
