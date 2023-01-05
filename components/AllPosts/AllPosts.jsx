import Link from "next/link";

const AllPosts = ({ post }) => {
  return (
    <div key={post?.id} className="card bg-base-100 shadow-xl">
      <div className="card-body relative">
        <h2 className="card-title mb-8">{post?.title}</h2>
        <div className="absolute bottom-0 left-0 w-full">
          <Link href={`posts/${post?.id}`}>
            <button className="btn btn-primary w-full rounded-t-none">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;

