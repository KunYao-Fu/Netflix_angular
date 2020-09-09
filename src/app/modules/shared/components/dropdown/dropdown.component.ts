import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @ViewChild('tdropdown') tdropdown: ElementRef;
  ngOnInit(): void {
    // console.log(this.options)
  }

  public $user: UserService;
  public isExpand = false;

  private e = this.detectBlurEvent.bind(this)

  public expand() {
    this.isExpand = true;
    addEventListener('click', this.e)
  }

  private collapse() {
    this.isExpand = false;
    removeEventListener('click', this.e)
  }

  private detectBlurEvent(e) {
    if (!this.tdropdown.nativeElement.contains(e.target)) {
      this.collapse()
    }
  }





  // private e = this.detectBlueEvent.bind(this);

  public customize(custom) {
    this.default = custom;
    this.emitter.emit(custom);
    this.collapse();
  }

  // private detectBlueEvent(e) {
  //   if (!this.tdropdown.nativeElement.contains(e.target)) {
  //     this.collapse()
  //   }
  // }

  // public expand() {
  //   this.isExpand = true
  //   addEventListener('click', this.e);
  // }

  // private collapse() {
  //   removeEventListener('click', this.e);
  //   this.isExpand = false
  // }

}
