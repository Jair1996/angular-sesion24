import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';



@NgModule({
  declarations: [
    HomePageComponent,
    DialogPageComponent,
    TablePageComponent,
    DialogOverviewComponent
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
