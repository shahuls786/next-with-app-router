import React from "react";

export const SsgPage: React.FC = ({data}: any) => {
    return (
        <div>
            <h1>This is Profile page{`${data?.title}`}</h1>
        </div>
    )
}
export const revalidate = 60;
// SSG
export async function generateStaticParams() {
  // Fetch data from an external API or database
  // const res = await fetch('https://api.example.com/dynamic-data');
  const data1 = await {title: 'SSG'}; //res.json();

  return {
    props: {
      data: data1,
    },
  };
}

export default SsgPage;