import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../core/auth/api/session.service';
import { User } from '../../../core/auth/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private sessionService: SessionService, public router: Router) {
    this.user = this.sessionService.getUser();
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          const navbar_height = document.querySelector('.navbar') as HTMLElement;
          document.body.style.paddingTop = navbar_height.offsetHeight + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          // remove padding top from body
          document.body.style.paddingTop = '0';
        }
      });
    });
  }
}
