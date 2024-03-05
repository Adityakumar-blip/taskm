import react from "react";

const LoginForm = () => {
  const handleLogin = () => {
    localStorage.setItem("login", true);
  };
  return (
    <div className="flex justify-center items-center h-full w-1/2">
      <div className=" flex flex-col items-center justify-center gap-6 bg-white p-8 rounded shadow-md">
        <div className="text-center">
          <p className="text-xs text-slate-400">Log in to</p>
          <p className="font-bold">Purposr</p>
        </div>
        <button className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline">
          Login with Google
        </button>
        <p>or</p>
        <form className=" w-96">
          <input
            className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />

          <input
            className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />

          <button
            className="bg-zinc-600 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
            type="button"
            onClick={() => handleLogin()}
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-slate-400">
          Don't have account?
          <span className="text-zinc-900 font-semibold">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
