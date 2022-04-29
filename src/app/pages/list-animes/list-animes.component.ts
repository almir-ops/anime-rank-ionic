import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-list-animes',
  templateUrl: './list-animes.component.html',
  styleUrls: ['./list-animes.component.scss'],
})
export class ListAnimesComponent implements OnInit {

  public folder: string;
  animes: any[] = [];
  newAnimes: any[] = [];
  titleAnime = '';

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAnimes()
  }
  getAnimes() {
    this.httpService.listAnimes().subscribe((res: any) => {
      this.animes = res.data;
      console.log(this.animes)
    });
  }

  searchAnime(event) {
    this.titleAnime = event.detail.value
  }

  loadData(event) {
    setTimeout(() => {
      if (this.httpService.page < 950) {
        this.httpService.page += 1;
        this.httpService.listAnimes().subscribe((res: any) => {
          this.newAnimes = res.data
          this.animes = this.animes.concat(this.newAnimes)
          console.log(this.animes)
        });
      }
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.animes.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
