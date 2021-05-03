import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/time.service';

@Component({
  selector: 'app-time-clock',
  templateUrl: './time-clock.component.html',
  styleUrls: ['./time-clock.component.css']
})
export class TimeClockComponent implements OnInit {
  militaryTime = '';
  hourselect = '';
  minselect = '';
  ampmselect = '';

  constructor(private timeservice: TimeService) { }

  ngOnInit(): void {
  }

  convertTime(): void {
    if (this.hourselect == '' || this.minselect == '' || this.ampmselect == '') {
      this.militaryTime = 'please fill out all fields'
    } else {
    this.militaryTime = this.timeservice.conversionHour(this.hourselect, this.ampmselect) + ' and ' + 
    this.timeservice.conversionMinute(this.minselect) + ' hundred hours';
    }
  }

}
