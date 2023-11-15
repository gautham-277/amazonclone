import React, { useEffect, useState } from 'react'
import { useSearchParams ,Link} from 'react-router-dom'
import { callApi } from '../utils/CallApi';
import { ProductDetails } from './'
import {CURRENCY} from '../utils/Constants'
const SearchResults = () => {
  const [searchParams]=useSearchParams();
  const [products,setproduct]=useState(null);
  const getSearchresults = () => { 
    const searchterm=searchParams.get("searchterm");
    const category=searchParams.get("category");
    callApi('data/search.json')
    .then((SearchResults)=>{
      const categoryresults=SearchResults[category];
      if(searchterm){
        const results = categoryresults.filter((product) =>
        product.title.toLowerCase().includes(searchterm.toLowerCase()));
        setproduct(results);
      }else{
        setproduct(categoryresults)
      }
    });
   }
  useEffect(()=>{
   getSearchresults();
  },[searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
    {products &&
      products.map((product, key) => {
        return (
          <Link key={key} to={`/products/${product.id}`}>
       <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 ">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img
                    className="m-auto"
                    src={product.image_small}
                    alt="Search result product"
                  />
                </div>
                <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100 ">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
       </Link>  
        );
      })
      }
  </div>
);
  
}

export default SearchResults;