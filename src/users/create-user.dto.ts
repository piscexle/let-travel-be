import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com' })
  readonly email: string;

  @ApiProperty({ example: 'SecurePassword123' })
  readonly password: string;

  @ApiProperty({ example: 'John' })
  readonly firstName: string;

  @ApiProperty({ example: 'Doe' })
  readonly lastName: string;

  @ApiProperty({ example: '1234567890' })
  readonly phoneNumber: string; // Thêm trường phoneNumber
}