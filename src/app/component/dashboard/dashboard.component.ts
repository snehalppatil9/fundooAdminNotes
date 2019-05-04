import { Component, OnInit } from '@angular/core';
// import jQuery 
import * as $ from 'jquery';
// importing datatables
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
    var id = localStorage.getItem("Id");
    /**
     * @description getting the userlist table
     */
    $.ajax({
      type: 'GET',
      url: 'http://34.213.106.173/api/user/getAdminUserList',
      dataType: "json",
      success: function (data) {
        var list = data.data.data;
        var userList = [];
        for (var i = 0; i < list.length; i++) {
          userList.push([i + 1, list[i].firstName, list[i].email, list[i].service]);
        }
        var table = $('#userlist').DataTable({
          "data": userList
        });

        /**
         * 
         * @description getting the details of the particular user, when click on the details button
         */
        $('#userlist tbody').on('click', 'tr', function () {
          rowindex = table.row(this).index();
          $("#FirstName").text("First Name : " + data.data.data[rowindex].firstName);
          $("#Email").text("Email : " + data.data.data[rowindex].email);
          $("#Service").text("Service : " + data.data.data[rowindex].service);
        });

      },
      error: function (error) {
      }
    }).fail(function (request, status, error) {
    });
    /**
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
           * @description if the logout is success then it will directly take to admin login page
           */
          window.location.href = "/login";
          localStorage.removeItem("Id");
        },
        error: function (request, status, error) {
          $("h5").text("something wrong while logout");
        }
      });
    });
      
}
}
