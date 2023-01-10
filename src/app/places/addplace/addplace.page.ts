import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.page.html',
  styleUrls: ['./addplace.page.scss'],
})
export class AddplacePage implements OnInit {

  constructor(private placesService: PlaceService, private router: Router) { }

  ngOnInit() {
  }

  addNewPlace(title:any,imageURL:any){
   this.placesService.addPlace(title.value,imageURL.value);
   this.router.navigate(['/places'])
  }
}
