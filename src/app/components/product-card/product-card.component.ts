import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/cart.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  isFavorite = false;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.isFavorite = this.wishlistService.isFavorite(this.product.id);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product, 1);
    alert(`${this.product.name} added to cart!`);
  }

  toggleFavorite(): void {
    this.wishlistService.toggleFavorite(this.product.id);
    this.isFavorite = !this.isFavorite;
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(this.product.name);
  }
}
