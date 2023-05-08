export interface AuthParams {
  username: string;
  password: string;
}

// 登陆 注册 返回
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
