import React from 'react';

const LoadingComponent = ({ message="Loading..." }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="inline-block animate-pulse rounded-full h-20 w-20 bg-gray-200 mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
