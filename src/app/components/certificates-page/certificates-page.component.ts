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
  }


  statusForm = new FormGroup({
    status: new FormControl()
  });

  allStatusForm = new FormGroup({
    status: new FormControl()
  });


  ngOnInit() {
    console.log(sessionStorage.getItem('jwt'));
  }

  public getCertificates(status) {
    console.log(sessionStorage.getItem('jwt'));
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

}
