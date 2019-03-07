import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Ecliente } from '../../modelos/ecliente';

declare var Swal: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  lisClientes: Ecliente[];

  constructor(private clienteservis: ClientesService) { }

  ngOnInit() {
    this.clienteservis.getClientes().subscribe(
      res => {
        this.lisClientes = res;
        console.log('Data de Clientes: ', res);
        console.log('Data de Variable: ', this.lisClientes);

      }
    );
  }

  async nuevo() {

    const { value: formValues } = await Swal.fire({
      title: 'Agregar de Cliente',
      html:
        `<label for="txtnom">Nombre:</label><input id="txtnom" class="swal2-input" placeholder="Nombre">` +
        '<label for="txtedad">Edad:</label><input id="txtedad" class="swal2-input" placeholder="edad">' +
        '<label for="txtpais">Pais:</label><input id="txtpais" class="swal2-input" placeholder="Pais">' +
        '<label for="txtsaldo">Sueldo:</label><input id="txtsaldo" class="swal2-input" placeholder="saldo">',
      focusConfirm: false,
      preConfirm: () => {

        return [
          (<HTMLInputElement>document.getElementById("txtnom")).value,
          (<HTMLInputElement>document.getElementById("txtedad")).value,
          (<HTMLInputElement>document.getElementById("txtpais")).value,
          (<HTMLInputElement>document.getElementById("txtsaldo")).value
        ]
      }

    })

    if (formValues) {
      // Swal.fire(JSON.stringify(formValues))

      let data = {
        nombre: formValues[0],
        edad: formValues[1],
        pais: formValues[2],
        saldo: formValues[3]
      }

      this.clienteservis.grabarCliente(data);


    }




  }





}
