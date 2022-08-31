const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		user: {},
		logged: null,
	  },
	  actions: {
		verify: async () => {
		  try {
			const resp = await fetch(
			  "https://3001-efornies-jwtauthenticat-1nyk8c8ihtj.ws-eu63.gitpod.io/api/private",
			  {
				method: "GET",
				headers: {
				  "Content-Type": "application/json",
				  Authorization: "Bearer " + localStorage.getItem("token"),
				},
			  }
			);
			const data = await resp.json();
			setStore({ logged: data.logged_in || false, user: data.user });
		  } catch (e) {
			setStore({ logged: false });
		  }
		},
  
		logout: async () => {
		  localStorage.clear();
		  setStore({ logged: false });
		},
	  },
	};
  };
  
  export default getState;
