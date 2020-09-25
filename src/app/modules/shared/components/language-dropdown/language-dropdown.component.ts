import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleBox } from 'src/app/utility/abstracts/toggle-box.abstract';
import { ELanguage } from 'src/app/utility/enums/user.enum';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent extends ToggleBox implements OnInit {

  @Input() default: string;
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor() {
    super();
  }

  get current() {
    return this.list.filter(lan => lan.code === this.default)[0].text
  }

  public list = [{
    code: 'zh-hant',
    text: '繁體中文'
  }, {
    code: 'zh-hans',
    text: '簡體中文'
  }, {
    code: 'en',
    text: 'English'
  }]

  ngOnInit(): void {

  }

  public select(code: string) {
    this.onSelect.emit(code);
    this.collapse();
  }

}
