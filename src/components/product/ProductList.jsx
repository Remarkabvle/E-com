import React from "react";
import "./Product.scss";

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    originalPrice: null,
    discount: null,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/krkyt8w0/kids-t-shirt/q/4/7/9-10-years-ght0031-mode-by-red-tape-original-imag5cyy6vatxsuq.jpeg?q=90&crop=false",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    rating: 3.5,
    originalPrice: 260,
    discount: "20%",
    imageUrl:
      "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67035990_TG.jpg?imwidth=2048&imdensity=1&ts=1708418028090",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    originalPrice: null,
    discount: null,
    imageUrl:
      "https://images.onlyandsons.com/22025979/4210217/003/onlysons-checkeredshirt-green.jpg?v=c14e170b9041f51aee222a286f3e0a9b&format=webp&width=1280&quality=90&key=25-0-3",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    rating: 4.5,
    originalPrice: 160,
    discount: "30%",
    imageUrl:
      "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67050648_99.jpg?imwidth=2048&imdensity=1&ts=1698939178764",
  },
];

const ProductList = () => {
  return (
    <div className="arrival-section" style={{marginTop: '100px'}}>
      <div className="container">
        <h2 className="arrival-section__title">NEW ARRIVALS</h2>
        <div className="arrival-section__grid">
          {products.map((product) => (
            <div key={product.id} className="arrival-item">
              <div className="arrival-item__image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="arrival-item__image"
                />
              </div>
              <div className="arrival-item__details">
                <h3 className="arrival-item__name">{product.name}</h3>
                <div className="arrival-item__rating-container">
                  <div className="arrival-item__stars">
                    {"⭐".repeat(Math.floor(product.rating))}
                  </div>
                  <span className="arrival-item__rating">
                    {product.rating}/5
                  </span>
                </div>
                <div className="arrival-item__price-container">
                  <span className="arrival-item__current-price">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="arrival-item__old-price">
                        ${product.originalPrice}
                      </span>
                      <span className="arrival-item__discount">
                        {product.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="arrival-section__view-all-button">View All</button>
      </div>
    </div>
  );
};

export default ProductList;
