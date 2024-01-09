const nombreCache = 'apv-v1'
const archivos = [
    "/",
    "/error.html",
    "/index.html",
    "/css/bootstrap.css",
    "/css/styles.css",
    "/js/app.js",
    "/js/apv.js",
    "/manifest.json",
]



self.addEventListener('install', e => {
    console.log('Instalado el service worker')

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando')
                cache.addAll(archivos)
            })
    )

})

// Activar el Service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado')

    e.waitUntil(
        caches.keys()
            .then(keys => {
                //console.log(keys)

                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                )
            })
    )
})

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('Fetch....', e)

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache ? respuestaCache : caches.match('./error.html')
            })

    )
})