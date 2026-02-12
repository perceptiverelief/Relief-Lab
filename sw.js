self.addEventListener('install',function(e){
e.waitUntil(caches.open('relief-stable').then(function(c){return c.addAll(['./']);}));
});