// =========================================================================
// 1. DATA KATALOG PRODUK (8 MODEL SOFA DALAM 4 KATEGORI)
// =========================================================================
const SWATCH_PALETTE = {
    linen:    { name: `Krem Linen`,       main: `var(--swatch-linen)`,    shade: `var(--swatch-linen-shade)`,    deep: `var(--swatch-linen-deep)` },
    charcoal: { name: `Charcoal Gelap`,   main: `var(--swatch-charcoal)`, shade: `var(--swatch-charcoal-shade)`, deep: `var(--swatch-charcoal-deep)` },
    taupe:    { name: `Taupe Hangat`,     main: `var(--swatch-taupe)`,    shade: `var(--swatch-taupe-shade)`,    deep: `var(--swatch-taupe-deep)` },
    cognac:   { name: `Kulit Cognac`,     main: `var(--swatch-cognac)`,   shade: `var(--swatch-cognac-shade)`,   deep: `var(--swatch-cognac-deep)` },
    slate:    { name: `Abu-abu Slate`,    main: `var(--swatch-slate)`,    shade: `var(--swatch-slate-shade)`,    deep: `var(--swatch-slate-deep)` },
    cream:    { name: `Putih Krem`,       main: `var(--swatch-cream)`,    shade: `var(--swatch-cream-shade)`,    deep: `var(--swatch-cream-deep)` },
    olive:    { name: `Hijau Zaitun`,     main: `var(--swatch-olive)`,    shade: `var(--swatch-olive-shade)`,    deep: `var(--swatch-olive-deep)` },
    obsidian: { name: `Hitam Obsidian`,   main: `var(--swatch-obsidian)`, shade: `var(--swatch-obsidian-shade)`, deep: `var(--swatch-obsidian-deep)` }
};

