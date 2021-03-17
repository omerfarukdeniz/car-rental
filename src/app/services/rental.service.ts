import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "http://localhost:50049/api/rentals/getrentaldetails";

  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<RentalDetailResponseModel> {
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl);
  }
}
