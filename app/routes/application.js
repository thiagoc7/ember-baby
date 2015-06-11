import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loading: function() {
      var controller = this.controllerFor('application');
      controller.spinnerService.startLoading();
      this.router.one('didTransition', function() {
        controller.spinnerService.finishLoading();
      });
    }
  }
});
