import {NgModule} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  exports: [
    MatPaginatorModule,
  ],
  imports: [
    MatPaginatorModule
  ]
})
export class MaterialModule {
}
