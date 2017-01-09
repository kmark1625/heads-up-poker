import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Deck } from '../deck/deck';

@Component({
  selector: 'poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent {
  public card: Card;
  private deck = new Deck();

  public dealNextCard()  {
    this.card = this.deck.getNextCard();
    console.log('card:');
    console.log(this.card);
  }
}
