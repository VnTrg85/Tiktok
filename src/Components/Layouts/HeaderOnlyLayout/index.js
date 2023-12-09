import Header from "../Components/Header";

function HeaderOnlyLayout({ children }) {
	return (
		<>
			<Header></Header>
			<div className="container">
				<div className="content">{children}</div>
			</div>
		</>
	);
}

export default HeaderOnlyLayout;
