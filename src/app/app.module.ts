import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
    apiKey: "AIzaSyDuJFawzEfG_O8wERrAjlmnInX15h9ITTs",
    authDomain: "contactlist-ef4d0.firebaseapp.com",
    databaseURL: "https://contactlist-ef4d0.firebaseio.com",
    projectId: "contactlist-ef4d0",
    storageBucket: "contactlist-ef4d0.appspot.com",
    messagingSenderId: "58616075149"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
