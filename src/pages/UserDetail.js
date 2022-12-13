import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h2>UserDetail</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) + 1}`}> Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
