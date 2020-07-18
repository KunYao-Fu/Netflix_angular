import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  @Input() options = [];
  @Input() default;
  @Output() emitter:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    // console.log(this.options)
  }

  public $user: UserService;
  public status = false;

  public customize(custom) {
    this.default = custom;
    this.emitter.emit(custom);
    this.status = false;
  }


}
