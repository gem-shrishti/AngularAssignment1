import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { userDetails } from '../userDetails';
import { SaveDetailsService } from 'src/app/save-details.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  base64: string = '';
  fileSelected?: Blob;
  imageUrl?: string;
  createuserForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.maxLength(30),
      Validators.minLength(2),
    ]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^(.+)@(.+)$'),
    ]),
    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern('(0/91)?[6-9][0-9]{9}'),
      Validators.minLength(10),
    ]),
    technology1: new FormControl(false),
    technology2: new FormControl(false),
    technology3: new FormControl(false),
    technology4: new FormControl(false),
    technology5: new FormControl(false),
    category: new FormControl('', [Validators.required]),
    photo: new FormControl('', [
      Validators.pattern('[^\\s]+(.*?)\\.(jpg|jpeg|png|JPG|JPEG|PNG)$'),
    ]),
  });

  constructor(
    private saveDetailsService: SaveDetailsService,
    private sant: DomSanitizer
  ) {
    this.users = {
      name: '',
      gender: '',
      email: '',
      mobile: 1,
      category: '',
      technology: [],
      photo: '',
    };
  }
  users: userDetails;

  ngOnInit(): void {}
  Submit() {
    this.users.technology = [];
    if (this.createuserForm.value.technology1) {
      this.users.technology.push('c');
    }
    if (this.createuserForm.value.technology2) {
      this.users.technology.push('c++');
    }
    if (this.createuserForm.value.technology3) {
      this.users.technology.push('java');
    }
    if (this.createuserForm.value.technology4) {
      this.users.technology.push('javascript');
    }
    if (this.createuserForm.value.technology5) {
      this.users.technology.push('python');
    }
    // if(!($('input[name=checkbox1]:checked').length > 0)){
    //  document.getElementById("errMessage").innerHTML= 'technology should be selected';

    // }

    console.log(this.createuserForm.value);
    this.users.name = this.createuserForm.value.name;
    this.users.gender = this.createuserForm.value.gender;
    this.users.email = this.createuserForm.value.email;
    this.users.mobile = this.createuserForm.value.mobile;
    this.users.category = this.createuserForm.value.category;
    this.users.photo = this.base64;
    console.log(this.users);
  }
  displayStyle = 'none';
  onSelectNewFile(event:any): void {
    this.fileSelected = event.target.files[0];
    this.imageUrl = this.sant.bypassSecurityTrustUrl(
    window.URL.createObjectURL(this.fileSelected)) as string;
    this.base64 = '';
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
    this.base64 = reader.result as string;
    };
  }
  openModal() {
    this.displayStyle = 'block';
  }
  closeModal() {
    this.displayStyle = 'none';
    this.users;
  }
  submitForm() {
    this.displayStyle = 'none';
    this.saveDetailsService.addData(this.users);
    alert('Details has been shared with view component');
  }
}
