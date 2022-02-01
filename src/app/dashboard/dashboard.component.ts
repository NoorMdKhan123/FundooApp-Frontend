import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import { UserService } from '../services/userservice/user.service';
import { refresh } from "src/app/utility/util";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardForm!: FormGroup;
  submitted = true;
  isMenuOpen=true;
  contentMargin=200;
  constructor(private formBuilder: FormBuilder,private user: UserService) {
  }

  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=50;
    }
    else{
      this.contentMargin=400;
    }
  }
  refreshButton() {
    refresh();
  }


}
//   mobileQuery: MediaQueryList;

//   fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

//   fillerContent = Array.from(
//     {length: 2},
//     () =>
//       `hello World!`,
//   );

//   private _mobileQueryListener: () => void;

//   constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

   


//   ngOnDestroy(): void {
//     this.mobileQuery.removeListener(this._mobileQueryListener);
//   }

//   shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
// }
 

 

