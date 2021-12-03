import React from "react";
import DistributorCard from "./DistributorCard";

function RetailerHome(){
    return(
        <div className="flex">
            <div className="w-9/12 ml-5 pl-5">
                <DistributorCard/>
                <DistributorCard/><DistributorCard/>
                <DistributorCard/>
                <DistributorCard/><DistributorCard/>
            </div>
            <div className="w-2/12 pl-5">
            <div class="dropdown dropdown-start pt-5">
                <div tabindex="0" class="m-1 btn">Add Retailer</div> 
                <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a>Item 1</a>
                    </li> 
                    <li>
                    <a>Item 2</a>
                    </li> 
                    <li>
                    <a>Item 3</a>
                    </li>
                </ul>
                </div>

            </div>
        </div>
    );
}

export default RetailerHome;