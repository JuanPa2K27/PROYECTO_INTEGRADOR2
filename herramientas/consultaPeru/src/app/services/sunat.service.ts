import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  constructor(
    private http: HttpClient
  ) { }

  buscarRuc(_ruc: string): Observable<any>{
    let data = {
      ruc: _ruc
    };

    let url = "https://www.softwarelion.xyz/api/sunat/consulta-ruc";
    let token = "Bearer [Aquí especifica tu token]";
    let _headers = new HttpHeaders().set("Authorization", token);

    return this.http.post(url, data, {headers: _headers});
}

}
