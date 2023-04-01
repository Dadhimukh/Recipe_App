import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  console.log(users, "========>");

  const fetchUserData = () => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=50bbb41b&app_key=09139394cfd11db09e01e4155f2c0cc8&imageSize=REGULAR&field=image"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.hits);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {
        <div className="container">
          {users.map((user) => (
            <div className="i">
              <img src={user.recipe.image} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default App;
