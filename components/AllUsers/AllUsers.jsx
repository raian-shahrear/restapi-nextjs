import style from "../../styles/user.module.css"

const AllUsers = ({ users }) => {
  return (
    <div className="xl:mx-96 mt-10 mb-40">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className={`${style.tableHead}`}>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address (city)</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user?.id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone.split(" ")[0]}</td>
                <td>{user?.address?.city}</td>
                <td>{user?.website}</td>
                <td>{user?.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
