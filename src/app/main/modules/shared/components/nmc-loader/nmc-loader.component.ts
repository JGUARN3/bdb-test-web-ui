import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-nmc-loader',
  templateUrl: './nmc-loader.component.html',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NmcLoaderComponent implements OnInit {
  @ViewChild('loader') loader!: ElementRef;

  isLoading: Subject<boolean>;

  constructor(private readonly loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit() {
    this.isLoading.subscribe(show => {
      (show) ? this.loader.nativeElement.openLoader() : this.loader.nativeElement.closeLoader();
    });
  }
}
