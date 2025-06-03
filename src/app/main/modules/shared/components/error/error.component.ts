import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LoaderService } from "../../services/loader/loader.service";

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  standalone: true,
  styleUrls: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ErrorComponent {
  @ViewChild('bdbTpEmptyEstate', { static: true }) bdbTpEmptyEstate: ElementRef;
  typeImg = 'user-error';
  btnRight = true;
  showIcon = true;
  errDesc = 'Por tu seguridad hemos bloqueado el acceso a la solicitud. Ingresa nuevamente y continua gestionando. (0-000)';
  errTitle = 'No tienes acceso a este link';
  desc = `Todos Los Derechos Reservados. ${new Date().getFullYear()} © Banco de Bogotá.`;
  labelBtn = 'Volver a empezar';
  constructor(
    private readonly router: Router,
    private readonly loaderService: LoaderService,
  ) {
    setTimeout(() => {
      this.loaderService.hide();
    }, 700);
  }
  btnClickHandler(){
    this.router.navigate(['landing']);
  }
}
