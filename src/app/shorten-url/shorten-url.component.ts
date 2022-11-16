import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { IShortLink } from './shortLink.interface';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.css'],
})
export class ShortenUrlComponent implements OnInit {
  url: string = '';
  shortUrl!: IShortLink;
  constructor(private service: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  shortenUrl() {
    if (this.url === '') {
      this.toastr.warning('Please enter a url');
      return;
    }

    this.service.shortenUrl(this.url).subscribe(
      (res: any) => {
        console.log(res);
        this.shortUrl = res.result;
        if (res.ok == true) {
          this.toastr.success('URL Shortened Successfully');
        } else {
          this.toastr.error('Something went wrong');
        }
      },
      (err) => {
        this.toastr.error('Something went wrong');
      }
    );
  }
}
