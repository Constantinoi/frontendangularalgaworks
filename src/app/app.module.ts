import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

@NgModule({
  declarations: [
    AppComponent,HelloComponent, BemVindoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
