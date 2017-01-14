import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  mediaItems = [];

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
<<<<<<< HEAD
    this.getMediaItems(this.medium);
=======
    this.mediaItems = this.mediaItemService.get()
    .subscribe(mediaItems => {
      this.mediaItems = mediaItems;
    });
>>>>>>> 79e9fd97ce98ccf1e26d622d157ee3821c77e68c
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
