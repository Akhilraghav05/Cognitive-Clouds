import { Component, OnInit } from '@angular/core';
import * as cardsJson from '../../assets/cards.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  public show:boolean = true;
  public showDiv : boolean=false;
  public Cards:any;
  constructor() { }

  ngOnInit() {
    this.Cards=cardsJson['default']['data']
    console.log(this.Cards);  //for my verification 
  }
 images(){
  this.show = !this.show; //this is for hidding div elements
  this.showDiv =true;
 }
 goback(){
  this.show = !this.show;
  this.showDiv = false;
 }
}
