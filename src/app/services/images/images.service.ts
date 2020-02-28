import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "../loader/loader.service";

import { url } from "../../configs/config";
@Injectable({
  providedIn: "root"
})
export class ImagesService {
  url: string = url;
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  get(page, category, text): Observable<any> {
    this.loaderService.showLoader();
    return this.http.get(
      url + "&page=" + page + "&q=" + text + "&category=" + category
    );
  }
}
