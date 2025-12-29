
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/cart.service';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  products: Product[] = [];
  users: User[] = [];

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadUsers();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  loadUsers(): void {
    this.users = this.authService.getAllNonAdminUsers();
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
      });
    }
  }

  banUser(user: User): void {
    this.authService.banUser(user.id);
    this.loadUsers();
  }

  unbanUser(user: User): void {
    this.authService.unbanUser(user.id);
    this.loadUsers();
  }

  isUserBanned(user: User): boolean {
    return this.authService.isUserBanned(user.id);
  }
}
