import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

interface Message {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatModalComponent {
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  newMessage: string = '';

  constructor(private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    // Mensaje de bienvenida inicial
    if (this.messages.length === 0) {
      this.messages.push({ text: '¡Hola! Soy el asistente virtual de Duoc UC. ¿En qué puedo ayudarte hoy?', isUser: false });
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  onInput(event: Event) {
    const div = event.target as HTMLDivElement;
    this.newMessage = div.innerText;
  }

  sendMessage() {
    const text = this.newMessage.trim();
    if (text !== '') {
      // Añade el mensaje del usuario
      this.messages.push({ text, isUser: true });
      
      // Limpia el div y la variable
      if (this.chatInput) {
        this.chatInput.nativeElement.innerText = '';
      }
      this.newMessage = '';

      // Simula una respuesta del bot después de un segundo
      setTimeout(() => {
        this.messages.push({ text: 'Gracias por tu mensaje. Estoy procesando tu solicitud.', isUser: false });
      }, 1000);
    }
  }
}
