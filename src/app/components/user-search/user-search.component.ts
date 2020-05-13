import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  userToSearchForm : FormGroup;
  @Output() userData = new EventEmitter<any>();

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userToSearchForm = new FormGroup({
      'userToSearch' : new FormControl('', [Validators.required])
    });
  }

  get userToSearch() {
    return this.userToSearchForm.get('userToSearch');
  }

  onSearchUser() {
    // console.log("Triggered");
    this.userService.searchUser(this.userToSearch.value)
      .subscribe(response => {
        console.log(response);
        if(response) {
          this.userData.emit(response);
        }
      })
  }

}
