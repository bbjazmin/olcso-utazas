/* ==========================================================================
   1. ADATOK – Dinamikus dátumszámítással
   ========================================================================== */

function datumEltolassal(napok) {
    const d = new Date();
    d.setDate(d.getDate() + napok);
    return d;
}

function datumTartomanyFormazas(kezdoEltolas, vegEltolas) {
    const kezdo = datumEltolassal(kezdoEltolas);
    const veg = datumEltolassal(vegEltolas);

    const honapok = [
        'jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.',
        'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'
    ];

    const kezdoHonap = honapok[kezdo.getMonth()];
    const vegHonap = honapok[veg.getMonth()];

    if (kezdoHonap === vegHonap) {
        return `${kezdoHonap} ${kezdo.getDate()}–${veg.getDate()}.`;
    } else {
        return `${kezdoHonap} ${kezdo.getDate()}. – ${vegHonap} ${veg.getDate()}.`;
    }
}


/* ==========================================================================
   2. REPÜLŐJEGY ADATOK
   ========================================================================== */

const repjegyAdatok = [
    {
        nev: "Róma, Olaszország",
        eltolasKezd: 2,
        eltolasVeg: 5,
        legitarsasag: "Wizz Air",
        ar: 18900,
        cimke: "Last minute – 6 hely!",
        kep: "roma",
        url: "https://wizzair.com"
    },
    {
        nev: "London, Egyesült Királyság",
        eltolasKezd: 4,
        eltolasVeg: 8,
        legitarsasag: "Ryanair",
        ar: 24500,
        cimke: "Csupán 3 jegy maradt!",
        kep: "london",
        url: "https://www.ryanair.com"
    },
    {
        nev: "Barcelona, Spanyolország",
        eltolasKezd: 7,
        eltolasVeg: 12,
        legitarsasag: "Vueling",
        ar: 21990,
        cimke: "Akciós ár!",
        kep: "barcelona",
        url: "https://www.vueling.com"
    },
    {
        nev: "Kréta, Görögország",
        eltolasKezd: 3,
        eltolasVeg: 7,
        legitarsasag: "Ryanair",
        ar: 15400,
        cimke: "Villámakció!",
        kep: "kreta",
        url: "https://www.ryanair.com"
    },
    {
        nev: "Párizs, Franciaország",
        eltolasKezd: 6,
        eltolasVeg: 9,
        legitarsasag: "Air France",
        ar: 29900,
        cimke: "Népszerű út!",
        kep: "parizs",
        url: "https://www.skyscanner.hu"
    },
    {
        nev: "Amszterdam, Hollandia",
        eltolasKezd: 10,
        eltolasVeg: 13,
        legitarsasag: "KLM",
        ar: 32000,
        cimke: "Szezonális kedvezmény",
        kep: "amszterdam",
        url: "https://www.skyscanner.hu"
    },
    {
        nev: "Milánó, Olaszország",
        eltolasKezd: 1,
        eltolasVeg: 3,
        legitarsasag: "Wizz Air",
        ar: 12900,
        cimke: "Holnaputáni indulás!",
        kep: "milano",
        url: "https://wizzair.com"
    },
    {
        nev: "Málta",
        eltolasKezd: 8,
        eltolasVeg: 14,
        legitarsasag: "Ryanair",
        ar: 19500,
        cimke: "Tengerparti pihenés",
        kep: "malta",
        url: "https://www.ryanair.com"
    }
];


/* ==========================================================================
   3. SZÁLLÁS ADATOK
   ========================================================================== */

const szallasAdatok = [
    {
        nev: "Tengerparti apartman – Kréta",
        leiras: "📍 150 m a tengerparttól",
        ertekeles: "⭐ 4,3 / 5 (128 értékelés)",
        ar: 12500,
        kep: "hotel1",
        url: "https://www.booking.com"
    },
    {
        nev: "Belvárosi hostel – Róma",
        leiras: "📍 300 m a Colosseumtól",
        ertekeles: "⭐ 4,1 / 5 (96 értékelés)",
        ar: 9900,
        kep: "hotel2",
        url: "https://www.booking.com"
    },
    {
        nev: "Panorámás hotel – Barcelona",
        leiras: "📍 5 perc a Sagrada Famíliától",
        ertekeles: "⭐ 4,6 / 5 (211 értékelés)",
        ar: 18000,
        kep: "hotel3",
        url: "https://www.booking.com"
    },
    {
        nev: "Csendes vendégház – London",
        leiras: "📍 Metrómegálló 2 percre",
        ertekeles: "⭐ 4,0 / 5 (74 értékelés)",
        ar: 16200,
        kep: "hotel4",
        url: "https://www.airbnb.hu"
    },
    {
        nev: "Boutique Hotel – Párizs",
        leiras: "📍 Eiffeltoronyra néző kilátás",
        ertekeles: "⭐ 4,8 / 5 (305 értékelés)",
        ar: 28900,
        kep: "hotel5",
        url: "https://www.booking.com"
    },
    {
        nev: "Kanal-oldali Apartman – Amszterdam",
        leiras: "📍 A belváros szívében",
        ertekeles: "⭐ 4,5 / 5 (150 értékelés)",
        ar: 24000,
        kep: "hotel6",
        url: "https://www.airbnb.hu"
    },
    {
        nev: "Dóm Dűlő Panzió – Milánó",
        leiras: "📍 10 perc sétára a Dómtól",
        ertekeles: "⭐ 4,2 / 5 (89 értékelés)",
        ar: 14500,
        kep: "hotel7",
        url: "https://www.booking.com"
    },
    {
        nev: "Tengerre néző rezidencia – Málta",
        leiras: "📍 Saját medencével",
        ertekeles: "⭐ 4,7 / 5 (180 értékelés)",
        ar: 21000,
        kep: "hotel8",
        url: "https://www.booking.com"
    }
];


