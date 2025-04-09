// app/page.tsx
import Image from 'next/image';
import { fetchProperties } from '@/actions/property.action';
import React from 'react';

export default async function ProductsPage() {

// const res = await axios.get('https://dummyjson.com/products');
// const data = res.data;
// const posts = data.products;
//   // const products = allProducts.slice(0, 10);

const { data } = await fetchProperties();
 
 
  return (
    <div className="p-4">
 
      {/* cards  */}
      <h1 className="text-2xl font-bold mb-4">Top 5 Products</h1>


      <ul className="grid grid-cols-3 gap-4">
        {data?.products?.slice(0,8).map((product: any) => (
          <li key={product.id} className="border  p-4 rounded shadow">
            <Image
              src={product.image}
              alt='al'
              width={150}
              height={150}
              className="object-contain h-72 w-full my-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
