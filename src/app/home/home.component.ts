import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  add() {
    this.router.navigate(['/add']);
  }

  edit() {
    this.router.navigate(['/edit']);
  }

  inventory() {
    this.router.navigate(['/inventory']);
  }

}
