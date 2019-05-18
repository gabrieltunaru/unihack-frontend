import {Component, OnInit} from '@angular/core';
import {TableComponent} from '../table/table.component';
import {RestService} from '../../services/rest.service';
import {Certificate} from '../../models/certificate';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.scss'],
})
export class CertificatesPageComponent implements OnInit {
  public certificates;
  public certs: Certificate[];
  private selectedOption;

  constructor(private rest: RestService) {
    this.certificates = this.getCertificates();
  }

  statusForm = new FormGroup({
    status: new FormControl()
  });

  ngOnInit() {
    console.log(sessionStorage.getItem('jwt'));
  }

  public getCertificates() {
    return this.rest.getAllCertificates().subscribe(data => this.certificates = data);
  }

  public print() {
    console.log(this.certs);
    this.certs = JSON.parse(this.certificates.body);
  }

  public send(certificate: Certificate, status: string) {
  console.log(this.statusForm.getRawValue().status);
  }

}
