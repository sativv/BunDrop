Instruktioner för att starta projektet

```csharp
npm install
npx json-server --watch db.json
npm run start-set-port
```

## Projektanalys

I detta projektet har jag skapat en hemsida för en hamburgerrestaurang där man kan registrera sig, bläddra i meny, lägga till i varukorg och simulera en beställning med fejk leverans & betalnings information.

Jag valde att använda mig utav react då jag är bekvämast med det och tror att det är ramverket som jag kommer använda mig utav mest i framtiden.  Jag använder endast en simpel json-server som databas och hanterar all min data mellan sidorna med hjälp utav react context. 

Jag började med att skapa en figma design med fokus på en mobil-version då det oftast är lättast att skala upp i efterhand istället för tvärtom. I tidigare projekt då jag ej har börjat med den mobilanpassade deisgnen har jag alltid haft mycket problem med att få min applikation till att se ut som jag vill, så jag är nöjd med hur det blev i detta fallet. Det slutade med att jag inte behövde använda mig utav speciellt mycket media-queries då i princip allting gjordes responsivt till att börja med. 

I efterhand så skulle jag tagit mig an custom hooks för att underlätta i vissa delar och minimera kod för t.ex. mina interaktioner med “databasen” då det alltid blir väldigt repetitiv kod. Jag hade även försökt minimera hur många context jag använder för att hantera all min information mellan sidobyten. Det slutade med att jag hade ett context för användare, ett för kundvagn och ett för beställningar. Eftersom jag använder mig utav react context så försvinner den sparade datan i contexten om man manuellt uppdaterar sidan, detta kunde jag undvikt om jag använt mig utav localstorage istället. Anledningen till att jag valde att använda context över localstorage är helt enkelt att jag tidigare har använt localstorage men ej context, och jag ville lära mig någonting nytt. Det finns såklart för och nackdelar med båda metoderna. 

Jag är inte speciellt nöjd med min kods struktur men det är förväntat när jag använder mig utav massor av nya metoder/tekniker som jag ej rört tidigare. Detta lär jag gå igenom och städa upp vid senare tillfälle. Vissa saker skulle kunnat gjorts till komponenter för att reducera antalet sidor, som t.ex utchecknings delen där swish och kredit kort kunde kombinerats som en komponent och lagts in på en av sidorna i beställningsprocessen. 

Designmässigt hade jag kanske gett lite mer “liv” till sidan, t.ex. någon större bild med lite färger på hemsidan. Jag fokuserade på att göra sidan lätt att använda utan för mycket distraktioner eller förvirrande komponenter.
