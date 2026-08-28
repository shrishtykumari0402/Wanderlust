mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({

    container: 'map',

    style: "mapbox://styles/mapbox/streets-v12",

    center: listing.coordinates,

    zoom: 8,

});

const markerElement = document.createElement("div");
markerElement.className = "home-marker";
markerElement.innerHTML = '<i class="fa-solid fa-house"></i>';

const marker2 = new mapboxgl.Marker({
    element: markerElement,
    anchor: "bottom"
})
    .setLngLat(listing.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
        )
    )
    .addTo(map);  