import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
	const auth = useAuth();

	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<>
			<p>LogoutPage</p>
			<>
				<h2>Login</h2>

				<form onSubmit={logout}>
					<label>¿Seguro de que quieres salir?</label>

					<button type="submit">Salir</button>
				</form>
			</>
		</>
	);
}

export { LogoutPage };
