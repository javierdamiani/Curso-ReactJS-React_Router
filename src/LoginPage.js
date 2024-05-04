import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
	const auth = useAuth();
	const [username, setUsername] = React.useState("");

	const login = (e) => {
		e.preventDefault();
		auth.login({ username });
		console.log(username);
	};

	if (auth.user) {
		return <Navigate to="/profile" />;
	}

	return (
		<>
			<h2>Login</h2>

			<form onSubmit={login}>
				<label>Escribe tu nombre de usuario:</label>
				<input
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<button type="submit">Entrar</button>
			</form>
		</>
	);
}

export { LoginPage };
