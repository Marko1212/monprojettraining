/* import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { FakeSessionItemService } from '../fake-session-item-service';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css'],
})
export class SessionEditFormComponent implements OnInit {
  session: Session;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];

  constructor(private sessionItemService: FakeSessionItemService) {}

  ngOnInit() {
    this.session = this.sessionItemService.getSession(1);
  }
  editSession(sessionItem) {
    console.log(sessionItem);
  }
} */

import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { FakeSessionItemService } from '../fake-session-item-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css'],
})
export class SessionEditFormComponent implements OnInit {
  id: number;
  private sub: any;
  session: Session;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  constructor(
    private route: ActivatedRoute,
    private sessionItemService: FakeSessionItemService
  ) {}
  ngOnInit() {
    //this.session = this.sessionItemService.getSession(1);
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem) {
    console.log(sessionItem);
  }
}
