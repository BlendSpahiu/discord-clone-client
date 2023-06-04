import { AxiosError } from 'axios';
import { HttpResponseModel } from '../../interfaces/models/Response.model';

export const errorResponse = (error: unknown) => {
  return {
    statusCode: ((error as AxiosError).response?.data as HttpResponseModel)
      .statusCode,
    statusMessage: ((error as AxiosError).response?.data as HttpResponseModel)
      .statusMessage,
    statusPath: ((error as AxiosError).response?.data as HttpResponseModel)
      .statusPath,
    statusIsOk: ((error as AxiosError).response?.data as HttpResponseModel)
      .statusIsOk,
  };
};
