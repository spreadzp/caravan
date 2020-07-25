import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/services/file.service';
import { CypherService } from '../shared/services/cypher.service';

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
  fileContent: string | ArrayBuffer = '';
  encryptedContent: string | ArrayBuffer = '';
  decryptedContent = '';

  constructor(private fstorage: FileService, private cypherService: CypherService ) {}
  ngOnInit() {
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.downloadURL = newUrl);
    this.cypherService.encryptedMessage.subscribe(cypher => {
      this.encryptedContent = cypher;
      this.cypherService.decrypted(this.encryptedContent);
      this.createEncFile(this.encryptedContent);
    } );
    this.cypherService.decryptedMessage.subscribe(message => this.decryptedContent = message );
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  createEncFile(encryptedContent: string | ArrayBuffer) {
    console.log('encryptedContent :>> ', encryptedContent);
    if((encryptedContent).toString().length > 50) {
      const list = new DataTransfer();
      const file = new File([encryptedContent], "patient.txt");
      list.items.add(file);

      const myFileList = list.files;
      this.onDrop(myFileList);
    }

  }

  async onChange($event) {
    await this.readText($event.target['files'], true);
    if (this.encryptedContent !== '') {

    }
  }

  public readText(fileList: FileList, isEncrypt: boolean): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;
    fileReader.onloadend = (x) => {
      self.fileContent = fileReader.result;
      if (isEncrypt) {
        this.cypherService.encrypted(self.fileContent);
      } else {
        this.cypherService.decrypted(self.fileContent);
      }
    };
    fileReader.readAsText(file);
  }

  showPreview($event) {
    this.selectedImage = event.target['files'][0];
  }
}
