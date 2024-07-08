import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/core/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss'],
})
export class AppLoadingComponent implements OnInit {
  isLoading: Subject<boolean> = this.ls.isLoading;
  constructor(public ls:LoadingService) { }

  ngOnInit() {
  }

}
