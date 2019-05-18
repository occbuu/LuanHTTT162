import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username == 'admin') {
      this.router.navigate(['/manager']);
    }
    else {
      this.router.navigate(['/index']);
    }
  }
}
