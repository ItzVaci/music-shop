import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './cart.service';

export interface UserListing extends Product {
  sellerId: string;
  listedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class SellService {
  private listings = new BehaviorSubject<UserListing[]>(this.loadListings());
  public listings$ = this.listings.asObservable();
  private nextId = 1000;

  constructor() {
    this.nextId = Math.max(...this.loadListings().map(l => l.id), 999) + 1;
  }

  private loadListings(): UserListing[] {
    const saved = localStorage.getItem('userListings');
    return saved ? JSON.parse(saved) : [];
  }

  private saveListings(listings: UserListing[]): void {
    localStorage.setItem('userListings', JSON.stringify(listings));
    this.listings.next(listings);
  }

  addListing(userId: string, instrument: Omit<UserListing, 'id' | 'sellerId' | 'listedDate'>): UserListing {
    const newListing: UserListing = {
      ...instrument,
      id: this.nextId++,
      sellerId: userId,
      listedDate: new Date().toISOString()
    };

    const current = this.loadListings();
    current.push(newListing);
    this.saveListings(current);

    return newListing;
  }

  getUserListings(userId: string): UserListing[] {
    return this.loadListings().filter(listing => listing.sellerId === userId);
  }

  getAllListings(): UserListing[] {
    return this.loadListings();
  }

  removeListing(id: number, userId: string): boolean {
    const current = this.loadListings();
    const index = current.findIndex(l => l.id === id && l.sellerId === userId);

    if (index > -1) {
      current.splice(index, 1);
      this.saveListings(current);
      return true;
    }

    return false;
  }

  updateListing(id: number, userId: string, updates: Partial<UserListing>): boolean {
    const current = this.loadListings();
    const listing = current.find(l => l.id === id && l.sellerId === userId);

    if (listing) {
      Object.assign(listing, updates);
      this.saveListings(current);
      return true;
    }

    return false;
  }
}
