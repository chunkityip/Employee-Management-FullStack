import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isLogin: Observable<boolean>;  // Should match your auth service property name
  key: any;
  title = 'Employee-registration-client';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLogin = this.authService.isLoggedIn;
  }
}
    
  


