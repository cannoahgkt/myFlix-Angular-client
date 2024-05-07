import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @description Component representing the director info dialog.
 * @selector 'app-director-info'
 * @templateUrl './director-info.component.html'
 * @styleUrls ['./director-info.component.scss']
 */
@Component({
  selector: 'app-director-info',
  templateUrl: './director-info.component.html',
  styleUrls: ['./director-info.component.scss']
})
export class DirectorInfoComponent implements OnInit {

  /**
 * @constructor - Constructor for DirectorInfoComponent.
 * @param - Data containing director information.
 */
  constructor(
    @Inject(MAT_DIALOG_DATA)

  public data: {
    Name: string,
    Bio: string,
    Birth: string,
    Death: string
  }
  ) {}

  ngOnInit(): void {
    
  }

}