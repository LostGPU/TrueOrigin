export const SITE_URL = "https://trueorigin.netlify.app";

export const products = [
  {
    id: "dunkle-schokolade",
    articleNumber: "TO-001",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Ashanti, Ghana", en: "Ashanti, Ghana" }, coordinates: [6.7, -1.5] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Tema, Ghana", en: "Tema, Ghana" }, coordinates: [5.6698, -0.0166] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Rotterdam, Niederlande", en: "Rotterdam, Netherlands" }, coordinates: [51.9244, 4.4777] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Intensiv & ausgewogen", en: "Deep & balanced" },
    name: { de: "Dunkle Schokolade", en: "Dark chocolate" },
    tagline: { de: "Kräftig und dunkel.", en: "Rich and dark." },
    description: {
      de: "Kräftige Kakaonoten und ein langer Nachklang. Am besten pur genießen.",
      en: "Full cacao notes with a lingering finish. Best enjoyed on its own."
    },
    special: { de: "Für alle, die dunkle Schokolade bevorzugen.", en: "For those who prefer dark chocolate." },
    tasting: { de: "Dunkel · ausdrucksvoll", en: "Dark · expressive" },
    image: "/assets/images/Dunkle Schokolade.png",
    imageAlt: { de: "Dunkle Schokoladentafeln", en: "Dark chocolate bars" },
    imagePosition: "50% 50%",
    tag: { de: "KRÄFTIG & PUR", en: "BOLD & PURE" }
  },
  {
    id: "helle-schokolade",
    articleNumber: "TO-002",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Region Daloa, Côte d’Ivoire", en: "Daloa region, Côte d’Ivoire" }, coordinates: [6.88, -6.45] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Abidjan, Côte d’Ivoire", en: "Abidjan, Côte d’Ivoire" }, coordinates: [5.36, -4.0083] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Antwerpen, Belgien", en: "Antwerp, Belgium" }, coordinates: [51.2194, 4.4025] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Zart & aromatisch", en: "Soft & aromatic" },
    name: { de: "Helle Schokolade", en: "Blond chocolate" },
    tagline: { de: "Cremig mit Karamellnoten.", en: "Creamy with caramel notes." },
    description: {
      de: "Helle Schokolade mit weichen Karamellnoten und cremigem Schmelz.",
      en: "Blond chocolate with mellow caramel notes and a creamy texture."
    },
    special: { de: "Karamellnoten statt kräftiger Kakaointensität.", en: "Caramel notes instead of intense cacao." },
    tasting: { de: "Sanft · karamellig", en: "Soft · caramel" },
    image: "/assets/images/Helle Schokolade.png",
    imageAlt: { de: "Helle und dunkle Schokoladentafeln", en: "Light and dark chocolate bars" },
    imagePosition: "50% 48%",
    tag: { de: "GOLDEN & CREMIG", en: "GOLDEN & CREAMY" }
  },
  {
    id: "vollmilch",
    articleNumber: "TO-003",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Westregion, Ghana", en: "Western Region, Ghana" }, coordinates: [5.5, -2.5] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Takoradi, Ghana", en: "Takoradi, Ghana" }, coordinates: [4.8845, -1.7554] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Rotterdam, Niederlande", en: "Rotterdam, Netherlands" }, coordinates: [51.9244, 4.4777] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Cremig & rund", en: "Creamy & rounded" },
    name: { de: "Vollmilchschokolade", en: "Milk chocolate" },
    tagline: { de: "Mild und cremig.", en: "Mild and creamy." },
    description: {
      de: "Milde Vollmilchschokolade mit ausgewogenem Kakaogeschmack.",
      en: "Mild milk chocolate with a balanced cacao flavour."
    },
    special: { de: "Der vertraute Geschmack einer klassischen Vollmilchtafel.", en: "The familiar taste of classic milk chocolate." },
    tasting: { de: "Cremig · ausgewogen", en: "Creamy · balanced" },
    image: "/assets/images/Vollmilchschokolade.png",
    imageAlt: { de: "Schokoladentafel auf hellem Untergrund", en: "Chocolate bar on a light surface" },
    imagePosition: "28% 52%",
    tag: { de: "KLASSISCH & FEIN", en: "CLASSIC & SMOOTH" }
  },
  {
    id: "zartbitter",
    articleNumber: "TO-004",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Südwesten, Côte d’Ivoire", en: "Southwest, Côte d’Ivoire" }, coordinates: [5.2, -6] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "San-Pédro, Côte d’Ivoire", en: "San-Pédro, Côte d’Ivoire" }, coordinates: [4.7467, -6.6363] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Antwerpen, Belgien", en: "Antwerp, Belgium" }, coordinates: [51.2194, 4.4025] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Dunkel & elegant", en: "Dark & elegant" },
    name: { de: "Zartbitterschokolade", en: "Bittersweet chocolate" },
    tagline: { de: "Dunkel mit feinem Schmelz.", en: "Dark with a smooth finish." },
    description: {
      de: "Kräftig im Geschmack, aber milder als sehr dunkle Schokolade.",
      en: "Full of flavour, but milder than very dark chocolate."
    },
    special: { de: "Eine dunkle Sorte mit ausgewogener Bitterkeit.", en: "A dark variety with balanced bitterness." },
    tasting: { de: "Dunkel · elegant", en: "Dark · elegant" },
    image: "/assets/images/Zartbitterschokolade.png",
    imageAlt: { de: "Dunkle Schokoladentafeln auf hellem Untergrund", en: "Dark chocolate bars on a light surface" },
    imagePosition: "79% 50%",
    tag: { de: "SAMTIG & DUNKEL", en: "SILKY & DARK" }
  },
  {
    id: "keks",
    articleNumber: "TO-005",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Ashanti, Ghana", en: "Ashanti, Ghana" }, coordinates: [6.7, -1.5] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Tema, Ghana", en: "Tema, Ghana" }, coordinates: [5.6698, -0.0166] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Hamburg, Deutschland", en: "Hamburg, Germany" }, coordinates: [53.5488, 9.9872] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Knusprig & gebrochen", en: "Crisp & crumbled" },
    name: { de: "Keksschokolade", en: "Biscuit chocolate" },
    tagline: { de: "Schokolade mit Keksstückchen.", en: "Chocolate with biscuit pieces." },
    description: {
      de: "Knusprige Keksstückchen in cremiger Schokolade.",
      en: "Crisp biscuit pieces in creamy chocolate."
    },
    special: { de: "Der Kontrast aus knusprigem Keks und weicher Schokolade.", en: "A contrast of crisp biscuit and smooth chocolate." },
    tasting: { de: "Knusprig · schokoladig", en: "Crisp · chocolatey" },
    image: "/assets/images/Keksschokolade.png",
    imageAlt: { de: "Zwei knusprige Schokoladen-Waffelriegel", en: "Two crisp chocolate wafer bars" },
    imagePosition: "75% 55%",
    tag: { de: "MIT KNUSPER", en: "WITH A CRUNCH" }
  },
  {
    id: "fruechte",
    articleNumber: "TO-006",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Manabí, Ecuador", en: "Manabí, Ecuador" }, coordinates: [-0.8, -80.2] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Guayaquil, Ecuador", en: "Guayaquil, Ecuador" }, coordinates: [-2.1894, -79.8891] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Rotterdam, Niederlande", en: "Rotterdam, Netherlands" }, coordinates: [51.9244, 4.4777] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: true,
    cacaoPercentage: null,
    category: { de: "Fruchtig & lebendig", en: "Fruity & lively" },
    name: { de: "Fruchtschokolade", en: "Fruit chocolate" },
    tagline: { de: "Fruchtig und schokoladig.", en: "Fruity and chocolatey." },
    description: {
      de: "Fruchtige Noten ergänzen den Geschmack der Schokolade.",
      en: "Fruity notes complement the flavour of the chocolate."
    },
    special: { de: "Frucht und Schokolade in einer Tafel.", en: "Fruit and chocolate in one bar." },
    tasting: { de: "Fruchtig · aromatisch", en: "Fruity · aromatic" },
    image: "/assets/images/Fruchtschokolade.png",
    imageAlt: { de: "Schokoladentafel mit Erdbeeren", en: "Chocolate bar with strawberries" },
    imagePosition: "50% 22%",
    tag: { de: "FRUCHTIG & FEIN", en: "FRUITY & BRIGHT" }
  },
  {
    id: "nuesse",
    articleNumber: "TO-007",
    supplyChain: {
      status: "example",
      stops: [
        { stage: { de: "Kakaoanbau", en: "Cocoa growing" }, place: { de: "Manabí, Ecuador", en: "Manabí, Ecuador" }, coordinates: [-0.8, -80.2] },
        { stage: { de: "Exporthafen", en: "Export port" }, place: { de: "Guayaquil, Ecuador", en: "Guayaquil, Ecuador" }, coordinates: [-2.1894, -79.8891] },
        { stage: { de: "Hafen in Europa", en: "European port" }, place: { de: "Antwerpen, Belgien", en: "Antwerp, Belgium" }, coordinates: [51.2194, 4.4025] },
        { stage: { de: "Zielregion", en: "Destination region" }, place: { de: "Deutschland · schematisch", en: "Germany · schematic" }, coordinates: [51.1657, 10.4515] }
      ]
    },
    available: false,
    cacaoPercentage: null,
    category: { de: "Nussig & geröstet", en: "Nutty & roasted" },
    name: { de: "Nussschokolade", en: "Nut chocolate" },
    tagline: { de: "Nussig mit Röstaromen.", en: "Nutty with roasted notes." },
    description: {
      de: "Geröstete Nüsse geben der Schokolade Biss und ein kräftiges Aroma.",
      en: "Roasted nuts add crunch and a rich flavour to the chocolate."
    },
    special: { de: "Knackige Nüsse in Schokolade.", en: "Crunchy nuts in chocolate." },
    tasting: { de: "Nussig · knackig", en: "Nutty · crisp" },
    image: "/assets/images/Nussschokolade.png",
    imageAlt: { de: "Schokoladentafeln mit Nüssen", en: "Chocolate bars topped with nuts" },
    imagePosition: "20% 42%",
    tag: { de: "NUSSIG & KNACKIG", en: "NUTTY & CRISP" }
  }
];

