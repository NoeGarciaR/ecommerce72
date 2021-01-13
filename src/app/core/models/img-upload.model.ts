export class ImgUploadModel {
  public file: File;
  public name: string;
  public url: string;
  public isUpload: boolean;
  public progress: number;

  constructor( file: File ) {
    this.file = file;
    this.name = this.file.name;

    this.isUpload = false;
    this.progress = 0;
  }

}
