import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
      $(document).ready(function(){
       $("button").click(function(){
        try{
       /**
        * 
        * @description taking the email and password values from frontend
        */
        var email1 = $('#email').val();
        var password1 = $('#password').val();

       /**
        * 
        * @description checking whether all the inputs are filled
        */
        if(email1.length == 0 && password1.length == 0){
          $("h5").text("please fill all the inputs");
          return false;
        }
        if(email1.length == 0){
          $("h5").text("please enter email");
          return false;
        }
        if(password1.length == 0){
          $("h5").text("please enter password");
          return false;
        }
       /**
        * 
        * @description email validation
        */
        var regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(regexEmail.test(email1) == false){
          $("h5").text("invalid email");
          return false;
        }

       /**
        * 
        * @description calling admin login api
        */
        $.ajax({
          type: 'POST',
          url: 'http://34.213.106.173/api/user/adminLogin',
          dataType: "json",
          data:{
             email: email1,
             password :password1
          },
          success: function (data) {
            /**
            * 
            * @description if the admin login is success then it will directly take to admin dashboard page
            */
           if(email1 == "admin@bridgelabz.com" && password1 == "123456789"){
            window.location.href = "/dashboard";
           }
          },
          error: function (request, status, error) {
            $("h5").text("incorrect email or password");
          }
        });
        return false;
      }catch(e){
        if(e instanceof SyntaxError || e instanceof ReferenceError || e instanceof TypeError || e instanceof RangeError){
        }
      }
      });
    
    });
  }




}
