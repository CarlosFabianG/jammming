const accesToken
const clientId
const redirectURI

const Spotify = {

    getAccessToken = () => {
        if(accesToken){
            return accesToken
        }
        const accesTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/access_in=([^&]*)/)

        if(accesTokenMatch && expiresInMatch){
            accesToken = expiresInMatch[1]
            const expiresIn = Number(expiresInMatch[1])

            //expiration access
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accesToken
        }else{
            
        }
    },

    search = (term) => {

    }
}

export default Spotify
