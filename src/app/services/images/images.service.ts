import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { url } from "../../configs/config";

@Injectable({
  providedIn: "root"
})
export class ImagesService {
  url: string = url;

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(url);
  }
}
