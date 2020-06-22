import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Injectable()
export class RequestService {


    ApiUrl: string = '';
    constructor(
        private http: HttpClient
    ) { }



    async get(endpoint: string) {
        return this.http
            .get((`${this.ApiUrl}/${endpoint}`))
            .toPromise()
            .then((answer: any) => {
                return answer;
            })
            .catch((error: any) => {
                return error;
            });
    }

    async post(endpoint: string, data: any) {
        return this.http
            .post(`${this.ApiUrl}/${endpoint}`, data)
            .toPromise()
            .then((answer: any) => {
                return answer;
            })
            .catch((error: any) => {
                return error;
            });
    }



}