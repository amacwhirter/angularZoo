import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-dino',
  templateUrl: './new-dino.component.html',
  styleUrls: ['./new-dino.component.css']
})
export class NewDinoComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  kingdom = [
    { id: 0, name: 'N/A' },
    { id: 1, name: 'Saurischia' },
    { id: 2, name: 'Ornithischia' },
  ];

  submit(f){
    this.router.navigate(['/edit']);
    console.log(f.value);
  }

  back(){
    this.router.navigate(['/']);
  }

}
