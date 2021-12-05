// Store navigation data on sessionStorage
const useSetSessionData = (route, href) => {
    let sessionData = JSON.stringify({
        used: 'react',
        history: route,
        href: href
    })
    sessionStorage.setItem('sessionData', sessionData);
};

export default useSetSessionData;