import { NavButton } from "./NavButton";

export const NavBar = () => {
  return (
    <div className="header fixed w-full">
      <nav className="w-full max-w-screen-lg mx-auto my-3 px-0 md:px-12 text-center md:text-left text-base lg:text-lg lg:pt-1">
        <NavButton href="/">Home</NavButton>
        <NavButton href="/rules">Rules</NavButton>
        <NavButton href="/start">Start</NavButton>
        <NavButton href="/submit">Submit</NavButton>
      </nav>
    </div>
  );
};
