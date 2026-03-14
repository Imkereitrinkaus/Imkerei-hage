/**
 * ============================================================
 * ZENTRALE PFLEGE-DATEI — Hier werden alle Inhalte geändert.
 * ============================================================
 * Ändere nur die Werte nach dem Doppelpunkt ":".
 * Texte stehen immer in Anführungszeichen "...".
 * Zahlen (Preise) ohne Anführungszeichen.
 * Speichere die Datei und lade die Webseite neu.
 * ============================================================
 */

const siteContent = {

  // ----------------------------------------------------------
  // MARKE & ALLGEMEINES
  // ----------------------------------------------------------
  brand: {
    name: "Bienen Honig",
    nameDetail: "aus eigener Imkerei",
    location: "Bochum-Eppendorf",
    slogan: "Echter Honig. Kleiner Garten. Große Sorgfalt.",
    sloganSub: "Hobby-Imkerei aus Wattenscheid-Eppendorf",
    metaDescription: "Regionaler Honig aus eigener Hobby-Imkerei in Wattenscheid-Eppendorf. Frühtracht und Sommertracht – direkt vom Imker, nach Vereinbarung abholbar.",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    links: [
      { label: "Über mich",   href: "#ueber" },
      { label: "Honig",       href: "#honig" },
      { label: "Qualität",    href: "#qualitaet" },
      { label: "Galerie",     href: "#galerie" },
      { label: "Anfrage",     href: "#kontakt" },
      { label: "FAQ",         href: "#faq" },
    ]
  },

  // ----------------------------------------------------------
  // HERO-BEREICH (große Startfläche)
  // ----------------------------------------------------------
  hero: {
    title: "Honig aus dem Garten.",
    titleHighlight: "Ehrlich & regional.",
    text: "Ich imkere in meinem Garten in Wattenscheid-Eppendorf – mit viel Geduld, wenig Technik und echter Freude an den Bienen. Wer meinen Honig möchte, meldet sich einfach.",
    primaryButton: "Jetzt anfragen",
    primaryButtonHref: "#kontakt",
    secondaryButton: "Mehr erfahren",
    secondaryButtonHref: "#ueber",
    image: "assets/images/hero-honig.jpg",
    imageAlt: "Honigglas aus der Hobby-Imkerei Wattenscheid-Eppendorf",
  },

  // ----------------------------------------------------------
  // ÜBER DIE IMKEREI
  // ----------------------------------------------------------
  about: {
    headline: "Hinter dem Glas",
    subline: "Eine kleine Imkerei im Ruhrgebiet.",
    paragraphs: [
      "Imkerei ist für mich kein Erwerb – sondern eine Leidenschaft. Seit einigen Jahren halten wir Bienen in unserem Garten in Wattenscheid-Eppendorf und erleben jede Saison aufs Neue, was diese kleinen Tiere leisten.",
      "Die Völker stehen im Grünen, sammeln in der Umgebung von Eppendorf, und ich verarbeite alles selbst: Schonend geschleudert, ohne Zusätze, direkt ins Glas. Keine industrielle Aufbereitung, kein Zukauf.",
      "Weil es eine Hobby-Imkerei ist, sind die Mengen begrenzt. Wer Honig haben möchte, meldet sich einfach – dann schauen wir gemeinsam, was gerade vorrätig ist.",
    ],
    image: "assets/images/imkerei-garten.jpg",
    imageAlt: "Bienenstock im Garten der Imkerei in Wattenscheid-Eppendorf",
    facts: [
      { icon: "🐝", label: "Bienenvölker", value: "Mehrere Völker" },
      { icon: "🌿", label: "Standort", value: "Wattenscheid-Eppendorf" },
      { icon: "🍯", label: "Verarbeitung", value: "Handgeschleudert" },
      { icon: "📦", label: "Verkauf", value: "Direkt ab Hof" },
    ]
  },

  // ----------------------------------------------------------
  // PRODUKTE — Neues Produkt einfach als neues {} hinzufügen.
  // ----------------------------------------------------------
  products: [
    {
      id: "fruehtracht",
      name: "Frühtracht",
      subtitle: "Milder Blütenhonig",
      size: "500g",
      price: 7.50,
      description: "Der Frühtrachtshonig entsteht im Frühjahr, wenn Obstbäume, Raps und die ersten Wildblumen blühen. Er ist hell, mild im Geschmack und kristallisiert zu einer weichen, cremigen Konsistenz. Ideal für alle, die einen sanften, blumigen Honig mögen.",
      image: "assets/images/glas-fruehtracht.jpg",
      imageAlt: "500g Glas Frühtracht Honig aus Wattenscheid-Eppendorf",
      badge: "Frühjahr",
      available: true,
    },
    {
      id: "sommertracht",
      name: "Sommertracht",
      subtitle: "Aromatischer Sommerhonig",
      size: "500g",
      price: 7.50,
      description: "Der Sommertrachtshonig wird aus dem Nektar der Sommerblüte gewonnen – Linde, Phacelia, Kleearten und viele Wildblumen geben ihm seinen kräftigeren, vollmundigen Charakter. Er bleibt länger flüssig und hat eine schöne Bernsteinfarbe.",
      image: "assets/images/glas-sommertracht.jpg",
      imageAlt: "500g Glas Sommertracht Honig aus Wattenscheid-Eppendorf",
      badge: "Sommer",
      available: true,
    },
  ],

  // ----------------------------------------------------------
  // QUALITÄT & VERARBEITUNG
  // ----------------------------------------------------------
  quality: {
    headline: "So entsteht der Honig",
    subline: "Ehrliche Verarbeitung, keine Kompromisse.",
    points: [
      {
        icon: "🌸",
        title: "Regionale Trachtpflanzen",
        text: "Die Bienen fliegen in Wattenscheid-Eppendorf und der näheren Umgebung – Gärten, Wiesen, kleine Felder. Kein Massentransport zu Monokulturen.",
      },
      {
        icon: "🔬",
        title: "Schonende Schleuderung",
        text: "Honig wird nur bei Bedarf geschleudert, wenn die Waben verdeckelt sind und der Wassergehalt stimmt. So bleibt er lange haltbar und behält seinen natürlichen Geschmack.",
      },
      {
        icon: "🚫",
        title: "Ohne Zusätze",
        text: "Kein Zuckerwasser, keine Zusatzstoffe, kein Zukauf. Was in den Gläsern ist, haben die Bienen selbst gemacht – ich fülle nur ab.",
      },
      {
        icon: "📋",
        title: "DIB-Mitglied",
        text: "Als Imker bin ich Mitglied im Deutschen Imkerbund. Die Grundsätze verantwortungsvoller Imkerei stehen für mich an erster Stelle.",
      },
    ]
  },

  // ----------------------------------------------------------
  // GALERIE — Pfade und Beschreibungen hier ändern.
  // ----------------------------------------------------------
  gallery: {
    headline: "Einblicke",
    subline: "Aus dem Garten direkt ins Glas.",
    images: [
      {
        src: "assets/images/galerie-1.jpg",
        alt: "Honiggläser aus der Hobby-Imkerei Bochum-Eppendorf",
        caption: "Frisch abgefüllt",
      },
      {
        src: "assets/images/galerie-2.jpg",
        alt: "Nahaufnahme Honigwabe",
        caption: "Verdeckelte Wabe",
      },
      {
        src: "assets/images/galerie-3.jpg",
        alt: "Blick in den Bienenkasten",
        caption: "Emsige Sammler",
      },
      {
        src: "assets/images/galerie-4.jpg",
        alt: "Honigglas mit Etikett, Vielen Dank",
        caption: "Kleines Dankeschön",
      },
      {
        src: "assets/images/galerie-5.jpg",
        alt: "Cremig gerührter Honig im Glas",
        caption: "Cremige Konsistenz",
      },
      {
        src: "assets/images/galerie-6.jpg",
        alt: "Imkerei im Garten Wattenscheid",
        caption: "Unser Standort",
      },
    ]
  },

  // ----------------------------------------------------------
  // KONTAKT
  // ----------------------------------------------------------
  contact: {
    headline: "Anfrage & Abholung",
    subline: "Einfach melden – ich antworte persönlich.",
    intro: "Wer Honig bestellen oder einfach mal nachfragen möchte, schreibt mir eine Nachricht oder ruft an. Abholung ist nach Vereinbarung direkt hier in Eppendorf möglich.",
    // TODO: Echte Kontaktdaten vor Veröffentlichung eintragen:
    phone: "[Telefonnummer]",
    email: "[E-Mail-Adresse]",
    address: "[Straße und Hausnummer], [PLZ] Bochum-Eppendorf",
    pickupInfo: "Abholung nach Vereinbarung – einfach vorab melden.",
    hours: "Erreichbar: In der Regel tagsüber per Telefon oder jederzeit per E-Mail.",
  },

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: {
    headline: "Häufige Fragen",
    subline: "Kurze Antworten auf das, was viele wissen möchten.",
    items: [
      {
        question: "Wie viel kostet ein Glas Honig?",
        answer: "Ein 500g-Glas kostet 7,50 €. Weitere Gebindegrößen gelegentlich auf Anfrage – einfach nachfragen.",
      },
      {
        question: "Wie kann ich Honig bestellen?",
        answer: "Einfach das Formular auf dieser Seite ausfüllen oder mich direkt anrufen bzw. per E-Mail kontaktieren. Ich melde mich dann schnellstmöglich zurück.",
      },
      {
        question: "Wo kann ich den Honig abholen?",
        answer: "Die Abholung ist direkt hier in Wattenscheid-Eppendorf möglich – nach kurzer Absprache. Eine genaue Adresse bekommst du nach deiner Anfrage.",
      },
      {
        question: "Ist der Honig Bio?",
        answer: "Der Honig ist nicht offiziell Bio-zertifiziert – das wäre für eine kleine Hobby-Imkerei kaum umsetzbar. Die Bienen fliegen aber in einem naturnahen Umfeld, und ich verzichte vollständig auf Antibiotika oder chemisch-synthetische Behandlungsmittel.",
      },
      {
        question: "Wann gibt es wieder Honig?",
        answer: "Das hängt von der Saison und den Völkern ab. Frühtracht ist meist ab Sommer verfügbar, Sommertracht etwas später. Am besten einfach nachfragen – ich sage direkt, was gerade da ist.",
      },
      {
        question: "Kann ich größere Mengen kaufen?",
        answer: "Als Hobby-Imker sind meine Mengen begrenzt. Für Sondermengen oder Geschenkpakete bitte frühzeitig anfragen – manchmal klappt es, manchmal nicht. Ich sage ehrlich, was möglich ist.",
      },
      {
        question: "Wie soll ich den Honig lagern?",
        answer: "Am besten kühl, dunkel und trocken – ein Küchenschrank ist völlig ausreichend. Keinen Kühlschrank nötig. Nicht in der Nähe von Gewürzen oder stark riechenden Lebensmitteln lagern, da Honig Gerüche annehmen kann.",
      },
      {
        question: "Ist der Honig auch als Geschenk geeignet?",
        answer: "Auf jeden Fall – regionaler Honig direkt vom Imker ist ein persönliches und geschmackvolles Geschenk. Kleine Mengen für besondere Anlässe einfach vorab anfragen.",
      },
    ]
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "Echter Honig aus Wattenscheid-Eppendorf.",
    links: [
      { label: "Impressum",   href: "impressum.html" },
      { label: "Datenschutz", href: "datenschutz.html" },
    ],
    copyright: "Hobby-Imkerei Bochum-Eppendorf",
  },
};
