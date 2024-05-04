import React from "react";
import { users } from "./user";
import { useAuth } from "./auth";
import { useParams } from "react-router-dom";

function ProfilePage() {
	const auth = useAuth();
	const { slug } = useParams();

	console.log("SLUG", slug);

	const user = users.find((u) => u.name === auth.user?.username);

	const canEdit = auth.user?.isUser === auth.user?.username;

	return (
		<>
			<h1>Perfil</h1>
			<p>Welcome {user.name}</p>
			<p>Your age is {user.age}</p>
			{canEdit && <button>Edit your profile</button>}
		</>
	);
}

export { ProfilePage };
