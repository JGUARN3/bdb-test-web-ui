import { Component } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { LoaderService } from "../../../shared/services/loader/loader.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-component',
  standalone: true,
  templateUrl: './home-collaborator.component.html',
  styleUrls: ['./home-collaborator.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeCollaboratorComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  channel: string;
  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.channel = 'Web';
    this.loaderService.hide();
  }
}
