import { Component, OnInit } from '@angular/core';
// import { Lista } from '../../db/info';
import { Cliente } from 'src/app/classes/cliente';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
  public lst: Cliente[];
  public lst2: Cliente[];

  constructor( public lista: GlobalService ) { 
    this.lst = [];
    this.lst2 = [];
  }

  ngOnInit(): void {
    this.llenarListaDb();
  }

  public llenarListaDb() {
    // let lst: Lista = new Lista();
    // lst.lstInfo();
    this.lst = this.lista.lstInfo();
    this.lst2 = this.lista.lstInfoDynamic();
  }

}
