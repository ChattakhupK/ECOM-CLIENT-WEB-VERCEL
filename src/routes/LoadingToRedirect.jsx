import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useEcomStore from "../store/ecom-store";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const [redirect, setRedirect] = useState(false);
  const user = useEcomStore((state) => state.user);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount === 1) {
          clearInterval(interval);
          setRedirect(true);
        }
        return currentCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (redirect) {
    if (user.role === "admin") {
      return <Navigate to={"/admin"} />;
    }

    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {count ? (
        <div className="flex flex-col items-center">
          {/* Loading Spinner */}
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-xl text-gray-700">กำลังโหลดข้อมูล...</p>
        </div>
      ) : (
        <div className="text-2xl text-green-500">
          ข้อมูลโหลดเสร็จเรียบร้อยแล้ว!
        </div>
      )}
    </div>
  );
};

export default LoadingToRedirect;
