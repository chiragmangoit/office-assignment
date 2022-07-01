import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:{}[] = [];
  constructor() { }

  getData() {
    return this.userData;
  }

  getUserData(id:number) {
    return this.userData[id]
  }
  addData(newUserInfo:object) {
    this.userData.push(newUserInfo);
  }

  editData() {

  }

  activatedEmitter = new Subject<boolean>();
}
