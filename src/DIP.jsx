import { useEffect, useState } from "react";

const DIP = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

function DataDisplayJson({ fetchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((e) => setData(e));
  }, [fetchData]);

  return <div>{data ? JSON.stringify(data) : "loading..."}</div>;
}

function DataDisplayText({ fetchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((e) => setData(e));
  }, [fetchData]);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.postId}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Main() {
  const fetchData = () =>
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    );
  return (
    <>
      {" "}
      <DataDisplayJson fetchData={fetchData} />
      <DataDisplayText fetchData={fetchData} />
    </>
  );
}

export default DIP;
