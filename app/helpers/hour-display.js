import Ember from 'ember';

export function dateDisplay(value) {
  return moment(String(value)).format("HH:mm");
}

export default Ember.HTMLBars.makeBoundHelper(dateDisplay);
