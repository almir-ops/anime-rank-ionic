import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api = `${environment.api}`;
  page: number = 1;
  animes: any[] = [];
  newAnimes: any[] = [];

  constructor(private http: HttpClient) { }

  listAnimes(){
   return this.http.get<any>(`${this.api}?page=${this.page}`).pipe()
  }

  getNews(){
    this.http.get<any>(`${this.api}/${this.page}news`).pipe()
  }

  getAllAnimes(){
    return this.listAnimes().subscribe((res:any) => {
      this.animes = res.data; 
      console.log(this.animes)
      for (let index = 0; index < 10; index++) {
        this.page += 1;
        setTimeout(() => {
        this.listAnimes().subscribe((res:any) => {
          this.newAnimes = res.data
          this.animes = this.animes.concat(this.newAnimes)          
          console.log(this.animes)
        });
      }, 5000)
     
      }

      });
    
    }
}
