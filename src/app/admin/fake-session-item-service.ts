import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './sessions';
import { Session } from './session';

@Injectable()
export class FakeSessionItemService {
  constructor() {}
  get() {
    return SESSIONITEMS;
  }
  add(sessionItem) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }
  delete(sessionItem) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }
  }
  getSession(id: number): Session {
    var currentSession: Session;

    for (var i = 0; i < SESSIONITEMS.length; i++) {
      currentSession = SESSIONITEMS[i];
      if (currentSession.id == id) return currentSession;
    }
    return undefined;
  }
}
