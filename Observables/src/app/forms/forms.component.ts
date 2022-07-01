import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @ViewChild('form') signUpForm: NgForm;
  editMode:boolean = false;
  id:number;
  submitted: boolean = false;
  dropdownList:string[] = [];
  dropdownSettings: IDropdownSettings = {};
  description: string;
  genders: string[] = ['male', 'female'];
  hobbies: any = [
    {
      id: 1,
      name: 'singing',
      selected: false,
    },
    {
      id: 2,
      name: 'dancing',
      selected: false,
    },
    {
      id: 3,
      name: 'reading',
      selected: false,
    },
  ];
  profession: string[] = [
    'Chiropractor',
    'Dentist',
    'Optometrist',
    'Developer',
    'Tester',
  ];
  contact: any = [
    {
      id: 1,
      contactName: '',
      contactNumber: '',
    },
  ];

  user:object = {
    name:'',
    email:'',
    gender:'',
    dob:'',
    dp:'',
    hobbies:[],
    phoneNum:'',
    qualification:[],
    profession:'',
    description:'',
    contacts:[]
  }

  constructor(private userDataService:UserService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.dropdownList = ['MCA', 'BCA', 'B.tech', 'M.tech', 'B.Com'];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
    };
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm(){
    if ( this.editMode ) {
      const newUserData = this.userDataService.getUserData(this.id);
      const newName = newUserData['name'];
      this.signUpForm.setValue({
        userDataOne:{
          username:newName
        }
      })
      // this.user['email'] = this.signUpForm.value.userDataOne.email;
      // this.user['gender'] = this.signUpForm.value.userDataOne.gender;
      // this.user['dob'] = this.signUpForm.value.userDataOne.dob;
      // this.user['dp'] = this.signUpForm.value.userDataTwo.pic;
      // this.user['hobbies'] = this.getSelectedHobby();
      // this.user['phoneNum'] = this.signUpForm.value.userDataTwo.number;
      // this.user['qualification'] = this.signUpForm.value.userDataThree.qualification;
      // this.user['profession'] = this.signUpForm.value.userDataThree.occupation;
      // this.user['description'] = this.signUpForm.value.userDataThree.description;
      // this.user['contacts'] = this.contact;
    }
  }

  getSelectedHobby(): string[] {
    let selectedHobby = [];
    for (let e of this.hobbies) {
      if (this.signUpForm.value.userDataTwo[e.id]) {
        selectedHobby.push(e.name);
      }
    }
    return selectedHobby;
  }

  onAddContacts() {
    this.contact.push({
      id: this.contact.length + 1,
      contactName: '',
      contactNumber: '',
    });
  }

  onRemoveContacts(index: number) {
    this.contact.splice(index, 1);
  }
  onSubmit() {

    this.user['name'] = this.signUpForm.value.userDataOne.username;
    this.user['email'] = this.signUpForm.value.userDataOne.email;
    this.user['gender'] = this.signUpForm.value.userDataOne.gender;
    this.user['dob'] = this.signUpForm.value.userDataOne.dob;
    this.user['dp'] = this.signUpForm.value.userDataTwo.pic;
    this.user['hobbies'] = this.getSelectedHobby();
    this.user['phoneNum'] = this.signUpForm.value.userDataTwo.number;
    this.user['qualification'] = this.signUpForm.value.userDataThree.qualification;
    this.user['profession'] = this.signUpForm.value.userDataThree.occupation;
    this.user['description'] = this.signUpForm.value.userDataThree.description;
    this.user['contacts'] = this.contact;
    this.userDataService.addData(this.user);
    this.router.navigate(['/home'], {relativeTo:this.route});
  }

}
