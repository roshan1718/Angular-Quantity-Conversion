import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
 import {MatSelectModule} from '@angular/material/select';
 import {MatInputModule} from '@angular/material/input';
 import { FormsModule} from '@angular/forms'
@NgModule  ({ imports : [MatCardModule, MatSelectModule, MatInputModule, FormsModule],
             exports : [MatCardModule, MatSelectModule, MatInputModule, FormsModule] })

export class ImportQuantityConversion {

}