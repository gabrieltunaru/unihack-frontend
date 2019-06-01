import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificate-modal-bootstrap',
  templateUrl: './certificate-modal-bootstrap.component.html',
  styleUrls: ['./certificate-modal-bootstrap.component.scss']
})
export class CertificateModalBootstrapComponent {
  @Input() public certificate;

  constructor(public activeModal: NgbActiveModal) {
  }
}
