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

export class NewDinoComponent{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EditInventoryService) { }

  image : string;
  quantity: number;
  description: string;
  weight: number;
  height: number;
  name: string;
  kingdom = [
    { id: 0, name: 'N/A' },
    { id: 1, name: 'Saurischia' },
    { id: 2, name: 'Ornithischia' },
  ];
  dinos: any[];

  createDinosaur(event) {

    let dino: any = {
      name: this.name,
      quantity: this.quantity,
      kingdom: "Saurischia",
      image: this.image,
      description: this.description,
      weight: this.weight,
      height: this.height
    };

    this.service.create(dino)
  }

  submit(f){
    this.router.navigate(['/edit']);
    console.log("this is value", f.value);
  }

  back(){
    this.router.navigate(['/']);
  }

}
