import Ember from 'ember';

export default Ember.Controller.extend({
  newEventName: '',
  newEventOnStart: true,
  newEventTimer: null,

  actions: {
    createEvent: function () {
      var event = this.store.createRecord('event', {
        name: this.get('newEventName'),
        onStart: this.get('newEventOnStart'),
        timer: this.get('newEventTimer')
      });

      var controller = this;
      event.save().then(function () {
        controller.set('newEventName', '');
        controller.set('newEventOnStart', true);
        controller.set('newEventTimer', null);
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    deleteEvent: function (event) {
      event.destroyRecord();
    }
  }

});
