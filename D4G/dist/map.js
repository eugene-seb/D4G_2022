//inserer map
let map = L.map("map").setView([47, 2.333333], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//position des marqueurs


let toulouse = L.marker([43.6044622, 1.4442469], {
       
        title: "Ville",
        alt: "Toulouse",
    })
        .addTo(map)
        .bindPopup("Toulouse"),
    rennes = L.marker([48.1113387, -1.6800198], {
       
        title: "Ville",
        alt: "Rennes",
    })
        .addTo(map)
        .bindPopup("Rennes"),
    albi = L.marker([43.9277552, 2.147899], {
       
        title: "Ville",
        alt: "albi",
    })
        .addTo(map)
        .bindPopup("Albi"),
    anglet = L.marker([43.4813927, -1.5149935], {
       
        title: "Ville",
        alt: "anglet",
    })
        .addTo(map)
        .bindPopup("Anglet"),
    ales = L.marker([44.1253665, 4.0852818], {
       
        title: "Ville",
        alt: "ales",
    })
        .addTo(map)
        .bindPopup("Ales"),
    bordeaux = L.marker([44.841225, -0.5800364], {
       
        title: "Ville",
        alt: "bordeaux",
    })
        .addTo(map)
        .bindPopup("Bordeaux"),
    boulogne_billancourt = L.marker([48.8356649, 2.240206], {
       
        title: "Ville",
        alt: "Boulogne-Billancourt",
    })
        .addTo(map)
        .bindPopup("Boulogne-Billacourt"),
    evry = L.marker([48.630927, 2.44394], {
       
        title: "Ville",
        alt: "evry",
    })
        .addTo(map)
        .bindPopup("Evry"),
    bernardiere = L.marker([47.0505556, -1.2647222], {
       
        title: "Ville",
        alt: "bernardiere",
    })
        .addTo(map)
        .bindPopup("La Bernardière"),
    rochelle = L.marker([46.1591126, -1.1520434], {
       
        title: "Ville",
        alt: "La Rochelle",
    })
        .addTo(map)
        .bindPopup("La Rochelle"),
    levallois = L.marker([48.8927951, 2.2895106], {
       
        title: "Ville",
        alt: "Levallois-Perret",
    })
        .addTo(map)
        .bindPopup("Levallois-Perret"),
    lille = L.marker([50.6365654, 3.0635282], {
       
        title: "Ville",
        alt: "lille",
    })
        .addTo(map)
        .bindPopup("Lille"),
    lyon = L.marker([45.7578137, 4.8320114], {
       
        title: "Ville",
        alt: "lyon",
    })
        .addTo(map)
        .bindPopup("Lyon"),
    montpellier = L.marker([43.6112422, 3.8767337], {
       
        title: "Ville",
        alt: "montpellier",
    })
        .addTo(map)
        .bindPopup("Montpellier"),
    morlaix = L.marker([48.5824932, -3.8331972], {
       
        title: "Ville",
        alt: "Morlaix",
    })
        .addTo(map)
        .bindPopup("Morlaix"),
    mulhouse = L.marker([47.7467233, 7.3389937], {
       
        title: "Ville",
        alt: "Mulhouse",
    })
        .addTo(map)
        .bindPopup("Mulhouse"),
    nantes = L.marker([47.2186371, -1.5541362], {
       
        title: "Ville",
        alt: "nantes",
    })
        .addTo(map)
        .bindPopup("Nantes"),
    paris = L.marker([48.8588897, 2.320041], {
       
        title: "Ville",
        alt: "paris",
    })
        .addTo(map)
        .bindPopup("Paris"),
    pontoise = L.marker([49.0508845, 2.1008067], {
       
        title: "Ville",
        alt: "pontoise",
    })
        .addTo(map)
        .bindPopup("Pontoise"),
    puteaux = L.marker([48.8841522, 2.2368863], {
       
        title: "Ville",
        alt: "puteaux",
    })
        .addTo(map)
        .bindPopup("Puteaux"),
    puteauDef = L.marker([48.8922478, 2.2369184], {
       
        title: "Ville",
        alt: "Puteaux-La défense",
    })
        .addTo(map)
        .bindPopup("Puteaux la défense"),
    rouen = L.marker([49.4404591, 1.0939658], {
       
        title: "Ville",
        alt: "rouen",
    })
        .addTo(map)
        .bindPopup("Rouen"),
    saint_malo = L.marker([48.649518, -2.0260409], {
       
        title: "Ville",
        alt: "Saint-Malo",
    })
        .addTo(map)
        .bindPopup("Saint-Malo"),
    saint_barth = L.marker([47.4700735, -0.4906447], {
       
        title: "Ville",
        alt: "Saint-Barthélemy d'Anjou",
    })
        .addTo(map)
        .bindPopup("Saint-barthélémy d'Anjou"),
    saint_Etienne = L.marker([45.4401467, 4.3873058], {
       
        title: "Ville",
        alt: "Saint-Étienne",
    })
        .addTo(map)
        .bindPopup("Ville"),
    etienneMontluc = L.marker([47.2739351, -1.7810546], {
       
        title: "Ville",
        alt: "Saint-Etienne-de-Montluc",
    })
        .addTo(map)
        .bindPopup("Saint-Etienne-de-Montluc"),
    versailles = L.marker([48.8035403, 2.1266886], {
       
        title: "Ville",
        alt: "versailles",
    })
        .addTo(map)
        .bindPopup("Versailles");

let markerCollection = new Map();
markerCollection.set("Toulouse", toulouse);
markerCollection.set("Rennes", rennes);
markerCollection.set("Albi", albi);
markerCollection.set("Anglet", anglet);
markerCollection.set("Ales", ales);
markerCollection.set("Bordeaux", bordeaux);
markerCollection.set("Boulogne-Billancourt", boulogne_billancourt);
markerCollection.set("Evry", evry);
markerCollection.set("La Bernardière", bernardiere);
markerCollection.set("La Rochelle", rochelle);
markerCollection.set("Levallois-Perret", levallois);
markerCollection.set("Lille", lille);
markerCollection.set("Lyon", lyon);
markerCollection.set("Montpellier", montpellier);
markerCollection.set("Morlaix", morlaix);
markerCollection.set("Mulhouse", mulhouse);
markerCollection.set("Nantes", nantes);
markerCollection.set("Paris", paris);
markerCollection.set("Pontoise", pontoise);
markerCollection.set("Puteaux", puteaux);
markerCollection.set("Puteaux-La défense", puteauDef);
markerCollection.set("Rennes", rennes);
markerCollection.set("Rouen", rouen);
markerCollection.set("Saint Malo", saint_malo);
markerCollection.set("Saint-Barthélemy d'Anjou", saint_barth);
markerCollection.set("Saint-Etienne", saint_Etienne);
markerCollection.set("Saint-Etienne-de-Montluc", etienneMontluc);
markerCollection.set("Versailles", versailles);

// retirer les accents, mettre en minuscule, rechercher par portion

/**
 * Supprime un marker du map
 *
 * @param {String} key
 */
function remove_marker(key) {
    if (markerCollection.get(key) != null)
        map.removeLayer(markerCollection.get(key));
}

/**
 * Supprime un marker du map si la clé ne correspond pas
 *
 * @param {String} key
 */
function remove_marker_ifnot_exists(key) {
    for (let [k, v] of markerCollection) {
        if (!key.includes(k))
            // Compararer sans tenir compte de la casse
            map.removeLayer(markerCollection.get(k));
    }
}

/**
 * remove all the markers on the map
 */
function remove_all_marker() {
    for (let [k, v] of markerCollection) {
        map.removeLayer(markerCollection.get(k));
    }
}

/**
 * Ajoute un marker au map
 *
 * @param {String} key
 */
function add_marker(key) {
    if (markerCollection.get(key) != null) markerCollection.get(key).addTo(map);
    //else add_all_marker();
}

/**
 * Ajoute un marker au map si la clé correspond
 *
 * @param {String} key
 */
function add_marker_if_exists(key) {
    for (let [k, v] of markerCollection) {
        if (key.includes(k))
            // Compararer sans tenir compte de la casse
            markerCollection.get(k).addTo(map);
    }
}

/**
 * Add all the markers to the map
 */
function add_all_marker() {
    for (let [k, v] of markerCollection) {
        markerCollection.get(k).addTo(map);
    }
}

function onchange_lieu() {
    remove_all_marker();
    let lieu = document.getElementById("lieu").value;
    add_marker(lieu);

    console.log(lieu);
}

function onchange_type_univ()
{
    remove_all_marker();
    let key = document.getElementById("type_univ").value;
    fetch('./dist/data_json.json')
    .then(result => result.json()
        .then(data => {
           
            data.forEach(value  => {   
                if(value['Column2'].includes(key))
                {
                    console.log(value['Column11'])
                    add_marker(value['Column11'])
                }
            })

        })
        .catch(error => console.log(error))
    .catch(error => console.log(error)))
}

function onchange_mode_suivi_cours()
{
    remove_all_marker();
    let key = document.getElementById("modeSuiviCours").value;
    fetch('./dist/data_json.json')
    .then(result => result.json()
        .then(data => {
           let table_of_ville = new Array()
            data.forEach(value  => {   
                if(value['Column14'].includes(key))
                {
                    console.log(value['Column14'])
                    add_marker(value['Column11'])
                }
            })
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error)))
}

function onchange_type_formation()
{
    remove_all_marker();
    let key = document.getElementById("type_formation").value;
    fetch('./dist/data_json.json')
    .then(result => result.json()
        .then(data => {
           let table_of_ville = new Array()
            data.forEach(value  => {   
                if(value['Column1'].includes(key))
                {
                    console.log(value['Column1'])
                    add_marker(value['Column11'])
                }
            })
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error)))
}