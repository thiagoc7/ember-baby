import Ember from 'ember';

export default Ember.Component.extend({
  action: 'confirmTimer',

  store: Ember.inject.service(),
  events: Ember.computed('', function () {
    return this.get('store').find('event', {onStart: true});
  }),

  actions: {
    confirmTimer: function () {
      this.sendAction();
    }
  }
});
