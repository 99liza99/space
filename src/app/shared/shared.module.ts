import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { ImagesComponent } from './images/images.component';
import { RangeComponent } from './range/range.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SelectComponent,
    ImagesComponent,
    RangeComponent,
    NotFoundComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    LightgalleryModule
  ],
  exports: [
    SelectComponent,
    ImagesComponent,
    RangeComponent,
    NotFoundComponent,
    LoaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
