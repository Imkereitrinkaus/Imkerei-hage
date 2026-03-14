# Anleitung zur Pflege der Website
### Hobby-Imkerei Wattenscheid-Eppendorf

---

## Erste Schritte

Die Website besteht aus einfachen HTML-, CSS- und JavaScript-Dateien.
Du brauchst **keine Programmierkenntnisse** und **kein besonderes Programm** –
nur einen normalen Texteditor (z. B. Windows Notepad, macOS TextEdit oder
den kostenlosen Editor [Notepad++](https://notepad-plus-plus.org/)).

Um die Website lokal anzusehen: Einfach die Datei `index.html` im Browser öffnen
(Doppelklick oder Drag & Drop in den Browser).

---

## ⚡ Die wichtigste Datei

**`js/site-content.js`**

**Fast alle Änderungen machst du NUR in dieser einen Datei.**
Die Website liest alle Texte, Produkte, Preise und Kontaktdaten
automatisch aus dieser Datei und zeigt sie an.

---

## 1. Text ändern (Überschriften, Beschreibungen …)

1. Öffne `js/site-content.js` in einem Texteditor.
2. Suche den Bereich, den du ändern möchtest (z. B. `hero`, `about`, `faq`).
3. Ändere den Text zwischen den Anführungszeichen `"..."`.
4. Speichere die Datei.
5. Lade die Website im Browser neu (Taste F5).

**Beispiel – den Slogan ändern:**

```js
brand: {
  slogan: "Hier deinen neuen Slogan eintragen",
```

---

## 2. Preis ändern

Im Bereich `products` findest du für jedes Produkt eine Zeile:

```js
price: 7.50,
```

Ändere die Zahl **ohne Anführungszeichen** und **mit Punkt statt Komma** als Dezimaltrenner.

**Beispiel:** `price: 8.00,` → 8,00 €

---

## 3. Neues Produkt hinzufügen

Kopiere den folgenden Block und füge ihn im Bereich `products: [...]` ein
(vor der letzten eckigen Klammer `]`), getrennt durch ein Komma:

```js
{
  id: "neues-produkt",
  name: "Waldhonig",
  subtitle: "Kräftiger Honigtau",
  size: "500g",
  price: 8.50,
  description: "Hier die Beschreibung des neuen Produkts.",
  image: "assets/images/glas-waldhonig.jpg",
  imageAlt: "500g Glas Waldhonig aus Wattenscheid-Eppendorf",
  badge: "Herbst",
  available: true,
},
```

Das neue Produkt erscheint **automatisch** auf der Website und im Bestellformular.

---

## 4. Produkt vorübergehend deaktivieren

Ändere bei einem Produkt:

```js
available: true,
```

zu:

```js
available: false,
```

Das Produkt wird dann als „Nicht verfügbar" angezeigt und erscheint nicht im Formular.

---

## 5. Kontaktdaten eintragen

Im Bereich `contact`:

```js
contact: {
  phone: "0234 12345678",      ← Deine Telefonnummer
  email: "honig@beispiel.de",  ← Deine E-Mail-Adresse
  address: "Musterstraße 12, 44866 Bochum",
  pickupInfo: "Abholung nach telefonischer Vereinbarung.",
  hours: "Montag–Freitag 9–18 Uhr",
},
```

---

## 6. Bilder ersetzen

1. Lege dein neues Bild in den Ordner `assets/images/`.
2. Benenne es genauso wie das alte Bild **oder** passe den Pfad in `site-content.js` an.

**Beispiel – Hero-Bild ändern:**

```js
hero: {
  image: "assets/images/mein-neues-foto.jpg",
```

**Empfohlene Bildformate:**
- JPEG (.jpg) für Fotos
- Breite: mindestens 1200 Pixel für große Bilder
- Dateigröße: möglichst unter 500 KB (z. B. mit [Squoosh](https://squoosh.app) komprimieren)

---

## 7. FAQ-Einträge verwalten

Im Bereich `faq.items` kannst du Fragen und Antworten hinzufügen, ändern oder entfernen:

```js
{
  question: "Hier die Frage?",
  answer: "Hier die Antwort.",
},
```

---

## 8. Galerie-Bilder verwalten

Im Bereich `gallery.images` trägst du Pfade und Bildunterschriften ein:

```js
{
  src: "assets/images/galerie-neu.jpg",
  alt: "Beschreibung des Bildes für blinde Nutzer",
  caption: "Kurze Bildunterschrift",
},
```

---

## ⚠️ Vor der Veröffentlichung unbedingt erledigen

Die folgenden Platzhalter müssen **vor dem Online-Stellen** befüllt werden –
sie sind mit `[...]` gekennzeichnet:

| Datei | Was eintragen |
|---|---|
| `js/site-content.js` | `phone`, `email`, `address` im Bereich `contact` |
| `impressum.html` | Name, Anschrift, Telefon, E-Mail |
| `datenschutz.html` | Name, E-Mail, Datum, Hosting-Anbieter |

**Hinweis:** Das Impressum ist gesetzlich verpflichtend. Bitte prüfe den Text
vor der Veröffentlichung mit einem Anwalt oder einem vertrauenswürdigen
Impressum-Generator (z. B. von e-recht24.de).

---

## 9. Website online stellen

### Option A: GitHub Pages (kostenlos)
1. Erstelle ein kostenloses Konto auf [github.com](https://github.com).
2. Erstelle ein neues Repository.
3. Lade alle Dateien hoch.
4. Gehe zu Einstellungen → Pages → Quelle: `main` Branch, Ordner: `/root`.
5. Die Website ist dann unter `https://deinname.github.io/repository-name/` erreichbar.

### Option B: Normaler Webspace
Lade alle Dateien und Ordner per FTP-Programm (z. B. [FileZilla](https://filezilla-project.org/))
in das Stammverzeichnis deines Webspaces hoch.

---

## Dateistruktur im Überblick

```
imkerei-website/
├── index.html           ← Hauptseite (nicht bearbeiten)
├── impressum.html       ← Platzhalter ausfüllen!
├── datenschutz.html     ← Platzhalter ausfüllen!
├── css/                 ← Design (nicht bearbeiten)
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── site-content.js  ← ⭐ HIER alle Inhalte pflegen
│   ├── render-content.js ← Nicht bearbeiten
│   ├── main.js          ← Nicht bearbeiten
│   └── order-form.js    ← Nicht bearbeiten
└── assets/
    └── images/          ← Hier liegen alle Bilder
        ├── hero-honig.jpg
        ├── glas-fruehtracht.jpg
        ├── glas-sommertracht.jpg
        ├── imkerei-garten.jpg
        ├── galerie-1.jpg
        └── galerie-2.jpg … usw.
```

---

*Erstellt mit ❤️ für eine kleine Hobby-Imkerei im Ruhrgebiet.*
