import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditInventoryService } from '../services/edit-inventory.service';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'new-dino',
  templateUrl: './new-dino.component.html',
  styleUrls: ['./new-dino.component.css']
})

export class NewDinoComponent {
  dinosaurs: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EditInventoryService) { }

  kingdom = [
    { id: 0, name: 'N/A' },
    { id: 1, name: 'Saurischia' },
    { id: 2, name: 'Ornithischia' },
  ];

  log(x) { console.log(x); }

  createDinosaur(dinosaur) {
    let newDinosaur = (dinosaur);
    console.log("checking dino", newDinosaur);

    this.service.create(newDinosaur)
    .subscribe(data => {
      console.log("checking data", data);
      }, err => {
       console.log("check if any err");
      })
  }

  submit(f){
    this.router.navigate(['/edit']);
    console.log("this is value", f.value);
  }

  back(){
    this.router.navigate(['/']);
  }

}