const PRODUCTS = [
    {
    id: `aurelia-linen`,
    name: `Aurelia 3-Seater Linen`,
    category: `Sofa Minimalis`,
    price: 8950000,
    dimensions: `215 × 88 × 78 cm`,
    frame: `Kayu Jati Solid Kiln-Dried`,
    cushion: `Busa High-Resilience D32 + Dakron Silikon`,
    warranty: `Garansi Rangka 5 Tahun • Sarung Bantal Lepas-Pasang`,
    shortDesc: `Garis desain bersih bergaya Skandinavia dengan kain tenun linen bernapas dan kaki kayu jati meruncing.`,
    fullDesc: `Aurelia dirancang untuk menghadirkan keseimbangan visual di ruang tamu modern. Tiga bantalan dudukan terpisah menjaga kepadatan tetap rata, sementara jarak kolong 16 cm memudahkan pembersihan lantai di bawah sofa.`,
    swatches: [`linen`, `taupe`, `charcoal`],
    shape: `scandi3`
    },
    {
    id: `sora-loveseat`,
    name: `Sora Low-Profile Loveseat`,
    category: `Sofa Minimalis`,
    price: 6450000,
    dimensions: `165 × 84 × 76 cm`,
    frame: `Kayu Mahoni Oven & Kaki Baja Matte`,
    cushion: `Memory Foam Berlapis Katun-Linen`,
    warranty: `Garansi Rangka 5 Tahun • Termasuk 2 Bantal Guling`,
    shortDesc: `Proporsi kompak 2 dudukan untuk apartemen atau sudut baca, memadukan katun-linen lembut dan kaki baja ramping.`,
    fullDesc: `Dengan lebar 165 cm dan sandaran lengan tipis, Sora memaksimalkan area duduk tanpa membebani ruang sempit. Cocok ditempatkan di ruang keluarga minimalis, studio kerja, maupun kamar utama.`,
    swatches: [`cream`, `slate`, `charcoal`],
    shape: `loveseat`
    },
    {
    id: `verona-leather`,
    name: `Verona Heritage Leather`,
    category: `Sofa Kulit`,
    price: 18500000,
    dimensions: `228 × 94 × 80 cm`,
    frame: `Kayu Oak Amerika & Pegas Baja`,
    cushion: `Busa Latex Natural + Pocket Spring`,
    warranty: `Garansi Kulit & Rangka 7 Tahun`,
    shortDesc: `Kulit sapi full-grain berkarakter dengan jahitan tuft modern dan kaki blok kayu gelap yang kokoh.`,
    fullDesc: `Verona memadukan ketangguhan kulit full-grain alami dengan detail jahitan dalam yang presisi. Semakin lama digunakan, permukaan kulit akan membentuk kilau patina alami yang memperkaya suasana ruang.`,
    swatches: [`cognac`, `obsidian`, `taupe`],
    shape: `heritage`
    },
    {
    id: `valen-saddle`,
    name: `Valen Cognac Saddle`,
    category: `Sofa Kulit`,
    price: 14800000,
    dimensions: `205 × 90 × 79 cm`,
    frame: `Baja Powder-Coated & Rangka Sungkai`,
    cushion: `High-Density Foam + Lapisan Bulu Angsa Sintetis`,
    warranty: `Garansi Rangka 5 Tahun • Perawatan Anti-Gores Ringan`,
    shortDesc: `Sofa kulit bergaya mid-century dengan bantalan samping terintegrasi, jahitan sadel presisi, dan kaki besi minimalis.`,
    fullDesc: `Didesain dengan sudut sandaran 104 derajat untuk kenyamanan bersantai jangka panjang, Valen menonjolkan detail jahitan tepi luar (saddle stitch) dan pelapis kulit semi-matte yang lembut saat disentuh.`,
    swatches: [`charcoal`, `cognac`, `linen`],
    shape: `midcentury`
    },
    {
    id: `nordic-sectional`,
    name: `Nordic Haven L-Sectional`,
    category: `Sofa L / Sectional`,
    price: 15900000,
    dimensions: `285 × 175 × 82 cm`,
    frame: `Kayu Solid Oven + Slat Karet Elastis`,
    cushion: `Busa D34 Dual-Layer Anti-Kempes`,
    warranty: `Garansi Rangka 5 Tahun • Posisi Chaise Reversible`,
    shortDesc: `Konfigurasi sudut L luas berkapasitas 5 orang dengan chaise lounge panjang dan kain tenun anti-noda.`,
    fullDesc: `Nordic Haven menjadi pusat berkumpul keluarga dengan satu sisi chaise lounge untuk meluruskan kaki sepenuhnya. Kain performance weave-nya membantu cairan tidak mudah meresap ke dalam serat.`,
    swatches: [`linen`, `slate`, `charcoal`],
    shape: `sectionalL`
    },
    {
    id: `kanso-corner`,
    name: `Kanso Grand Corner`,
    category: `Sofa L / Sectional`,
    price: 21200000,
    dimensions: `310 × 190 × 75 cm`,
    frame: `Kayu Oak Natural & Sungkai`,
    cushion: `Down-Feather Blend + Core Foam`,
    warranty: `Garansi Rangka 7 Tahun • Termasuk Side Tray Oak`,
    shortDesc: `Sectional sudut asimetris bergaya Japandi rendah yang dilengkapi meja sisi kayu oak terintegrasi.`,
    fullDesc: `Terinspirasi ketenangan arsitektur Japandi, Kanso memiliki siluet rendah yang menjaga garis pandang ruangan tetap lega. Panel kayu di ujung kiri berfungsi praktis sebagai tatakan cangkir atau buku.`,
    swatches: [`cream`, `taupe`, `olive`],
    shape: `japandiL`
    },
    {
    id: `nuvola-modular`,
    name: `Nuvola Cloud Modular`,
    category: `Modular & Recliner`,
    price: 16750000,
    dimensions: `270 × 105 × 72 cm (Fleksibel)`,
    frame: `Multiplex Keras & Pengait Baja Tersembunyi`,
    cushion: `Multi-Density Cloud Foam + Kain Bouclé`,
    warranty: `Garansi Struktur 5 Tahun • Tambah Modul Kapan Saja`,
    shortDesc: `Terdiri dari 4 modul bebas susun dengan kain bouclé bertekstur awan dan dudukan ekstra dalam.`,
    fullDesc: `Nuvola memberi kebebasan penuh menata ulang ruang tamu: susun memanjang sebagai sofa lurus, bentuk sudut L, atau pisahkan menjadi kursi santai individu menggunakan klip pengait bawah yang tersembunyi.`,
    swatches: [`cream`, `linen`, `slate`],
    shape: `modular`
    },
    {
    id: `apex-recliner`,
    name: `Apex Dual Power Recliner`,
    category: `Modular & Recliner`,
    price: 13900000,
    dimensions: `198 × 96 × 102 cm`,
    frame: `Mekanisme Baja Karbon & Kayu Solid`,
    cushion: `Ergonomic Contoured Foam + Microfiber`,
    warranty: `Garansi Motor 3 Tahun • Port USB-C Tersembunyi`,
    shortDesc: `Sofa recliner elektrik dengan motor senyap untuk kemiringan sandaran hingga 145 derajat dan sandaran kepala tinggi.`,
    fullDesc: `Dirancang bagi pencinta kenyamanan sinema rumah, Apex memungkinkan penyesuaian sudut kaki dan sandaran secara independen lewat tombol sentuh di sisi lengan bagian dalam.`,
    swatches: [`charcoal`, `taupe`, `obsidian`],
    shape: `recliner`
    }
];

// =========================================================================
// 2. STATE APLIKASI (DISINKRONKAN DENGAN notebookAppApi)
// =========================================================================
let appState = {
    activeCategory: `Semua`,
    searchQuery: ``,
    sortOrder: `default`,
    heroProductIdx: 0,
    selectedSwatches: {}, // { productId: swatchKey }
    cart: [],             // [{ id, swatch, qty }]
    submittedOrders: []   // [{ orderCode, name, total, dateStr, itemCount }]
};

let activeModalProductId = null;
let toastTimer = null;

// Initialize default swatches
PRODUCTS.forEach(function(p) {
    appState.selectedSwatches[p.id] = p.swatches[0];
});

