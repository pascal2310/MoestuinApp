import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-moestuin',
  templateUrl: './moestuin.component.html',
  styleUrls: ['./moestuin.component.scss']
})
export class MoestuinComponent implements OnInit {

  zaden: Observable<any>
  constructor(private firestore: AngularFirestore) {
    this.zaden = this.firestore.collection('Zaden').valueChanges()
   }

  ngOnInit(): void {
  }

}
