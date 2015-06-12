export default function(){
  this.transition(
      this.hasClass('timer-components'),
      this.toValue(true),
      this.use('toDown'),
      this.reverse('toUp')
  );
}