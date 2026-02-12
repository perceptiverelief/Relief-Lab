self.addEventListener('install',function(e){
e.waitUntil(caches.open('relief-final-all').then(function(c){return c.addAll(['./']);}));
});