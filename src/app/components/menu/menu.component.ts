import { Component } from "@angular/core";
import { Constants } from "../../configs/constants";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  categories: any = Constants.CATEGORIES;
  constructor() {}
}
