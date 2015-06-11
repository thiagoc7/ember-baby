import Ember from 'ember';

export default Ember.Service.extend({
  isLoading: false,

  startLoading: function () {
    this.set('isLoading', true);
  },

  finishLoading: function () {
    var service = this;
    Ember.run.later(function(){
      service.set('isLoading', false);
    }, 1000);
  }
});
