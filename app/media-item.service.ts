import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaitems', { search: searchParams })
      .map(response => {
        return response.json().mediaItems;
      });
=======
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable();
export class MediaItemService {
  constructor(private http: Http) {}

  get() {
    return this.http.get('mediaitems')
    .map(response  => {
      return response.json().mediaItems;
    });
>>>>>>> 79e9fd97ce98ccf1e26d622d157ee3821c77e68c
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}
