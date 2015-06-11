import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',

  didInsertNav: Ember.on('didInsertElement', function () {
    Ember.run.scheduleOnce('afterRender', this, this.initNav);
    this.$('.button-collapse').sideNav();
  }),

  initNav: function () {
    this.$('.button-collapse').sideNav();
  }
});
