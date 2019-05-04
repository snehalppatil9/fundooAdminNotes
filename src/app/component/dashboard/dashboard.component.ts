import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import "datatables.net";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataTable: any[];
  constructor() { }

  ngOnInit() {
    var rowindex;
    var id = localStorage.getItem("fundooId");

    
// ***************************8
/**
      * 
      * @description getting the userlist table
      */
     $.ajax({
      type: 'GET',
      url: 'http://34.213.106.173/api/user/getAdminUserList',
      dataType:"json",
      success: function (data) {
        var list=data.data.data;
        var userList=[];
        for(var i=0; i<list.length; i++){
          userList.push([i+1,list[i].firstName,list[i].lastName,list[i].email,list[i].service]);
        }
        var table=$('#userlistTable').DataTable( {
          "data":userList,
          "columnDefs": [{
            "targets": 5,
            "render": function ( data, type, row, meta ) {
              return '<button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" style="background-color:rgb(203, 241, 230)">More Details</button>';
            }
          }]
        });

       /**
        * 
        * @description getting the details of the particular user, when click on the details button
        */
        $('#userlistTable tbody').on('click', 'tr', function () {
          rowindex = table.row(this).index();
          $("#labelFirstName").text("First Name : "+data.data.data[rowindex].firstName);
          $("#labelLastName").text("Last Name : "+data.data.data[rowindex].lastName);
          $("#labelEmail").text("Email : "+data.data.data[rowindex].email);
          $("#labelPhoneNum").text("Phone Num : "+data.data.data[rowindex].phoneNumber);
          $("#labelService").text("Service : "+data.data.data[rowindex].service);
          $("#labelDate").text("Created Date : "+data.data.data[rowindex].createdDate);

        });
        
      },
      error:function(error){
      }
    }).fail( function (request, status, error) {
    });
// *******************************


    /**
        * 
        * @description logging out
        */
    $("#logout").click(function () {
      $.ajax({
        type: 'POST',
        url: 'http://34.213.106.173/api/user/logout',
        headers: {
          "Authorization": id
        },
        success: function (data) {
          /**
           * 
           * @description if the logout is success then it will directly take to admin login page
           */
          window.location.href = "/login";
          localStorage.removeItem("fundooId");
        },
        error: function (request, status, error) {
        }
      });
    });
  }
}
