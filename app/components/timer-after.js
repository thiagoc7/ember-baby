import Ember from 'ember';

export default Ember.Component.extend({
  action: 'resetTimer',

  store: Ember.inject.service(),
  events: Ember.computed('', function () {
    return this.get('store').find('event', {onStart: false});
  }),

  actions: {
    resetTimer: function () {
      this.sendAction();
    }
  }
});
