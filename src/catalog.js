export const SITE_URL = "https://trueorigin.netlify.app";

export const products = [
  {
    id: "dunkle-schokolade",
    available: true,
    cacaoPercentage: null,
    category: { de: "Intensiv & ausgewogen", en: "Deep & balanced" },
    name: { de: "Dunkle Schokolade", en: "Dark chocolate" },
    tagline: { de: "Klarer Kakao. Langer Nachklang.", en: "Clear cacao. A lingering finish." },
    description: {
      de: "Kräftige Kakaonoten und ein ausgewogener Charakter machen diese Sorte zu einem bewussten Genussmoment. Pur gebrochen oder langsam auf der Zunge geschmolzen.",
      en: "Full cacao notes and a balanced character make this variety a moment to savour. Enjoy a square on its own or let it melt slowly."
    },
    special: { de: "Ein ausdrucksvoller Auftritt für alle, die dunkle Schokolade lieben.", en: "An expressive choice for lovers of dark chocolate." },
    tasting: { de: "Dunkel · ausdrucksvoll", en: "Dark · expressive" },
    image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Dunkle Schokoladentafeln", en: "Dark chocolate bars" },
    imagePosition: "50% 50%",
    tag: { de: "KRÄFTIG & PUR", en: "BOLD & PURE" }
  },
  {
    id: "helle-schokolade",
    available: true,
    cacaoPercentage: null,
    category: { de: "Zart & aromatisch", en: "Soft & aromatic" },
    name: { de: "Helle Schokolade", en: "Blond chocolate" },
    tagline: { de: "Sanfte Süße. Warme Noten.", en: "Gentle sweetness. Warm notes." },
    description: {
      de: "Eine fein abgestimmte, helle Schokoladenkreation mit weichen Karamellnoten. Die sanfte Süße und der cremige Schmelz machen sie zum ruhigen Gegenpol kräftiger Kakaosorten.",
      en: "A finely balanced blond chocolate with mellow caramel notes. Gentle sweetness and a creamy melt make it a mellow counterpoint to bold cacao."
    },
    special: { de: "Eine goldene Farbe und ein besonders cremiger Charakter.", en: "A golden colour and a particularly creamy character." },
    tasting: { de: "Sanft · karamellig", en: "Soft · caramel" },
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Helle und dunkle Schokoladentafeln", en: "Light and dark chocolate bars" },
    imagePosition: "50% 48%",
    tag: { de: "GOLDEN & CREMIG", en: "GOLDEN & CREAMY" }
  },
  {
    id: "vollmilch",
    available: true,
    cacaoPercentage: null,
    category: { de: "Cremig & rund", en: "Creamy & rounded" },
    name: { de: "Vollmilchschokolade", en: "Milk chocolate" },
    tagline: { de: "Ein Klassiker mit Charakter.", en: "A classic with character." },
    description: {
      de: "Ausgewogener Kakao und die milde Rundheit von Milch verbinden sich zu einer vertrauten, aber nie gewöhnlichen Tafel. Ein Stück passt zum Kaffee, das nächste ganz einfach zu dir.",
      en: "Balanced cacao and the mellow roundness of milk come together in a familiar but never ordinary bar. A square with coffee, the next just for you."
    },
    special: { de: "Ein vertrauter Klassiker für kleine Pausen und große Genussmomente.", en: "A familiar classic for little pauses and lovely moments." },
    tasting: { de: "Cremig · ausgewogen", en: "Creamy · balanced" },
    image: "https://images.unsplash.com/photo-1623660053975-cf75a8be0908?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Schokoladentafel auf hellem Untergrund", en: "Chocolate bar on a light surface" },
    imagePosition: "28% 52%",
    tag: { de: "KLASSISCH & FEIN", en: "CLASSIC & SMOOTH" }
  },
  {
    id: "zartbitter",
    available: true,
    cacaoPercentage: null,
    category: { de: "Dunkel & elegant", en: "Dark & elegant" },
    name: { de: "Zartbitterschokolade", en: "Bittersweet chocolate" },
    tagline: { de: "Dunkle Tiefe. Feiner Schmelz.", en: "Dark depth. A fine melt." },
    description: {
      de: "Die elegante Mitte zwischen intensiv und zugänglich. Eine langsam schmelzende Zartbitterschokolade mit Noten gerösteter Bohnen und einem klaren, ausgewogenen Finish.",
      en: "An elegant middle ground between intense and approachable. A slow-melting bittersweet chocolate with roasted bean notes and a clear, balanced finish."
    },
    special: { de: "Elegante Intensität mit samtigem Schmelz.", en: "Elegant intensity with a velvety finish." },
    tasting: { de: "Dunkel · elegant", en: "Dark · elegant" },
    image: "https://images.unsplash.com/photo-1592290321458-49b80f943a26?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Dunkle Schokoladentafeln auf hellem Untergrund", en: "Dark chocolate bars on a light surface" },
    imagePosition: "79% 50%",
    tag: { de: "SAMTIG & DUNKEL", en: "SILKY & DARK" }
  },
  {
    id: "keks",
    available: true,
    cacaoPercentage: null,
    category: { de: "Knusprig & gebrochen", en: "Crisp & crumbled" },
    name: { de: "Keksschokolade", en: "Biscuit chocolate" },
    tagline: { de: "Knuspern darf dazugehören.", en: "A little crunch belongs." },
    description: {
      de: "Knusprige Keksstückchen sorgen für einen feinen Biss in einer cremigen Schokoladenbasis. Ein Spiel aus zartem Schmelz und knusprigen Momenten.",
      en: "Crisp biscuit pieces add a little bite to a creamy chocolate base. A play of soft melt and crunchy moments."
    },
    special: { de: "Knusprige Textur trifft auf zarten Schokoladenschmelz.", en: "Crisp texture meets a gentle chocolate melt." },
    tasting: { de: "Knusprig · schokoladig", en: "Crisp · chocolatey" },
    image: "https://images.unsplash.com/photo-1772986229956-ea224a6b79de?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Zwei knusprige Schokoladen-Waffelriegel", en: "Two crisp chocolate wafer bars" },
    imagePosition: "75% 55%",
    tag: { de: "MIT KNUSPER", en: "WITH A CRUNCH" }
  },
  {
    id: "fruechte",
    available: true,
    cacaoPercentage: null,
    category: { de: "Fruchtig & lebendig", en: "Fruity & lively" },
    name: { de: "Fruchtschokolade", en: "Fruit chocolate" },
    tagline: { de: "Süße Frucht trifft Kakao.", en: "Fruit meets cacao." },
    description: {
      de: "Fruchtige Akzente bringen Leichtigkeit in die Kakaonoten. Eine ausgewogene Tafel für alle, die es gern aromatisch mögen – ohne dass die Schokolade in den Hintergrund tritt.",
      en: "Fruity accents bring brightness to cacao notes. A balanced bar for those who like a little aroma, without hiding the chocolate."
    },
    special: { de: "Eine lebendige Kombination aus fruchtigem Charakter und Schokolade.", en: "A lively combination of fruity character and chocolate." },
    tasting: { de: "Fruchtig · aromatisch", en: "Fruity · aromatic" },
    image: "https://images.unsplash.com/photo-1778557403332-90174456cf0b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Schokoladentafel mit Erdbeeren", en: "Chocolate bar with strawberries" },
    imagePosition: "50% 22%",
    tag: { de: "FRUCHTIG & FEIN", en: "FRUITY & BRIGHT" }
  },
  {
    id: "nuesse",
    available: false,
    cacaoPercentage: null,
    category: { de: "Nussig & geröstet", en: "Nutty & roasted" },
    name: { de: "Nussschokolade", en: "Nut chocolate" },
    tagline: { de: "Guter Biss. Runde Röstaromen.", en: "A good bite. Rounded roast." },
    description: {
      de: "Geröstete Nüsse bringen knackige Textur und warme Aromen in die Schokolade. Eine unkomplizierte Kombination, sorgfältig ausbalanciert zwischen Kakao und Nuss.",
      en: "Roasted nuts bring crisp texture and warm aromas to chocolate. An easy pairing, thoughtfully balanced between cacao and nut."
    },
    special: { de: "Knackige Nüsse und feine Röstaromen in einer harmonischen Tafel.", en: "Crisp nuts and gentle roast notes in a harmonious bar." },
    tasting: { de: "Nussig · knackig", en: "Nutty · crisp" },
    image: "https://images.unsplash.com/photo-1679143121530-867b007baa84?auto=format&fit=crop&w=1000&q=80",
    imageAlt: { de: "Schokoladentafeln mit Nüssen", en: "Chocolate bars topped with nuts" },
    imagePosition: "20% 42%",
    tag: { de: "NUSSIG & KNACKIG", en: "NUTTY & CRISP" }
  }
];

