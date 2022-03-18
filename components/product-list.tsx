interface ProductListProps {
    kind : "favs" | "sales" | "purchases"
}

import useSWR from "swr";
import { ProductWithCount } from "pages";
import Item from "./item";

export default function ProductList({kind}:ProductListProps) {

    interface Record {
      id:number;
      product: ProductWithCount;
    }
    
    interface ProductListResponse {
      [key:string]:Record[],
    }
    const {data} = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
    return data ? (<> {data[kind]?.map((record) => (
        <Item
          id={record.product.id}
          key={record.id}
          title={record.product.name}
          price={record.product.price}
          hearts={record.product._count.favs} 
        />
        ))} </> ) : null;
}