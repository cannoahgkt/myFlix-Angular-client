
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// Components
import { DirectorInfoComponent } from '../director-info/director-info.component';
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component';
import { GenreInfoComponent } from '../genre-info/genre-info.component';

// Import to bring in the API call created in 6.2
import { FetchApiDataService  } from '../fetch-api-data.service';

// Import to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @description Component representing the user profile page.
 * @selector 'app-user-profile'
 * @templateUrl './user-profile.component.html'
 * @styleUrls ['./user-profile.component.scss']
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  @Input() userData = { Username: "", Email: "", Birthday: "", FavoriteMovies: [] };

  user: any = {};
  movies: any[] = [];
  FavoriteMovies : any[] = [];

  /**
   * @constructor - Constructor for UserProfileComponent.
   * @param {FetchApiDataService} fetchApiData - Service for fetching data from the API.
   * @param {MatSnackBar} snackBar - Material snack bar service for displaying notifications.
   * @param {Router} router - Router service for navigation.
   * @param {MatDialog} dialog - Material dialog service for opening dialogs.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getProfile();
    this.getFavMovies();
  }

  /**
   * Function for getting user.
   * @returns users username, email, birthday, and favorite movies.
   */
  getProfile(): void {
    this.user = this.fetchApiData.getUser();
    this.userData.Username = this.user.Username;
    this.userData.Email = this.user.Email;
    this.userData.Birthday = this.user.Birthday;
    this.fetchApiData.getAllMovies().subscribe((response) => {
      this.FavoriteMovies = response.filter((movie: any) => this.user.FavoriteMovies.includes(movie._id));
    });
  }

  /**
   * Function for updating user information.
   * @returns Message "User update successful" / "Failed to update user"
   */
  updateUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      console.log('User update success');
      localStorage.setItem('user', JSON.stringify(result));
      this.snackBar.open('User update successful', 'OK', {
        duration: 2000
      });
    }, (error) => {
      console.error('Error updating user:', error);
      this.snackBar.open('Failed to update user', 'OK', {
        duration: 2000
      });
    });
  }

  /**
   * Function to delete user profile.
   * @returns Message "User successfully deleted."
   */
  deleteUser(): void {
    this.router.navigate(['welcome']).then(() => {
      localStorage.clear();
      this.snackBar.open('User successfully deleted.', 'OK', {
        duration: 2000
      });
    })
    this.fetchApiData.deleteUser().subscribe((result) => {
      console.log(result);
    });
  }

  /**
   * Function for getting all movies.
   * @returns All movies.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

    /**
   * Function that will open the dialog when director button is clicked.
   * @param {string} name - Name of the director.
   * @param {string} bio - Biography of the director.
   * @param {string} birth - Birth date of the director.
   * @param {string} death - Death date of the director.
   * @returns Directors name, bio, birth date and death date.
   */
    openDirectorDialog(name: string, bio: string, birth: string, death: string): void {
      this.dialog.open(DirectorInfoComponent, {
        data: {
          Name: name,
          Bio: bio,
          Birth: birth,
          Death: death
        },
        width: '450px',
      });
    }
  
    /**
   * Function that will open the dialog when genre button is clicked.
   * @param {string} name - Name of the genre.
   * @param {string} description - Description of the genre.
   * @returns Genre name and discription.
   */
    openGenreDialog(name: string, description: string): void {
      this.dialog.open(GenreInfoComponent, {
        data: {
          Name: name,
          Description: description,
        },
        width: '450px',
      });
    }
  
    /**
   * Function that will open the dialog when synopsis button is clicked
   * @param {string} description - Description of the movie.
   * @returns Description of the movie.
   */
    openSynopsisDialog(description: string): void {
      this.dialog.open(MovieSynopsisComponent, {
        data: {
          Description: description,
        },
        width: '450px',
      });
    }

  /**
   * Function to get favMovie list.
   * @returns Favorite movies of user.
  */
  getFavMovies(): void {
    this.user = this.fetchApiData.getUser();
    this.userData.FavoriteMovies = this.user.FavoriteMovies;
    this.FavoriteMovies = this.user.FavoriteMovies;
    console.log('Fav Movies in getFavMovie', this.FavoriteMovies);
  }

  /**
   * Function to check if movie is a favorite movie.
   * @param movie  - Movie object to check.
   * @returns {boolean} - Boolean indicating whether the movie is a favorite.
   */
  isFav(movie: any): any {
    const MovieID = movie._id;
    if (this.FavoriteMovies.some((movie) => movie === MovieID)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function to delete movie from favMovie list.
   * @param {any} movie - Movie to delete from favorite movies.
   * @returns Message "Movie has been deleted from your favorites!"
   */
  deleteFavMovies(movie: any): void {
    this.user = this.fetchApiData.getUser();
    this.userData.Username = this.user.Username;
    this.fetchApiData.deleteFavouriteMovies(movie).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));
      this.getFavMovies();
      this. getProfile();
      this.snackBar.open('Movie has been deleted from your favorites!', 'OK', {
        duration: 3000,
      });
    });
  }
}
