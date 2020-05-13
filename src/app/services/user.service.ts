import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class UserService {
    constructor(private httpClient : HttpClient) {}

    searchUser(userName : string) {
        return this.httpClient.get('https://api.github.com/users/'+userName)
    }

    getFollowers(userName : string) {
        return this.httpClient.get('https://api.github.com/users/'+userName+'/followers')
    }

    getRepositories(userName : string) {
        return this.httpClient.get('https://api.github.com/users/'+userName+'/repos')
    }

    getFollowingList(userName : string) {
        return this.httpClient.get('https://api.github.com/users/'+userName+'/following')
    }
}