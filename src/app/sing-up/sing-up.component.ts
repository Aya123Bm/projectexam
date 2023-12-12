import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUPComponent implements OnInit {
  hide:boolean=true;
  hideConfirmePassword:boolean=true;
  singupForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    phoneNumber:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmpassword:new FormControl('',[Validators.required]),

  })
  constructor(){}
  ngOnInit(): void {
    
  }

}



