import { Product } from "../../entity/product/index";

export class ProductService {
  static incriasePrice(products: Product[], percentage: number): Product[] {
    products.forEach((product) => {
      product.changePrice((product.price * percentage) / 100 + product.price);
    });

    return products;
  }
}
