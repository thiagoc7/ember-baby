import DS from 'ember-data';

export default DS.Model.extend({
  side: DS.attr('string'),
  start: DS.attr('string'),
  duration: DS.attr('number'),
  momentStart: Ember.computed('start', function () {
    return moment(this.get('start')).format();
  })
});
