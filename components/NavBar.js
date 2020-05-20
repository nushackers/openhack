import NavButton from "./NavButton";

const nav = () => {
  return (
    <>
      <div className="header fixed top-0 w-full bg-opacity-100">
        <nav className="mx-auto max-w-screen-md w-full md:w-5/6 text-center md:text-left my-3 md:my-4 px-0 md:px-12">
          <NavButton href="/">Home</NavButton>
          <NavButton href="/rules">Rules</NavButton>
          <NavButton href="/start">Start</NavButton>
          <NavButton href="/submit" nomargin>
            Submit
          </NavButton>
        </nav>
      </div>
      <div className="inline-block w-full my-3 md:my-4">
        OpenHack by NUS Hackers
      </div>
    </>
  );
};

export default nav;
