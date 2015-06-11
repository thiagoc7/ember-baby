import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection', 'pointer'],

  timerStarted: false,

  click: function () {
    this.toggleProperty('timerStarted');
  }
});
