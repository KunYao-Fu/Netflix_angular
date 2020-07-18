import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/utility/interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() user:IUser;
  @Input() isEdit=false;
  @Output() emit:EventEmitter<any>=new EventEmitter();

  ngOnInit(): void {
  }

  public reply(){
    this.emit.emit(this.user.id);
  }
}
