import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {ImagesComponent} from './images/images.component';
import {RangeComponent} from './range/range.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FooterComponent} from './footer/footer.component';
import {MatSliderModule} from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PhotoGalleryModule} from '@twogate/ngx-photo-gallery'

@NgModule({
  declarations: [
    SelectComponent,
    ImagesComponent,
    RangeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    PhotoGalleryModule,
  ],
  exports: [
    SelectComponent,
    ImagesComponent,
    RangeComponent,
    NotFoundComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
