import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showInboxChild: boolean = false;
  showSentChild: boolean = false;
  showFavChild: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showInboxChild = true;
  }

  inbox() {
    this.showInboxChild = !this.showInboxChild;

    this.showSentChild= false;
    this.showFavChild = false;
  }

  sent() {
    this.showSentChild = !this.showSentChild;

    this.showInboxChild= false;
    this.showFavChild = false;
  }

  Fav() {
    this.showFavChild = !this.showFavChild;

    this.showInboxChild= false;
    this.showSentChild = false;
  }


}
