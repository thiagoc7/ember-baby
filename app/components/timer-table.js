import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['bordered', 'centered'],
  action: 'deleteTimer',

  actions: {
    deleteTimer: function (timer) {
      this.sendAction('action', timer);
    }
  }
});
