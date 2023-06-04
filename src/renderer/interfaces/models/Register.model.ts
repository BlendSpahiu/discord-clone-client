export interface RegisterModel {
  id: number;
  username: string;
  tag: number;
  email: string;
  password: string;
  role: string;
  file_id?: number;
  created_at?: Date;
  updated_at?: Date;
}
