import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
