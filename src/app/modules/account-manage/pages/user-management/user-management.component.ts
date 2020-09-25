import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(
    public router: Router,
    private location: Location,
    public $user: UserService,
  ) { }
  
  ngOnInit(): void {
    
  }

  public Mock = ['中文', 'English', '日本語']

  ngOnDestroy() {
    sessionStorage.removeItem('edit-user');
  }

}
