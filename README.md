# Producten bevindingen

Doel: Hier verzamelen we toegankelijkheidsproblemen die vaker voorkomen en bekend zijn bij een producten en webdiensten.

Om niet meerdere keren in Nederland hetzelfde onderzoek uit te voeren. Er zijn te weinig goede toegankelijkheidsonderzoekers in Nederland en hiermee kunnen we tijd besparen. Die tijd kunnen we besteden aan het nog toegankelijker maken van Nederland.

## Beheerders

- Inhoudelijk beheer: [Jules Ernst](https://github.com/julezrulez) van 200 OK
- Technisch beheer: [Rian Rietveld](https://github.com/rianrietveld) van Level Level

## Bijdragen aan de GitHub Pages

In principe onderhouden de beheerders de GitHub Pages.
De pagina’s zijn gemaakt en worden bijgehouden met de [NPM module Eleventy](https://www.11ty.dev/docs/getting-started/). Voor een local install heb je [node.js](https://nodejs.org/en/) versie 10 of hoger nodig.

### Opzetten locale omgeving

Stappen:
- clone deze repository op een voor jou geschikte plek
- open een terminal
- ga de directory van clone binnen: `cd prodcuten-bevindingen`
- draai `npm install`
- draai Eleventy: `npm start`

Er start dan een lokale webserver op met de GitHub pages http://localhost:8080

Wil je discussies wijzigen of toevoegen?
- maak een nieuwe branch aan in Git.
- maak je wijzigingen in de `prodcuten-bevindingen/src/` directory.
- de files met de bevindingen staan in `src/findings/`, kijk bij een bestaande file over een bevinding naar de opzet.
- de files met de verschillende producten staan in `src/sc/`, kijk bij een bestaande file over een product naar de opzet.
- draai in de terminal, in de `prodcuten-bevindingen/` directory, `npm run build`.
- Maak een pull request aan, publiceer deze op GitHub en vraag om een review.
