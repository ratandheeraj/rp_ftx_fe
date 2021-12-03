import React from "react";

function ProductCard() {
  return (
    <div style={{ display: "inline-block" }}>
      <div className="card row-span-3 shadow-lg compact bg-base-100 px-3 py-1 w-80 m-0">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <h2 className="card-title">Karolann Collins</h2>
            <p className="text-base-content text-opacity-40">
              Direct Interactions Liaison
            </p>
          </div>
        </div>
        <button className="btn btn-block">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
