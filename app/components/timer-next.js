import Ember from 'ember';

export default Ember.Component.extend({
  nextIn: 180,
  nextTime: Ember.computed('lastStart', 'nextIn', function () {
    var lastStart = String(this.get('lastStart'));
    return moment(lastStart).add(this.get('nextIn'), 'minutes');
  })
});
