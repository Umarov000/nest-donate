export class CreateProductDto {
  name: string;
  description: string;
  in_stock: number;
  is_available: boolean;
  price: number;
  creatorId: number;
  categoryId: number;
}
