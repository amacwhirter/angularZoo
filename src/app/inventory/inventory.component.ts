import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditInventoryService } from '../services/edit-inventory.service';
import { Observable } from 'rxjs/Observable';
import { SearchPipe } from '../common/search.pipe';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})

export class InventoryComponent implements OnInit {
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

    edit(){
      this.router.navigate(['/edit']);
    }

}
