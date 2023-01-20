import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    DialogPageComponent,
    TablePageComponent
  ],
  exports: [
    HomePageComponent,
    DialogPageComponent,
    TablePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class PagesModule { }
