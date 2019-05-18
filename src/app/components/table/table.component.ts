import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../models/certificate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() certificates;
  constructor() { }

  ngOnInit() {
    console.log(this.certificates.body);
  }

}
