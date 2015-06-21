import Ember from 'ember';

export default Ember.Component.extend({
  action: 'save',
  savePartial: 'savePartial',

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
      this.sendSave('action');
    },

    savePartial: function () {
      this.sendSave('savePartial');
    },

    setEElapsed: function (seconds) {
      this.set('eElapsed', seconds);
    },

    setDElapsed: function (seconds) {
      this.set('dElapsed', seconds);
    }
  },

  sendSave: function (action) {
    this.sendAction(action, this.get('eElapsed'), this.get('dElapsed'), this.get('eFinish'), this.get('dFinish'));
  }

});
