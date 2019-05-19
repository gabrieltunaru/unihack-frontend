import {Component, OnInit} from '@angular/core';
import {TableComponent} from '../table/table.component';
import {RestService} from '../../services/rest.service';
import {Certificate} from '../../models/certificate';
import {FormControl, FormGroup} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.scss'],
})
export class CertificatesPageComponent implements OnInit {
  public certificates;
  public certs: Certificate[];
  private selectedOption;

  constructor(private rest: RestService,
              private gb: GlobalService) {
  }


  statusForm = new FormGroup({
    status: new FormControl()
  });

  allStatusForm = new FormGroup({
    status: new FormControl()
  });


  specializationForm = new FormGroup({
    specialization: new FormControl()
  });

  ngOnInit() {
    console.log(localStorage.getItem('jwt'));
    this.isSuperUser();
  }

  public getCertificates(status) {
    console.log(localStorage.getItem('jwt'));
    return this.rest.getCertificatesByStatus(status)
      .subscribe(data => this.certs = JSON.parse(data['body']));
  }

  public send(certificate: Certificate) {
    const ids = [certificate.id];
    const status = this.statusForm.getRawValue().status;
    this.rest.modifyCertificatesStatus({ids, status}).subscribe(data => console.log(data));
  }

  public setAllAs() {
    const status = this.allStatusForm.getRawValue().status;
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

  public filterSpecializations() {
    this.certs = this.certs.filter(
      x => x.specialization === this.specializationForm.getRawValue().specialization
    );
  }

}
