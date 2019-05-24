import { Injectable } from '@angular/core';
import { ApiProvider } from './api';

@Injectable()
export class LuanProvider {
    constructor(private api: ApiProvider) { }

    /**
     * Abc
     */
    public Abc(info: any) {
        return this.api.post("luan/abc", info);
    }
}