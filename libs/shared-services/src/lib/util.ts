import { HttpParams } from '@angular/common/http';

export const getHttpParams = (params: object) => {
  let httpParams = new HttpParams();
  Object.keys(params).forEach(key => httpParams = httpParams.append(key, params[key]));
  return httpParams.toString();
}
