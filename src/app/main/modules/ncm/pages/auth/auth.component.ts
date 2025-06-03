import { Component } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { LoaderService } from "../../../shared/services/loader/loader.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DispatcherService } from "../../../shared/services/dispatcher/dispatcher.service";

class User {
  id: number;
  name: string;
  email: string;
  status: number;
  role_id: number;
}

@Component({
  selector: 'app-component',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthComponent implements OnInit {
  @ViewChild('container') container: ElementRef;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly loaderService: LoaderService,
    private readonly dispatcherService: DispatcherService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    setTimeout(() => {
      this.loaderService.hide();
    }, 700);

  }

  login(event: any): void {
    console.log('login', event);
    this.loaderService.show();
    const headers: HeadersInit = {
      'X-Name': 'NCM',
      'X-Channel': 'Web'
    };
    const validate = {
      email: event.detail[0].value,
    }
    this.dispatcherService.validateDispatcher(headers, validate).subscribe({
      next: async (res: any[]) => {
        if (res.length > 0) {
          this.validate_role(res[0])
        } else {
          await this.router.navigate(['error']);
        }
      },
      error: async (_err) => {
        await this.router.navigate(['error']);
      }
    });
  }

  validate_role(user: User) {
    if (user.role_id == 1) {
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('urlAuth', 'authorizer');
      this.router.navigate(['home']);
    } else if (user.role_id == 2) {
      sessionStorage.setItem('urlAuthC', 'authorizer');
      this.router.navigate(['home-collaborator']);
    }
  }
}
