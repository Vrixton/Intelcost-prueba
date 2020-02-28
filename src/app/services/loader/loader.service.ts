import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  constructor() {}

  showLoader() {
    document.getElementById("loader").style.display = "flex";
  }
  closeLoader() {
    document.getElementById("loader").style.display = "none";
  }
}
