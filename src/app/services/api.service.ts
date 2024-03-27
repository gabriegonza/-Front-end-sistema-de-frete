import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllClientes() {
    return this.http.get('http://localhost:8080/api/frete/all');
  }

  getClienteById(id: number) {
    return this.http.get('http://localhost:8080/api/frete/find/' + id);
  }

  saveCliente(form: any) {
    return this.http.post('http://localhost:8080/api/frete/criar' + form);
  }
}
