import React from "react";
import Image from "next/image";
import ButtonView from "./buttonView";
import Link from "next/link";
import styles from "./page.module.css";

const ProfilePage = async () => {
    // const data = await fetch("/api/orders");
  //   const data = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET', headers: {
  //      'Content-Type': 'application/json',
  //      'Access-Control-Allow-Origin': 'true',
  //   }});
  //   const orders = await data.json();

  const orders = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ];

  console.log("SDebug > ", orders);
  return (
    <div>
      <h1>This is Order page</h1>
      <h2>Order List</h2>
      {orders.map((data: any) => (
        <div key={data.id} style={{padding: '30px'}}>
             <br></br>
             
             <div className={styles.imageContainer}><Image
            src={'/globe.svg'} // Or a string for remote images: "/images/my-image.jpg"
            alt="user profile picture"
            width={100} // Required for static images or when `layout="intrinsic"`
            height={100} // Required for static images or when `layout="intrinsic"`
            // layout="fill" // Optional: for responsive images within a container
            // objectFit="cover" // Optional: for controlling image cropping/scaling
          /></div>
          <Link href={`/orders/${data.id}`}><b>{data.title}</b></Link>
          {/* <button onClick={}>View</button> */}
          <ButtonView />
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
