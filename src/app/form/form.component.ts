import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form = this.fb.group({
    name: [],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

}
