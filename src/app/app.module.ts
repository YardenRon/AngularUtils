import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleLoaderComponent } from './loaders/simple-loader/simple-loader.component';
import { ColorfulSpinnerComponent } from './loaders/colorful-spinner/colorful-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleLoaderComponent,
    ColorfulSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
