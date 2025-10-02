import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonApp, IonRouterOutlet, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline, gridOutline, closeOutline, sendOutline } from 'ionicons/icons';
import { ChatModalComponent } from './components/chat-modal/chat-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonFab, IonFabButton],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) {
    addIcons({ rocketOutline, gridOutline, closeOutline, sendOutline });
  }

  async openChatModal() {
    const modal = await this.modalCtrl.create({
      component: ChatModalComponent,
      cssClass: 'chat-modal'
    });
    modal.present();
  }
}
