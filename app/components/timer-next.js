import Ember from 'ember';

export default Ember.Component.extend({
  nextIn: 180,

  lastStartDisplay: Ember.computed('lastStart', function () {
    var start = moment(this.get('lastStart'));
    var remainder = (5 - start.minute()) % 5;
    return moment(start).add("minutes", remainder);
  }),

  nextInDisplay: Ember.computed('nextIn', function () {
    return moment().hour(0).minute(this.get('nextIn')).second(0).format('HH:mm');
  }),

  nextTime: Ember.computed('lastStartDisplay', 'nextIn', function () {
    var lastStart = String(this.get('lastStartDisplay'));
    return moment(lastStart).add(this.get('nextIn'), 'minutes');
  }),

  actions: {
    addTime: function () {
      this.set('nextIn', this.get('nextIn') + 5);
    },

    removeTime: function () {
      this.set('nextIn', this.get('nextIn') - 5);
    }
  }
});
