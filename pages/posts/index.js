import AllPosts from "../../components/AllPosts/AllPosts";


const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-20">Total Posts# {posts?.length}</h1>
      <div className="mx-10 xl:mx-96 my-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
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
