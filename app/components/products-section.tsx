import { ProductCard } from "./product-card";

interface Product {
  name: string;
  link: string;
}

interface ProductsSectionProps {
  products: Product[];
}

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-2 mt-2">
      {products.map((product) => (
        <ProductCard key={product.link} name={product.name} link={product.link} />
      ))}
    </div>
  );
}