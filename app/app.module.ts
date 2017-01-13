import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
<<<<<<< HEAD
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
=======
>>>>>>> parent of 1e21df0... Mods to app module file to bring in pipe category with category files added

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
<<<<<<< HEAD
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
=======
    MediaItemListComponent
    FavoriteDirective
>>>>>>> parent of 1e21df0... Mods to app module file to bring in pipe category with category files added
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
