import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sedes = [
    { 
      nombre: 'Santiago Alonso Ovalle', 
      desc: 'Ubicada en la capital con modernas instalaciones.', 
      img: 'https://www.duoc.cl/wp-content/uploads/2020/06/Padre_alonso_ovalle_sede.jpg'
    },
    { 
      nombre: 'Santiago Alameda', 
      desc: 'Espacios diseñados para potenciar tu aprendizaje.', 
      img: 'https://www.duoc.cl/wp-content/uploads/2020/06/Alameda.jpg'
    },
    { 
      nombre: 'Concepción', 
      desc: 'Conexión directa con la industria regional.', 
      img: 'https://www.duoc.cl/wp-content/uploads/2020/05/header-campus-arauco.png'
    },
    { 
      nombre: 'Valparaíso', 
      desc: 'Formación en un entorno cultural único.', 
      img: 'https://www.duoc.cl/wp-content/uploads/2020/06/valparaiso_IMG_0313_1920.jpg'
    },
  ];
}
