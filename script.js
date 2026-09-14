/* ==========================================================================
   1. ADATOK ÉS DÁTUM SZÁMÍTÁS (Model)
   ========================================================================== */

// Függvény a dátum léptetéséhez (X nappal a mai naphoz képest)
function datumEltolassal(napok) {
    const d = new Date();
    // A setDate automatikusan kezeli a hónapváltást (pl. szept. 30 + 5 nap -> okt. 5)
    d.setDate(d.getDate() + napok);
    return d;
}

// Dátum formázása magyar szokás szerint (pl. "szept. 5–8." vagy "okt. 28. – nov. 2.")
function datumTartomanyFormazas(kezdoEltolas, vegEltolas) {
    const kezdo = datumEltolassal(kezdoEltolas);
    const veg = datumEltolassal(vegEltolas);

    // A getMonth() 0-tól indexel (január = 0), így a tömb első eleme a január
    const honapok = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];

    const kezdoHonap = honapok[kezdo.getMonth()];
    const vegHonap = honapok[veg.getMonth()];

    // Ha ugyanabban a hónapban van kezdet és vég, csak a napot írjuk ki kétszer
    if (kezdoHonap === vegHonap) {
        return `${kezdoHonap} ${kezdo.getDate()}–${veg.getDate()}.`;
    } else {
        return `${kezdoHonap} ${kezdo.getDate()}. – ${vegHonap} ${veg.getDate()}.`;
    }
}

// Repülőjegy ajánlatokat tartalmazó objektum-tömb (valós projektben ez API-ból jönne)
const repjegyAdatok = [
    { nev: "Róma, Olaszország", eltolasKezd: 2, eltolasVeg: 5, legitarsasag: "Wizz Air", ar: 18900, cimke: "Last minute – 6 hely!", kep: "roma", url: "https://wizzair.com" },
    { nev: "London, Egyesült Királyság", eltolasKezd: 4, eltolasVeg: 8, legitarsasag: "Ryanair", ar: 24500, cimke: "Csupán 3 jegy maradt!", kep: "london", url: "https://www.ryanair.com" },
    { nev: "Barcelona, Spanyolország", eltolasKezd: 7, eltolasVeg: 12, legitarsasag: "Vueling", ar: 21990, cimke: "Akciós ár!", kep: "barcelona", url: "https://www.vueling.com" },
    { nev: "Kréta, Görögország", eltolasKezd: 3, eltolasVeg: 7, legitarsasag: "Ryanair", ar: 15400, cimke: "Villámakció!", kep: "kreta", url: "https://www.ryanair.com" },
    { nev: "Párizs, Franciaország", eltolasKezd: 6, eltolasVeg: 9, legitarsasag: "Air France", ar: 29900, cimke: "Népszerű út!", kep: "parizs", url: "https://www.skyscanner.hu" },
    { nev: "Amszterdam, Hollandia", eltolasKezd: 10, eltolasVeg: 13, legitarsasag: "KLM", ar: 32000, cimke: "Szezonális kedvezmény", kep: "amszterdam", url: "https://www.skyscanner.hu" },
    { nev: "Milánó, Olaszország", eltolasKezd: 1, eltolasVeg: 3, legitarsasag: "Wizz Air", ar: 12900, cimke: "Holnaputáni indulás!", kep: "milano", url: "https://wizzair.com" },
    { nev: "Málta", eltolasKezd: 8, eltolasVeg: 14, legitarsasag: "Ryanair", ar: 19500, cimke: "Tengerparti pihenés", kep: "malta", url: "https://www.ryanair.com" }
];

