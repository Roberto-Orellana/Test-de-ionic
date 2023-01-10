import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from './place.service';
@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  
  places: any = []
  constructor(private placeService: PlaceService,private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces()
  }
  addNewPlace(){
    this.router.navigate(['/newPlace'])
  }

}
