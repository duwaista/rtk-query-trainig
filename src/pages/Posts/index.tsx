import React, { useEffect } from "react";

import { useGetAllPostsQuery } from "../../services";

const PostsPage = () => {
  const { data: posts, isFetching, isError } = useGetAllPostsQuery();

  useEffect(() => {
    console.log("posts", posts)
  }, [posts]);

  return (
    <>
      <h2>Some shit here</h2>
      {isFetching && <span>Loading...</span>}
      {posts?.length && !isError && !isFetching && (
        <span>
          {JSON.stringify(posts)}
        </span>
      )}
    </>
  )
}

export default PostsPage;