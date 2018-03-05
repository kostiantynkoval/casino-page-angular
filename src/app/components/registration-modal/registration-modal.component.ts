import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {toggleHeight} from "@app/animations";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
  animations: [ toggleHeight ]
})
export class RegistrationModalComponent implements OnInit {

  @Output('close') close: EventEmitter<any> = new EventEmitter;
  form: FormGroup;
  ips: string[];
  isMismatched: boolean;
  noIps: boolean;
  isIpEmpty: boolean;
  @Input('animState')animState: string;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.compose([ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      ip: ['', Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern(/^[a-zA-Z]\w+$/)]) ],
      password_confirm: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.ips = [];
  }

  addIp() {
    if (this.form.controls.ip.value !== '' && this.form.controls.ip.valid) {
      this.ips = this.ips.concat(this.form.controls.ip.value);
      this.form.patchValue({'ip': ''});
      this.form.controls['ip'].markAsUntouched();
      this.isIpEmpty = false;
    } else {
      this.isIpEmpty = true;
    }

  }

  removeIP(item) {
    const index = this.ips.indexOf(item);
    if (index !== -1) {
      this.ips.splice(index, 1);
    }
  }

  submitForm(){
    console.log(this.form);

    this.form.controls['name'].markAsTouched();
    this.form.controls['email'].markAsTouched();
    this.form.controls['ip'].markAsTouched();
    this.form.controls['password'].markAsTouched();
    this.form.controls['password_confirm'].markAsTouched();
    this.noIps = this.ips.length < 1;
    if (this.form.valid) {
      this.isMismatched = this.form.controls['password'].value !== this.form.controls['password_confirm'].value;
      if (!this.noIps && !this.isMismatched) {
        const data = {
          name: this.form.controls.name.value,
          email: this.form.controls.email.value,
          ips: this.ips,
          password: this.form.controls.password.value
        };
        console.log('FORM SUBMITTED AND SENT TO SERVER WITH VALUE: ', data);
        this.form.reset();
        this.ips = [];
        this.closeForm();
      } else {
        return;
      }
    }
  }

  closeForm() {
    this.close.emit();
  }



}
