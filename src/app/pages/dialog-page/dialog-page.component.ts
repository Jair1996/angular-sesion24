import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

export interface DialogData {
  deporte: string;
  name: string;
}

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent {
  deporte: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: {name: this.name, deporte: this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }
}
