import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ImagesService } from "../../services/images/images.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  category: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private imagesService: ImagesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.category) {
        this.category = params.category;
      }
    });
  }
}
