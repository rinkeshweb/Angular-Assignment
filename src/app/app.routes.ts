import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home').then(c => c.Home) },
  { path: 'about', loadComponent: () => import('./components/about/about').then(c => c.About) },
  { path: 'services', loadComponent: () => import('./components/services/services').then(c => c.Services) },
  { path: 'contact-us', loadComponent: () => import('./components/contact-us/contact-us').then(c => c.ContactUs) },
  { path: 'credit-card', loadComponent: () => import('./components/credit-card/credit-card').then(c => c.CreditCard) },
  { path: 'counter', loadComponent: () => import('./components/counter/counter').then(c => c.Counter) },

  // If URL not found
  { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found').then(c => c.PageNotFound) }
];
