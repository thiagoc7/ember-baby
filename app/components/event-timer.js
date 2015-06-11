import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  href: '#',
  classNames: ['secondary-content'],

  timer: Ember.computed.alias('event.timer'),

  initialCounter: Ember.computed('timer', function () {
    return this.get('timer') * 60000;
  }),

  currentCounter: null,
  setCounter: Ember.on('init', function () {
    this.set('currentCounter', this.get('initialCounter'));
  }),

  currentTime: null,
  runTimer: function() {
    Ember.run.later(this, function() {
      var currentTime = this.get('currentTime');
      if (currentTime) {
        var difference = moment().diff(currentTime);
        this.set("currentCounter", this.get("currentCounter") - difference);
        if (this.get("currentCounter") <= 0) {
          this.finishTimer();
        } else {
          this.set("currentTime", moment());
          this.runTimer();
        }
      }
    }, 1000);
  },

  destroyCounter: Ember.on('willDestroyElement', function () {
    this.set('currentTime', null);
  }),

  startTimer: Ember.observer('timerStarted', function () {
    var timerStarted = this.get('timerStarted');
    if (timerStarted) {
      this.set('currentTime', moment());
      this.runTimer();
    } else {
      this.set('currentTime', null);
    }
  }),

  finishTimer: function () {
    this.set('currentTime', null);
    this.set('currentCounter', this.get('initialCounter'));

    if ((window.Notification !== undefined)) {
      new Notification("Event Complete", { body: this.get('event.name') + " complete" });
    }
  }
});
