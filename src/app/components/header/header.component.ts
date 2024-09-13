import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '@angular/fire/auth';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: User | null = null
  showSidebar = false;

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.authState$.subscribe((res: User | null) => this.user = res);
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
