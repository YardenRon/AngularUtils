import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleLoaderComponent } from './loaders/simple-loader/simple-loader.component';
import { ColorfulSpinnerComponent } from './loaders/colorful-spinner/colorful-spinner.component';
import { BouncingBallComponent } from './loaders/bouncing-ball/bouncing-ball.component';
import { BirdLoaderComponent } from './loaders/bird-loader/bird-loader.component';
import { StairsLoaderComponent } from './loaders/stairs-loader/stairs-loader.component';
import { FlyingManLoaderComponent } from './loaders/flying-man-loader/flying-man-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleLoaderComponent,
    ColorfulSpinnerComponent,
    BouncingBallComponent,
    BirdLoaderComponent,
    StairsLoaderComponent,
    FlyingManLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
