import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['collection-item', 'avatar', 'pointer'],
  counter: 0,
  running: false,

  elapsedTime: Ember.computed('counter', function () {
    return  moment().hour(0).minute(0).second(this.get('counter')).format('mm:ss');
  }),

  runTimer: function() {
    Ember.run.later(this, function() {
      if (this.get('running')) {
        this.set('counter', this.get('counter') + 1);
        this.sendAction('action', this.get('counter'));
        this.runTimer();
      }
    }, 1000);
  },

  destroyTimer: Ember.on('willDestroyElement', function () {
    this.set('running', false);
    this.set('counter', 0);
  }),

  click: function () {
    if (this.get('running')) {
      this.set('running', false);
    } else {
      this.set('running', true);
      this.runTimer();
    }
  }
});
