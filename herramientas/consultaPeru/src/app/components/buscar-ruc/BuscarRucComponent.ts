import { Component, OnInit } from '@angular/core';
import { SunatService } from 'src/app/services/sunat.service';


@Component({
  selector: 'app-buscar-ruc',
  templateUrl: './buscar-ruc.component.html',
  styleUrls: ['./buscar-ruc.component.css']
})

export class BuscarRucComponent implements OnInit {

  public empresa: any;

  constructor(
    private sSunat: SunatService
  ) { }

  ngOnInit(): void {
  }

  buscarRuc(ruc: string){
    this.sSunat.buscarRuc(ruc).subscribe(r => {
      if(!r.success){
        alert(r.message);
        this.empresa.razonSocial = "";
      }
      else{
        this.empresa = r.result;
      }
    });
  }
}
