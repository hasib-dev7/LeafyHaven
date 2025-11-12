import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);
  //   const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [editing, setEditing] = useState(false);
//   console.log(user);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value;
    // ---------- NAME VALIDATION ----------
    if (name.length < 5) {
      toast.error("Name must be at least 5 characters long.");
      return;
    }
    try {
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      setUser({ ...user, displayName: name, photoURL: photo });
      //   form reset
      e.target.reset();
      toast.success("Profile updated successfully! ");
    } catch (err) {
      toast.error(
        ` Failed to update profile. Please try again. ${err.message}`
      );
    }
  };
  return (
    <>
      <div className="py-5 md:py-8 lg:py-10">
        {/* heading and description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            My Profile
          </h2>
          <p className=" font-medium text-gray-500 text-center mt-4">
            View and manage your personal information. Keep your details up to
            date so we can provide you with the best experience.
          </p>
        </div>
        {/* user info*/}
        <div className="card bg-base-100 w-96 mx-auto mt-10">
          <figure>
            <img src={user?.photoURL} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user?.displayName}</h2>
            <p>{user?.email}</p>
            {/*  */}

            {editing ? (
              <div className="mt-4 space-y-3">
                <form onSubmit={handleUpdateProfile}>
                  <fieldset className="fieldset">
                    <input
                      type="text"
                      className="input"
                      placeholder="New name"
                      name="name"
                    />

                    <input
                      type="text"
                      className="input"
                      name="photo"
                      placeholder="New photo URL"
                    />

                    <button className="w-full py-2 bg-blue-600 text-white rounded">
                      Save Changes
                    </button>
                  </fieldset>
                  {/* <input
                    type="text"
                    name="name"
                    placeholder="New name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                    
                    placeholder="New photo URL"
                    className="w-full border p-2 rounded"
                  />
                  <button className="w-full py-2 bg-blue-600 text-white rounded">
                    Save Changes
                  </button> */}
                </form>
                <button
                  onClick={() => setEditing(false)}
                  className="w-full py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="mt-4 w-full py-2 bg-green-600 text-white rounded"
              >
                Update Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
