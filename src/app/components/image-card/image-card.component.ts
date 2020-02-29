import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.scss"]
})
export class ImageCardComponent {
  @Input() image: any;
  IsOpenModal: boolean = false;
  constructor() {}

  openPreview() {
    this.IsOpenModal = true;
  }
}
