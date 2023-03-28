export class Product {
  constructor(
    public sku: String,
    public name: String,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {}
}
