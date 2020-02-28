import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../../services/images/images.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.get().subscribe(response => {
      console.log(response);
    });
  }
}
