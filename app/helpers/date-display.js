import Ember from 'ember';

export function dateDisplay(value) {
  return moment(String(value)).format("DD/MMM HH:mm");
}

export default Ember.HTMLBars.makeBoundHelper(dateDisplay);
