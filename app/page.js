async function getData() {
  const res = await fetch(process.env.API_URL);
  console.log(process.env.API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div style={{ margin: "10px" }}>
      <h1> this is backend of next-JS </h1>
      <h3>Welcome to frontend of Nextjs</h3>
      <h1>List of all users!!</h1>
      {data.map((items) => {
        return (
          <div key={items.id}>
            {items.id} - - - - {items.email}
          </div>
        );
      })}
    </div>
  );
}
