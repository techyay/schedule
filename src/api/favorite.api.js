// eslint-disable-next-line no-unused-vars
// URL for fetching favorite talks
const GET_FAVORITE_URL = (eventSlug) => {
	return `/api/events/${eventSlug}/favourite-talk/`
}

const SAVE_FAVORITE_URL = (eventSlug) => {
	return `/api/events/${eventSlug}/favourite-talk/`
}


// Fetch favorite talks
export const getFavoriteTalks = async (eventSlug) => {
	try {
		const data = await (await fetch(GET_FAVORITE_URL(eventSlug),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})).json()
		return data
	} catch (e) {
		console.error('error happened when trying to load favourite talk')
	}
}


export const saveFavoriteTalk = async (eventSlug, favs) => {
	try {
		const response = await (await fetch(SAVE_FAVORITE_URL(eventSlug),
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(favs)
			}))
		return response
	} catch (e) {
		console.error(`error happened when trying to save favourite talk: ${JSON.stringify(favs)}`)
	}
}



