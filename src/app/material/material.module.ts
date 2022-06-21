import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
 exports:[
   MatAutocompleteModule,
   MatButtonModule,
   MatCardModule,
   MatDialogModule,
   MatIconModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatListModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatSidenavModule,
   MatSelectModule,
   MatToolbarModule
 ]
})
export class MaterialModule { }
