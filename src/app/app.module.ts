import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule} from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReviewRatingsComponent } from './header/review-ratings/review-ratings.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { FeatureRatingComponent } from './body-content/feature-rating/feature-rating.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewRatingsComponent,
    BodyContentComponent,
    FeatureRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
