export interface User {
  _id?: string;
  id?: string;
  username: string;
  email: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignUpRequest extends LoginRequest {
  email: string;
}

interface CommonResponse {
  message: string;
}

export interface LoginResponse extends CommonResponse {
  data: {
    user: User;
    token: string;
  };
}

export interface SignUpResponse extends CommonResponse {
  data: string;
}
