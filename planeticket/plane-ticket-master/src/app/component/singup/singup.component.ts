import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SingupService } from 'src/app/service/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  unamePattern = '^[A-Za-z0-9_-]{8,15}$';

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('',[Validators.required, Validators.pattern(this.unamePattern)]),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    tel: new FormControl('',[Validators.required, Validators.min(10)]),
    file: new FormControl('', [Validators. required]),
    img: new FormControl('', [Validators. required]),
    address: new FormGroup({ 
      Hnum:new FormControl(''),
      province: new FormControl(''),
      parish: new FormControl(''),
      district: new FormControl(''),
      zip: new FormControl('')
    })
  });
  previewLoaded: Boolean = false;
  get email(){ return this.registerForm.get('email'); }
  get password(){ return this.registerForm.get('password'); }
  constructor(private registerService: SingupService) { }
  submitted = false;
  image: File;
  ngOnInit(): void {
  }
  saveRegister() {
    const data = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      password: this.registerForm.value.password,
      username: this.registerForm.value.username,
      sex: this.registerForm.value.sex,
      check: this.registerForm.value.check,
      email: this.registerForm.value.email,
      tel: this.registerForm.value.tel,
      img: this.registerForm.value.img,
      file: this.registerForm.value.file,
      Hnum: this.registerForm.value.address.Hnum,
      district: this.registerForm.value.address.district,
      province: this.registerForm.value.address.province,
      parish: this.registerForm.value.address.parish,
      zip: this.registerForm.value.address.zip,
    };
    console.log(data);
    this.registerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          alert("Save Success!");
          this.registerForm.reset();
        },
        error => {
          console.log(error);
        });
  }

  onChangeImg(e: any){
    if(e.target.files.length > 0){
      this.image = e.target.files[0];
      // tslint:disable-next-line:prefer-const
      var pattern = /image-*/;
      const reader = new FileReader();
      if(!this.image.type.match(pattern)){
        alert('invalid format');
        this.registerForm.reset();
      }else{
        reader.readAsDataURL(this.image);
        reader.onload = () => {
          this.previewLoaded = true;
          this.registerForm.patchValue({
            img: reader.result
          });
        }
      }
    }
  }

  resetForm(){
    this.registerForm.reset();
    this.previewLoaded = false;
  }
}
