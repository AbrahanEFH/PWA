

self.addEventListener('install', e => {
    console.log('Instalado el service worker')

    console.log(e)
})

// Activar el Service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado')

    console.log(e)
})