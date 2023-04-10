import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block !mt-20 z-0 bg-light p-32
     dark:bg-dark xl:p-24 lg:p-16 mb:p-12 sm:p-0
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
