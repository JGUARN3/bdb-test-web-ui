import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })
export class LoaderService {

    isLoading = new Subject<any>();

    show() {
        this.isLoading.next(true);
    }

    hide() {
        this.isLoading.next(false);
    }
}
