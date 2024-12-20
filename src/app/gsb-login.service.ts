import { Injectable } from '@angular/core';
import {Login} from './models/login';

import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs';
import {Visiteur} from './models/visiteur';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GsbLoginService {
private login: Login = new Login();
  constructor(private http: HttpClient, private router: Router) { }

  serviceEnvoieLogin(username: string, password: string) {
    const requestObject = new Visiteur({'login':username,'password':password});
    return this.http.post<Login>('http://gsb.julliand.etu.lmdsio.com/api/visiteur/login', requestObject)
      .pipe(
        tap(data=> {
        this.login = new Login(data);
        this.router.navigate(['/frais/liste']);
      }),
      catchError((error) => {
        console.error('Erreur appel API', error);
        throw error;
      })
      );
  }
  recupereBearer():string {
    return this.login.access_token;
  }

  visiteurId():number {
    return this.login.visiteur.id_visiteur;
  }

}
