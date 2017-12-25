import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';


import { ItemFilterPipe } from './shared/filter.pipe';
import { ImageService } from './shared/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ImageComponent } from './image/image.component';
import { appRoutes } from '../routes';


@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      GallaryComponent,
      ImageComponent,
      ItemFilterPipe
  ],
  imports: [
      BrowserModule,
      AlertModule.forRoot(),
      RouterModule.forRoot(appRoutes),
  ],
    providers: [ImageService, ItemFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
