import React from "react";

function ProductCard(){
    return(
        <div style={{display:'inline-block'}}>
            <div class="card row-span-3 shadow-lg compact bg-base-100 px-3 py-1 w-80 m-0">
                <figure>
                    <img src="https://picsum.photos/id/1005/600/400" />
                </figure> 
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <h2 class="card-title">Karolann Collins</h2>
                        <p class="text-base-content text-opacity-40">Direct Interactions Liaison</p>
                        
                    </div>
                    
                </div>
                <button class="btn btn-block">Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;