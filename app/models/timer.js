import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  start: DS.attr('string'),
  eDuration: DS.attr('number'),
  eFinish: DS.attr('string'),
  dDuration: DS.attr('number'),
  dFinish: DS.attr('string'),
  momentStart: Ember.computed('start', function () {
    return moment(this.get('start')).format();
  }),
  lastSideE: Ember.computed('eFinish', 'dFinish', function () {
    var eFinish = moment(this.get('eFinish'));
    var dFinish = moment(this.get('dFinish'));
    return eFinish > dFinish;
  })
});
