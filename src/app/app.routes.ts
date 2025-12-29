import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SellComponent } from './pages/sell/sell.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';

// Admin Panel
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminAuthGuard } from './services/admin-auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sell', component: SellComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminAuthGuard] },
  { path: '**', redirectTo: '' }
];
