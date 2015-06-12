import Ember from 'ember';

export default Ember.Component.extend({
  action: 'save',

  eElapsed: 0,
  dElapsed: 0,

  eFinish: null,
  eFinishObserver: Ember.observer('eElapsed', function () {
    this.set('eFinish', moment());
  }),

  dFinish: null,
  dFinishObserver: Ember.observer('dElapsed', function () {
    this.set('dFinish', moment());
  }),

  setFinishTimes: Ember.on('didInsertElement', function () {
    this.set('eFinish', moment());
    this.set('dFinish', moment());
  }),

  actions: {
    save: function () {
      this.sendAction('action', this.get('eElapsed'), this.get('dElapsed'), this.get('eFinish'), this.get('dFinish'));
    },

    setEElapsed: function (seconds) {
      this.set('eElapsed', seconds);
    },

    setDElapsed: function (seconds) {
      this.set('dElapsed', seconds);
    }
  }

});
