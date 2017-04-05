export default class PlayController {
  constructor() {

    this.data = [
        { label: 'Rock', value: 0, path: 'img/rock.png'},
        { label: 'Paper', value: 1, path: 'img/paper.png'},
        { label: 'Scissors', value: 2, path: 'img/scissors.png'}
      ]

    this.scores = {player: 0, computer: 0};
    this.states = {
      start: 'Ready to go!',
      player: 'Player wins!!!',
      computer: 'Computer beat you!!',
      draw: 'DRAW'
    };

    this.currentState = this.states.start;
  }

  run (value) {
    this.player = this.data[value];
    this.computer = this.data[this.getRandomInt(0, 2)];

    this.check(this.player.value, this.computer.value);
  }

  check (player, computer) {
    if (player === computer){
      this.currentState = this.states.draw;
    }else if ((player - computer + 3) % 3 == 1) {
      this.currentState = this.states.player;
      this.scores.player ++;
    }else{
      this.currentState = this.states.computer;
      this.scores.computer ++;
    }
  }

  getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}