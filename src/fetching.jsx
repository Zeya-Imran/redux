import { useEffect, useState } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div className="main__container">
      <table className="main__table">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetching;
