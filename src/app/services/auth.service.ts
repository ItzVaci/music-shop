import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<AuthState>({
    user: this.loadUser(),
    isLoggedIn: !!this.loadUser()
  });

  public auth$ = this.authState.asObservable();

  constructor() {
    this.initializeDemoAccount();
  }

  private initializeDemoAccount(): void {
    const users = this.getAllUsers();
    const demoExists = users.some(u => u.email === 'demo@example.com');
    
    if (!demoExists) {
      users.push({
        id: 'demo-user',
        email: 'demo@example.com',
        name: 'Demo User',
        password: 'password123'
      });
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  private loadUser(): User | null {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  }

  private saveUser(user: User | null): void {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
    this.authState.next({
      user,
      isLoggedIn: !!user
    });
  }

  signup(email: string, password: string, name: string): void {
    // Check if user already exists
    const existingUsers = this.getAllUsers();
    if (existingUsers.some(u => u.email === email)) {
      alert('Email already registered. Please use a different email or login.');
      return;
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name
    };

    // Save user and password (in real app, use secure backend)
    existingUsers.push({ ...newUser, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Log in the new user
    this.saveUser(newUser);
    alert('Account created successfully!');
  }

  login(email: string, password: string): boolean {
    const users = this.getAllUsers();
    const user = users.find(u => u.email === email && (u as any).password === password);

    if (user) {
      const loggedInUser: User = {
        id: user.id,
        email: user.email,
        name: user.name
      };
      this.saveUser(loggedInUser);
      return true;
    }

    alert('Invalid email or password.');
    return false;
  }

  logout(): void {
    this.saveUser(null);
  }

  getCurrentUser(): User | null {
    return this.authState.value.user;
  }

  isAuthenticated(): boolean {
    return this.authState.value.isLoggedIn;
  }

  private getAllUsers(): any[] {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  }
}
