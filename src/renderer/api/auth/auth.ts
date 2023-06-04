import { AxiosResponse } from 'axios';
import { RegisterModel } from '../../interfaces/interfaces/Register.props';
import { gatewayApi } from '../../config/global';
import {
  AuthResponseModel,
  HttpResponseModel,
} from '../../interfaces/models/Response.model';
import { LoginModel } from '../../interfaces/interfaces/Login.props';
import { errorResponse } from '../../utils/responses/errorResponse';

export const signUp = async (
  payload: RegisterModel
): Promise<AuthResponseModel | HttpResponseModel> => {
  try {
    const { data }: AxiosResponse<AuthResponseModel> = await gatewayApi.post(
      'register',
      { ...payload }
    );

    return data;
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

export const login = async (
  payload: LoginModel
): Promise<AuthResponseModel | HttpResponseModel> => {
  try {
    const { data }: AxiosResponse<AuthResponseModel> = await gatewayApi.post(
      '/login',
      { ...payload }
    );

    return data;
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

export const getMe = async (
  id: number
): Promise<AuthResponseModel | HttpResponseModel> => {
  try {
    const { data }: AxiosResponse<AuthResponseModel> = await gatewayApi.get(
      `users/${id}`
    );

    return data;
  } catch (error: unknown) {
    return errorResponse(error);
  }
};
