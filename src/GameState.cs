namespace PokerBot
{
    internal class GameState
    {
        public List<PlayerState> players { get; set; }
        public string tournament_id { get; set; }
        public string game_id { get; set; }
        public int round { get; set; }
        public int bet_index { get; set; }
        public int small_blind { get; set; }
        public int orbits { get; set; }
        public int in_action { get; set; }
        public int dealer { get; set; }
        public List<Card> community_cards { get; set; }
        public int current_buy_in { get; set; }
        public int pot { get; set; }
    }
}