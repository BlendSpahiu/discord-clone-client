import { UserModel } from './User.model';

export interface HttpResponseModel {
  statusCode: string;
  statusIsOk: boolean;
  statusMessage: string;
  statusPath: string;
}

export interface ResponseModel<T> extends HttpResponseModel {
  data: T;
}

export interface AuthResponseModel extends HttpResponseModel {
  token: string;
  user: UserModel;
}
