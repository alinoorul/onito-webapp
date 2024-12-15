import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  user?: User;
  

  constructor(private reportsService: ReportsService,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  showReports() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    })

    this.reportsService.findById()
    .subscribe((blob: Blob): void => {
      const file = new Blob([blob], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank', 'width=1000, height=800');
    });

  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
