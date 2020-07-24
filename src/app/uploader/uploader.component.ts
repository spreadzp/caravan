import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/services/file.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  isHovering: boolean;
  descriptionFile = '';
  files: File[] = [];
  selectedImage: any = null;
  options: string[] = ['prices', 'shoes', 'uniform', 'defending'];
  pathToBucket = this.options[0];
  downloadURL = '';

  constructor(private fstorage: FileService ) {}
  ngOnInit() {
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.downloadURL = newUrl);
  }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    // console.log('files :>> ', files);
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onChange($event) {
    // console.log(' event.target[ ] :>> ', $event.target['files']);
    this.onDrop($event.target['files']);
    // console.log('pathToBucket :>> ', this.pathToBucket);
  }

  showPreview($event) {
    // console.log('event.target :>> ', event.target);
    this.selectedImage = event.target['files'][0];
  }
}
