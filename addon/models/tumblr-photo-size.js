import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  width: attr('number'),
  height: attr('number'),
  url: attr('string')
});
