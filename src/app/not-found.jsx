import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0d0e12] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[150px] font-black leading-none text-[#1a1b22] select-none">
          404
        </h1>

        <div className="-mt-8">
          <h2 className="text-4xl font-black text-white mb-4">
            Page <span className="text-[#9dff3f]">Not Found</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
            Looks like this page took a wrong turn on the field. The page you
            are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn bg-[#9dff3f] text-[#0d0e12] font-bold hover:bg-[#b4ff6a] border-none px-8"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
