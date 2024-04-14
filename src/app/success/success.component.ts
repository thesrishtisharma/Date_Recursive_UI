import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit {
  messages = ["I love you! 💕", "Sure babe, see you. 🥰", "Can't wait.. 🥺", "OMG! So excited. 😍"]
  displayMessage: string = "";
  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    this.displayMessage = this.messages[randomIndex];
  }

  
}
