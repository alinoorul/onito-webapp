import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User; 


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user
    });
  
  }

}
