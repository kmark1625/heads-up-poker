import { Suit } from './suit';

export class Card {
    public suit: Suit;
    public value: number;

    constructor(suit: Suit, value: number) {
        this.suit = suit;
        this.value = value;
    }
}
