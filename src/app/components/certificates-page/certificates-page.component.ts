import {Component, OnInit} from '@angular/core';
import {TableComponent} from '../table/table.component';
import {RestService} from '../../services/rest.service';
import {Certificate} from '../../models/certificate';
import {FormControl, FormGroup} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {GlobalService} from '../../services/global.service';
import {MatDialog} from '@angular/material';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CertificateModalBootstrapComponent} from '../certificate-modal-bootstrap/certificate-modal-bootstrap.component';
import {PrintService} from '../../services/print.service';

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.scss'],
})
export class CertificatesPageComponent implements OnInit {
  public certificates;
  public certs: Certificate[];
  private certsCopy: Certificate[];
  private selectedOption;
  public viewing = false;

  constructor(private rest: RestService,
              private gb: GlobalService,
              public dialog: MatDialog,
              public modalService: NgbModal,
              private printService: PrintService) {
    this.getCertificates('any');
    this.certsCopy = this.certs;
    console.log(this.certsCopy);
  }


  statusForm = new FormGroup({
    status: new FormControl()
  });


  statusForm2 = new FormGroup({
    status: new FormControl()
  });

  allStatusForm = new FormGroup({
    status: new FormControl()
  });


  specializationForm = new FormGroup({
    specialization: new FormControl()
  });

  ngOnInit() {
  }

  public getCertificates(status) {
    console.log(localStorage.getItem('jwt'));
    return this.rest.getCertificatesByStatus(status)
      .subscribe(data => {
        this.certs = JSON.parse(data['body']);
        this.certsCopy = this.certs;
      });
  }

  public send(certificate: Certificate) {
    const ids = [certificate.id];
    const status = this.statusForm.getRawValue().status;
    const wut = {ids, status};
    this.rest.modifyCertificatesStatus(wut).subscribe(data => {
      console.log(data);
      console.log(wut);
    });
  }

  public setAllAs(status: string) {
    this.certs.forEach(x => x.status = status);
    const ids = this.certs.map(x => x.id);
    const wut = {ids, status};
    this.rest.modifyCertificatesStatus(wut).subscribe(data => console.log(data));
    console.log(ids);
    console.log(this.certs);
  }

  public isSuperUser() {
    return this.gb.isSuperUser();
  }

  public filterSpecializations(spec: string) {
    if (spec === 'ALL') {
      this.certs = this.certsCopy;
    } else {
      this.certs = this.certsCopy.filter(
        x => x.specialization === spec
      );
    }
  }


  public filterStatus(status: string) {
    if (status === 'any') {
      this.certs = this.certsCopy;
    } else
      {
        this.certs = this.certsCopy.filter(
          x => x.status.toLowerCase() === status.toLowerCase()
        );
      }
  }


  open(cert: Certificate) {
    this.printService.printing = true;
    const modalRef =
      this.modalService.open(CertificateModalBootstrapComponent);
    modalRef.componentInstance.certificate = cert;
    modalRef.result.then(() => this.printService.printing = false);
  }

}
