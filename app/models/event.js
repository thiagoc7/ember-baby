import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  onStart: DS.attr('boolean'),
  timer: DS.attr('string')
});
