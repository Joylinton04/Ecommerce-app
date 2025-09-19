import React from "react";
import top from "../assets/Black and White T-Shirt Photo.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Listitems = () => {
  const products = [
    {
      id: 1,
      name: "Trousers",
      description: "Item with stock",
      price: 25.99,
      images: [top],
      category: "tops",
      sizes: ["M"],
      bestSeller: true,
      stock: 5,
    },
    {
      id: 1,
      name: "Trousers",
      description: "Item with stock",
      price: 25.99,
      images: [top],
      category: "tops",
      sizes: ["M"],
      bestSeller: true,
      stock: 5,
    },
  ];

  return (
    <div className="px-6 py-8 w-full">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="shadow-sm border hover:shadow-md transition-shadow"
          >
            <CardContent className="flex items-center justify-between p-4 gap-6 ssm:flex-col">
              {/* Images */}
              <div className="flex gap-2 shrink-0">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md border"
                />
                ))}
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold truncate">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm truncate">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {product.category}
                  </p>
                  <p>
                    <span className="font-medium">Sizes:</span>{" "}
                    {product.sizes.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">Stock:</span> {product.stock}
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold text-orange-600">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 shrink-0">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listitems;
