import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  condition: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(this.loadCart());
  public cart$ = this.cartItems.asObservable();

  constructor() {}

  private loadCart(): CartItem[] {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

  private saveCart(items: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(items));
    this.cartItems.next(items);
  }

  addToCart(product: Product, quantity: number = 1): void {
    const current = this.cartItems.value;
    const existing = current.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      current.push({ ...product, quantity });
    }

    this.saveCart(current);
  }

  removeFromCart(productId: number): void {
    const filtered = this.cartItems.value.filter(item => item.id !== productId);
    this.saveCart(filtered);
  }

  updateQuantity(productId: number, quantity: number): void {
    const items = this.cartItems.value;
    const item = items.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart(items);
    }
  }

  getTotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.saveCart([]);
  }
}
