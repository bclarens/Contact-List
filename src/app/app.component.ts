import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

interface Contact {
  firstname: string;
  lastname: string;
  phone: number;
  mobile: number;
  email: string;
  address: string;
}

interface ContactId extends Contact { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public show:boolean = false;
  public buttonName:any = 'Show';

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: any;

  firstname: string;
  lastname: string;
  phone: number;
  mobile: number;
  email: string;
  address: string;

  contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.contactsCol = this.afs.collection('contacts');
    this.contacts = this.contactsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contact;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

   addContact() {
      this.afs.collection('contacts').add({'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'mobile': this.mobile, 'email': this.email, 'address': this.address});
  }

  getContact(contactId) {
    this.contactDoc = this.afs.doc('contacts/'+contactId);
    this.contact = this.contactDoc.valueChanges();
  }

  deleteContact(contactId) {
    this.afs.doc('contacts/'+contactId).delete();
  }

  editContact(contactId){

  }

  toggleadd() {
    this.showadd = !this.showadd;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showadd)  
      this.btnadd = "Hide";
    else
      this.btnadd = "Show";
  }

  toggleedit() {
    this.showedit = !this.showedit;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showedit)  
      this.btnedit = "Hide";
    else
      this.btnedit = "Show";
  }
}
