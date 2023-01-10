import { Injectable } from '@angular/core';
import { Place } from './places.model';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }
  places: Place[] = [
    {
      'id': '1',
      'title': 'PLace_1',
      'imageURL': 'https://th.bing.com/th/id/OIP.z2fcqbAJpbdFWZg4tN02uQHaEK?pid=ImgDet&rs=1'
    },
    {
      'id': '2',
      'title': 'Place_2',
      'imageURL': 'https://th.bing.com/th/id/R.2c8f8665ed6daaf5cadb642d96b8a21c?rik=WmsRxJuB8kkObA&pid=ImgRaw&r=0'
    },
    {
      'id': '3',
      'title': 'PLace_3',
      'imageURL': 'https://th.bing.com/th/id/R.5232841c8d9f3db4ae3ce16bc55ab10e?rik=xdRdocFI2xbfxA&pid=ImgRaw&r=0'
    }

  ]
  getPlaces(){
    return [...this.places]
  }

  getPlace(placeID: string){
    return {
      ...this.places.find(place => {
        return place.id === placeID
      })
    }
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      id: this.places.length + 1 + ""
  })

  }

  removePlace(placeID: string){
    this.places = this.places.filter(place =>{
        return place.id !== placeID
    }
    )
  }
}
