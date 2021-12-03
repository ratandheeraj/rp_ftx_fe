import React, { useEffect } from "react";

function Sales() {
  return (
    <div>
      <div className="flex">
        <div className="card shadow-xl lg:card-side bg-accent text-primary-content mx-2 w-1/3">
          <div className="card-body">
            <p>Today's Earning: </p>
            <p>Rs. 5000</p>
          </div>
        </div>
        <div className="card shadow-xl lg:card-side bg-info text-primary-content mx-2 w-1/3">
          <div className="card-body">
            <p>This week's Earning: </p>
            <p>Rs. 5000</p>
          </div>
        </div>
        <div className="card shadow-xl lg:card-side bg-neutral text-primary-content mx-2 w-1/3">
          <div className="card-body">
            <p>This month's Earning: </p>
            <p>Rs. 5000</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4 mt-5 bordered drop-shadow-md">
        <div className="overflow-x-auto">
          <table className="table w-full drop-shadow-md border-solid">
            <thead>
              <tr>
                <th></th>
                <th>Retailer Name</th>
                <th>Retailer Id</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>5</th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Indigo</td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Purple</td>
              </tr>
              <tr className="hover">
                <th>7</th>
                <td>Meghann Durtnal</td>
                <td>Staff Accountant IV</td>
                <td>Yellow</td>
              </tr>
              <tr className="hover">
                <th>8</th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>Crimson</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Sales;
