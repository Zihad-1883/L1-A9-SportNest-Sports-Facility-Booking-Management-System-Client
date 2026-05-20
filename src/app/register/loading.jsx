import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-[#0d0e12] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#2e3038] border-t-[#9dff3f] rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
    );
};

export default LoadingPage;