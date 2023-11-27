import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../models/chambre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private _http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this._http.get<Chambre[]>("http://localhost:8080/mon-application/retrieveAllChambres");
  }

  addChambre(chambre:Chambre):Observable<Chambre>{
    return this._http.post<Chambre>("http://localhost:8080/mon-application/addChambre",chambre);
    }
  deleteChambre(idChambre:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8080/mon-application/deleteChambre/"+idChambre)
  }
  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this._http.put<Chambre>("http://localhost:8080/mon-application/updateChambre", chambre);
  }
}