// Szállás ajánlatokat tartalmazó objektum-tömb
const szallasAdatok = [
    { nev: "Tengerparti apartman – Kréta", leiras: "📍 150 m a tengerparttól", ertekeles: "⭐ 4,3 / 5 (128 értékelés)", ar: 12500, kep: "hotel1", url: "https://www.booking.com" },
    { nev: "Belvárosi hostel – Róma", leiras: "📍 300 m a Colosseumtól", ertekeles: "⭐ 4,1 / 5 (96 értékelés)", ar: 9900, kep: "hotel2", url: "https://www.booking.com" },
    { nev: "Panorámás hotel – Barcelona", leiras: "📍 5 perc a Sagrada Famíliától", ertekeles: "⭐ 4,6 / 5 (211 értékelés)", ar: 18000, kep: "hotel3", url: "https://www.booking.com" },
    { nev: "Csendes vendégház – London", leiras: "📍 Metrómegálló 2 percre", ertekeles: "⭐ 4,0 / 5 (74 értékelés)", ar: 16200, kep: "hotel4", url: "https://www.airbnb.hu" },
    { nev: "Boutique Hotel – Párizs", leiras: "📍 Eiffeltoronyra néző kilátás", ertekeles: "⭐ 4,8 / 5 (305 értékelés)", ar: 28900, kep: "hotel5", url: "https://www.booking.com" },
    { nev: "Kanal-oldali Apartman – Amszterdam", leiras: "📍 A belváros szívében", ertekeles: "⭐ 4,5 / 5 (150 értékelés)", ar: 24000, kep: "hotel6", url: "https://www.airbnb.hu" },
    { nev: "Dóm Dűlő Panzió – Milánó", leiras: "📍 10 perc sétára a Dómtól", ertekeles: "⭐ 4,2 / 5 (89 értékelés)", ar: 14500, kep: "hotel7", url: "https://www.booking.com" },
    { nev: "Tengerre néző rezidencia – Málta", leiras: "📍 Saját medencével", ertekeles: "⭐ 4,7 / 5 (180 értékelés)", ar: 21000, kep: "hotel8", url: "https://www.booking.com" }
];

/* ==========================================================================
   2. DOM ELEMEK RENDERELÉSE (View)
   ========================================================================== */

// Repülőjegy kártyák dinamikus generálása
function repjegyekKirajzolasa(lista) {
    const kontener = document.getElementById('jegyek-kontener');
    let htmlTartalom = ''; // Először egy string változóba gyűjtjük a HTML-t

    lista.forEach(jegy => {
        const datumSzoveg = datumTartomanyFormazas(jegy.eltolasKezd, jegy.eltolasVeg);
        
        // Template literal (backtick) segítségével HTML struktúrát építünk
        htmlTartalom += `
            <article class="kartya">
                <img src="https://picsum.photos/seed/${jegy.kep}/400/240" alt="${jegy.nev}">
                <div class="kartya-tartalom">
                    <h3>${jegy.nev}</h3>
                    <p class="kartya-info">📅 Dátum: <strong>${datumSzoveg}</strong></p>
                    <p class="kartya-info">✈️ Légitársaság: <strong>${jegy.legitarsasag}</strong></p>
                    <p class="ar">${jegy.ar.toLocaleString('hu-HU')} Ft / fő</p>
                    <span class="cimke">${jegy.cimke}</span>
                    <a href="${jegy.url}" target="_blank" class="vasarlas-gomb">Jegy vásárlása ➔</a>
                </div>
            </article>
        `;
    });

    // Optimalizálás: A DOM-ba csak egyszer nyúlunk, a ciklus végén
    kontener.innerHTML = htmlTartalom;
}

// Szállás kártyák dinamikus generálása
function szallasokKirajzolasa(lista) {
    const kontener = document.getElementById('szallasok-kontener');
    let htmlTartalom = '';

    lista.forEach(szallas => {
        htmlTartalom += `
            <article class="kartya">
                <img src="https://picsum.photos/seed/${szallas.kep}/400/240" alt="${szallas.nev}">
                <div class="kartya-tartalom">
                    <h3>${szallas.nev}</h3>
                    <p class="kartya-info">${szallas.leiras}</p>
                    <p class="kartya-info">${szallas.ertekeles}</p>
                    <p class="ar">${szallas.ar.toLocaleString('hu-HU')} Ft / éj</p>
                    <a href="${szallas.url}" target="_blank" class="vasarlas-gomb">Szállás foglalása ➔</a>
                </div>
            </article>
        `;
    });

    kontener.innerHTML = htmlTartalom;
}

/* ==========================================================================
   3. KERESÉS ÉS RENDEZÉS LOGIKA (Controller)
   ========================================================================== */

