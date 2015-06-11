import Ember from 'ember';

export default Ember.Controller.extend({
  newTimerSide: null,
  newTimerStart: null,

  beforeTimer: false,
  timerConfirmed: false,
  afterTimer: false,

  btnLeft: Ember.computed('newTimerSide', 'timerConfirmed', function () {
    var timerConfirmed = this.get('timerConfirmed');
    var newTimerSide = this.get('newTimerSide');

    if (newTimerSide === "D" && timerConfirmed) {
      return 'disabled';
    }
    return 'red';
  }),

  btnRight: Ember.computed('newTimerSide', 'timerConfirmed', function () {
    var timerConfirmed = this.get('timerConfirmed');
    var newTimerSide = this.get('newTimerSide');

    if (newTimerSide === "E" && timerConfirmed) {
      return 'disabled';
    }
    return 'red';
  }),
  
  lastStart: Ember.computed('model.[]', function () {
    var lastObject = this.get('model').sortBy('start').get('lastObject');
    if (lastObject) {
      return lastObject.get('start');
    }
    return moment();
  }),

  timerComponent: Ember.computed('beforeTimer', 'timerConfirmed', 'afterTimer', function () {
    if (this.get('beforeTimer')) { return 'timer-before'; }
    if (this.get('timerConfirmed')) { return 'timer-clock'; }
    if (this.get('afterTimer')) { return 'timer-after'; }
    return 'timer-next';
  }),

  actions: {
    start: function (side) {
      this.set('newTimerSide', side);
      this.set('beforeTimer', true);
    },

    confirmTimer: function () {
      this.set('newTimerStart', moment());
      this.set('beforeTimer', false);
      this.set('timerConfirmed', true);
    },

    stop: function (duration) {
      var start = this.get('newTimerStart');
      if (!start) { return false; }

      var timer = this.store.createRecord('timer', {
        side: this.get('newTimerSide'),
        start: this.get('newTimerStart'),
        duration:  duration
      });

      var controller = this;
      timer.save().then(function () {
        controller.set('newTimerSide', null);
        controller.set('newTimerStart', null);
        controller.set('afterTimer', true);
        controller.set('timerConfirmed', false);
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    resetTimer: function () {
      this.set('newTimerStart', null);
      this.set('newTimerSide', null);
      this.set('beforeTimer', false);
      this.set('afterTimer', false);
    },

    deleteTimer: function (timer) {
      timer.destroyRecord();
    }
  }

});
