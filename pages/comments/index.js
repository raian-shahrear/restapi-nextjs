const Comments = ({ comments }) => {
  return (
    <div className="mx-10 xl:mx-96 my-20">
      <h1 className="text-2xl font-bold text-center mb-10">Total Comments# {comments?.length}</h1>
      {comments.map((comment) => (
        <h2 key={comment?.id} className="text-xl mb-4">
          #{comment?.id}: {comment?.body}
        </h2>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
};
