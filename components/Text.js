import classnames from "classnames";

export const Text = ({ className, ...otherProps }) => (
  <p className={classnames("text-base", className)} {...otherProps} />
);
