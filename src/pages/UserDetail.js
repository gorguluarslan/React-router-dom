import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const params = useParams();

  console.log(params);
  return <div>UserDetail</div>;
}

export default UserDetail;
