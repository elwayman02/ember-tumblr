import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  //alt_sizes: hasMany('tumblr-photo-size'),
  caption: attr('string')
});
