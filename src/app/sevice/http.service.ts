import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private quantity_url : string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getQuantity(): Observable<string[]> {
    return this.http.get<string[]>(this.quantity_url);
  }
   getUnit(quantityType) : Observable<string[]> {
     return this.http.get<string[]>(this.quantity_url + "/" + quantityType);
   }
 getConversion(unit) : any{
   return this.http.post(this.quantity_url + "/conversion", unit);
 }
}
