import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  amazonContent: boolean = false;
  flipkartContent: boolean = false;
  jioContant: boolean = false;

  inboxArray: any = [];
  selectedValue: any = '';
  inboxSelectValue: any = '';

  constructor() { }

  ngOnInit(): void {
    this.amazonContent = true;

    this.inboxArray = ['Amazon', 'Flipkart', 'Jio']
  }

  inboxArrayFn(event: any) {
    console.log(event.target.innerHTML);
    for (let i = 0; i <= this.inboxArray.length; i++) {
      if (this.inboxArray[i] == event.target.innerHTML) {
        if (event.target.innerHTML == 'Amazon') {
          this.amazonContent = true;
          this.flipkartContent = false;
          this.jioContant = false;
        }

        if (event.target.innerHTML == 'Flipkart') {
          this.amazonContent = false;
          this.flipkartContent = true;
          this.jioContant = false;
        }

        if (event.target.innerHTML == 'Jio') {
          this.amazonContent = false;
          this.flipkartContent = false;
          this.jioContant = true;
        }
      }
    }
  }

  inputValue(event: any) {
    this.inboxSelectValue = event
    if (this.inboxSelectValue) {

      if (this.inboxSelectValue == 'Amazon') {
        this.amazonContent = true;
        this.flipkartContent = false;
        this.jioContant = false;

        if( localStorage.getItem('Amazon') ){
          alert('Amazon already added to fav')
        }
      }
      if (this.inboxSelectValue == 'Flipkart') {
        this.amazonContent = false;
        this.flipkartContent = true;
        this.jioContant = false;

        if( localStorage.getItem('Flipkart') ){
          alert('Flipkart already added to fav')
        }
      }
      if (this.inboxSelectValue == 'Jio') {
        this.amazonContent = false;
        this.flipkartContent = false;
        this.jioContant = true;
      }
    }
    console.log(this.inboxSelectValue)
  }

  amazonClick() {
    localStorage.setItem('Amazon', 'Amazon clicked')
  }
  amazonDelete(){
    localStorage.removeItem('Amazon')
  }

  flipkartClick(){
    localStorage.setItem('Flipkart', 'Flipkart clicked')
  }
  flipkartDelete(){
    localStorage.removeItem('Flipkart')
  }



}
