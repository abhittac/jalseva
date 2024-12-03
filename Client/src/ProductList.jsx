import React from 'react';
import p1 from "./asserts/p1.jpg"
import p2 from "./asserts/p2.jpg"
import p3 from "./asserts/p3.jpg"
import p4 from "./asserts/p4.webp"
const ProductList = () => {
  const products = [
    {
      title: 'Product 1',
      description: 'This is a great product.',
      price: '19.99',
      imageUrl: 'https://aquafreshropurifier.com/wp-content/uploads/2023/02/quafresh-aqua-mars.jpg',
    },
    {
      title: 'Product 2',
      description: 'This is another amazing product.',
      price: '29.99',
      imageUrl:'https://5.imimg.com/data5/YI/FX/UM/ANDROID-4156613/product-jpeg-500x500.jpg',
    },
    {
      title: 'Product 3',
      description: 'You will love this product.',
      price: '39.99',
      imageUrl: 'https://th.bing.com/th/id/OIP.GKI16jk3g8pHKefC7LX0xwHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Product 4',
      description: 'This product is top-rated.',
      price: '49.99',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/6/BV/UA/ZK/9168292/kent-super-plus-1000x1000.png',
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-108 object-cover object-center" src={product.imageUrl} alt={product.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
