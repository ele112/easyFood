import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';

@Injectable()
export class WebService {


    constructor(
        private request: RequestService
    ){}


    public EnviarCarta(params: any): Promise<any> {
        return this.request.post('', params);
    }



    
}