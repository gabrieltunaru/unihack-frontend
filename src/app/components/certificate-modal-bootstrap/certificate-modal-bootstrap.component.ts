import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ExportAsConfig, ExportAsService} from 'ngx-export-as';

@Component({
  selector: 'app-certificate-modal-bootstrap',
  templateUrl: './certificate-modal-bootstrap.component.html',
  styleUrls: ['./certificate-modal-bootstrap.component.scss']
})
export class CertificateModalBootstrapComponent {
  @Input() public certificate;

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'certificate', // the id of html/table element
  };

  constructor(public activeModal: NgbActiveModal, private exportAsService: ExportAsService) {
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
  }
}
