import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';//para accder a los datos de la url
import { PlaceService } from '../place.service';
import { Place} from '../places.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  
  place:any = [];

  constructor(private activateRouter: ActivatedRoute, 
              private placesServices: PlaceService, 
              private router: Router,
              private alertCtr: AlertController) { }


  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap =>{
      let recipeID: string;
      recipeID =  (paramMap.get('placeID')+"")
      this.place = this.placesServices.getPlace(recipeID)
      console.log(this.place)
    })
  }
async  deletePlace(){
  let alertElement = await this.alertCtr.create(
      {
        header: "¿Desea eliminar este elemento?",
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Eliminar',
            handler:  () => {
              this.placesServices.removePlace(this.place.id)
              this.router.navigate(['/places'])
            }
          }
        ]
      }
    );
   await alertElement.present()
  }
}
