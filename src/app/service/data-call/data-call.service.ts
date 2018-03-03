import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const jsonUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const jsonpUrl = 'https://spreadsheets.google.com/feeds/list/1DWSGbLe45ICQkVQSaHoEc-xOxAQip1-fI1PfsNoMhIU/od6/public/values?alt=json-in-script';

@Injectable()
export class DataCallService {

    constructor(private http: HttpClient) {}

    getJsonData(url?: string) {
        return this.http.get(url ? url : jsonUrl).toPromise();
    }

    getJsonpData(url?: string) {
        return this.http.jsonp(url ? url : jsonpUrl, 'callback').toPromise();
    }

}