/* ==========================================================================
   4. REPJEGYEK MEGJELENÍTÉSE
   ========================================================================== */

function repjegyekKirajzolasa(lista) {
    const kontener = document.getElementById('jegyek-kontener');

    kontener.innerHTML = '';

    lista.forEach(jegy => {

        const datumSzoveg = datumTartomanyFormazas(
            jegy.eltolasKezd,
            jegy.eltolasVeg
        );

        kontener.innerHTML += `
            <article class="kartya">

                <img 
                    src="kepek/${jegy.kep}.jpg" 
                    alt="${jegy.nev}"
                    loading="lazy"
                >

                <div class="kartya-tartalom">

                    <h3>${jegy.nev}</h3>

                    <p class="kartya-info">
                        📅 Dátum:
                        <strong>${datumSzoveg}</strong>
                    </p>

                    <p class="kartya-info">
                        ✈️ Légitársaság:
                        <strong>${jegy.legitarsasag}</strong>
                    </p>

                    <p class="ar">
                        ${jegy.ar.toLocaleString('hu-HU')} Ft / fő
                    </p>

                    <span class="cimke">
                        ${jegy.cimke}
                    </span>

                    <a 
                        href="${jegy.url}" 
                        target="_blank"
                        class="vasarlas-gomb"
                    >
                        Jegy vásárlása ➔
                    </a>

                </div>
            </article>
        `;
    });
}


/* ==========================================================================
   5. SZÁLLÁSOK MEGJELENÍTÉSE
   ========================================================================== */

function szallasokKirajzolasa(lista) {
    const kontener = document.getElementById('szallasok-kontener');

    kontener.innerHTML = '';

    lista.forEach(szallas => {

        kontener.innerHTML += `
            <article class="kartya">

                <img 
                    src="kepek/${szallas.kep}.jpg" 
                    alt="${szallas.nev}"
                    loading="lazy"
                >

                <div class="kartya-tartalom">

                    <h3>${szallas.nev}</h3>

                    <p class="kartya-info">
                        ${szallas.leiras}
                    </p>

                    <p class="kartya-info">
                        ${szallas.ertekeles}
                    </p>

                    <p class="ar">
                        ${szallas.ar.toLocaleString('hu-HU')} Ft / éj
                    </p>

                    <a 
                        href="${szallas.url}" 
                        target="_blank"
                        class="vasarlas-gomb"
                    >
                        Szállás foglalása ➔
                    </a>

                </div>
            </article>
        `;
    });
}


/* ==========================================================================
   6. KERESÉS ÉS RENDEZÉS
   ========================================================================== */

function szuresEsRendezes() {

    /* REPJEGYEK */

    const jegyKereses = document
        .getElementById('jegy-kereso')
        .value
        .toLowerCase();

    const jegyRendezes = document
        .getElementById('jegy-rendezes')
        .value;

    let szurtJegyek = repjegyAdatok.filter(jegy =>
        jegy.nev.toLowerCase().includes(jegyKereses)
    );

    if (jegyRendezes === 'olcso') {

        szurtJegyek.sort((a, b) => a.ar - b.ar);

    } else if (jegyRendezes === 'draga') {

        szurtJegyek.sort((a, b) => b.ar - a.ar);
    }

    repjegyekKirajzolasa(szurtJegyek);


    /* SZÁLLÁSOK */

    const szallasKereses = document
        .getElementById('szallas-kereso')
        .value
        .toLowerCase();

    const szallasRendezes = document
        .getElementById('szallas-rendezes')
        .value;

    let szurtSzallasok = szallasAdatok.filter(szallas =>
        szallas.nev.toLowerCase().includes(szallasKereses)
    );

    if (szallasRendezes === 'olcso') {

        szurtSzallasok.sort((a, b) => a.ar - b.ar);

    } else if (szallasRendezes === 'draga') {

        szurtSzallasok.sort((a, b) => b.ar - a.ar);
    }

    szallasokKirajzolasa(szurtSzallasok);
}


/* ==========================================================================
   7. OLDALVÁLTÁS
   ========================================================================== */

function oldalValtas(oldalId) {

    document
        .querySelectorAll('.oldal')
        .forEach(oldal => {
            oldal.classList.remove('active');
        });

    document
        .querySelectorAll('.nav-link')
        .forEach(link => {
            link.classList.remove('active');
        });

    document
        .getElementById(oldalId)
        .classList.add('active');

    const aktivGomb = document.querySelector(
        `.nav-link[onclick="oldalValtas('${oldalId}')"]`
    );

    if (aktivGomb) {
        aktivGomb.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* ==========================================================================
   8. OLDAL BETÖLTÉSE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* Kezdő kártyák */

    repjegyekKirajzolasa(repjegyAdatok);

    szallasokKirajzolasa(szallasAdatok);


    /* Repjegy keresés */

    document
        .getElementById('jegy-kereso')
        .addEventListener('input', szuresEsRendezes);

    document
        .getElementById('jegy-rendezes')
        .addEventListener('change', szuresEsRendezes);


    /* Szállás keresés */

    document
        .getElementById('szallas-kereso')
        .addEventListener('input', szuresEsRendezes);

    document
        .getElementById('szallas-rendezes')
        .addEventListener('change', szuresEsRendezes);


    /* Kapcsolatfelvételi űrlap */

    document
        .getElementById('kapcsolat-urlap')
        .addEventListener('submit', (e) => {

            e.preventDefault();

            alert(
                'Köszönjük az üzenetet! Hamarosan válaszolunk.'
            );

            e.target.reset();
        });
});
