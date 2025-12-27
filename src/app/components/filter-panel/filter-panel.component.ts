import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Filters {
  category: string;
  condition: string;
  minPrice: number;
  maxPrice: number;
}

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent {
  @Output() filtersChanged = new EventEmitter<Filters>();

  categories = ['Guitar', 'Piano', 'Drums', 'Violin', 'Flute', 'Trumpet', 'Bass'];
  conditions = ['New', 'Like New', 'Good', 'Fair'];

  selectedCategory = '';
  selectedCondition = '';
  minPrice = 0;
  maxPrice = 10000;

  onCategoryChange(category: string): void {
    this.selectedCategory = this.selectedCategory === category ? '' : category;
    this.emitFilters();
  }

  onConditionChange(condition: string): void {
    this.selectedCondition = this.selectedCondition === condition ? '' : condition;
    this.emitFilters();
  }

  onPriceChange(): void {
    this.emitFilters();
  }

  private emitFilters(): void {
    this.filtersChanged.emit({
      category: this.selectedCategory,
      condition: this.selectedCondition,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    });
  }
}
