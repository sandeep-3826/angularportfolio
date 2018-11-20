import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
myData = {};
myForm:FormGroup;
  constructor(private http:HttpClient,private fb:FormBuilder) { 
    this.myForm=fb.group(
      {'name':["",Validators.required],
      'email':["",Validators.required],
      'phone':["",Validators.required],
      'address':["",Validators.required],
      'message':["",Validators.required]
    }
      
    )
   
  }
contact() {
  const url = "http://localhost/angular/api.php";
  this.http.post(url,this.myData)
  .subscribe(res=>{
    console.log(res);
  },err=>{
    console.log("Not Found");
  })
}
  ngOnInit() {
  }

}
