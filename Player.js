class Player {
  

  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let betValue = 0;


    try{
    //calc(gameState);
        let json = gameState;
    
        let communityCards = json["community_cards"];
      //  console.log(communityCards);
    
        let holeCards = json["players"][json["in_action"]]["hole_cards"]
    //    console.log(holeCards);
    
        let comma = "%2C";
    
        let community = "";
    
        for (let card of communityCards){
         
          community += card.rank + card.suit.substring(0,1) + comma;
        }  
        let hand = "";

        let card1 = holeCards[0];
        let card2 = holeCards[1];
        console.log("MY CARDS:")
        console.log(card1)
        console.log(card2)


        if ((card1.rank == "10" || card1.rank == "J" ||  card1.rank == "Q" ||  card1.rank == "K" ||  card1.rank == "A")&&(card2.rank == "10" || card2.rank == "J" ||  card2.rank == "Q" ||  card2.rank == "K" ||  card2.rank == "A")){
            betValue = 4000;
        }

    
        console.log("BET VALUE")
        console.log(betValue);



    
      }catch(e){

      }
        bet(betValue);
      

  }

  static showdown(gameState) {
    try{
      console.log("SHOWDOWN:")
      console.log(gameState);
    }catch(e){

    }

  }

}

module.exports = Player;
