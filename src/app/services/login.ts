import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para poder usar GET, POST, PUT, DELETE
import { Credencials } from '../interfaces/credencials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
//1. Inyextar y definir variables
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private apiUrl = environment.appUrl; // url general del backend

//2. desarrollar la logica del servicio

  //petición POST
  Login(loginCredentials: Credencials){
    return this._httpClient.post(this.apiUrl + '/login', loginCredentials);
  }

  //Decirle al navegadro de donde va a obtener el token
  getToken(){
   // viene del LocalStorage -> almacenamiento temporal
    return localStorage.getItem('token');
  }
  //decodificar el token y verificar si es admin o no

  isAdmin(){
    // primero obtengo el token
    const token = this.getToken();
    if(token){
      const decodedToken: any = jwtDecode(token);
      return decodedToken.admin === true? true : false;
    }else{
      console.log('No hay token');
      return false;
    }
  }
//redireccionar a la pagina correspondiente una vez confirmado el login
redirectTo(){
  //si es admin a admin, si no a home
  if(this.isAdmin()){
    this._router.navigate(['/admin']);
  }else{
    this._router.navigate(['/']);
  }
}

  //el cierre de sesión

  logout(){
    localStorage.removeItem('token');
    alert('Sesión cerrada exitosamente, vuelve pronto!');
    this._router.navigate(['/login']);
  }


}