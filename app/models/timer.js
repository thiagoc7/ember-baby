import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  start: DS.attr('string'),
  eDuration: DS.attr('number'),
  dDuration: DS.attr('number'),
  momentStart: Ember.computed('start', function () {
    return moment(this.get('start')).format();
  })
});
