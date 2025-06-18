export class CreateAdminDto {
  full_name: string;
  email: string;
  phone: string;
  role: string;
  password_hash: string;
  is_active: boolean;
}
