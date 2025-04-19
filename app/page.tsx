import Forms from "@/component/form";
import Image from "next/image";

export default async function ProductsPage() {

  // const { data, error } = await fetchProperties();
  // console.log(data , error);


  return (
    <div className="p-4">

        <Forms products={[]} />
        
      <h1 className="text-2xl font-bold mb-4">Top 5 Products</h1>
      {/* <ul className="grid grid-cols-3 gap-4">
        {data?.products?.slice(0,10)?.map((product: any) => (
          <li key={product.id} className="border  p-4 rounded shadow">
            <Image
              src={product?.images[0]}
              alt="al"
              width={150}
              height={150}
              unoptimized  
              priority
              className="object-contain h-72 w-full my-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button >delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
