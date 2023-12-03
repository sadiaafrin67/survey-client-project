import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AllUser = () => {
  // const [value, setValue] = useState('')
  const axiosSecure = useAxiosSecure();
  const [searchInput, setSearchInput] = useState("");
  const [filterS, setFilterS] = useState(null);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  useEffect(() => {
    if (filterS === null && users && users.length > 0) {
      setFilterS(users);
    }
  }, [filterS, users]);

  const handleSelectChange = (role, id) => {
    // setValue(role)
    // console.log(value)
    axiosSecure.patch(`/users/admin/${id}`, { role: role }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Users roll updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handelSearchSubmit = (e) => {
    e.preventDefault();

    // Filter the data based on the search input (title or category)
    const FilteredUsers = users?.filter((user) => {
      const searchInputLower = (searchInput.toLowerCase()).replace(/\s/g, '');
      const roleLower = (user?.role?.toLowerCase() || 'user').replace(/\s/g, '')
      

      return (
        roleLower.includes(searchInputLower) 
      );
    });

   
    

    setFilterS(FilteredUsers);
    // console.log("Filtered Surveys:", filteredSurveys);
  };

  // const handleMakeAdmin = (user) => {
  //   axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
  //     console.log(res.data);
  //     if (res.data.modifiedCount > 0) {
  //       refetch();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: `${user.name} is an Admin Now!`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  return (
    <div className="h-[100vh]">
      <div className="flex justify-evenly  my-8">
        <h2 className=" font-bold md:text-2xl text-base my-10 text-[#2a5298]">All Users</h2>
        <h2 className="font-bold md:text-2xl text-base my-10 text-[#2a5298]">Total Users: {users.length}</h2>
      </div>

      <form
        className="w-full flex flex-1 justify-center items-center"
        onSubmit={handelSearchSubmit}
      >
        <div className="my-8 ">
          <input
            className="border ml-5 w-[300px] p-2 text-center rounded-l-lg"
            placeholder=" eg: admin, surveyor, pro user, user"
            type="text"
            name="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="btn rounded-l-lg bg-blue-950 text-white"
          >
            Search
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="table table-zebra h-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Set Role</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filterS &&
              filterS.length > 0 &&
              filterS?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      // <button
                      //   onClick={() => handleMakeAdmin(user)}
                      //   className="btn btn-lg "
                      // >
                      //   <FaUsers
                      //     className="text-white
                      //                    "
                      //   ></FaUsers>
                      // </button>

                      <select
                        defaultValue={user?.role}
                        onChange={(e) =>
                          handleSelectChange(e.target.value, user._id)
                        }
                      >
                        <option value="" disabled>
                          Set Role
                        </option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>

                        <option value="surveyor">Surveyor</option>
                      </select>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                  <td>{user.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
