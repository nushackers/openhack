import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

export const NavButton = ({ href, children }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a
        className={classnames(
          "inline-block",
          "mr-6",
          "last:mr-0",
          pathname === href
            ? "font-bold text-white"
            : "font-normal text-gray-300"
        )}
      >
        {children}
      </a>
    </Link>
  );
};
