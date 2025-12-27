import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private favorites = new BehaviorSubject<number[]>(this.loadFavorites());
  public favorites$ = this.favorites.asObservable();

  constructor() {}

  private loadFavorites(): number[] {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  }

  private saveFavorites(ids: number[]): void {
    localStorage.setItem('favorites', JSON.stringify(ids));
    this.favorites.next(ids);
  }

  addToFavorites(productId: number): void {
    const current = this.favorites.value;
    if (!current.includes(productId)) {
      current.push(productId);
      this.saveFavorites(current);
    }
  }

  removeFromFavorites(productId: number): void {
    const current = this.favorites.value.filter(id => id !== productId);
    this.saveFavorites(current);
  }

  toggleFavorite(productId: number): void {
    if (this.isFavorite(productId)) {
      this.removeFromFavorites(productId);
    } else {
      this.addToFavorites(productId);
    }
  }

  isFavorite(productId: number): boolean {
    return this.favorites.value.includes(productId);
  }

  getFavorites(): number[] {
    return this.favorites.value;
  }

  clearFavorites(): void {
    this.saveFavorites([]);
  }
}
