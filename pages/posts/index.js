import AllPosts from "../../components/AllPosts/AllPosts";


const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1></h1>
      <div className="mx-96 my-10 grid grid-cols-3 gap-4">
        {
          posts?.map((post) => <AllPosts key={post?.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
