import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const navBtn = ({ href, nomargin, children }) => {
  const pathname = useRouter().pathname;
  return (
    <Link href={href}>
      <a className="inline-block">
        <span
          className={classnames(
            { "mr-6": !nomargin },
            pathname == href
              ? "font-bold text-white"
              : "font-normal text-gray-300"
          )}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};

export default navBtn;
