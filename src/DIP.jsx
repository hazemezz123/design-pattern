import React, { useEffect, useState } from "react";

const DIP = () => {
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );
  };
  return (
    <div>
      <h2>
        DIP Component That Still working otherwise the Fetching Data doesn't
        response
      </h2>
      <DataDisplay fetchData={fetchData} />
      <DataDisplay2 fetchData={fetchData} />
    </div>
  );
};

function DataDisplay({ fetchData }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, [fetchData]);
  return <div>{data ? JSON.stringify(data) : "Loading"}</div>;
}

function DataDisplay2({ fetchData }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, [fetchData]);

  if (!data) return <div>Loading</div>;

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.id}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.title}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.completed ? "Yes" : "No"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DIP;
