class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(0);

    let json = JSON.parse('{\r\n  \"tournament_id\":\"550d1d68cd7bd10003000003\",     \r\n\r\n  \"game_id\":\"550da1cb2d909006e90004b1\",           \r\n\r\n\r\n  \"round\":0,                          \r\n\r\n  \"bet_index\":0,                                 \r\n\r\n  \"small_blind\": 10,                              \r\n  \"current_buy_in\": 320,                          \r\n\r\n  \"pot\": 400,                                    \r\n\r\n  \"minimum_raise\": 240,                          \r\n\r\n  \"dealer\": 1,                                    \r\n  \"orbits\": 7,                                   \r\n\r\n  \"in_action\": 1,                                 \r\n  \"players\": [                                    \r\n      {                                           \r\n\r\n          \"id\": 0,                                \r\n\r\n          \"name\": \"Albert\",                       \r\n\r\n          \"status\": \"active\",                     \r\n                                                 \r\n\r\n          \"version\": \"Default random player\",     \r\n\r\n          \"stack\": 1010,                          \r\n          \"bet\": 320                              \r\n      },\r\n      {\r\n          \"id\": 1,                                \r\n          \"name\": \"Bob\",\r\n          \"status\": \"active\",\r\n          \"version\": \"Default random player\",\r\n          \"stack\": 1590,\r\n          \"bet\": 80,\r\n          \"hole_cards\": [                         \r\n              {\r\n                  \"rank\": \"6\",                    \r\n                  \"suit\": \"hearts\"                              \r\n\t\t},\r\n              {\r\n                  \"rank\": \"K\",\r\n                  \"suit\": \"spades\"\r\n              }\r\n          ]\r\n      },\r\n      {\r\n          \"id\": 2,\r\n          \"name\": \"Chuck\",\r\n          \"status\": \"out\",\r\n          \"version\": \"Default random player\",\r\n          \"stack\": 0,\r\n          \"bet\": 0\r\n      }\r\n  ],\r\n  \"community_cards\": [                            \r\n      {\r\n          \"rank\": \"4\",\r\n          \"suit\": \"spades\"\r\n      },\r\n      {\r\n          \"rank\": \"A\",\r\n          \"suit\": \"hearts\"\r\n      },\r\n      {\r\n          \"rank\": \"6\",\r\n          \"suit\": \"clubs\"\r\n      }\r\n  ]\r\n}');

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
