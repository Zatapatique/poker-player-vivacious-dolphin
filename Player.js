let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class Player {

  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

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
    for (let card of holeCards){
      hand += card.rank + card.suit.substring(0,1) + comma;
    }  
    if (community.length > 0)
    community = community.substring(0,community.length -3);


    hand = hand.substring(0,hand.length -3);

    console.log(community);
    console.log(hand);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://poker-odds.p.mashape.com/hold-em/odds?community=" + community +"&hand="+hand + "&players=3", false );
    xmlHttp.setRequestHeader("X-Mashape-Key","06yulBYBYNmshGizQx3vY4pM3vXCp1eC6mKjsnQKiz3GI3tlRz");
    xmlHttp.send(null);
    let result = JSON.parse(xmlHttp.responseText)["win"];

    if (result > 0.7){ 
      bet(1000) 
    }else {
      bet (0);
    }

  }

  static showdown(gameState) {


  }

}

module.exports = Player;
