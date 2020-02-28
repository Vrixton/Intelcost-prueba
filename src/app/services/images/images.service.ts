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

  get(page, category): Observable<any> {
    return this.http.get(url + "&page=" + page + "&category=" + category);
  }
}
