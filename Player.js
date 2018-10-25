const http = require('http');

class Player {

  //let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  

  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    bet(1000);
    //calc(gameState);
    /*let json = gameState;
    
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
        for (let card of holeCards){
          hand += card.rank + card.suit.substring(0,1) + comma;
        }  
        if (community.length > 0)
        community = community.substring(0,community.length -3);
    
    
        hand = hand.substring(0,hand.length -3);
    
        console.log(community);
        console.log(hand);
    
        let options = {
          hostname:"https://poker-odds.p.mashape.com/hold-em/odds?community=" + community +"&hand="+hand + "&players=3",
          headers: {"X-Mashape-Key":"06yulBYBYNmshGizQx3vY4pM3vXCp1eC6mKjsnQKiz3GI3tlRz"}
        }

        http.get(options, (res) => {
          
            let data = "";
            resp.on('data', (chunk) => {
                data = chunk;

                let result = JSON.parse(data);
                    console.log(result);
                    if (result["win"] > 0.7){
                      bet(1000); 
                    }else{
                      bet(0);
                  }
            });

         

      });*/
      

  }

  static showdown(gameState) {


  }

}

module.exports = Player;
