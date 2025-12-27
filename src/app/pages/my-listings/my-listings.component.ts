import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SellService, UserListing } from '../../services/sell.service';

@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: UserListing[] = [];
  loading = true;
  currentUserId: string | null = null;

  constructor(
    private authService: AuthService,
    private sellService: SellService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.currentUserId = user.id;
    this.loadListings();
  }

  loadListings(): void {
    this.sellService.listings$.subscribe(() => {
      if (this.currentUserId) {
        this.listings = this.sellService.getUserListings(this.currentUserId);
        this.loading = false;
      }
    });
  }

  removeListing(id: number): void {
    if (confirm('Are you sure you want to remove this listing?')) {
      if (this.currentUserId && this.sellService.removeListing(id, this.currentUserId)) {
        this.listings = this.sellService.getUserListings(this.currentUserId);
        alert('Listing removed successfully');
      }
    }
  }

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
