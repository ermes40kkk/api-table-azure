import { Component, QueryList, ViewChildren } from '@angular/core';
import { Country, dataset ,Bills} from './data';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './sortable-header.directive';
import {APIServiceService } from './api-service.service';
import { MatTableDataSource } from '@angular/material/table';
export interface Data {
  userId: string;
  Id: number;
  title: number;
  completed: boolean;
}

const ELEMENT_DATA: Data[] = [
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter!: string;
  data: Array<Country> = dataset;
  countries: Array<Country> = dataset;
  dataSource : MatTableDataSource<Bills> = new MatTableDataSource<Bills>;
  dataSourceCompare : MatTableDataSource<Bills> = new MatTableDataSource<Bills>;
  displayedColumns: string[] = ['Name', 'Number', 'contentType', 'Ammount'];
  

  constructor(private service : APIServiceService){
     this.service.getData().then(data => {
      this.dataSource = new MatTableDataSource<Bills>(data);
      this.dataSourceCompare = new MatTableDataSource<Bills>(data);;
    }); 
    this.filter = '';
  }
  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective> | undefined;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    if (this.headers) {
      this.headers.forEach((header) => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });
    }

    // sorting countries
    if (direction === '' || column === '') {
      this.dataSource = this.dataSourceCompare;
    } else {
      const dataArray = [...this.dataSourceCompare.data];
      this.dataSource = new MatTableDataSource<Bills>(dataArray.sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      }));
    }
  }

  applyFilters(filterValue: KeyboardEvent ) {
    let a  = filterValue.target as HTMLInputElement;
    this.dataSource.filter = a.value.trim().toLowerCase();

  }
}
