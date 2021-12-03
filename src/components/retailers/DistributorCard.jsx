import React from "react";
import styles from '../../styles/retailerHome.module.css';

function DistributorCard(){
    return(
        <div style={{display:'inline-block'}} >
            <div class="card text-center shadow-md mx-3 my-2 w-80">
                <figure class="px-2 pt-2">
                    <div className={styles["closeButton"]}>
                        <button class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-error">   
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                        </svg>
                        </button>
                    </div>
                    <img src="https://picsum.photos/id/1005/400/250" class="mask mask-squircle"/>
                </figure> 
                
                <div class="card-body pt-2">
                    <h2 class="card-title">Placeholder Name</h2> 
                    <p>Placeholder details</p> 
                    <div class="justify-center card-actions">
                    <button class="btn btn-outline btn-accent">View Products</button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default DistributorCard;