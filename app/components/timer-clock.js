import Ember from 'ember';

export default Ember.Component.extend({
  action: 'stop',
  runnerLoop: false,

  elapsedTime: Ember.computed('start', 'runnerLoop', function () {
    var start = this.get('start');
    if (start) {
      return  moment().diff(start);
    }
    return 0;
  }),

  runTimer: function() {
    Ember.run.later(this, function() {
      if (this.get("start")) {
        this.toggleProperty('runnerLoop');
        this.runTimer();
      }
    }, 1000);
  },

  startLoop: Ember.on('didInsertElement', function () {
    this.runTimer();
  }),

  actions: {
    stop: function () {
      this.sendAction('action', this.get('elapsedTime'));
    }
  }
});
