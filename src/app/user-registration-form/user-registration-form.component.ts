import { Component, OnInit, Input } from '@angular/core';

// Import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// Import to bring in the API call created in 6.2
import { FetchApiDataService  } from '../fetch-api-data.service';

// Import to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @description Component representing the signup form.
 * @selector 'app-user-registration-form'
 * @templateUrl './user-registration-form.component.html'
 * @styleUrls ['./user-registration-form.component.scss']
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit{

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: ''}

  /**
   * @constructor - Constructor for UserProfileComponent.
   * @param {FetchApiDataService} fetchApiData - Service for fetching data from the API.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - Material dialog service for opening dialogs.
   * @param {MatSnackBar} snackBar - Material snack bar service for displaying notifications.
   */
  constructor(
    public fetchApiData: FetchApiDataService ,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }

  /**
   * Function responsible for sending the form inputs to the backend.
   * @returns Message "User registration successful" / "User registration successful".
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      //Logic for a successful user registration
      this.dialogRef.close(); // Will close modal on success (To be implemented)
      this.snackBar.open('User registration successful', 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open('User registration successful', 'OK', {
        duration: 2000
      });
    });
  }

}