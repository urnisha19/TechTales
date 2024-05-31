import { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config.js"; // Import your Firebase config

const ProfileCard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadUser() {
            // Get the current authenticated user
            const user = auth.currentUser;
            setUser(user);
        }

        loadUser();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="w-full my-10 max-w-sm bg-sky-900 hover:bg-base-300 border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 my-3 rounded-full shadow-lg"
                        src={user?.photoURL}
                        alt="Profile Picture"
                    />
                    <h5 className="mb-1 text-4xl text-sky-700 text-center font-bold font-outline-2">
                        {user?.displayName}
                    </h5>
                    <span className="text-sm text-center font-bold text-sky-500">
                        {user?.email}
                    </span>
                </div>
            </div>
        </div>

    );
};

export default ProfileCard;
