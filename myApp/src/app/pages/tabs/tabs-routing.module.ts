import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
    },
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
    },
    {
      path: 'search',
      loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
    }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
