import AllUsers from "../../components/AllUsers/AllUsers";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";

const Users = ({users}) => {
  return (
    <div>
      <p className="text-center mt-20">
        <Link href="/" className="text-primary text-lg font-bold underline transition-all duration-300 hover:no-underline hover:text-black">Home</Link>
      </p>
      <h1 className="text-2xl font-bold text-center mt-10">Total Users# {users?.length}</h1>
      <AllUsers users={users} />
      <Footer />
    </div>
  );
};

export default Users;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data
    }
  }
}