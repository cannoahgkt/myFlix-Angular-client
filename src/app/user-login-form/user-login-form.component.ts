import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// Import to bring in the API call created in 6.2
import { FetchApiDataService  } from '../fetch-api-data.service';

// Import to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @description Component representing the login form.
 * @selector 'app-user-login-form'
 * @templateUrl './user-login-form.component.html'
 * @styleUrls ['./user-login-form.component.scss']
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit{

  @Input() userData = { username: '', password: '' }

  /**
   * @constructor
   * @param {FetchApiDataService} fetchApiData - Service for fetching data from the API.
   * @param {MatDialogRef<UserLoginFormComponent>} dialogRef - Material dialog service for opening user login dialog.
   * @param {MatSnackBar} snackBar - Material snack bar service for displaying notifications.
   * @param {Router} router - Router service for navigation.
   */
  constructor(
    public fetchApiData: FetchApiDataService ,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }
  
  ngOnInit(): void {
  }

  /**
   * Function responsible for sending the form inputs to the backend. 
   * @returns Message "User login successful" / "User login failed"
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      //Logic for a successful user login
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      this.dialogRef.close(); // Will close modal on success
      this.snackBar.open('User login successful', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies'])
    }, (result) => {
      this.snackBar.open('User login failed', 'OK', {
        duration: 2000
      });
    });
  }

}