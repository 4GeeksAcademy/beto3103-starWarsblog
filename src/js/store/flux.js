const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [

			],

			oneCharacter: {},

			favorites: [

			],

			planets: [

			],
			urlBase: "https://www.swapi.tech/api",

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/people`)
					let data = await response.json()
					// console.log(data)
					for (let eachCharacter of data.results) {
						let responseCharacter = await fetch(eachCharacter.url)
						let dataCharacter = await responseCharacter.json()
						setStore({
							character: [...store.character, dataCharacter.result]
						})

					}
					// setStore({
					// 	character: data.results
					// })
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/planets`)
					let data = await response.json()
					// console.log(data)
					for (let eachPlanets of data.results) {
						let responsePlanet = await fetch(eachPlanets.url)
						let dataPlanets = await responsePlanet.json()
						console.log(dataPlanets)
						setStore({
							planets: [...store.planets, dataPlanets.result]
						})

					}
					// setStore({
					// 	character: data.results
					// })
				} catch (error) {
					console.log(error)
				}
			},
			addFavorite: (favToSave) => {
				let store = getStore()
				setStore({
					favorites: [...store.favorites, favToSave]
				})
			},
			getCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					// fetch(`${store.urlBase}/people/${id}`)
					.then(res => res.json())
					.then(data => {
						setStore({
							oneCharacter: data.result
						})
						// console.log(data.result)
					})

			}
		}
	};
};

export default getState;
