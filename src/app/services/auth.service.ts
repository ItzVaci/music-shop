import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
  role?: 'admin' | 'user';
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Returns the currently logged-in user
  getCurrentUser(): User | null {
    return this.loadUser();
  }

  // Login method for authenticating a user
  login(email: string, password: string): boolean {
    const usersJson = localStorage.getItem('users');
    if (!usersJson) return false;
    const users: any[] = JSON.parse(usersJson);
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authState.next({ user, isLoggedIn: true });
      return true;
    }
    alert('Invalid email or password');
    return false;
  }

  // Signup method for registering a new user
  signup(email: string, password: string, name: string): void {
    // Get users from localStorage or initialize
    const usersJson = localStorage.getItem('users');
    let users: any[] = usersJson ? JSON.parse(usersJson) : [];

    // Check if email already exists
    if (users.some(u => u.email === email)) {
      alert('Email already registered');
      return;
    }

    // Create new user object
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      email,
      name,
      password,
      role: 'user'
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    // Set as current user (auto-login)
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    this.authState.next({ user: newUser, isLoggedIn: true });
  }

  private authState = new BehaviorSubject<AuthState>({
    user: this.loadUser(),
    isLoggedIn: !!this.loadUser()
  });
  public auth$ = this.authState.asObservable();

  // Loads the current user from localStorage
  private loadUser(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  // Logs out the current user
  logout(): void {
    localStorage.removeItem('currentUser');
    this.authState.next({ user: null, isLoggedIn: false });
  }

  // Returns all non-admin users (for admin panel)
  getAllNonAdminUsers(): User[] {
    const usersJson = localStorage.getItem('users');
    if (!usersJson) return [];
    const users: User[] = JSON.parse(usersJson);
    return users.filter(u => u.role !== 'admin');
  }

  // Ban/unban logic
  private getBannedUserIds(): string[] {
    const banned = localStorage.getItem('bannedUsers');
    return banned ? JSON.parse(banned) : [];
  }

  private saveBannedUserIds(ids: string[]): void {
    localStorage.setItem('bannedUsers', JSON.stringify(ids));
  }

  banUser(userId: string): void {
    const banned = this.getBannedUserIds();
    if (!banned.includes(userId)) {
      banned.push(userId);
      this.saveBannedUserIds(banned);
    }
  }

  unbanUser(userId: string): void {
    const banned = this.getBannedUserIds();
    const idx = banned.indexOf(userId);
    if (idx > -1) {
      banned.splice(idx, 1);
      this.saveBannedUserIds(banned);
    }
  }

  isUserBanned(userId: string): boolean {
    return this.getBannedUserIds().includes(userId);
  }
}