export const journeyStops = [
  {
    id: "ursprung", number: "01", de: "Ursprungsregion", en: "Origin region",
    placeDe: "Côte d’Ivoire · Ursprungsregion", placeEn: "Côte d’Ivoire · origin region",
    copyDe: "Geografischer Bezugspunkt für eine mögliche Kakaolieferkette. Die tatsächliche Herkunft eines TrueOrigin-Produkts ist nicht bestätigt.",
    copyEn: "A geographic point of reference for a possible cacao supply chain. The actual origin of a TrueOrigin product has not been confirmed."
  },
  {
    id: "export", number: "02", de: "Export", en: "Export",
    placeDe: "Abidjan · Hafen", placeEn: "Abidjan · port",
    copyDe: "Abidjan ist ein wichtiger Hafen an der Küste Côte d’Ivoire. Ein tatsächlicher Export über diesen Hafen ist nicht bestätigt.",
    copyEn: "Abidjan is a major port on the coast of Côte d’Ivoire. An actual export through this port has not been confirmed."
  },
  {
    id: "umschlag", number: "03", de: "Umschlag in Europa", en: "European port",
    placeDe: "Rotterdam · Hafen", placeEn: "Rotterdam · port",
    copyDe: "Rotterdam ist als europäischer Hafen auf der Karte markiert. Tatsächlicher Hafen und Transportweg sind produktabhängig und hier nicht bestätigt.",
    copyEn: "Rotterdam is marked as a European port. The actual port and shipping route depend on the product and are not confirmed here."
  },
  {
    id: "weiterverarbeitung", number: "04", de: "Weiterverarbeitung", en: "Further processing",
    placeDe: "Hamburg · Zielpunkt", placeEn: "Hamburg · destination",
    copyDe: "Hamburg ist ein geografischer Zielpunkt für den möglichen Weitertransport. Produktions- und Verpackungsorte von TrueOrigin sind nicht angegeben.",
    copyEn: "Hamburg is a geographic destination for possible onward transport. TrueOrigin’s production and packaging locations have not been specified."
  }
];

