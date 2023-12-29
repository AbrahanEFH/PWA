const nombreCache = 'apv-v1'
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/.css.styles.css',
    '/js/app.js',
    '/js/apv.js'
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

    console.log(e)
})

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('Fetch....', e)
})