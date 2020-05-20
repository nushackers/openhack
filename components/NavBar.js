import Link from "next/link";

const nav = () => (
  <>
    <div className="header fixed top-0 w-full bg-opacity-100 bg-indigo-500">
      <nav className="mx-auto w-11/12 max-w-screen-md md:w-5/6 my-4 px-4 md:px-12 py-1">
        <Link className="inline-block" href="/">
          <span className="font-medium text-white mr-5">Home</span>
        </Link>
        <Link className="inline-block m-5" href="rules">
          <span className="text-white mr-5">Rules</span>
        </Link>
        <Link className="inline-block m-5" href="submit">
          <span className="text-white mr-5">Submit</span>
        </Link>
      </nav>
    </div>
    <div className="inline-block w-full my-5">OpenHack by NUS Hackers</div>
  </>
);

export default nav;
