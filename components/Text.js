import classnames from "classnames";
const Text = ({ className, ...otherProps }) => (
  <p className={classnames("text-base", className)} {...otherProps}></p>
);

export default Text;
