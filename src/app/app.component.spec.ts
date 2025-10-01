import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  // 👇 Importa Ionic y CommonModule para que funcionen <ion-*> y *ngFor
  imports: [IonicModule, CommonModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sedes = [
    { nombre: 'Santiago', desc: 'Ubicada en la capital con modernas instalaciones.' },
    { nombre: 'Viña del Mar', desc: 'Espacios diseñados para potenciar tu aprendizaje.' },
    { nombre: 'Concepción', desc: 'Conexión directa con la industria regional.' },
    { nombre: 'Valparaíso', desc: 'Formación en un entorno cultural único.' },
  ];
}
