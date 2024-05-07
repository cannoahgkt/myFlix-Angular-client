import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @description Component representing the navbar.
 * @selector 'app-navbar'
 * @templateUrl './navbar.component.html'
 * @styleUrls ['./navbar.component.scss']
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /**
   * @constructor - Constructor for NavbarComponent. 
   * @param {Router} router - Router service for navigation.
   * @param {MatSnackBar} snackBar - Material snack bar service for displaying notifications.
   */
  constructor(
  public router: Router,
  public snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {}

  /**
   * Function to navigate to movies page.
   */
  public openMovies(): void {
    this.router.navigate(['movies']);
  }

   /**
   * Function to navigate to profile page.
   */
  public openProfile(): void {
    this.router.navigate(['profile']);
  }

   /**
   * Function to logout user.
   * @returns Message "User logout successful".
   */
  public logoutUser(): void {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    this.router.navigate(['welcome']);
    this.snackBar.open('User logout successful', 'OK', {
      duration: 2000
    })
  }
}