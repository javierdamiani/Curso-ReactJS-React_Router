import React, { useContext } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const adminList = ["JavierD", "IsisC"];
const editorList = ["MT4", "JH3"];
const userList = ["Andre", "Claudia", "Javier"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);
	const location = useLocation();

	let from = location.state?.from?.pathname || -1;

	const login = ({ username }) => {
		const isAdmin = adminList.find((admin) => admin === username);
		const isEditor = editorList.find((editor) => editor === username);

		setUser({ username, isAdmin, isEditor });
		navigate(from, { replace: true });
	};

	const logout = () => {
		setUser(null);
		navigate("/");
	};

	const auth = { user, login, logout };

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

function AuthRoute(props) {
	const location = useLocation();
	const auth = useAuth();

	if (!auth.user) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
