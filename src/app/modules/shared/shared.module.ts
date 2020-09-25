import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageDropdownComponent } from './components/language-dropdown/language-dropdown.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    LanguageDropdownComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    LanguageDropdownComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
