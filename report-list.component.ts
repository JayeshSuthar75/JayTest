import { Component, OnInit } from '@angular/core';
import { IReport } from './report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Report List';

  // tslint:disable-next-line:variable-name
  private _reportFilter: string;
  public get reportFilter(): string {
    return this._reportFilter;
  }
  public set reportFilter(value: string) {
    this._reportFilter = value;
    this.filteredReports = this._reportFilter ?
                  this.performFilter(this.reportFilter)
                  : this.reports;
  }

  filteredReports: IReport[];

  reports: IReport[] = [
    {
      "reportId" : 100,
      "reportName" : "SFC Crossing",
      "reportSchedule" : "Daily",
      "reportSeverity" : 0
    },

    {
      "reportId" : 200,
      "reportName" : "High Touch",
      "reportSchedule" : "Monthly",
      "reportSeverity" : 1
    },

    {
      "reportId" : 210,
      "reportName" : "Low Touch",
      "reportSchedule" : "Daily",
      "reportSeverity" : 1
    },
    {
      "reportId" : 110,
      "reportName" : "ASX Crossing",
      "reportSchedule" : "Daily",
      "reportSeverity" : 0
    }
  ];

  constructor() {
    this.filteredReports = this.reports;
    this.reportFilter = 'cross';
  }

  ngOnInit() {
  }

  performFilter(filterBy: string): IReport[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.reports.filter((report) =>
          report.reportName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
