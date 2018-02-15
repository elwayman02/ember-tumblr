import Post from './tumblr-post';
import { alias } from '@ember/object/computed'
import attr from 'ember-data/attr';

export default Post.extend({
  caption: attr('string'),
  
  photos: attr(), 
  photoCount: alias('photos.length')  
});
