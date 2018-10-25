namespace PokerBot
{
    public static class CardCodeConverter 
    {
        public static string ToCode(this Card card)
        {
            return card.rank + card.suit[0];
        }
    }
}