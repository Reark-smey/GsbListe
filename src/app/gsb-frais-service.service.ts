import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, tap} from 'rxjs';
import {Frais} from './models/Frais';
import {GsbLoginService} from './gsb-login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GsbFraisService {
  private _responses = new BehaviorSubject<Frais[]>([]);
  readonly appels_termines = this._responses.asObservable();
  public listeFrais: Frais[]=[];

  constructor(private http:HttpClient, private gsb_api: GsbLoginService)  { }

  listeFraisDuVisiteur() {
    const url ='http://gsb.julliand.etu.lmdsio.com/api/frais/' + this.gsb_api.visiteurId();
    const headers = new HttpHeaders({
      'Authorization':'Bearer' + this.gsb_api.recupereBearer()
    });

    console.log('API URL:', url);
    console.log('Headers:', headers);

    return this.http.get<Frais[]>(url, { headers}).pipe(tap(data => {
      console.log("données reçues",data);
      this.listeFrais = Array.isArray(data) ? data: [data];
      console.log("données transofrmées", this.listeFrais);
      this._responses.next(this.listeFrais);
    }),
      catchError(error => {
        console.error('Erreur appel API', error);
        throw error;
      })
    ).subscribe();
  }
}
