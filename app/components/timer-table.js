import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['bordered', 'centered'],
  action: 'deleteTimer',

  sortProperties: ['momentStart:desc'],
  sortedTimers: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    deleteTimer: function (timer) {
      this.sendAction('action', timer);
    }
  }
});
