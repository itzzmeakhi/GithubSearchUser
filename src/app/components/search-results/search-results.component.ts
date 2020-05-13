import { Component, OnInit, Input } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() userDetails : any;
  userFollowers : Object;
  userFollowing : Object;
  userRepositories : Object;

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  onViewFollowers() {
    this.userFollowers = "";
    this.userFollowing = "";
    this.userRepositories = "";
    this.userService.getFollowers(this.userDetails.login)
      .subscribe(response => {
        // console.log(response);
        this.userFollowers = response;
      })
  }

  onViewFollowing() {
    this.userFollowers = "";
    this.userFollowing = "";
    this.userRepositories = "";
    this.userService.getFollowingList(this.userDetails.login)
      .subscribe(response => {
        // console.log(response);
        this.userFollowing = response;
      })
  }

  onViewRepositories() {
    this.userFollowers = "";
    this.userFollowing = "";
    this.userRepositories = "";
    this.userService.getRepositories(this.userDetails.login)
      .subscribe(response => {
        // console.log(response);
        this.userRepositories = response;
      })
  }

}
