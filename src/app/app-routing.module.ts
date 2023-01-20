import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'dialog',
    component: DialogPageComponent,
  },
  {
    path: 'table',
    component: TablePageComponent,
  },
  {
    path: 'form',
    component: FormPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
