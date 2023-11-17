import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

const Scenario1 = () => {
  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  });
  const [isData, setIsData] = useState(true);
  const handleClick = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log("Data fetched:");
      setData(response.data.data);
      setIsData(true);
    } catch (error) {
      alert("no data");
      setIsData(false);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(100)}>100</button>
      </div>

      {isData ? (
        <div>
          <ul>
            <li>Email:{data.email}</li>
            <li>
              Name:{data.first_name} {data.last_name}
            </li>
          </ul>
          <img
            src={
              data.avatar ||
              "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
            }
            alt="User Avatar"
            width="400"
            height="400"
          />
        </div>
      ) : (
        <div>
          <ul>
            <li>Email:</li>
            <li>Name:</li>
          </ul>
          <img src={""} alt="User Avatar" width="400" height="400" />
        </div>
      )}
    </div>
  );
};

export default App = () => {
  return (
    <div>
      <Scenario1 />
    </div>
  );
};
