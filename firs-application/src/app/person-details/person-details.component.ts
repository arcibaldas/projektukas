import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../models/person';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person;
  @Output() deletePerson = new EventEmitter<Person>();
  constructor() { }

  ngOnInit() {

  }

  deleteOnPerson() {

    this.deletePerson.emit(this.person);

  }

}

