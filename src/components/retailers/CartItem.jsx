import React from "react";
// import {AiOutlinePlus} from 'react-icons/fa';
import styles from '../../styles/cartItem.module.css';

function CartItem(){
    return(
        <div>
            <div class="card lg:card-side bordered shadow-md py-1">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250" />
                </figure> 
                <div class="card-body">
                    <h2 class="card-title">Product Name</h2> 
                    <p>Price:<div class="badge badge-info badge-md">Rs. 5000</div></p> 
                    <p className="mt-2">No of Items:<div class="badge badge-warning badge-md">2</div>
                    <button class="btn btn-outline btn-square btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-plus" viewBox="4 4 8 8">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                    </button> 
                    </p>
                    <div class="card-actions">
                    {/* <button class="btn btn-primary">Direct Buy</button>  */}
                    {/* <button class="btn btn-ghost">Delete</button> */}
                   <div className={styles['closeButton']}>
                    <button class="btn btn-square btn-xs md:btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">   
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                            </svg>
                        </button> 
                   </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default CartItem;