function szuresEsRendezes() {
    // --- Jegyek szűrése és rendezése ---
    // Értékek lekérdezése a DOM-ból, kisbetűssé alakítva a kis/nagybetű érzéketlenség miatt
    const jegyKereses = document.getElementById('jegy-kereso').value.toLowerCase();
    const jegyRendezes = document.getElementById('jegy-rendezes').value;

    // A filter metódus új tömböt hoz létre, amely csak a feltételnek megfelelő elemeket tartalmazza
    let szurtJegyek = repjegyAdatok.filter(j => j.nev.toLowerCase().includes(jegyKereses));

    // A sort metódus egy komparátor függvényt kap. Ha az eredmény negatív, az 'a' kerül előre.
    if (jegyRendezes === 'olcso') {
        szurtJegyek.sort((a, b) => a.ar - b.ar); // Növekvő sorrend (olcsó -> drága)
    } else if (jegyRendezes === 'draga') {
        szurtJegyek.sort((a, b) => b.ar - a.ar); // Csökkenő sorrend (drága -> olcsó)
    }

    repjegyekKirajzolasa(szurtJegyek);

    // --- Szállások szűrése és rendezése ---
    const szallasKereses = document.getElementById('szallas-kereso').value.toLowerCase();
    const szallasRendezes = document.getElementById('szallas-rendezes').value;

    let szurtSzallasok = szallasAdatok.filter(s => s.nev.toLowerCase().includes(szallasKereses));

    if (szallasRendezes === 'olcso') {
        szurtSzallasok.sort((a, b) => a.ar - b.ar);
    } else if (szallasRendezes === 'draga') {
        szurtSzallasok.sort((a, b) => b.ar - a.ar);
    }

    szallasokKirajzolasa(szurtSzallasok);
}

/* ==========================================================================
   4. OLDALVÁLTÁS (NAVIGÁCIÓ)
   ========================================================================== */

// Egyszerű SPA (Single Page Application) logika megvalósítása
function oldalValtas(oldalId) {
    // Az összes oldal és nav elem inaktívvá tétele
    document.querySelectorAll('.oldal').forEach(oldal => oldal.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    // A kiválasztott oldal és gomb aktiválása
    document.getElementById(oldalId).classList.add('active');
    
    const aktivGomb = document.querySelector(`.nav-link[onclick="oldalValtas('${oldalId}')"]`);
    if(aktivGomb) aktivGomb.classList.add('active');

    // Sima görgetés az oldal tetejére (UX javítás)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   5. ESEMÉNYFIGYELŐK ÉS INICIALIZÁLÁS
   ========================================================================== */

// A DOMContentLoaded biztosítja, hogy a JS csak akkor fusson, ha az HTML teljesen betöltődött
document.addEventListener('DOMContentLoaded', () => {
    // 1. Alapértelmezett adatok kirajzolása az oldal betöltésekor
    repjegyekKirajzolasa(repjegyAdatok);
    szallasokKirajzolasa(szallasAdatok);

    // 2. Eseményfigyelők (Event Listeners) hozzáadása a beviteli mezőkhöz
    // 'input' esemény: minden gépelésnél lefut (valós idejű szűrés)
    document.getElementById('jegy-kereso').addEventListener('input', szuresEsRendezes);
    // 'change' esemény: akkor fut le, ha a legördülő menü értéke megváltozik
    document.getElementById('jegy-rendezes').addEventListener('change', szuresEsRendezes);
    
    document.getElementById('szallas-kereso').addEventListener('input', szuresEsRendezes);
    document.getElementById('szallas-rendezes').addEventListener('change', szuresEsRendezes);

    // 3. Kapcsolati űrlap beküldésének kezelése
    document.getElementById('kapcsolat-urlap').addEventListener('submit', (e) => {
        // Megakadályozzuk a böngésző alapértelmezett viselkedését (oldal újratöltése)
        e.preventDefault();
        alert('Köszönjük az üzenetet! Hamarosan válaszolunk.');
        // Az űrlap visszaállítása alapállapotba (mezők ürítése)
        e.target.reset();
    });
});
