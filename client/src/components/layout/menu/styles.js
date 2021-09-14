import styled from 'styled-components';

const Navbar = styled.nav`
	display: flex;
	position: sticky;
	height: 60px;
	justify-content: space-between;
	align-items: center;
	background-color: #282727;
	top: 0;
	width: 100%;
	margin-bottom: 45px;
	z-index: 9999;

	& > a {
		margin-left: 100px;
	}

	a {
		text-decoration: none;
		color: white;
		font-size: 1.3rem;
		transition: color 0.5s;

		&:hover {
			color: #48a7ff;
		}
	}
`;

const DropdownContainer = styled.div`
	display: flex;
	align-items: center;
`;

const DropdownContent = styled.div`
	display: none;
	position: absolute;
	background: #f1f1f1;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	min-width: 120px;
	text-align: center;
	border-radius: 10px;
	left: 50%;
	transform: translate(-50%, 0);
	overflow: hidden;

	a {
		color: black;
		padding: 12px 16px;
		box-sizing: border-box;
		text-decoration: none;
		font-size: 1.2rem;
		display: block;
		width: 100%;

		&:hover {
			background-color: #ddd;
		}
	}
`;

const DropdownItem = styled.div`
	position: relative;
	display: inline-block;
	margin-right: 70px;
	height: 100%;

	&:hover ${DropdownContent} {
		display: block;
	}
`;

export { Navbar, DropdownContainer, DropdownItem, DropdownContent };
