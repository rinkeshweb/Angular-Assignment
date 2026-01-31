import { Component, OnInit } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [PanelMenuModule, RouterModule],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css',
})
export class SideNavbar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About Us',
        routerLink: '/about',
      },
      {
        label: 'Services',
        routerLink: '/services',
      },
      {
        label: 'Contact Us',
        routerLink: '/contact-us',
      },
      {
        label: 'Credit Card',
        routerLink: '/credit-card',
      },
      {
        label: 'NGRX Counter',
        routerLink: '/counter',
      },
    ];
  }
}
