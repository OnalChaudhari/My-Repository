import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrl: './add-plant.component.css',
})
export class AddPlantComponent {
  plantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.plantForm = this.formBuilder.group({
      plantName: ['', Validators.required],
      division: ['', Validators.required],
      plantClass: ['', Validators.required],
      order: ['', Validators.required],
      family: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.plantForm.valid) {
      // Make the HTTP POST request
      const formData = this.plantForm.value;
      const data = {
        "plantName" : "Rose111 ",
        "division" : "div",
        "plantClass":"class",
        "order":"orderr",
        "family":"fam"
    } 
    console.log(formData)
    console.log(data)
      this.addPlant(formData).subscribe((hero) => console.log(hero));
    }
  }

  onCancel() {
    // Handle cancel button click here
    // You can reset the form or perform any other action
    this.plantForm?.reset();
  }
  /** POST: add a new hero to the database */
  addPlant(hero: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8090/api/plants/addRootNode',
      hero
    );
  }
}
