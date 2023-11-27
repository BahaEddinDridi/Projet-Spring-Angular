import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  roles: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
   /*  const isAdmin = this.userService.isAdminRole(this.roles); // Assuming you have isAdminRole method in UserService

    this.userService.getUserProfile('', isAdmin).subscribe(
      (response: User) => {
        this.roles = response.roles;
        // this.profile = response.profile;
      },
      (error) => {
        console.error('Failed to fetch profile:', error);
      }
    ); */
  }
}
