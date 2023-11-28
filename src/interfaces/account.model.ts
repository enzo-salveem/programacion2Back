export interface UserInterface {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  groups: string;
  user_permissions: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  last_login: Date;
  date_joined: Date
}
