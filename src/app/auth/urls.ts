import { environment } from '../../environments/environment';

export const BASE_URL = environment.url;
export const SECURED_URL = `${BASE_URL}/api`;
export const OPEN_URL = `${BASE_URL}/oapi`;
