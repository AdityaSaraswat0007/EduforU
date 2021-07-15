import { FC, memo } from "react";
interface Props {}
const SignUp: FC<Props> = (props) => {
  return <div>hello everyone this is SignUp Page</div>;
};
SignUp.defaultProps = {};
export default memo(SignUp);