// =========================================================================
// 3. FORMATTER & SVG VECTOR SOFA RENDERER
// =========================================================================
function formatRupiah(num) {
    return `Rp ` + Number(num).toLocaleString(`id-ID`);
}

function buildSofaSVG(shape, swatchKey) {
    const sw = SWATCH_PALETTE[swatchKey] || SWATCH_PALETTE.linen;
    const cMain = sw.main;
    const cShade = sw.shade;
    const cDeep = sw.deep;

    if (shape === `scandi3`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="152" rx="126" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <line x1="48" y1="126" x2="40" y2="150" stroke="var(--wood-oak)" stroke-width="6" stroke-linecap="round"/>
        <line x1="272" y1="126" x2="280" y2="150" stroke="var(--wood-oak)" stroke-width="6" stroke-linecap="round"/>
        <line x1="160" y1="126" x2="160" y2="149" stroke="var(--wood-oak)" stroke-width="5" stroke-linecap="round"/>
        <rect x="34" y="114" width="252" height="14" rx="3" fill="var(--wood-oak)"/>
        <rect x="36" y="42" width="248" height="58" rx="10" fill="${cShade}"/>
        <rect x="46" y="48" width="73" height="48" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="123.5" y="48" width="73" height="48" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="201" y="48" width="73" height="48" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="26" y="68" width="22" height="48" rx="7" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="272" y="68" width="22" height="48" rx="7" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="46" y="92" width="73" height="24" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="123.5" y="92" width="73" height="24" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="201" y="92" width="73" height="24" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
    </svg>`;
    }

    if (shape === `loveseat`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="152" rx="100" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <line x1="72" y1="124" x2="66" y2="150" stroke="var(--metal-dark)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="248" y1="124" x2="254" y2="150" stroke="var(--metal-dark)" stroke-width="4.5" stroke-linecap="round"/>
        <rect x="64" y="48" width="192" height="58" rx="14" fill="${cShade}"/>
        <rect x="74" y="54" width="82" height="46" rx="8" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="164" y="54" width="82" height="46" rx="8" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="54" y="72" width="20" height="50" rx="8" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="246" y="72" width="20" height="50" rx="8" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="74" y="94" width="172" height="26" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <line x1="160" y1="94" x2="160" y2="120" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="64" y="120" width="192" height="6" rx="2" fill="var(--metal-dark)"/>
    </svg>`;
    }

    if (shape === `heritage`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="152" rx="132" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <rect x="38" y="132" width="14" height="18" rx="2" fill="var(--wood-walnut)"/>
        <rect x="268" y="132" width="14" height="18" rx="2" fill="var(--wood-walnut)"/>
        <rect x="28" y="44" width="264" height="72" rx="12" fill="${cShade}" stroke="${cDeep}" stroke-width="1.2"/>
        <circle cx="72" cy="66" r="2.2" fill="${cDeep}"/><circle cx="116" cy="66" r="2.2" fill="${cDeep}"/>
        <circle cx="160" cy="66" r="2.2" fill="${cDeep}"/><circle cx="204" cy="66" r="2.2" fill="${cDeep}"/>
        <circle cx="248" cy="66" r="2.2" fill="${cDeep}"/>
        <circle cx="94" cy="82" r="2.2" fill="${cDeep}"/><circle cx="138" cy="82" r="2.2" fill="${cDeep}"/>
        <circle cx="182" cy="82" r="2.2" fill="${cDeep}"/><circle cx="226" cy="82" r="2.2" fill="${cDeep}"/>
        <rect x="22" y="64" width="30" height="68" rx="12" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="268" y="64" width="30" height="68" rx="12" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="52" y="96" width="106" height="24" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="162" y="96" width="106" height="24" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="34" y="120" width="252" height="14" rx="3" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
    </svg>`;
    }

    if (shape === `midcentury`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="152" rx="122" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <line x1="56" y1="124" x2="48" y2="150" stroke="var(--metal-dark)" stroke-width="4" stroke-linecap="round"/>
        <line x1="264" y1="124" x2="272" y2="150" stroke="var(--metal-dark)" stroke-width="4" stroke-linecap="round"/>
        <rect x="44" y="48" width="232" height="56" rx="6" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="54" y="54" width="103" height="44" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="163" y="54" width="103" height="44" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="36" y="72" width="18" height="46" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="266" y="72" width="18" height="46" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="54" y="94" width="103" height="24" rx="3" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="163" y="94" width="103" height="24" rx="3" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="44" y="118" width="232" height="8" rx="2" fill="var(--wood-walnut)"/>
    </svg>`;
    }

    if (shape === `sectionalL`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="154" rx="138" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <rect x="34" y="130" width="8" height="18" fill="var(--wood-walnut)"/>
        <rect x="190" y="130" width="8" height="18" fill="var(--wood-walnut)"/>
        <rect x="282" y="138" width="8" height="14" fill="var(--wood-walnut)"/>
        <rect x="26" y="44" width="268" height="56" rx="8" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="38" y="50" width="60" height="44" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="102" y="50" width="60" height="44" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="166" y="50" width="60" height="44" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="230" y="50" width="54" height="44" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="20" y="70" width="18" height="58" rx="6" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="282" y="70" width="18" height="68" rx="6" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="38" y="92" width="166" height="32" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <line x1="120" y1="92" x2="120" y2="124" stroke="${cDeep}" stroke-width="1"/>
        <rect x="204" y="92" width="78" height="48" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="26" y="124" width="178" height="8" fill="${cDeep}" opacity="0.4"/>
    </svg>`;
    }

    if (shape === `japandiL`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="154" rx="140" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <rect x="18" y="128" width="284" height="10" rx="2" fill="var(--wood-oak)"/>
        <rect x="28" y="138" width="12" height="10" fill="var(--wood-walnut)"/>
        <rect x="280" y="138" width="12" height="10" fill="var(--wood-walnut)"/>
        <rect x="20" y="102" width="38" height="26" rx="2" fill="var(--wood-oak)" stroke="var(--wood-walnut)" stroke-width="1"/>
        <rect x="58" y="54" width="236" height="48" rx="6" fill="${cShade}"/>
        <rect x="66" y="58" width="70" height="40" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="140" y="58" width="70" height="40" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="214" y="58" width="70" height="40" rx="5" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="58" y="96" width="144" height="32" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="204" y="96" width="90" height="44" rx="4" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="292" y="72" width="12" height="56" rx="4" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
    </svg>`;
    }

    if (shape === `modular`) {
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="160" cy="152" rx="134" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
        <rect x="28" y="52" width="264" height="62" rx="18" fill="${cShade}"/>
        <rect x="36" y="56" width="60" height="50" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="100" y="56" width="60" height="50" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="164" y="56" width="60" height="50" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="228" y="56" width="56" height="50" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
        <rect x="24" y="88" width="68" height="56" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="94" y="88" width="66" height="56" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="162" y="88" width="66" height="56" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
        <rect x="230" y="88" width="66" height="56" rx="14" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
    </svg>`;
    }

    // recliner
    return `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="160" cy="154" rx="122" ry="7" fill="var(--outline-stone)" opacity="0.45"/>
    <rect x="46" y="34" width="110" height="68" rx="12" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
    <rect x="164" y="34" width="110" height="68" rx="12" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
    <rect x="54" y="40" width="94" height="32" rx="8" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
    <rect x="172" y="40" width="94" height="32" rx="8" fill="${cMain}" stroke="${cDeep}" stroke-width="1"/>
    <rect x="28" y="68" width="26" height="68" rx="9" fill="${cShade}" stroke="${cDeep}" stroke-width="1.2"/>
    <rect x="266" y="68" width="26" height="68" rx="9" fill="${cShade}" stroke="${cDeep}" stroke-width="1.2"/>
    <rect x="54" y="96" width="102" height="38" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
    <rect x="164" y="96" width="102" height="38" rx="6" fill="${cMain}" stroke="${cDeep}" stroke-width="1.2"/>
    <rect x="58" y="132" width="94" height="14" rx="4" fill="${cDeep}"/>
    <rect x="168" y="128" width="94" height="16" rx="4" fill="${cShade}" stroke="${cDeep}" stroke-width="1"/>
    </svg>`;
}

// =========================================================================
// 4. PERSISTENSI STATE & INISIALISASI
// =========================================================================
async function saveState() {
    try {
    if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
        await window.notebookAppApi.setAppState(appState);
    }
    } catch (e) {
    // Ignore persistence errors safely
    }
}

async function initApp() {
    try {
    if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        const saved = await window.notebookAppApi.getAppState();
        if (saved && typeof saved === `object`) {
        if (saved.activeCategory) appState.activeCategory = saved.activeCategory;
        if (typeof saved.searchQuery === `string`) appState.searchQuery = saved.searchQuery;
        if (saved.sortOrder) appState.sortOrder = saved.sortOrder;
        if (typeof saved.heroProductIdx === `number`) appState.heroProductIdx = saved.heroProductIdx;
        if (saved.selectedSwatches) {
            appState.selectedSwatches = Object.assign({}, appState.selectedSwatches, saved.selectedSwatches);
        }
        if (Array.isArray(saved.cart)) appState.cart = saved.cart;
        if (Array.isArray(saved.submittedOrders)) appState.submittedOrders = saved.submittedOrders;
        }
    }
    } catch (e) {
    // Use defaults if loading fails
    }

    // Sync UI inputs from restored state
    const searchEl = document.getElementById(`catalog-search`);
    if (searchEl) searchEl.value = appState.searchQuery;

    const sortEl = document.getElementById(`catalog-sort`);
    if (sortEl) sortEl.value = appState.sortOrder;

    updateCategoryButtonsUI();
    renderHeroFeature();
    renderCatalog();
    renderOrderSummary();
    renderOrderHistory();
    setupScrollObserver();

    if (window.lucide && typeof window.lucide.createIcons === `function`) {
    window.lucide.createIcons();
    }
    if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
    window.notebookAppApi.notifyAppReady();
    }
}

// =========================================================================
// 5. NAVIGASI & SCROLL REVEAL
// =========================================================================
function navigateToSection(sectionId, event) {
    if (event) event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
    target.scrollIntoView({ behavior: `smooth`, block: `start` });
    }
    const links = document.querySelectorAll(`.nav-link`);
    links.forEach(function(link) {
    if (link.dataset.nav === sectionId) {
        link.classList.add(`active`);
    } else {
        link.classList.remove(`active`);
    }
    });
    // Close mobile menu after clicking
    const navWrap = document.getElementById(`main-nav-wrapper`);
    const menuBtn = document.getElementById(`mobile-menu-btn`);
    if (navWrap && navWrap.classList.contains(`open`)) {
    navWrap.classList.remove(`open`);
    if (menuBtn) menuBtn.setAttribute(`aria-expanded`, `false`);
    }
}

function toggleMobileMenu() {
    const navWrap = document.getElementById(`main-nav-wrapper`);
    const menuBtn = document.getElementById(`mobile-menu-btn`);
    if (!navWrap || !menuBtn) return;
    const isOpen = navWrap.classList.toggle(`open`);
    menuBtn.setAttribute(`aria-expanded`, isOpen ? `true` : `false`);
}

function setupScrollObserver() {
    const reveals = document.querySelectorAll(`.reveal`);
    if (!(`IntersectionObserver` in window)) {
    reveals.forEach(function(el) { el.classList.add(`visible`); });
    return;
    }
    const obs = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        entry.target.classList.add(`visible`);
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.08 });

    reveals.forEach(function(el) {
    obs.observe(el);
    });
}

// =========================================================================
// 6. HERO SHOWCASE SWITCHER
// =========================================================================
function selectHeroFeature(idx) {
    if (idx < 0 || idx >= PRODUCTS.length) return;
    appState.heroProductIdx = idx;
    renderHeroFeature();
    saveState();
}

function renderHeroFeature() {
    const product = PRODUCTS[appState.heroProductIdx] || PRODUCTS[0];
    const swKey = appState.selectedSwatches[product.id] || product.swatches[0];
    const stage = document.getElementById(`hero-svg-stage`);
    const titleEl = document.getElementById(`hero-feature-title`);
    const metaEl = document.getElementById(`hero-feature-meta`);

    if (stage) stage.innerHTML = buildSofaSVG(product.shape, swKey);
    if (titleEl) titleEl.textContent = product.name;
    if (metaEl) metaEl.textContent = `${product.category} • ${formatRupiah(product.price)}`;

    const btns = document.querySelectorAll(`.hero-switch-btn`);
    btns.forEach(function(btn) {
    const bIdx = Number(btn.dataset.heroIdx);
    btn.classList.toggle(`active`, bIdx === appState.heroProductIdx);
    });
}

// =========================================================================
// 7. KATALOG FILTER, PENCARIAN & RENDER KARTU PRODUK
// =========================================================================
function updateCategoryButtonsUI() {
    const buttons = document.querySelectorAll(`.filter-btn`);
    buttons.forEach(function(btn) {
    btn.classList.toggle(`active`, btn.dataset.cat === appState.activeCategory);
    });
}

function setCategory(cat) {
    appState.activeCategory = cat;
    updateCategoryButtonsUI();
    renderCatalog();
    saveState();
}

function setSearchQuery(val) {
    appState.searchQuery = val;
    renderCatalog();
    saveState();
}

function setSortOrder(val) {
    appState.sortOrder = val;
    renderCatalog();
    saveState();
}

function resetCatalogFilters() {
    appState.activeCategory = `Semua`;
    appState.searchQuery = ``;
    appState.sortOrder = `default`;
    const searchEl = document.getElementById(`catalog-search`);
    if (searchEl) searchEl.value = ``;
    const sortEl = document.getElementById(`catalog-sort`);
    if (sortEl) sortEl.value = `default`;
    updateCategoryButtonsUI();
    renderCatalog();
    saveState();
}

function selectProductSwatch(productId, swatchKey) {
    appState.selectedSwatches[productId] = swatchKey;
    renderCatalog();
    renderHeroFeature();
    if (activeModalProductId === productId) {
    renderModalVisualAndSwatches(productId);
    }
    saveState();
}

function getFilteredProducts() {
    const q = appState.searchQuery.trim().toLowerCase();
    let list = PRODUCTS.filter(function(p) {
    const matchCat = appState.activeCategory === `Semua` || p.category === appState.activeCategory;
    if (!matchCat) return false;
    if (!q) return true;
    const haystack = `${p.name} ${p.category} ${p.shortDesc} ${p.frame} ${p.cushion}`.toLowerCase();
    return haystack.indexOf(q) !== -1;
    });

    if (appState.sortOrder === `price-asc`) {
    list = list.slice().sort(function(a, b) { return a.price - b.price; });
    } else if (appState.sortOrder === `price-desc`) {
    list = list.slice().sort(function(a, b) { return b.price - a.price; });
    }
    return list;
}

function renderCatalog() {
    const grid = document.getElementById(`catalog-grid`);
    const countLabel = document.getElementById(`catalog-count-label`);
    if (!grid) return;

    const items = getFilteredProducts();
    if (countLabel) {
    countLabel.textContent = `Menampilkan ${items.length} dari ${PRODUCTS.length} produk`;
    }

    if (items.length === 0) {
    grid.innerHTML = `<div class="empty-catalog">
        <p style="margin: 0; font-weight: 600; color: var(--on-surface);">Tidak ada sofa yang cocok dengan kata kunci atau filter Anda.</p>
        <p style="margin: 0; color: var(--on-surface-variant); font-size: 0.9rem;">Coba gunakan kata kunci lain atau kembalikan ke semua kategori.</p>
        <button type="button" class="btn btn-primary" onclick="resetCatalogFilters()">Reset Semua Filter</button>
    </div>`;
    return;
    }

    grid.innerHTML = items.map(function(p) {
    const activeSwKey = appState.selectedSwatches[p.id] || p.swatches[0];
    const activeSw = SWATCH_PALETTE[activeSwKey] || SWATCH_PALETTE.linen;

    const swatchesHtml = p.swatches.map(function(swKey) {
        const swObj = SWATCH_PALETTE[swKey];
        const isActive = swKey === activeSwKey ? `active` : ``;
        return `<button type="button" class="swatch-dot ${isActive}" style="background-color: ${swObj.main};" aria-label="Pilih warna ${swObj.name} untuk ${p.name}" title="${swObj.name}" onclick="selectProductSwatch('${p.id}', '${swKey}')"></button>`;
    }).join(``);

    return `<article class="product-card">
        <div class="product-visual">
        <span class="product-badge">${p.category}</span>
        ${buildSofaSVG(p.shape, activeSwKey)}
        </div>
        <div class="product-body">
        <div class="product-swatches">
            ${swatchesHtml}
            <span class="swatch-name-inline">${activeSw.name}</span>
        </div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.shortDesc}</p>
        <div class="product-meta-row">
            <span class="product-price">${formatRupiah(p.price)}</span>
            <span class="product-dim">${p.dimensions.split(` (`)[0]}</span>
        </div>
        <div class="product-actions">
            <button type="button" class="btn btn-secondary" onclick="openProductModal('${p.id}')">Lihat Detail</button>
            <button type="button" class="btn btn-primary" onclick="addToSimulatedOrder('${p.id}')">Simulasi Pesan</button>
        </div>
        </div>
    </article>`;
    }).join(``);
}

// =========================================================================
// 8. MODAL DETAIL PRODUK & MODAL KONFIRMASI
// =========================================================================
function renderModalVisualAndSwatches(productId) {
    const p = PRODUCTS.find(function(item) { return item.id === productId; });
    if (!p) return;
    const activeSwKey = appState.selectedSwatches[p.id] || p.swatches[0];
    const activeSw = SWATCH_PALETTE[activeSwKey];

    const svgContainer = document.getElementById(`modal-svg-container`);
    if (svgContainer) {
    svgContainer.innerHTML = buildSofaSVG(p.shape, activeSwKey);
    }

    const swWrap = document.getElementById(`modal-swatches`);
    if (swWrap) {
    const dots = p.swatches.map(function(swKey) {
        const swObj = SWATCH_PALETTE[swKey];
        const isActive = swKey === activeSwKey ? `active` : ``;
        return `<button type="button" class="swatch-dot ${isActive}" style="background-color: ${swObj.main};" aria-label="Warna ${swObj.name}" title="${swObj.name}" onclick="selectProductSwatch('${p.id}', '${swKey}')"></button>`;
    }).join(``);
    swWrap.innerHTML = `${dots}<span class="swatch-name-inline">${activeSw.name}</span>`;
    }
}

function openProductModal(productId) {
    const p = PRODUCTS.find(function(item) { return item.id === productId; });
    if (!p) return;
    activeModalProductId = productId;

    const setText = function(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
    };

    setText(`modal-product-cat`, p.category);
    setText(`modal-product-title`, p.name);
    setText(`modal-product-price`, formatRupiah(p.price));
    setText(`modal-product-desc`, p.fullDesc);
    setText(`modal-dim-callout`, `Dimensi Unit: ${p.dimensions}`);
    setText(`spec-dim`, p.dimensions);
    setText(`spec-frame`, p.frame);
    setText(`spec-cushion`, p.cushion);
    setText(`spec-warranty`, p.warranty);

    renderModalVisualAndSwatches(productId);

    const modal = document.getElementById(`product-modal`);
    if (modal) modal.classList.add(`open`);
}

function orderFromModal() {
    if (!activeModalProductId) return;
    addToSimulatedOrder(activeModalProductId);
    closeModal(`product-modal`);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove(`open`);
    if (modalId === `product-modal`) activeModalProductId = null;
}

function handleBackdropClick(event, modalId) {
    if (event.target && event.target.id === modalId) {
    closeModal(modalId);
    }
}

document.addEventListener(`keydown`, function(e) {
    if (e.key === `Escape`) {
    closeModal(`product-modal`);
    closeModal(`confirm-modal`);
    }
});

// =========================================================================
// 9. SIMULASI PEMESANAN (KERANJANG & FORMULIR KONTAK)
// =========================================================================
function showToast(message) {
    const toast = document.getElementById(`toast`);
    const msgEl = document.getElementById(`toast-message`);
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.add(`show`);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
    toast.classList.remove(`show`);
    }, 3200);
}

function addToSimulatedOrder(productId) {
    const p = PRODUCTS.find(function(item) { return item.id === productId; });
    if (!p) return;
    const swatch = appState.selectedSwatches[p.id] || p.swatches[0];

    const existing = appState.cart.find(function(c) {
    return c.id === productId && c.swatch === swatch;
    });
    if (existing) {
    existing.qty += 1;
    } else {
    appState.cart.push({ id: productId, swatch: swatch, qty: 1 });
    }

    renderOrderSummary();
    saveState();
    const swName = SWATCH_PALETTE[swatch] ? SWATCH_PALETTE[swatch].name : swatch;
    showToast(`${p.name} (${swName}) ditambahkan ke daftar simulasi.`);
}

function updateCartQty(index, delta) {
    if (index < 0 || index >= appState.cart.length) return;
    appState.cart[index].qty += delta;
    if (appState.cart[index].qty <= 0) {
    appState.cart.splice(index, 1);
    }
    renderOrderSummary();
    saveState();
}

function handleClearCart(btn) {
    if (appState.cart.length === 0) return;
    if (btn && btn.dataset.armed !== `true`) {
    btn.dataset.armed = `true`;
    btn.textContent = `Klik lagi untuk hapus`;
    setTimeout(function() {
        if (btn.dataset.armed === `true`) {
        btn.dataset.armed = `false`;
        btn.textContent = `Kosongkan`;
        }
    }, 3000);
    return;
    }
    appState.cart = [];
    if (btn) {
    btn.dataset.armed = `false`;
    btn.textContent = `Kosongkan`;
    }
    renderOrderSummary();
    saveState();
    showToast(`Daftar simulasi pesanan telah dikosongkan.`);
}

function calculateCartTotal() {
    return appState.cart.reduce(function(sum, item) {
    const p = PRODUCTS.find(function(prod) { return prod.id === item.id; });
    return sum + (p ? p.price * item.qty : 0);
    }, 0);
}

function renderOrderSummary() {
    const listEl = document.getElementById(`order-items-list`);
    const totalEl = document.getElementById(`order-total-val`);
    const countEl = document.getElementById(`header-cart-count`);
    const clearBtn = document.getElementById(`clear-cart-btn`);

    const totalQty = appState.cart.reduce(function(acc, c) { return acc + c.qty; }, 0);
    if (countEl) countEl.textContent = String(totalQty);
    if (clearBtn) clearBtn.style.display = appState.cart.length > 0 ? `inline-flex` : `none`;

    if (totalEl) {
    totalEl.textContent = formatRupiah(calculateCartTotal());
    }
    if (!listEl) return;

    if (appState.cart.length === 0) {
    listEl.innerHTML = `<div style="padding: var(--space-md); background-color: var(--background); border: var(--rule-soft); font-size: 0.88rem; color: var(--on-surface-variant);">
        Belum ada unit sofa yang dipilih. Klik tombol <strong>Simulasi Pesan</strong> pada katalog di atas untuk memasukkan produk, atau langsung kirim pesan konsultasi melalui formulir di samping.
    </div>`;
    return;
    }

    listEl.innerHTML = appState.cart.map(function(item, idx) {
    const p = PRODUCTS.find(function(prod) { return prod.id === item.id; });
    if (!p) return ``;
    const swName = SWATCH_PALETTE[item.swatch] ? SWATCH_PALETTE[item.swatch].name : item.swatch;
    return `<div class="order-item-row">
        <div>
        <div class="order-item-name">${p.name}</div>
        <div class="order-item-sub">Warna: ${swName} &bull; ${formatRupiah(p.price)}</div>
        </div>
        <div class="qty-controls">
        <button type="button" class="qty-btn" aria-label="Kurangi jumlah ${p.name}" onclick="updateCartQty(${idx}, -1)">&minus;</button>
        <span class="qty-num">${item.qty}</span>
        <button type="button" class="qty-btn" aria-label="Tambah jumlah ${p.name}" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
    </div>`;
    }).join(``);
}

function submitOrderForm(event) {
    event.preventDefault();
    const nameInput = document.getElementById(`order-name`);
    const contactInput = document.getElementById(`order-contact`);
    const citySelect = document.getElementById(`order-city`);
    const serviceSelect = document.getElementById(`order-service`);
    const notesInput = document.getElementById(`order-notes`);

    const errName = document.getElementById(`err-name`);
    const errContact = document.getElementById(`err-contact`);
    const statusMsg = document.getElementById(`form-status-msg`);

    if (errName) errName.textContent = ``;
    if (errContact) errContact.textContent = ``;
    if (statusMsg) {
    statusMsg.className = `form-status-msg`;
    statusMsg.textContent = ``;
    }

    const nameVal = nameInput ? nameInput.value.trim() : ``;
    const contactVal = contactInput ? contactInput.value.trim() : ``;
    let hasError = false;

    if (nameVal.length < 2) {
    if (errName) errName.textContent = `Masukkan nama lengkap minimal 2 karakter.`;
    hasError = true;
    }
    if (contactVal.length < 5) {
    if (errContact) errContact.textContent = `Masukkan alamat email atau nomor WhatsApp yang valid.`;
    hasError = true;
    }

    if (hasError) {
    if (statusMsg) {
        statusMsg.className = `form-status-msg error`;
        statusMsg.textContent = `Mohon lengkapi kolom wajib di atas sebelum mengirim simulasi.`;
    }
    return;
    }

    const total = calculateCartTotal();
    const totalItems = appState.cart.reduce(function(acc, c) { return acc + c.qty; }, 0);
    const orderCode = `SIM-${String(Math.floor(1000 + Math.random() * 9000))}`;
    const cityVal = citySelect ? citySelect.value : `-`;
    const serviceVal = serviceSelect ? serviceSelect.value : `-`;
    const notesVal = notesInput && notesInput.value.trim() ? notesInput.value.trim() : `Tidak ada catatan tambahan.`;

    const itemsSummaryHtml = appState.cart.length > 0
    ? appState.cart.map(function(item) {
        const p = PRODUCTS.find(function(prod) { return prod.id === item.id; });
        const swName = SWATCH_PALETTE[item.swatch] ? SWATCH_PALETTE[item.swatch].name : item.swatch;
        return `<div>&bull; ${p ? p.name : item.id} (${swName}) &times; ${item.qty} &mdash; <strong>${formatRupiah(p ? p.price * item.qty : 0)}</strong></div>`;
        }).join(``)
    : `<div>&bull; Pengajuan konsultasi / pertanyaan tanpa item sofa terpilih.</div>`;

    const receiptEl = document.getElementById(`confirm-receipt-body`);
    if (receiptEl) {
    receiptEl.innerHTML = `
        <div><strong>Kode Simulasi:</strong> ${orderCode}</div>
        <div><strong>Pemesan:</strong> ${escapeHtml(nameVal)} (${escapeHtml(contactVal)})</div>
        <div><strong>Keperluan:</strong> ${escapeHtml(serviceVal)}</div>
        <div><strong>Wilayah:</strong> ${escapeHtml(cityVal)}</div>
        <div style="border-top: var(--rule-soft); padding-top: var(--space-xs); margin-top: var(--space-xs);"><strong>Rincian Unit:</strong></div>
        ${itemsSummaryHtml}
        <div style="border-top: var(--rule-soft); padding-top: var(--space-xs); margin-top: var(--space-xs);"><strong>Estimasi Total:</strong> ${formatRupiah(total)}</div>
        <div><strong>Catatan:</strong> ${escapeHtml(notesVal)}</div>
    `;
    }

    appState.submittedOrders.unshift({
    orderCode: orderCode,
    name: nameVal,
    total: total,
    itemCount: totalItems,
    service: serviceVal
    });
    if (appState.submittedOrders.length > 4) {
    appState.submittedOrders = appState.submittedOrders.slice(0, 4);
    }

    renderOrderHistory();
    saveState();

    const confirmModal = document.getElementById(`confirm-modal`);
    if (confirmModal) confirmModal.classList.add(`open`);

    if (statusMsg) {
    statusMsg.className = `form-status-msg success`;
    statusMsg.textContent = `Simulasi ${orderCode} berhasil dicatat.`;
    }
    showToast(`Simulasi ${orderCode} berhasil dikirim!`);
}

function resetOrderForm() {
    const form = document.getElementById(`order-form`);
    if (form) form.reset();
    const errName = document.getElementById(`err-name`);
    const errContact = document.getElementById(`err-contact`);
    const statusMsg = document.getElementById(`form-status-msg`);
    if (errName) errName.textContent = ``;
    if (errContact) errContact.textContent = ``;
    if (statusMsg) {
    statusMsg.className = `form-status-msg`;
    statusMsg.textContent = ``;
    }
}

function renderOrderHistory() {
    const box = document.getElementById(`order-history-box`);
    const list = document.getElementById(`order-history-list`);
    if (!box || !list) return;

    if (appState.submittedOrders.length === 0) {
    box.style.display = `none`;
    return;
    }
    box.style.display = `flex`;
    list.innerHTML = appState.submittedOrders.map(function(o) {
    const detail = o.itemCount > 0 ? `${o.itemCount} unit • ${formatRupiah(o.total)}` : o.service;
    return `<div class="history-chip">
        <span><strong>${o.orderCode}</strong> &mdash; ${escapeHtml(o.name)}</span>
        <span style="color: var(--on-surface-variant);">${escapeHtml(detail)}</span>
    </div>`;
    }).join(``);
}

function escapeHtml(str) {
    return String(str)
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&#39;`);
}

document.addEventListener(`DOMContentLoaded`, initApp);
