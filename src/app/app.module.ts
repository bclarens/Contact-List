import { BrowserModule } from ''@angular/platform-browser;
import { NgModule } from ''@angular/core;
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebasec=Config = {
    apiKey: "AIzaSyCS5t2nLmhmxBh65WRwuHa1RuG0LbLMZVo",
    authDomain: "clist-afd0f.firebaseapp.com",
    databaseURL: "https://clist-afd0f.firebaseio.com",
    projectId: "clist-afd0f",
    storageBucket: "",
    messagingSenderId: "74022261552"
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
