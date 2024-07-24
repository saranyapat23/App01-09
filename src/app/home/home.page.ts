import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonGrid ,IonRow ,IonCol ,IonItem ,IonLabel ,IonIcon ,IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent ,IonGrid ,IonRow ,IonCol ,IonItem ,IonLabel ,IonIcon ,IonButton],
})
export class HomePage {
  constructor() {}
}
