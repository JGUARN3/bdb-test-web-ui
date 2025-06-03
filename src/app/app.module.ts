import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedModule } from "./main/modules/shared/shared.module";
import { NmcLoaderComponent } from "./main/modules/shared/components/nmc-loader/nmc-loader.component";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 100 }),
    AppRoutingModule,
    SharedModule,
    NmcLoaderComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
