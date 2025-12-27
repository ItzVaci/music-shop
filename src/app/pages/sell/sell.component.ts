import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SellService } from '../../services/sell.service';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  // Form fields
  name = '';
  category = 'Guitar';
  price = 0;
  description = '';
  image = ''; // Selected image (base64)
  uploadedImages: string[] = []; // All uploaded images
  selectedImageIndex = -1; // Index of selected image
  imageFileName = '';
  condition = 'New';
  rating = 4.5;

  categories = ['Guitar', 'Piano', 'Drums', 'Violin', 'Flute', 'Trumpet', 'Bass'];
  conditions = ['New', 'Like New', 'Good', 'Fair'];
  loading = false;
  submitted = false;

  constructor(
    private authService: AuthService,
    private sellService: SellService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    const user = this.authService.getCurrentUser();
    if (!user) {
      alert('You must be logged in to sell instruments');
      this.router.navigate(['/login']);
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.sellService.addListing(user.id, {
        name: this.name,
        category: this.category,
        price: this.price,
        description: this.description,
        image: this.image || 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(this.name),
        condition: this.condition,
        rating: this.rating,
        reviews: 0
      });

      this.loading = false;
      alert('Your instrument has been listed for sale!');
      this.resetForm();
      this.router.navigate(['/my-listings']);
    }, 500);
  }

  private validateForm(): boolean {
    if (!this.name.trim()) {
      alert('Please enter instrument name');
      return false;
    }

    if (this.price <= 0) {
      alert('Please enter a valid price');
      return false;
    }

    if (!this.description.trim()) {
      alert('Please enter a description');
      return false;
    }

    if (this.description.length < 20) {
      alert('Description must be at least 20 characters');
      return false;
    }

    return true;
  }

  private resetForm(): void {
    this.name = '';
    this.category = 'Guitar';
    this.price = 0;
    this.description = '';
    this.image = '';
    this.uploadedImages = [];
    this.selectedImageIndex = -1;
    this.imageFileName = '';
    this.condition = 'New';
    this.rating = 4.5;
    this.submitted = false;
  }

  onImagesSelected(event: any): void {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    this.uploadedImages = []; // Clear previous uploads
    let validCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert(`${file.name} is too large (max 5MB)`);
        continue;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert(`${file.name} is not a valid image format`);
        continue;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages.push(e.target.result);
        // Auto-select first image
        if (this.selectedImageIndex === -1) {
          this.selectedImageIndex = 0;
          this.image = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      validCount++;
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
    this.image = this.uploadedImages[index];
  }

  deleteImage(index: number): void {
    this.uploadedImages.splice(index, 1);
    
    if (this.uploadedImages.length === 0) {
      this.image = '';
      this.selectedImageIndex = -1;
    } else if (this.selectedImageIndex === index) {
      // If we deleted the selected image, select the first one
      this.selectedImageIndex = 0;
      this.image = this.uploadedImages[0];
    } else if (this.selectedImageIndex > index) {
      // Adjust index if needed
      this.selectedImageIndex--;
    }
  }
}
