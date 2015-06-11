import Ember from 'ember';

export function minutesDisplay(value) {
  var seconds = value / 1000;
  var divisor_for_minutes = seconds % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  minutes = (minutes < 10) ? "0" + minutes : minutes;

  return minutes + "min";
}

export default Ember.HTMLBars.makeBoundHelper(minutesDisplay);
