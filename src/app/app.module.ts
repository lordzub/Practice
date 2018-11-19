import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { MessagingComponent } from './messaging/messaging.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    MessagingComponent,
    NavbarComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'messaging', component: MessagingComponent }
      {path:'404', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
