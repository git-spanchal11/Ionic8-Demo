export interface Project {
  name: string;
  client: string;
  duration: string;
  domain: string;
  techanology?: string[];
  platform: string[];
  desc: string;
  link: string;
  images: string[];
}

export interface Techanologies {
  icon?: string;
  skill: string;
  category_color: string;
}

export class responseModel {
  public MessageBean: any;
  public Response: any;

  constructor(
    MessageBean?: any,
    Response?: any
  ) {
    this.MessageBean = MessageBean = {
      errorCode: 0,
      status: true,
      successMessage: "SUCCESS",
      successCode: 200,
      errorMessage: ""
    };
    this.Response = Response;
  }

}

export class alertOptionsModel {
  public header: string;
  public subHeader: string;
  public message: string;
  public continueBtn: string;
  public cancelBtn: string;
  public backdropDismiss: boolean = false;

  constructor(
    header: string = '',
    subHeader: string = '',
    message: string = '',
    continueBtn: string = '',
    cancelBtn: string = '',
    backdropDismiss: boolean = false
  ) {
    this.header = header;
    this.subHeader = subHeader;
    this.message = message;
    this.continueBtn = continueBtn;
    this.cancelBtn = cancelBtn;
    this.backdropDismiss = false;
  }
}