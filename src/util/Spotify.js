const accesToken
const clientId
const redirectURI

const Spotify = {

    getAccessToken = () => {
        if(accesToken){
            return accesToken
        }
        const accesToken = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/access_in=([^&]*)/)
    },
    search = (term) => {

    }
}

export default Spotify
