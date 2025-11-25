import React from "react";


import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';


async function fetchPosts() {
      // const res = await fetch("/api/posts");
      // if (!res.ok) {
      //   throw new Error("Failed to fetch posts");
      // }
      return  {title: 'Profile'}; //res.json();
    }

const ProfilePage: React.FC =  async() => {
  const data1 = await fetchPosts();
  const env = process.env.ENVIRONMENT

  //  const { data, isLoading, error } = useQuery({
  //       queryKey: ["posts"],
  //       queryFn: fetchPosts,
  //     });
    return (
        <div>
            <h1>This is {`${data1?.title}`} with {`${env}`} env.</h1>
        </div>
    )
}


export default ProfilePage;