import AllPosts from "../../components/AllPosts/AllPosts";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";


const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <p className="text-center mt-20">
        <Link href="/" className="text-primary text-lg font-bold underline transition-all duration-300 hover:no-underline hover:text-black">Home</Link>
      </p>
      <h1 className="text-2xl font-bold text-center mt-10">Total Posts# {posts?.length}</h1>
      <div className="mx-10 xl:mx-96 my-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
          posts?.map((post) => <AllPosts key={post?.id} post={post} />)
        }
      </div>
      <Footer/>
    </div>
  );
};

export default Posts;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
