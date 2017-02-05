import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  constructor(private changeDetectionRef: ChangeDetectorRef) {}
  private rlaSafe: boolean = false;

  ngAfterViewInit() {
    this.rlaSafe = true;
    //this.changeDetectionRef.detectChanges();
  }
}
