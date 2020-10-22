import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * @title Stepper overview
 */
@Component({
  selector: "stepper-overview-example",
  templateUrl: "stepper-overview-example.html",
  styleUrls: ["stepper-overview-example.css"]
})
export class StepperOverviewExample implements OnInit {
  isLinear = false;
  CompanyProfile: FormGroup;
  CompanyContact: FormGroup;
  Compliance: FormGroup;
  DownloadDocuments: FormGroup;
  secondFormGroup: FormGroup;
  finance: FormGroup;
  checked: boolean;
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
  c5: boolean;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.CompanyProfile = this._formBuilder.group({
      address1: ["", Validators.required],
      city: ["", Validators.required],
      zipCode: ["", Validators.required],
      country: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.finance = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  geterror(group: FormGroup, propName: string): string {
    return "";
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
