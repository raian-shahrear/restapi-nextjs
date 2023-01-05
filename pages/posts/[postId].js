import Link from "next/link";

const PostDetails = ({ post }) => {
  return (
    <div className="card bg-primary text-primary-content my-56 mx-96">
      <div className="card-body">
        <h2 className="card-title">#{post?.id}. {post?.title}</h2>
        <p>{post?.body}</p>
        <div className="card-actions justify-center">
          <Link href="/posts">
            <button className="btn">Go to posts</button>
          </Link>
        </div>
      </div>
    </div>
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
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
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
