import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PROFILE_PIC } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error); //here we can navigate to the error page also.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe will be called when component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <header className="w-[99vw] absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <img
            alt="user icon"
            src={PROFILE_PIC}
            className=" hidden md:block w-12 h-12"
          />
          <button
            className="text-lg font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
