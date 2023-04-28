const API_THEMES = '/api/themes'

export async function getThemes () {
    try {
        const response = await fetch(API_THEMES)
        console.log(response);
        if (response.ok){
            const backResponse = await response.json()
            return backResponse;
        } else {
            console.log('pas de réponse');
        }
    } catch (error) {
        console.error(error)
    }       
}