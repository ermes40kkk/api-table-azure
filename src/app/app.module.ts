import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryPipe } from './country.pipe';
import { SortableHeaderDirective } from './sortable-header.directive';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, CountryPipe, SortableHeaderDirective],
  imports: [BrowserModule, FormsModule,HttpClientModule,MatTableModule,MatInputModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
