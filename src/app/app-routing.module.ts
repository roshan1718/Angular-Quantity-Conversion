import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantityConversionComponent } from './component/quantity-conversion/quantity-conversion.component';


const routes: Routes = [
  { 
    path : '', component : QuantityConversionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

