const orderDetails = async ({
  params,
}: {
  params: Promise<{ orderId: any }>;
}) => {
  const { orderId } = await params;
  console.log("SDebug > orderId", orderId);

  return (
    <>
      <h1>{`order ${orderId} is selected`}</h1>
    </>
  );
};

// ISR sample
export const revalidate = 60;
export async function generateStaticParams() {
  const orders = [
    {
      userId: "1",
      id: "1",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: "1",
      id: "2",
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: "1",
      id: "3",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ];
  return orders.map((order) => ({
    orderId: order.id,
  }));
}

export default orderDetails;
