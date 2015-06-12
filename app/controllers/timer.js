import Ember from 'ember';

export default Ember.Controller.extend({
  newTimerStart: null,
  timerConfirmed: false,

  lastStart: Ember.computed('model.[]', function () {
    var lastObject = this.get('model').sortBy('start').get('lastObject');
    if (lastObject) {
      return lastObject.get('start');
    }
    return moment();
  }),

  timerComponent: Ember.computed('timerConfirmed', function () {
    if (this.get('timerConfirmed')) { return 'timer-main'; }
    return 'timer-before';
  }),

  actions: {
    confirmTimer: function () {
      this.set('newTimerStart', moment());
      this.set('timerConfirmed', true);
    },

    save: function (eDuration, dDuration) {
      var start = this.get('newTimerStart');
      if (!start) { return false; }

      var timer = this.store.createRecord('timer', {
        start: this.get('newTimerStart'),
        eDuration: eDuration,
        dDuration: dDuration
      });

      var controller = this;
      timer.save().then(function () {
        controller.set('newTimerStart', null);
        controller.set('timerConfirmed', false);
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    deleteTimer: function (timer) {
      timer.destroyRecord();
    }
  }

});
