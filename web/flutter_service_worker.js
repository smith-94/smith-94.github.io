'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "baa4f57fea05df32eacaf66561896fad",
"index.html": "c2a043792cdc745a1683354fd67874ce",
"/": "c2a043792cdc745a1683354fd67874ce",
"main.dart.js": "8102c9b1808b625de9939911100de7a2",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bfd49f4d1e80f4bb1bc0f0da73dff74d",
"assets/AssetManifest.json": "1505c1afb3ca87c6f13a52c8e2ae73a6",
"assets/NOTICES": "279575e06d06276e59ff9420a6d0afbe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c5a2198f330d5b92bfaa93bed5adf6fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "460c6a10b89fb2aca135213e3fb242f0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/img_google.svg": "da5da49fe3d2bcd03a96e3345c056c45",
"assets/assets/images/img_nav.svg": "b8165aa414912d563271c05406a63a7f",
"assets/assets/images/img_arrowright_gray_500_01_12x6.svg": "b26779611ead97e8f5d8458d77833773",
"assets/assets/images/img_nav_gray_900_32x32.svg": "47cc93b27012baa34871a3e428db5dba",
"assets/assets/images/img_frame_gray_500_01_20x20.svg": "a2eef83d1af12d3102650ac604dbc219",
"assets/assets/images/img_arrowup_gray_500_01.svg": "74fd9a57a0dc6fdb03c4d93457ebd9c1",
"assets/assets/images/img_info.svg": "18422c68adc4b6b229c72d8335a2cd1d",
"assets/assets/images/calendarNext.png": "027652418a3e403d045a39b6737abddd",
"assets/assets/images/img_nav_gray_900.svg": "aacc9548a593d8b7bfa8ff6df8d69cd5",
"assets/assets/images/img_arrowright_gray_500_01.svg": "c4f87bca6f6b10917ddb8a528541fadc",
"assets/assets/images/img_search_gray_300.svg": "637538bd588042895f8a7b3faffa9146",
"assets/assets/images/img_nav_1.svg": "76e2bc9a948f5cfd7905c320c2d5b166",
"assets/assets/images/img_arrowleft_gray_700.svg": "c9491737d7f9cf90869cd996af43f541",
"assets/assets/images/img_arrowleft.svg": "76231519f8c8f8df650756df0109b187",
"assets/assets/images/calendarPrev.png": "1a2f00d72eada05c25fb77eea0bc1bfe",
"assets/assets/images/apple_logo.png": "59c3b55eeece5b79362b8f532c97b232",
"assets/assets/images/img_clock_indigo_50.svg": "d997432ea38783e47fb9972238af2b4f",
"assets/assets/images/img_grid_white_a700.svg": "70e1133244e005851059e245195a80b7",
"assets/assets/images/img_alphabetickeyboard.png": "ffafb65071711a3d6a2e0fd4891da21a",
"assets/assets/images/img_nav_2.svg": "1295ad0af62a22741cabc11497332d90",
"assets/assets/images/img_nav_3.svg": "9e1dffdf0adc4731de2d0c9e3a1170b8",
"assets/assets/images/img_up.svg": "72e6492a86e2acf24854911796f60042",
"assets/assets/images/img_camera.svg": "44e2c690e23398f4098dff3466fdb284",
"assets/assets/images/img_search_gray_500_01_43x43.svg": "e2fcf3c7dc9fab61faafbd2e4e0d9045",
"assets/assets/images/img_settings_gray_300.svg": "d7d460344219d767fa2d5805537d8550",
"assets/assets/images/img_fitnessflatline.png": "710932929391fc3179cc51fae443e449",
"assets/assets/images/img_rewind.svg": "2224394cbca476a0819dacd7c66f707e",
"assets/assets/images/img_unfold.svg": "9f0c3fb620fc17d1868c446f4a88a85d",
"assets/assets/images/img_icon_alert.svg": "18422c68adc4b6b229c72d8335a2cd1d",
"assets/assets/images/home_unactive.svg": "87f0256f3d8f732917943df9aff38b03",
"assets/assets/images/img_frame_gray_500_01.svg": "1b0216a74aa1ca1dbd3d7359b9fbbabf",
"assets/assets/images/img_frame_gray_500_01_24x24.svg": "025a16883eb3a4692e0969e574df5485",
"assets/assets/images/img_frame_1.svg": "a25082efc46b6dda88ee2fde31e02f20",
"assets/assets/images/img_group.svg": "564225021ef3c040dea2e771a033a292",
"assets/assets/images/img_lightbulb.svg": "6fad09554f4e6b373e3463901f8e5a7d",
"assets/assets/images/img_group_4826.svg": "51dd7e1f8917a1d46baa9b56ebee32b9",
"assets/assets/images/img_group_black_900_45x214.svg": "96eb12b25f076ebb9c613b2b9b2f30eb",
"assets/assets/images/onetone_no_icon.svg": "562d833cee62ec5e15d8ebf2ab6a043e",
"assets/assets/images/img_group4830.svg": "e7a23b550a69edd7e82f0c59c73f03ad",
"assets/assets/images/img_darkmodefalse.png": "90df8cad64d164054fa33d8609b8803b",
"assets/assets/images/img_grid.svg": "f27da27434e50ed7a5b917f36638db75",
"assets/assets/images/img_kakaotalkphoto.png": "e12c5b109bf1652fead2d9cbdcb00c3d",
"assets/assets/images/img.png": "9a928e0de6a5409ed0d42b56ed9f6ef2",
"assets/assets/images/img_mobile.svg": "b4aedb7c7e14907f2262cf5e7def34b2",
"assets/assets/images/img_rectangle373.png": "99a1dc980ddf2035815f42ab686f0e6c",
"assets/assets/images/img_frame_38x38.svg": "9471fe9f5f3e80aa9aaef1f58fe30cd8",
"assets/assets/images/img_settings.svg": "175ccaf92d72e63bf4edcffe70bd62fc",
"assets/assets/images/image_not_found2.png": "6bc63db728abbd6b2108ba8c7233657b",
"assets/assets/images/img_group4823.svg": "a6ce81d1d1b4bd238f955cd7e17ac3b3",
"assets/assets/images/img_.svg": "b864f252ab52ccd5097c554453165804",
"assets/assets/images/img_nav_32x32_active.svg": "fbc4c762748d0fa8a4b77d74cbcc60d9",
"assets/assets/images/profile_edit.svg": "e852d83e1aaa8096d24a7d681e034015",
"assets/assets/images/img_nav_32x32.svg": "816a8e0e69dc36ea6550bb772c6a6cf7",
"assets/assets/images/img_arrowup.svg": "369ae9d24125a3f7cf7dad29a7d3034b",
"assets/assets/images/img_rectangle_3266.png": "eb83f893014829e79e3f24dada376332",
"assets/assets/images/img_nav_gray_400_32x32.svg": "e6cfddb02739054196b66f2aa36108c5",
"assets/assets/images/img_arrowdown_gray_500_01.svg": "2f7da38406292dea3305e1cbc9d2c63e",
"assets/assets/images/record_fill.svg": "c8ddecb0406a3100fb0bbacfe6ee9904",
"assets/assets/images/img_group6237.svg": "09594fcd368c16c0d1a5a6305c1a1776",
"assets/assets/images/img_eye.svg": "689d1a6b424a96ac1a14d1697cbc8fc0",
"assets/assets/images/img_search_gray_500_01.svg": "13146f3a4d13161668787fee981f751b",
"assets/assets/images/img_close.svg": "167a8615e222377fd565733d10b98253",
"assets/assets/images/img_search.svg": "afdc4901a670d19ce13bf9ca5fe898a0",
"assets/assets/images/img_frame.svg": "45be95c8b5ead18a25dd3194ea18b53c",
"assets/assets/images/img_checkmark_gray_500_01.svg": "80a917df83da9f8cecfaaafe26b108b2",
"assets/assets/images/img_icn_back.svg": "76231519f8c8f8df650756df0109b187",
"assets/assets/images/chat_fill.svg": "f2e72345150c04abb24ed10ba4d48872",
"assets/assets/images/img_undrawjoinrew1lh.png": "441d48fad8a62280ab7baf050f361ab0",
"assets/assets/images/img_kakao.svg": "528bcd926720d117412a46073186f2e2",
"assets/assets/images/img_group6145.svg": "6c0a6812a4e525897aeaae7e70953629",
"assets/assets/images/img_frame_gray_500_01_38x38.svg": "7610f5a027d3283c7762620d0f18f217",
"assets/assets/images/img_group6351.svg": "04c3f930e47c990aa27499b322d16ddf",
"assets/assets/images/img_search_white_a700.svg": "384197a2c0ff2d057cd9d15a211f76db",
"assets/assets/images/img_nav_gray_400.svg": "39ecf15bb6d08136e07c9bae64ba2fe1",
"assets/assets/images/img_frame_20x20.svg": "a9219a4ac3cd1ebea93ab6e866de4000",
"assets/assets/images/img_checkmark.svg": "b01139b528a1485392385b11276470ac",
"assets/assets/images/img_frame_primary.svg": "3b28ed022f30776dc4a73721a2f32a6a",
"assets/assets/images/img__19x115.png": "0815cac75743e09cda98a48606912145",
"assets/assets/images/img_frame_gray_500_01_42x42.svg": "93921eaf725d2cba7a7ddae6ae6484bb",
"assets/assets/images/myvalue_icon.png": "c034bf880ff4f7257a7a11db2537b355",
"assets/assets/images/apple_logo2.png": "f658812274a03124a29c8ac506ccfc6b",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_arrowright.svg": "de41e5360f76bc0da165126a8086329f",
"assets/assets/images/image_default_profile.svg": "3629bfa3e790cb55155f7a06ce203def",
"assets/assets/images/img_clock.svg": "dffe9f803eda50ed7fd0d809b52d330e",
"assets/assets/images/img_frame_primary_62x62.svg": "d535326237a2ca00f522a903ac3390ba",
"assets/assets/images/no_red-alarmimg.png": "9a928e0de6a5409ed0d42b56ed9f6ef2",
"assets/assets/images/img_group4830_indigo_50.svg": "d42082a6047164ee0f197759f51ebd25",
"assets/assets/images/img_group_black_900.png": "508da90d5173f3072d96dd751c51ecd7",
"assets/assets/images/img_checklistflatline.png": "82aa070374460349b058055659f98d74",
"assets/assets/images/img_arrowdown.svg": "ef0bb05acf2407941731bdca33049e81",
"assets/assets/images/schedule-fill.svg": "1295ad0af62a22741cabc11497332d90",
"assets/assets/images/img_group4281.svg": "2d0c643e0957eded20f8143be089a680",
"assets/assets/images/img_arrowright_gray_500_01_18x10.svg": "892400b35cbc972d6776fb22da54466c",
"canvaskit/skwasm.js": "099f00a255e1b1f33ba268145da4d8d8",
"canvaskit/skwasm.js.symbols": "3de29dc1934313ba10e7131c64b8049f",
"canvaskit/canvaskit.js.symbols": "8b59bb301fc2b1136f25606382f2ed6c",
"canvaskit/skwasm.wasm": "753caf3fee81910807748eb38985a697",
"canvaskit/chromium/canvaskit.js.symbols": "5573e55905729e79f52db673cb8da1ce",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "89b52623ef09fc18418ba5e92d92bade",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "2bb409a4a670950421c0d3cd973c6cc0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
