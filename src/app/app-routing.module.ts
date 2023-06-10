import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './guards/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashbord/dashbord.module').then(
      (m) => m.DashbordModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(
      (m) => m.ProductsModule
    ),
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(
      (m) => m.CategoriesModule
    ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
