import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ecliente } from '../modelos/ecliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  eClientes: Ecliente[] = [];
  clientesColeccion: AngularFirestoreCollection<Ecliente>;
  clienteDoc: AngularFirestoreDocument<Ecliente>;
  clientes: Observable<Ecliente[]>;
  cliente: Observable<Ecliente>;

  constructor(private db: AngularFirestore) {
    this.clientesColeccion = this.db.collection('clientes', ref => 
    ref.orderBy('nombre', 'asc')
    .where("pais", "==", "Peru"));
  }

  getClientes(): Observable<Ecliente[]> {
    this.clientes = this.clientesColeccion.snapshotChanges()
      .pipe(
        map(cambios => {
          return cambios.map(accion => {
            const datos = accion.payload.doc.data() as Ecliente;
            datos.id = accion.payload.doc.id;
            return datos;
          })

        })
      );
    return this.clientes;
  }


  grabarCliente(c: any) {
    this.clientesColeccion.add(c);
  }

  editarCliente(idx: string, c: Ecliente) {
    this.clienteDoc = this.db.doc(`clientes/${idx}`);
    this.clienteDoc.update(c);
  }

  eliminarCliente(idx: string) {
    this.clienteDoc = this.db.doc(`clientes/${idx}`);
    this.clienteDoc.delete();
  }


}
