import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  serverList: any = ['USA', 'GERMANY', 'NIGERIA']
  form = new FormGroup({
    server: new FormControl('', Validators.required)
  });


  get f(){
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
