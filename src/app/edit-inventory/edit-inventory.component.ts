import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditInventoryService } from '../services/edit-inventory.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  dinosaurs: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EditInventoryService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(dinosaurs => this.dinosaurs = dinosaurs);
    }

    back(){
      this.router.navigate(['/']);
    }

    add(){
      this.router.navigate(['/add']);
    }

    updateDinosaur(dinosaur) {
      this.service.update(dinosaur)
    }

}
