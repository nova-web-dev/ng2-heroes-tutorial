import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from "@angular/http";

import { Catch } from '../objects/catch';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class CatchService {
    private serverURL = 'http://197.85.186.65:8080/catch-tag/';

    constructor(private http: Http) { }

    getCatch(id: string): Promise<Catch> {
        const url = `${this.serverURL}?Id=${id}`;

        console.log('Request ID ' + id);
        console.log('Full request URL ' + url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json()['catch-data'] as Catch)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
