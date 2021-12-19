-- Aufgabe matinf

/*
GRUP_TXT | Auftragsbestand
*/
SELECT GRUP_TXT,
       SUM(IF((aufpos.MENGE - aufpos.MENGEGEL) <= 0, 0, (aufpos.MENGE - aufpos.MENGEGEL) * PREIS)) AS AUFTRAGSBESTAND
FROM aufpos
         JOIN aufkopf akopf on akopf.AUFNR = aufpos.AUFNR
         JOIN kdst kds on kds.KDNR = akopf.KDNR
         JOIN kdbra kdb on kdb.BRANCHE = kds.BRANCHE
GROUP BY GRUP_TXT;

/*
Artikel | Bestand
*/
SELECT CONCAT(artst.artnr, ': ', artbez) AS ARTIKEL, BESTAND
FROM artst
         LEFT JOIN aufpos on artst.artnr = aufpos.artnr
WHERE aufpos.aufnr IS NULL
ORDER BY ARTIKEL DESC;

/*
Firma | Auftragnummer | Artikelbezeichnung | Abweichung
*/
SELECT kdst.FIRMA, aufkopf.AUFNR, artst.ARTBEZ, (aufpos.preis - artst.vpreis) * aufpos.menge AS ABWEICHUNG
FROM aufkopf
         JOIN kdst ON aufkopf.kdnr = kdst.kdnr
         JOIN aufpos ON aufkopf.aufnr = aufpos.aufnr
         JOIN artst ON artst.artnr = aufpos.artnr
WHERE (aufpos.preis - artst.vpreis) * aufpos.menge < 0;
# HAVING ABWEICHUNG < 0; // Das geht nur mit HAVING wenn man die kurzform machen will andernfalls where wie oben

/*
Kundennummer | Firma | Adresse | Auftragsnummer
*/
SELECT kdst.kdnr,
       kdst.firma,
       CONCAT(kdst.plz, ' ', kdst.ort, ', ', kdst.strasse) AS ADRESSE,
       IFNULL(aufkopf.aufnr, 0)                            AS AUFNR
FROM matinf.kdst
         LEFT JOIN matinf.aufkopf ON kdst.kdnr = aufkopf.kdnr
ORDER BY matinf.kdst.kdnr;

/*
 Extra Aufgabe: Zeige die maximale Prov. der Vertreter, die ein Auftrag fakturiert haben und einem aktuellen Kunden zugewiesen sind.
 */

Select max(t.PROV) as 'Maximale aktive Provision'
from (SELECT vert.PROV
      from kdst
               JOIN vert ON vert.VERTRETER = kdst.VERTRETER
               JOIN aufkopf ON aufkopf.KDNR = kdst.KDNR
      Where aufkopf.status = 2
     ) as t;
