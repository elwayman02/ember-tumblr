import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  blog_name: attr('string'),
  post_url: attr('string'),
  type: attr('string'),
  timestamp: attr('number'),
  date: attr('date'),
  format: attr('string'),
  reblog_key: attr('string'),
  // tags
  bookmarklet: attr('boolean'),
  mobile: attr('boolean'),
  source_url: attr('string'),
  source_title: attr('string'),
  liked: attr('boolean'),
  state: attr('string'),
  total_posts: attr('number')  
});
