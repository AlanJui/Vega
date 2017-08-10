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
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes()
      .subscribe(makes => {
        this.makes = makes
        // console.log(`makes`, this.makes);
      });
  }

  onMakeChange() {
    console.log(`Vehicle: `, this.vehicle);
  }
}
