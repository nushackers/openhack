import Link from "next/link";

const nav = () => (
  <>
    <div className="header fixed top-0 w-full bg-opacity-100">
      <nav className="mx-auto max-w-screen-md w-full md:w-5/6 text-center md:text-left my-3 md:my-4 px-0 md:px-12">
        <Link className="inline-block" href="/">
          <span className="font-medium text-white mr-6">Home</span>
        </Link>
        <Link className="inline-block" href="rules">
          <span className="text-white mr-6">Rules</span>
        </Link>
        <Link className="inline-block" href="start">
          <span className="text-white mr-6">Start</span>
        </Link>
        <Link className="inline-block" href="submit">
          <span className="text-white">Submit</span>
        </Link>
      </nav>
    </div>
    <div className="inline-block w-full my-3 md:my-4">
      OpenHack by NUS Hackers
    </div>
  </>
);

export default nav;
