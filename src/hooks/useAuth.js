import React from "react";

import firebase from "../firebase";

function useAuth() {
	const [authUser, setAuthUser] = React.useState(null);
	React.useEffect(() => {
		const unsuscribe = firebase.auth.onAuthStateChanged(user => {
			if (user) {
				setAuthUser(user)
			} else {
				setAuthUser(null)
			}
		})
		return () => unsuscribe();
	}, [])
	return [authUser, setAuthUser]
}

export default useAuth