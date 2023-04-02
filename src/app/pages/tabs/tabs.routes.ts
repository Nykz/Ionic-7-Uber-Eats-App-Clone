import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/orders.page').then( m => m.OrdersPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  
  {
    path: 'restaurants/:id',
    loadComponent: () => import('./items/items.page').then( m => m.ItemsPage)
  },
];
