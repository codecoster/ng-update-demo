import { Routes } from '@angular/router';
import { MyTitleResolver } from './my-title.resolver';

export const APP_ROUTES: Routes = [
  {
    path: '',
    title: MyTitleResolver,
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'videos',
    title: 'Videos',
    loadComponent: () => import('./videos/videos.component')
      .then(m => m.VideosComponent)
  },
  {
    path: 'customer',
    title: 'Customers',
    loadChildren: () => import('./customer/customer.routing').then(m => m.CUSTOMER_ROUTES)
  }
];

