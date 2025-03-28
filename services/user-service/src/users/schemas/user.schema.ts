// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ description: 'User password' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: 'John Doe', required: false })
  @Prop()
  name: string;

  @ApiProperty({ example: 'https://example.com/avatar.jpg', required: false })
  @Prop()
  avatar: string;

  @ApiProperty({ example: false, default: false })
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty({ example: ['user'], type: [String], default: ['user'] })
  @Prop({ type: [{ type: String }], default: ['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);