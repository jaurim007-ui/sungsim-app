const VERSION='sungsim-pwa-v4';
self.addEventListener('install',event=>{
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  // 네트워크 요청을 그대로 사용합니다. 이 fetch 핸들러는 PWA 설치 요건 호환성을 위한 최소 구성입니다.
});
