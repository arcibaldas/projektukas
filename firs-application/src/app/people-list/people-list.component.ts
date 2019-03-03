import { Component, OnInit } from '@angular/core';
import {Person} from '../models/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[];
  constructor() { }

  ngOnInit() {
    this.people = [{
      pid : 1,
      name : 'Arina',
      phone: '37475845678',
      surname : 'Cesnulyte'
    },
      { pid : 6,
        name : 'Jon',
        email : 'sdff@gmail.com',
        surname : 'Jugyan'
      },
      {
      pid : 2,
      name : 'Alge',
      surname : 'Janul',
        middleName: 'tete',
        email : 'algecool@gmail.com',
        phone: '356785332345',
        groups : ['A', 'D']
    },
      {
        pid : 2463,
        name : 'Alginta',
        surname : 'Janul',
        groups : ['D']
      }
    ];

  }

  deleteOnePerson(person: Person) {
    this.people = this.people.filter(p => p.pid !== person.pid);



  }

}
