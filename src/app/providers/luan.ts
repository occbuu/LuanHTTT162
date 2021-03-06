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

    public getGroupTC(info: any) {
        return this.api.post("luan/read-symptom-type", info);
    }

    public searchTC(info: any) {
        return this.api.post("luan/search-symptom", info);
    }

    public diagnostic(info: any) {
        return this.api.post("luan/diagnostic", info);
    }

    public readDisease(info: any) {
        return this.api.post("luan/read-disease", info);
    }

    public readRule(info: any) {
        return this.api.post("luan/read-rule", info);
    }

    public readPatientData(info: any) {
        return this.api.post("luan/read-patient-data", info);
    }
}