System.register(['rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MediaItemService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            ;
            MediaItemService = (function () {
                function MediaItemService(http) {
                    this.http = http;
                    this.mediaItems = [
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
                MediaItemService.prototype.get = function () {
                    return this.http.get('mediaitems')
                        .map(function (response) {
                        return response.json().mediaItems;
                    });
                };
                MediaItemService.prototype.add = function (mediaItem) {
                    this.mediaItems.push(mediaItem);
                };
                MediaItemService.prototype.delete = function (mediaItem) {
                    var index = this.mediaItems.indexOf(mediaItem);
                    if (index >= 0) {
                        this.mediaItems.splice(index, 1);
                    }
                };
                return MediaItemService;
            }());
            exports_1("MediaItemService", MediaItemService);
        }
    }
});
//# sourceMappingURL=media-item.service.js.map