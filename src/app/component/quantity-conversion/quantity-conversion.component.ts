import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/sevice/http.service';
import { Unit } from 'src/app/model/unit';

@Component({
  selector: 'app-quantity-conversion',
  templateUrl: './quantity-conversion.component.html',
  styleUrls: ['./quantity-conversion.component.scss']
})
export class QuantityConversionComponent implements OnInit {
  public value = 1;
  public result = 1;
  public quantityTypes = [];
  public unitTypes = [];
  public unitObj = new Unit();
  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.getQuantity()
  }
//To fetch the quantities
  public getQuantity() {
    {
      this.httpservice.getQuantity().subscribe(data =>     
      {
        console.log("data"+ data);
        this.quantityTypes = data
        this.getUnit(this.quantityTypes[0]) //by defualt length
      });
    }
  }
  // To fetch Quantity Unit type
  public getUnit(requiredQuantity) {
    this.unitTypes = [];
    this.httpservice.getUnit(requiredQuantity).subscribe(data => {
      this.unitTypes = data
      this.unitObj.quantityType = requiredQuantity;
      this.unitObj.toUnit = this.unitTypes[0]; 
      this.unitObj.fromUnit = this.unitTypes[1];
    });
    console.log(this.unitTypes)
    console.log(this.unitObj)

  }
  //Used for on change quantities
  public onChangeQuantity(quantity) {
    this.getUnit(quantity)
    console.log(quantity);

  }
  public getConversion() {
    this.httpservice.getConversion(this.unitObj).subscribe(data =>
    this.result = data);
  }
  //Used for on change Unit
  public onToUnitChange(value) {
    this.unitObj.toUnit = value;
    this.getConversion();
  }

  public onFromUnitChange(value) {
    this.unitObj.fromUnit = value;
    this.getConversion();
  }
}
