import React, { useEffect, useState } from "react";

const DataList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Listando Usuários</h1>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="li-list">
            {item.user_name}<br />
            {item.user_age}<br />
            {item.user_cpf}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;