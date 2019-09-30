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
  private date = new Date();
  exportAsConfig: ExportAsConfig = {
    type: 'pdf',
    elementId: 'certificate',
  };

  constructor(public activeModal: NgbActiveModal, private exportAsService: ExportAsService) {
  }

  export() {
    this.exportAsService.save(this.exportAsConfig, 'adeverinta').subscribe(() => {
    });
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
  }
}
