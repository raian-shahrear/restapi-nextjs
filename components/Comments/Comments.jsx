import React, { useEffect, useState } from "react";

const Comments = ({ postId }) => {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
      });
  }, []);
  console.log(allComments);
  return (
    <div>
      <h4 className="text-lg font-bold mb-2">Comments:</h4>
      {allComments.map((comment) => (
        <div key={comment?.id} className="mb-3">
          <div className="text-xs mb-1 flex items-center gap-2">
            <p className="w-6 h-6 bg-white rounded-full"></p>{" "}
            <p className="w-full">{comment?.email}</p>
          </div>
          <p className="">{comment?.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
