import { Component, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-preview-image",
  templateUrl: "./preview-image.component.html",
  styleUrls: ["./preview-image.component.scss"]
})
export class PreviewImageComponent {
  @Input() image: any;
  @Input() isOpenModal: boolean;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "Preview image" });
  }
}
