import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Http} from "@angular/http";

import { Fisher } from '../objects/fisher';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class FisherService implements InMemoryDbService {
    createDb(): {} {
        return undefined;
    }

    private serverURL = 'http://197.85.186.65:8080/abalobi-users';

    constructor(private http: Http) { }

    // getFishers(): Promise<Fisher[]> {
    //     return this.http.get(this.serverURL).toPromise().then(response => response.json().data as Fisher[]).catch(this.handleError);
    // }

    getFisher(id: string): Promise<Fisher> {
        const url = `${this.serverURL}/${id}`;

        console.log('Request ID ' + id);
        console.log('Full request URL ' + url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json()['abalobi-users'][0] as Fisher)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