export const copy = {
  de: {
    navShop: "Schokoladen", navStory: "Unser Weg", navImpact: "Unsere Haltung", bag: "Warenkorb", menu: "Menü öffnen",
    themeDark: "Dunkles Design aktivieren", themeLight: "Helles Design aktivieren",
    heroEyebrow: "SCHOKOLADE, OHNE GEHEIMNISSE", heroTitle: "Jeder Bissen<br>hat eine <em>Geschichte.</em>",
    heroDescription: "Guter Geschmack beginnt nicht erst beim ersten Stück. Entdecke Schokolade mit einer klaren Idee und dem Anspruch, ihren Weg transparent zu machen.",
    heroCta: "Schokoladen entdecken", heroSecondary: "Unseren Weg ansehen", heroNote: "Sorgfältig ausgewählt. Offen erzählt.",
    heroStamp: "TRUEORIGIN", heroCaption: "Gute Schokolade beginnt mit guten Fragen.", brandLine: "KAKAO MIT HALTUNG · TRUEORIGIN",
    promiseA: "Guter Geschmack", promiseB: "Klare Herkunft", promiseC: "Ehrliche Antworten",
    introEyebrow: "UNSERE IDEE", introTitle: "Weniger Behauptungen.<br><em>Mehr Einblick.</em>",
    introText: "TrueOrigin möchte Schokolade und ihre Herkunft näher zusammenbringen. Wir glauben an nachvollziehbare Informationen, sorgfältige Auswahl und ehrliche Antworten auf Fragen zur Herkunft.",
    pointOne: "Herkunft nachvollziehen", pointTwo: "Menschen wertschätzen", pointThree: "Offen kommunizieren",
    journeyEyebrow: "VOM KAKAO BIS ZU DIR", journeyTitle: "Ein möglicher Weg in<br><em>vier Schritten.</em>",
    journeyDescription: "So soll die Rückverfolgung funktionieren: Scanne den QR-Code auf deiner Packung und entdecke die Stationen deiner Tafel. Die Route wird produktbezogen angezeigt, sobald geprüfte Lieferkettendaten vorliegen.",
    mapHeading: "DER WEG DEINER TAFEL", mapNotice: "Die Karte zeigt eine mögliche Route. Sie ist noch nicht mit der verifizierten Lieferkette eines TrueOrigin-Produkts verknüpft.",
    mapSea: "Möglicher Seeweg", mapRoad: "Möglicher Weitertransport",
    mapFactsTitle: "TRANSPARENZ", mapFact1: "Ursprung", mapFact1Text: "Konkrete Farmen und Lieferanten sind nicht angegeben.",
    mapFact2: "Verarbeitung", mapFact2Text: "Produktions- und Verpackungsorte sind nicht angegeben.",
    mapFact3: "Transport", mapFact3Text: "Tatsächliche Versandwege sind nicht angegeben.",
    shopEyebrow: "SIEBEN SORTEN, VIELE GUTE MOMENTE", shopTitle: "Welche Tafel passt <em>zu dir?</em>", shopAll: "Alle Sorten ansehen",
    quickView: "Sorte entdecken", add: "In den Warenkorb",
    impactEyebrow: "UNSERE HALTUNG", impactTitle: "Nachhaltigkeit ist kein<br><em>Etikett. Sondern Arbeit.</em>",
    impactOneTitle: "Herkunft nachvollziehen", impactOneText: "Wir möchten Herkunftsinformationen transparent machen und ihre Grundlage offenlegen.",
    impactTwoTitle: "Fairness ernst nehmen", impactTwoText: "Faire Bedingungen beginnen mit langfristigen Beziehungen und überprüfbaren Informationen.",
    impactThreeTitle: "Ressourcen bewusst nutzen", impactThreeText: "Verpackung und Versand verdienen Aufmerksamkeit – von der Materialwahl bis zum Transport.",
    impactFootnote: "Konkrete Angaben zu Lieferanten, Zertifizierungen und Wirkung werden veröffentlicht, sobald sie bestätigt sind.",
    ctaTitle: "Finde deine nächste<br><em>Lieblingstafel.</em>", ctaButton: "Zum Sortiment",
    footerTagline: "Schokolade mit einer Geschichte, die es wert ist, erzählt zu werden.", footerExplore: "ENTDECKEN", footerContact: "ONLINE-SHOP",
    footerContactLink: "Bestellungen derzeit nicht verfügbar", footerMade: "Mit Sorgfalt. Schritt für Schritt.", backTop: "NACH OBEN",
    home: "Startseite", shop: "Schokoladen", cart: "Warenkorb", checkout: "Kasse",
    shopTitle: "Schokoladen entdecken", shopIntro: "Entdecke sieben Sorten – von dunkel und ausdrucksvoll bis fruchtig und knackig.",
    productDetails: "Geschmack & Charakter", origin: "Herkunft & Herstellung",
    weight: "GEWICHT", cacao: "KAKAO", special: "DAS BESONDERE", quality: "QUALITÄT & HERKUNFT",
    available: "Verfügbar", unavailable: "Derzeit nicht verfügbar", cacaoNotSpecified: "Noch nicht angegeben",
    availability: "Bestellstatus", quantity: "Menge", addToCart: "Zum Warenkorb hinzufügen", added: "Zum Warenkorb hinzugefügt",
    cartTitle: "Dein Warenkorb", emptyTitle: "Noch ist Platz für Schokolade.", emptyText: "Entdecke unsere Schokoladensorten und finde deine Lieblingssorte.",
    continueShopping: "Weiter stöbern", orderSummary: "Deine Auswahl", subtotal: "Ausgewählte Sorten", shipping: "Bestellstatus", ordersUnavailable: "Derzeit keine Bestellungen", total: "Nächster Schritt",
    shippingNote: "Preise, Versandbedingungen und Verkauf sind noch nicht veröffentlicht.", toCheckout: "Zum Bestellstatus", remove: "Entfernen",
    checkoutTitle: "Online-Bestellungen derzeit nicht verfügbar", checkoutIntro: "Derzeit können keine Bestellungen oder Zahlungen entgegengenommen werden.",
    checkoutUnavailable: "Deine Auswahl bleibt im Warenkorb gespeichert. Preise und Bestellinformationen sind noch nicht verfügbar.",
    originInfo: "Zutaten, Nährwerte und konkrete Herkunftsinformationen werden hier ergänzt, sobald die Produktangaben vorliegen.",
    backHome: "Zur Startseite",
    checkoutEmpty: "Dein Warenkorb ist noch leer.", continue: "Zum Shop", allRights: "ALLE RECHTE VORBEHALTEN",
    stopGrowing: "Ursprungsregion", stopProcess: "Export", stopShip: "Europäischer Hafen", stopMake: "Weiterverarbeitung",
    productQuantity: "Anzahl auswählen", decrease: "Anzahl verringern", increase: "Anzahl erhöhen", reviews: "Bewertungen",
    subtotalItems: "Sorten"
  },
  en: {
    navShop: "Chocolate", navStory: "Our journey", navImpact: "Our approach", bag: "Cart", menu: "Open menu",
    themeDark: "Enable dark theme", themeLight: "Enable light theme",
    heroEyebrow: "CHOCOLATE, WITH NOTHING TO HIDE", heroTitle: "Every Bite<br>Has a <em>Story.</em>",
    heroDescription: "Good taste starts before the first bite. Discover chocolate with a clear point of view and an ambition to make its journey transparent.",
    heroCta: "Explore chocolate", heroSecondary: "Our journey", heroNote: "Thoughtfully selected. Told openly.",
    heroStamp: "TRUEORIGIN", heroCaption: "Good chocolate starts with good questions.", brandLine: "CACAO WITH INTENTION · TRUEORIGIN",
    promiseA: "Good taste", promiseB: "Clear origins", promiseC: "Honest answers",
    introEyebrow: "OUR IDEA", introTitle: "Fewer claims.<br><em>More insight.</em>",
    introText: "TrueOrigin wants to bring chocolate and its origins closer together. We believe in traceable information, thoughtful selection and honest answers to questions about origin.",
    pointOne: "Trace the origin", pointTwo: "Value people", pointThree: "Communicate openly",
    journeyEyebrow: "FROM CACAO TO YOU", journeyTitle: "A possible journey in<br><em>four steps.</em>",
    journeyDescription: "This is how tracing is intended to work: scan the QR code on your pack to discover your bar’s journey. Product-specific routes will appear once verified supply-chain information is available.",
    mapHeading: "YOUR BAR’S JOURNEY", mapNotice: "This map shows a possible route. It is not yet linked to the verified supply chain of a TrueOrigin product.",
    mapSea: "Possible sea route", mapRoad: "Possible onward transport",
    mapFactsTitle: "TRANSPARENCY", mapFact1: "Origin", mapFact1Text: "Specific farms and suppliers are not specified.",
    mapFact2: "Processing", mapFact2Text: "Production and packaging locations are not specified.",
    mapFact3: "Transport", mapFact3Text: "Actual shipping routes are not specified.",
    shopEyebrow: "SEVEN VARIETIES, LOTS OF GOOD MOMENTS", shopTitle: "Which bar feels <em>like you?</em>", shopAll: "See every variety",
    quickView: "Discover variety", add: "Add to cart",
    impactEyebrow: "OUR APPROACH", impactTitle: "Sustainability isn't a<br><em>label. It's the work.</em>",
    impactOneTitle: "Trace the origin", impactOneText: "We aim to share origin information transparently and make its basis clear.",
    impactTwoTitle: "Take fairness seriously", impactTwoText: "Fair conditions begin with long-term relationships and verifiable information.",
    impactThreeTitle: "Use resources thoughtfully", impactThreeText: "Packaging and shipping deserve attention—from materials to transport.",
    impactFootnote: "Specific supplier, certification and impact information will be shared once confirmed.",
    ctaTitle: "Find your next<br><em>favourite bar.</em>", ctaButton: "Shop chocolate",
    footerTagline: "Chocolate with a story worth telling.", footerExplore: "EXPLORE", footerContact: "ONLINE SHOP",
    footerContactLink: "Orders are currently unavailable", footerMade: "Thoughtfully. Step by step.", backTop: "BACK TO TOP",
    home: "Home", shop: "Chocolate", cart: "Cart", checkout: "Checkout",
    shopTitle: "Explore chocolate", shopIntro: "Discover seven varieties, from dark and expressive to fruity and crisp.",
    productDetails: "Taste & character", origin: "Origin & making",
    weight: "WEIGHT", cacao: "CACAO", special: "WHAT MAKES IT SPECIAL", quality: "QUALITY & ORIGIN",
    available: "Available", unavailable: "Currently unavailable", cacaoNotSpecified: "Not yet specified",
    availability: "Order status", quantity: "Quantity", addToCart: "Add to basket", added: "Added to basket",
    cartTitle: "Your cart", emptyTitle: "There's room for chocolate.", emptyText: "Explore our chocolate varieties and find your favourite.",
    continueShopping: "Keep browsing", orderSummary: "Your selection", subtotal: "Selected varieties", shipping: "Order status", ordersUnavailable: "Orders are currently unavailable", total: "Next step",
    shippingNote: "Prices, shipping terms and sales have not been published.", toCheckout: "Order status", remove: "Remove",
    checkoutTitle: "Online orders are currently unavailable", checkoutIntro: "Orders and payments are not currently available.",
    checkoutUnavailable: "Your selection remains saved in the cart. Prices and order information are not available.",
    originInfo: "Ingredients, nutrition and specific origin information will be added here once product details are available.",
    backHome: "Back to home",
    checkoutEmpty: "Your cart is empty.", continue: "Go to shop", allRights: "ALL RIGHTS RESERVED",
    stopGrowing: "Origin region", stopProcess: "Export", stopShip: "European port", stopMake: "Further processing",
    productQuantity: "Select quantity", decrease: "Decrease quantity", increase: "Increase quantity", reviews: "Reviews",
    subtotalItems: "Varieties"
  }
};

export function productById(id) {
  return products.find((product) => product.id === id);
}
