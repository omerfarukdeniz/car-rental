import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "http://localhost:50049/api/cars/getdetails";

  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }

}
