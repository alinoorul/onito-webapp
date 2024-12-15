import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    })
  }

}