export const copy = {
  de: {
    navShop: "Schokoladen", navStory: "Rückverfolgung", navImpact: "Herkunft & Verantwortung", bag: "Warenkorb", menu: "Menü öffnen",
    themeDark: "Dunkles Design aktivieren", themeLight: "Helles Design aktivieren",
    heroEyebrow: "SCHOKOLADE VON TRUEORIGIN", heroTitle: "Jeder Bissen<br>hat eine <em>Geschichte.</em>",
    heroDescription: "Sieben Schokoladensorten, klare Produktangaben und ein Blick auf die Herkunft, sobald die Lieferkettendaten geprüft sind.",
    heroCta: "Schokoladen ansehen", heroSecondary: "Zur Rückverfolgung", heroNote: "Sieben Sorten im Überblick.",
    heroStamp: "TRUEORIGIN", heroCaption: "Schokoladensorten von TrueOrigin.", brandLine: "SCHOKOLADE VON TRUEORIGIN",
    promiseA: "Sieben Sorten", promiseB: "Klare Angaben", promiseC: "Herkunft in Prüfung",
    introEyebrow: "ÜBER TRUEORIGIN", introTitle: "Mehr über<br><em>deine Schokolade.</em>",
    introText: "Wir möchten zeigen, woher Kakao und Zutaten kommen. Geprüfte Angaben zur Herkunft veröffentlichen wir hier, sobald sie vorliegen.",
    pointOne: "Herkunft prüfen", pointTwo: "Angaben belegen", pointThree: "Offen informieren",
    journeyEyebrow: "RÜCKVERFOLGUNG", journeyTitle: "Der Weg deiner<br><em>Tafel.</em>",
    journeyDescription: "<strong class=\"trace-instruction\">Scanne den QR-Code auf deiner Packung und entdecke die Stationen deiner Tafel.</strong><span class=\"trace-note\">Bis geprüfte Lieferkettendaten vorliegen, zeigen wir pro Sorte eine plausible, nicht verifizierte Kakao-Beispielroute. Weitere Zutaten und Produktionsorte sind nicht abgebildet.</span>",
    articleNumber: "Artikelnummer", articleSearchTitle: "Artikelnummer eingeben",
    articleSearchText: "Du findest sie auf der Packung.", articleSearchPlaceholder: "z. B. TO-001",
    articleSearchButton: "Sorte anzeigen", articleSearchNotFound: "Diese Artikelnummer gehört zu keiner Sorte in unserem Sortiment.",
    productTraceTitle: "Lieferkette dieser Sorte", traceAvailable: "Geprüfte Stationen dieser Sorte.",
    traceExample: "Plausible Beispielroute · nicht verifiziert",
    traceExampleDetail: "Die Karte zeigt einen möglichen Kakao-Weg. Herkunft und Stationen sind für TrueOrigin nicht bestätigt; konkrete Lieferanten, Produktionsorte und weitere Zutaten sind nicht abgebildet.",
    traceUnavailable: "Für diese Sorte sind noch keine geprüften Lieferkettendaten hinterlegt.",
    traceUnavailableDetail: "Sobald geprüfte Angaben vorliegen, ergänzen wir hier die Stationen.",
    shopEyebrow: "UNSER SORTIMENT", shopTitle: "Sieben Sorten Schokolade.", shopAll: "Alle Sorten ansehen",
    quickView: "Sorte entdecken", add: "In den Warenkorb",
    impactEyebrow: "HERKUNFT & VERANTWORTUNG", impactTitle: "Was wir zur Herkunft<br><em>zeigen wollen.</em>",
    impactOneTitle: "Herkunft", impactOneText: "Wir ergänzen Angaben zu Kakao und Zutaten, wenn sie geprüft sind.",
    impactTwoTitle: "Lieferkette", impactTwoText: "Stationen und Transportwege sollen pro Sorte nachvollziehbar sein.",
    impactThreeTitle: "Verpackung", impactThreeText: "Informationen zu Material und Versand veröffentlichen wir, sobald sie vorliegen.",
    impactFootnote: "Lieferanten, Zertifizierungen und konkrete Umweltdaten sind derzeit nicht bestätigt.",
    closingNote: "Wir prüfen die Herkunft unserer Zutaten und veröffentlichen die Angaben, sobald sie bestätigt sind.",
    ctaTitle: "Alle Sorten<br><em>im Überblick.</em>", ctaButton: "Zum Sortiment",
    footerTagline: "Schokolade und klare Produktinformationen.", footerExplore: "ENTDECKEN", footerContact: "ONLINE-SHOP",
    footerContactLink: "Bestellungen derzeit nicht verfügbar", footerMade: "Geprüfte Angaben zur Herkunft folgen.", backTop: "NACH OBEN",
    home: "Startseite", shop: "Schokoladen", cart: "Warenkorb", checkout: "Kasse",
    shopTitle: "Schokoladen", shopIntro: "Sieben Sorten. Wähle eine aus, um mehr über Geschmack und Zutaten zu erfahren.",
    productDetails: "Geschmack & Charakter", origin: "Herkunft & Herstellung",
    weight: "GEWICHT", cacao: "KAKAO", special: "DAS BESONDERE", quality: "QUALITÄT & HERKUNFT",
    available: "Verfügbar", unavailable: "Derzeit nicht verfügbar", cacaoNotSpecified: "Noch nicht angegeben",
    availability: "Bestellstatus", quantity: "Menge", addToCart: "Zum Warenkorb hinzufügen", added: "Zum Warenkorb hinzugefügt",
    cartTitle: "Dein Warenkorb", emptyTitle: "Dein Warenkorb ist leer.", emptyText: "Im Shop findest du alle sieben Sorten.",
    continueShopping: "Weiter stöbern", orderSummary: "Deine Auswahl", subtotal: "Ausgewählte Sorten", shipping: "Bestellstatus", ordersUnavailable: "Derzeit keine Bestellungen", total: "Nächster Schritt",
    shippingNote: "Preise und Versandinformationen sind noch nicht veröffentlicht.", toCheckout: "Zum Bestellstatus", remove: "Entfernen",
    checkoutTitle: "Bestellungen sind derzeit nicht möglich", checkoutIntro: "Wir können aktuell keine Bestellungen oder Zahlungen entgegennehmen.",
    checkoutUnavailable: "Deine Auswahl bleibt im Warenkorb gespeichert. Es werden keine Zahlungsdaten erfasst.",
    originInfo: "Zutaten, Nährwerte und Herkunftsangaben sind noch nicht verfügbar.",
    backHome: "Zur Startseite",
    checkoutEmpty: "Dein Warenkorb ist noch leer.", continue: "Zum Shop", allRights: "ALLE RECHTE VORBEHALTEN",
    productQuantity: "Anzahl auswählen", decrease: "Anzahl verringern", increase: "Anzahl erhöhen", reviews: "Bewertungen",
    subtotalItems: "Sorten"
  },
  en: {
    navShop: "Chocolate", navStory: "Traceability", navImpact: "Origin & responsibility", bag: "Cart", menu: "Open menu",
    themeDark: "Enable dark theme", themeLight: "Enable light theme",
    heroEyebrow: "TRUEORIGIN CHOCOLATE", heroTitle: "Every Bite<br>Has a <em>Story.</em>",
    heroDescription: "Seven chocolate varieties, clear product information and origin details once the supply-chain data has been checked.",
    heroCta: "Explore chocolate", heroSecondary: "Track a bar", heroNote: "Seven varieties to explore.",
    heroStamp: "TRUEORIGIN", heroCaption: "Chocolate varieties from TrueOrigin.", brandLine: "CHOCOLATE BY TRUEORIGIN",
    promiseA: "Seven varieties", promiseB: "Clear information", promiseC: "Origins being checked",
    introEyebrow: "ABOUT TRUEORIGIN", introTitle: "Learn about<br><em>your chocolate.</em>",
    introText: "We want to show where cacao and ingredients come from. We’ll publish verified origin information here once it’s available.",
    pointOne: "Check origins", pointTwo: "Back up claims", pointThree: "Share information",
    journeyEyebrow: "TRACEABILITY", journeyTitle: "Your bar’s<br><em>journey.</em>",
    journeyDescription: "<strong class=\"trace-instruction\">Scan the QR code on your pack to see the steps behind your bar.</strong><span class=\"trace-note\">Until verified supply-chain data is available, each variety shows a plausible, unverified cocoa example route. Other ingredients and production locations are not shown.</span>",
    articleNumber: "Item number", articleSearchTitle: "Enter an item number",
    articleSearchText: "You’ll find it on the pack.", articleSearchPlaceholder: "e.g. TO-001",
    articleSearchButton: "Find variety", articleSearchNotFound: "We couldn’t find a variety with that item number.",
    productTraceTitle: "Supply chain for this variety", traceAvailable: "Verified stages for this variety.",
    traceExample: "Plausible example route · unverified",
    traceExampleDetail: "The map shows a possible cocoa route. Its origin and stops are not confirmed for TrueOrigin; specific suppliers, production locations and other ingredients are not shown.",
    traceUnavailable: "Verified supply-chain data is not available for this variety yet.",
    traceUnavailableDetail: "We’ll add the route here once the information has been checked.",
    shopEyebrow: "OUR RANGE", shopTitle: "Seven chocolate varieties.", shopAll: "See every variety",
    quickView: "Discover variety", add: "Add to cart",
    impactEyebrow: "ORIGIN & RESPONSIBILITY", impactTitle: "What we want to show<br><em>about our supply chain.</em>",
    impactOneTitle: "Origin", impactOneText: "We’ll add cacao and ingredient details once they’ve been checked.",
    impactTwoTitle: "Supply chain", impactTwoText: "Each variety should show its own verified route.",
    impactThreeTitle: "Packaging", impactThreeText: "We’ll publish material and shipping details when they’re available.",
    impactFootnote: "Supplier, certification and environmental details are not confirmed at this time.",
    closingNote: "We’re checking the origin of our ingredients and will publish details once they’re confirmed.",
    ctaTitle: "See all seven<br><em>varieties.</em>", ctaButton: "View the range",
    footerTagline: "Chocolate and clear product information.", footerExplore: "EXPLORE", footerContact: "ONLINE SHOP",
    footerContactLink: "Orders are currently unavailable", footerMade: "Verified origin details coming soon.", backTop: "BACK TO TOP",
    home: "Home", shop: "Chocolate", cart: "Cart", checkout: "Checkout",
    shopTitle: "Chocolate", shopIntro: "Seven varieties. Choose one to see more about its taste and ingredients.",
    productDetails: "Taste & character", origin: "Origin & making",
    weight: "WEIGHT", cacao: "CACAO", special: "WHAT MAKES IT SPECIAL", quality: "QUALITY & ORIGIN",
    available: "Available", unavailable: "Currently unavailable", cacaoNotSpecified: "Not yet specified",
    availability: "Order status", quantity: "Quantity", addToCart: "Add to basket", added: "Added to basket",
    cartTitle: "Your cart", emptyTitle: "Your cart is empty.", emptyText: "Browse all seven varieties in the shop.",
    continueShopping: "Keep browsing", orderSummary: "Your selection", subtotal: "Selected varieties", shipping: "Order status", ordersUnavailable: "Orders are currently unavailable", total: "Next step",
    shippingNote: "Prices and shipping information have not been published.", toCheckout: "Order status", remove: "Remove",
    checkoutTitle: "Orders are not available yet", checkoutIntro: "We can’t accept orders or payments at this time.",
    checkoutUnavailable: "Your selection remains saved in the cart. No payment details are collected.",
    originInfo: "Ingredient, nutrition and origin details are not available yet.",
    backHome: "Back to home",
    checkoutEmpty: "Your cart is empty.", continue: "Go to shop", allRights: "ALL RIGHTS RESERVED",
    productQuantity: "Select quantity", decrease: "Decrease quantity", increase: "Increase quantity", reviews: "Reviews",
    subtotalItems: "Varieties"
  }
};

export function productById(id) {
  return products.find((product) => product.id === id);
}
