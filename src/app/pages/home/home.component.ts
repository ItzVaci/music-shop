import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FilterPanelComponent, Filters } from '../../components/filter-panel/filter-panel.component';
import { ProductService } from '../../services/product.service';
import { SellService } from '../../services/sell.service';
import { Product } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, FilterPanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  error: string | null = null;
  searchTerm = '';

  constructor(
    private productService: ProductService,
    private sellService: SellService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        // Combine products from backend with user listings
        const userListings = this.sellService.getAllListings();
        this.products = [...data, ...userListings];
        this.filteredProducts = this.products;
        this.loading = false;
      },
      error: (err) => {
        // If backend fails, still show user listings
        const userListings = this.sellService.getAllListings();
        this.products = userListings;
        this.filteredProducts = userListings;
        if (userListings.length === 0) {
          this.error = 'Failed to load products. Make sure json-server is running on port 3000.';
        }
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  onFiltersChanged(filters: Filters): void {
    this.applyFilters(filters);
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    const currentFilters = {
      category: '',
      condition: '',
      minPrice: 0,
      maxPrice: 10000
    };
    this.applyFilters(currentFilters);
  }

  private applyFilters(filters: Filters): void {
    this.filteredProducts = this.products.filter(product => {
      // Search filter
      if (this.searchTerm) {
        const matchesSearch =
          product.name.toLowerCase().includes(this.searchTerm) ||
          product.category.toLowerCase().includes(this.searchTerm) ||
          product.description.toLowerCase().includes(this.searchTerm);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Condition filter
      if (filters.condition && product.condition !== filters.condition) {
        return false;
      }

      // Price range filter
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }
}
