import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { LoaderService } from "../../../shared/services/loader/loader.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-landing-component',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingComponent implements OnInit {
  constructor(
    private readonly loaderService: LoaderService,
    private router: Router,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.loaderService.hide();
  }

  @HostListener('window:clickSelected', ['$event'])
  onCloseBtnClicked(event: any) {
    console.log('clicked', event);
    const element = document.getElementById(event.detail.position);
    element && element.scrollIntoView();
  }

  redirect(){
    this.loaderService.show();
    this.router.navigate(['validation']);
  }
}
