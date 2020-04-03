import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {}
  onLogout() {
    this.userservice.deleteToken();
    this.router.navigate(["/signin"]);
  }
}
