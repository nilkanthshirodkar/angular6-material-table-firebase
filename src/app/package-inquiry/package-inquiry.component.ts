import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-package-inquiry',
  templateUrl: './package-inquiry.component.html',
  styleUrls: ['./package-inquiry.component.css']
})
export class PackageInquiryComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  bookingList : AngularFireList<any>;

  dataSource;

  displayedColumns = ['name', 'startDate', 'endDate', 'phone', 'heads'];

  constructor(private firebase: AngularFireDatabase, public datepipe: DatePipe) { }

  async ngOnInit() {
   
    var packageBookingList = []; 

    this.bookingList = await this.firebase.list('PACKAGE_INQUIRY');

    this.bookingList.query.orderByChild('startDate').limitToFirst(10);

    await this.bookingList.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        packageBookingList.push(y);
      })

        packageBookingList.forEach(item => {
          if(item.startDate){
            var dateString = item.startDate;
            dateString.split('/');
            var newDate = dateString[3]+dateString[4]+'/'+ dateString[0]+dateString[1]+'/'+ dateString[6]+dateString[7]+dateString[8]+dateString[9]
            item.startDate = new Date(newDate);
          }
          else{
            item.startDate = new Date(Date.parse(Date()));
          }

          if(item.endDate){
            var dateString = item.endDate;
            dateString.split('/');
            var newDate = dateString[3]+dateString[4]+'/'+ dateString[0]+dateString[1]+'/'+ dateString[6]+dateString[7]+dateString[8]+dateString[9]
            item.endDate = new Date(newDate);
          }
          else{
            item.endDate = new Date(Date.parse(Date()));
          }
        })

      this.dataSource = new MatTableDataSource(packageBookingList.reverse());
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    //   this.dataSource.sortingDataAccessor = (item, property) => {
    //   switch (property) {
    //     case 'startDate': return new Date(item.startDate);
    //     default: return item[property];
    //   }
    // };

    })
  
    
  }

}
