import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CalculosComponent } from './formularios/calculos/calculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    CalculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
