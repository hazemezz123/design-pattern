import React, { useEffect, useState } from "react";

const DIP = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

function DataDisplay({ fetchData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, [fetchData]);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

function Main() {
  const fetchData = () =>
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    );
  return <DataDisplay fetchData={fetchData} />;
}

export default DIP;
