import classNames from "classnames/bind";
import Styles from "./Sidebar.module.scss";

const cx = classNames.bind(Styles);
function Sidebar() {
	return <h2 className={cx("wrapper")}>Sidebar</h2>;
}

export default Sidebar;
