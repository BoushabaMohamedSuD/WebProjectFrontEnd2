import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private url = "http://localhost:8000/"

  constructor(private http: HttpClient) { }
  public getData() {
    return this.http.get(this.url)
  }
}
