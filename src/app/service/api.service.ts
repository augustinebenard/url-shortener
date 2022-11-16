import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  shortenUrl(url: string) {
    return this.http.get(`${this.baseUrl}/shorten?url=${url}`);
  }
}
