import Ember from 'ember';

export default Ember.Component.extend({
  action: 'save',

  eElapsed: 0,
  dElapsed: 0,

  actions: {
    save: function () {
      this.sendAction('action', this.get('eElapsed'), this.get('eElapsed'));
    },

    setEElapsed: function (seconds) {
      this.set('eElapsed', seconds);
    },

    setDElapsed: function (seconds) {
      this.set('dElapsed', seconds);
    }
  }

});
