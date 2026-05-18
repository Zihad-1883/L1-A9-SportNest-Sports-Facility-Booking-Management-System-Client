"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log(data, error);

    if (data) {
      toast.success("login Successful");
      router.push("/");
    }

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="my-20 bg-[#0d0e12] flex items-center justify-center px-4">
      <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-8 w-full max-w-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white">
            Welcome <span className="text-[#9dff3f]">Back</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Login to manage your bookings and facilities.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          <Button
            type="submit"
            className="bg-[#9dff3f] text-[#0d0e12] font-bold rounded-xl hover:bg-[#b4ff6a] w-full mt-2"
            endContent={<ArrowRight size={18} />}
          >
            Login
          </Button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#2e3038]" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-[#2e3038]" />
        </div>

        <Button
          onClick={handleGoogleLogin}
          className="w-full border border-[#2e3038] text-gray-300 rounded-xl bg-[#0d0e12]"
          startContent={<FcGoogle size={20} />}
          variant="bordered"
        >
          Login with Google
        </Button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#9dff3f] hover:underline font-medium"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
