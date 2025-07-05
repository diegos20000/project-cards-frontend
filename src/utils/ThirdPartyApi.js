function  getGeolocation(ipAddress, callback) {
    const apiKey = '07ab39f1f0a948218a8292573ad254ba';
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ipAddress}`;

    httpGetAsync(url, (response) => {
        const data = JSON.parse(response);
        if (data && data.country && data.city) {
            callback(null, {
                country: data.country,
                city: data.city
            });
        } else {
            callback(new Error('No se pudo obtener la geolocalización.'));
        }
        
    });
}

function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

export { getGeolocation };