import React from "react";

const RestaurantDetail = ({ params }) => {
  return (
    <div className="bg-blue-300">
      <b>params:</b>
      <p>{params.id}</p>
    </div>
  );
};

export default RestaurantDetail;
