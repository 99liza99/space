import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    SelectComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
    exports: [
        SelectComponent,
        ImagesComponent
    ]
})
export class SharedModule {
}
