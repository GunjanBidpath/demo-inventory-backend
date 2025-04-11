import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name!: string;

  @IsString()
  sku!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  stockQty!: number;

  @IsUUID()
  categoryId!: string;
}
