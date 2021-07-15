import { FC, memo } from "react";
interface Props {}
const Dashboard: FC<Props> = (props) => {
  return <div>hello everyone This is Dashboard Page</div>;
};
Dashboard.defaultProps = {};
export default memo(Dashboard);
