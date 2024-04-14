import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejection',
  standalone: true,
  imports: [],
  templateUrl: './rejection.component.html',
  styleUrl: './rejection.component.css'
})
export class RejectionComponent implements OnInit{
 
  images = ["Angry1.jpeg", "What.jpeg", "Please.jpeg", "Please2.jpeg", "CuteGirl.jpeg", "Happy.jpeg", "Angry2.jpg"]
  image: string = "";
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.image = this.images[randomIndex];
  }

  date(){
    this.router.navigate(['success']);
  }

  tryAgain(){
    window.location.reload();
  }
}
