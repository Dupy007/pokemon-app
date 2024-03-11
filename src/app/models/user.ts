export interface ApiUser {
  id: string;
  email: string;
}
export interface User extends ApiUser{
  name: string|undefined;
  password: string;
}