"use server"
import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ProductsPageProps = {
  products: Product[];
};

export const Forms: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {/* map on all products  */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return {
    props: {
      products: data.products as Product[],
    },
  };
};

export default Forms;
