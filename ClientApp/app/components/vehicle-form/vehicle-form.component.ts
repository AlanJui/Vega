import { MakeService } from './../../services/make.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  vehicle: any = {};
  vehicleMakeID = null;

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes()
      .subscribe(makes => {
        this.makes = makes
        // console.log(`makes`, this.makes);
      });
  }

  onMakeChange() {
    // console.log(`Vehicle: `, this.vehicle);
    // let selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    console.log(`VehicleID: `, this.vehicleMakeID);
    let selectedMake = this.makes.find(m => m.id == this.vehicleMakeID);
    this.models = selectedMake.models;
  }
}
