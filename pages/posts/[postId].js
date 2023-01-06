import Head from "next/head";
import { useRouter } from "next/router";
import Comments from "../../components/Comments/Comments";
import Link from "next/link";

const PostDetails = ({ post }) => {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/posts");
  };
  return (
    <>
      <Head>
        <title>Posts-{post?.id}</title>
      </Head>
      <section>
        <p className="text-center mt-20">
          <Link
            href="/"
            className="text-primary text-lg font-bold underline transition-all duration-300 hover:no-underline hover:text-black"
          >
            Home
          </Link>
        </p>
        <div className="card bg-primary text-primary-content mt-10 mb-20 mx-10 xl:mx-96">
          <div className="card-body">
            <h2 className="card-title capitalize">
              Post#{post?.id}. {post?.title}
            </h2>
            <p className="mb-6">
              <span className="font-semibold"></span> {post?.body}
            </p>
            <Comments postId={post?.id} />
            <div className="card-actions justify-center">
              <button onClick={handleRouter} className="btn">
                Back to post
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post?.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
