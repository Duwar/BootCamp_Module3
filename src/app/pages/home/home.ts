import { Component } from '@angular/core';
//1. importar la clase del componente y agregar a los componentes
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  //Logica de funcionamiento de nuestro componente
}
