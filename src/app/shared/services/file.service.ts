import { Injectable, Inject } from '@angular/core';
import {
  AngularFireList,
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/database';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  imageDetailList: AngularFireList<any>;
  fileList: any[];
  dataSet: Data = {
    id: '',
    url: '',
  };
  msg = 'error';
  task: AngularFireUploadTask;
  urlOfFile = '';
  private urlFileSource$ = new BehaviorSubject(this.urlOfFile);
  urlUploadedFile = this.urlFileSource$.asObservable();
  constructor(
    // @Inject(AngularFireDatabase) private firebase: AngularFireDatabase,

    // private db: AngularFirestore,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) { }

  getStorage() {
    return this.storage;
  }
  getImageDetailList() {
    // this.imageDetailList = this.firebase.list('test');
  }
  insertImageDetails(idImg, urlIm) {
    this.dataSet = {
      id: idImg,
      url: urlIm,
    };
    this.imageDetailList.push(this.dataSet);
  }

  getFilesFromBucket(bucketName: string) {
    // this.db.firestore.collection('test').get().then(
    //   t => console.log('t :>> ', t)
    // )
    const path = bucketName;
    const t = this.storage
      .ref('test/')
      .listAll()
      .subscribe((r) => console.log('r :>> ', r));
  }
  changeUrl(newUrl: string) {
    this.urlOfFile = newUrl;
    this.urlFileSource$.next(this.urlOfFile);
  }
  getImage(value) {
    this.imageDetailList.snapshotChanges().subscribe((list) => {
      this.fileList = list.map((item) => {
        return item.payload.val();
      });
      this.fileList.forEach((element) => {
        if (element.id === value) { this.msg = element.url; }
      });
      if (this.msg === 'error') { alert('No record found'); }
      else {
        // window.open(this.msg);
        this.msg = 'error';
      }
    });
  }
}
export interface Data {
  id: string;
  url: string;
}
