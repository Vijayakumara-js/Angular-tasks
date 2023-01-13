import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageURL: any;
  imageType: any;
  fileToUpload?: File;

  getImage(files: any) {
    console.log(files[0])
    if (files.length === 0) { 
      return;
    }
    this.fileToUpload = files[0];
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.imageType = mimeType
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }
  
  // url : any;

  // onSelectFile(event:any) {
  //   console.log(event.target.files[0].name);
  //   console.log(event.target.files);
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);    // read file as data url
  //     reader.onload = (event) => {     // called once readAsDataURL is completed
  //       this.url = event.target?.result;
  //     }
  //   }
  // }

}
