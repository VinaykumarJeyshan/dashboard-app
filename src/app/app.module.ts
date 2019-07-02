import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloWorld } from '../components/hello-world/hello-world.component';
import { EventComponent } from '../components/event/event.component'


@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
