import {Component, OnInit} from '@angular/core';
import {CoursChangeService} from '../shared/services/cours-change.service';
import {CoursChange} from '../shared/model/cours-change';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cours-change',
  templateUrl: './cours-change.page.html',
  styleUrls: ['./cours-change.page.scss'],
})
export class CoursChangePage implements OnInit {
  coursChanges: any[];
  currentDate = new Date();
  constructor(private coursChangeService: CoursChangeService) {
  }
  ngOnInit(): void {
    this.getAllCoursChange();

  }

  getAllCoursChange(): void {

    this.coursChangeService.getAll().subscribe(data => {
      this.coursChanges = data;
      console.log(data);
    }, ex => {
      console.log(ex);
    });
  }
}

