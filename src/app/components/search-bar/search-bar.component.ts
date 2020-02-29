import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent {
  @Output() activeTextSearch = new EventEmitter<string>();
  constructor() {}

  getRecords(text) {
    if (text) {
      this.activeTextSearch.emit(text);
    } else {
      this.activeTextSearch.emit("");
    }
  }
}
