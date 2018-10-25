public static class CardCodeConverter {
    public static String ToCode(this Card card)
    {
        return card.rank + card.suit[0];
    }
}