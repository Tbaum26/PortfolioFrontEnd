import { Component, Input, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  @Input() persona: PersoDTO;

  constructor() { }

  ngOnInit(): void {
   
  }

}
