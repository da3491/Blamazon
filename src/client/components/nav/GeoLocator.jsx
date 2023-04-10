import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { getLocation } from "../../ctx/axios";

const GeoLocator = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocation();
      setUserLocation(data.city);
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="flex items-end cursor-pointer"
        onClick={() => loginPrompt()}
      >
        <HiOutlineLocationMarker className="inline text-xl" />
        <div className="pl-1">
          <div className="text-xs text-gray-200">
            {isAuthenticated ? "Deliver to " + user.name : "Hello"}
          </div>
          <strong>
            {isAuthenticated ? userLocation : "Select your address"}
          </strong>
        </div>
      </div>
    </>
  );
};

export default GeoLocator;
