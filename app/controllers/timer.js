import Ember from 'ember';

export default Ember.Controller.extend({
  newTimerStart: null,
  timerConfirmed: false,
  _timer: null,

  scrollTop: Ember.observer('timerConfirmed', function () {
    window.scrollTo(0,0);
  }),

  sortProperties: ['momentStart:desc'],
  sortedTimers: Ember.computed.sort('model', 'sortProperties'),

  lastStart: Ember.computed('sortedTimers', 'model.[]', function () {
    var lastObject = this.get('sortedTimers').get('firstObject');
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

    save: function (eDuration, dDuration, eFinish, dFinish) {
      var timer = this.setTimer(eDuration, dDuration, eFinish, dFinish);
      if (!timer) { return false; }

      var controller = this;
      timer.save().then(function () {
        controller.set('newTimerStart', null);
        controller.set('timerConfirmed', false);
        controller.set('_timer', null);
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    savePartial: function (eDuration, dDuration, eFinish, dFinish) {
      var timer = this.setTimer(eDuration, dDuration, eFinish, dFinish);
      if (!timer) { return false; }

      var controller = this;
      timer.save().then(function () {
        controller.set('_timer', timer);
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    deleteTimer: function (timer) {
      timer.destroyRecord();
    }
  },

  setTimer: function (eDuration, dDuration, eFinish, dFinish) {
    var start = this.get('newTimerStart');
    if (!start) { return false; }

    var timer = this.get('_timer');

    if (!timer) { timer = this.store.createRecord('timer'); }

    timer.setProperties({
      start: this.get('newTimerStart'),
      eDuration: eDuration,
      dDuration: dDuration,
      eFinish: eFinish,
      dFinish: dFinish
    });

    return timer;
  }

});
