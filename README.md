# MyFlixAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Description
The MyFlixAngularClient serves as the front-end application for the myFlix API, providing an interface for users to interact with movie data, view detailed information about each film, and manage user profiles.

## Dependencies
- **Angular**: A framework for building single-page web applications.
- **Angular Material**: A UI component library for Angular applications that implements Material Design by Google.
- **TypeDoc**: A tool for generating HTML documentation from TypeScript code.

## The API the Project Uses
This project interacts with the [myFlix API](https://github.com/cannoahgkt/moviesapi), which provides the backend functionality for the application.

## Link to the Application
You can access the live application hosted on GitHub Pages: [MyFlixAngularClient](https://cannoahgkt.github.io/myFlix-Angular-client/).

## Views
### Welcome View
- Users can log in with their credentials or sign up for a new account.

### Main View
- Displays a list of all movies retrieved from the API.
- Users can view detailed information about the director, genre, and synopsis of each movie.
- The Navbar provides options to log out and navigate to the Profile View.

### Profile View
- Shows the user's registration details.
- Allows users to update their information (username, email, date of birth).
- Provides an option for users to deregister from the application.
- Displays the user's list of favorite movies, with the option to remove movies from this list.

## Setup Instructions
To set up the application locally, follow these steps:

* Clone this repository.
* Navigate to the myMovie-Angular-client folder and run `npm install`
* Run `ng serve`, then navigate to  `http://localhost:4200/`
