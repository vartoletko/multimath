/// <reference path="player.ts" />
/// <reference path="game.ts" />
/// <reference path="utility.ts" />


let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playername');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});



















// /// <reference path="player.ts" />

// const defaultPlayer:string = 'Default Player'

// function startGame(){

//     let playerName:string | undefined = Utility.getInputValue('playername')
//     logPlayer(playerName)

//     var messageElement = document.getElementById("messages");
//     messageElement!.innerText = "Starting new game...."

//     postScore(100, playerName)
//     postScore(-10, playerName)
    
// }


// function logPlayer(name:string = defaultPlayer):void{
//     console.log(`New game for player ${name}`);

// }



// function postScore(score: number, playerName: string = defaultPlayer): void{
    
//     let logger: (value: string) => void;

//     if (score < 0){
//         logger = logError;
//     }else{
//         logger = logMessage;
//     }
        

//     const scoreElement: HTMLElement | null  = document.getElementById('postedScore')
//     scoreElement!.innerText = `${score} - ${playerName}`

//     logger(`Score: ${score}`)

// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// const logMessage = (message: string): void => console.log(message);

// function logError(err:string):void {
//     console.error(err);
// };

// // let myResult: Result = {
// //     playerName: 'Rado',
// //     score: 22,
// //     problemCount: 3,
// //     factor: 1,
// // };

// // let player: Person = {
// //     name: 'Rado',
// //     formatName: () => 'RadoSLAV'
// // };

// const firstPlayer:Player = new Player();
// firstPlayer.name = 'rado';
// logMessage( firstPlayer.formatName())



