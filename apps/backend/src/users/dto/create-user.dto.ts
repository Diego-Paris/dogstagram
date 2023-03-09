import { Role } from '@prisma/client';

export class CreateUserDto {
  email: string;
  name?: string | null;
  password: string;
}
