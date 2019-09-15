import { Component, OnInit, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.scss"]
})
export class SignUpPageComponent implements OnInit {
  @ViewChild("registerForm", { static: false }) registerForm;
  constructor() {}

  ngOnInit() {}

  @HostListener("window: beforeunload", ["$event"])
  canDeactivate($event): boolean {
    return this.registerForm.submitted || !this.registerForm.dirty;
  }
}
