// src/users/dto/create-user.dto.ts
import { IsEmail, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address'
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'User password'
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'User full name',
    required: false
  })
  @IsOptional()
  @IsString()
  name?: string;
}
