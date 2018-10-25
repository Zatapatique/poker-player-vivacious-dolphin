class Player {
  

  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let betValue = 0;

    //calc(gameState);
        let json = gameState;
    
        let communityCards = json["community_cards"];
        console.log(communityCards);
    
        let holeCards = json["players"][json["in_action"]]["hole_cards"]
        console.log(holeCards);
    
        let comma = "%2C";
    
        let community = "";
    
        for (let card of communityCards){
         
          community += card.rank + card.suit.substring(0,1) + comma;
        }  
        let hand = "";

        let card1 = holeCards[0];
        let card2 = holeCards[2];

        if ((card1.rank == "10" || card1.rank == "J" ||  card1.rank == "Q" ||  card1.rank == "K" ||  card1.rank == "A")&&(card2.rank == "10" || card2.rank == "J" ||  card2.rank == "Q" ||  card2.rank == "K" ||  card2.rank == "A")){
            betValue = 1000;
        }

        for (let card of holeCards){
          hand += card.rank + card.suit.substring(0,1) + comma;
        }  
    
        console.log(betValue);
        console.log(community);
        console.log(hand);
    
        bet(betValue);
      

  }

  static showdown(gameState) {


  }

}

module.exports = Player;
