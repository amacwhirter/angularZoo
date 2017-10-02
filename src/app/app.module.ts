import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EditInventoryService } from './services/edit-inventory.service';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { NewDinoComponent } from './new-dino/new-dino.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { SearchPipe } from './common/search.pipe';
import { OrderbyPipe } from './common/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewDinoComponent,
    HomeComponent,
    NotFoundComponent,
    InventoryComponent,
    EditInventoryComponent,
    SearchPipe,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'add',
        component: NewDinoComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'edit',
        component: EditInventoryComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    EditInventoryService,
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
