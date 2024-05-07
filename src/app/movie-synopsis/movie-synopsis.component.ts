import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @description Component representing the movie synopsis dialog.
 * @selector 'app-movie-synopsis'
 * @templateUrl './movie-synopsis.component.html'
 * @styleUrls ['./movie-synopsis.component.scss']
 */
@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.component.html',
  styleUrls: ['./movie-synopsis.component.scss']
})
export class MovieSynopsisComponent implements OnInit {

  /**
   * @constructor - Constructor for MovieSynopsisComponent. 
   * @param data - Data containing movie discription.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)

  public data: {
    Description: string
  }
  ) {}

  ngOnInit(): void {
    
  }

}