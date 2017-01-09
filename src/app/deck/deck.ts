import { Card } from '../card/card';
import { Suit } from '../card/suit';

export class Deck {
    private cards: Array<Card>;

    constructor() {

    }

    // Removes and returns the top card from the deck.
    public getNextCard(): Card {
        return new Card(Suit.Heart, 5);
    }

    // Shuffles the deck
    public shuffle(): any {
        // TODO: implement method
    }
}
