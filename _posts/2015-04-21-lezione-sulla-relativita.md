---
title: Lezione sulla relatività
tags: draft
---


Si tratta di una piccola lezione per una liceale astuta.






<p style="display:none;">
Questo paragrafo contiene le macro per $\LaTeX$ e dovrebbe essere invisibile.
$$
\def\x{\mathbf{x}}
\def\o{\mathbf{o}}
\def\M{\mathbf{M}}
\def\veccoord#1#2{\begin{pmatrix}#1\\#2\end{pmatrix}}
\def\matcoord#1#2#3#4{\begin{pmatrix}#1&#2\\#3&#4\end{pmatrix}}
$$
</p>








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Le discipline coinvolte


Apriamo le danze azzardando delle domande estremamente pericolose.




## Cos'è la fisica?


Un *fenomeno fisico* è un evento concreto.
Intendiamolo nel senso più ingenuo: qualcosa che si possa osservare.
Una mela che cade, vista ad occhio nudo.
Della seta lacerata alla lente d'ingrandimento.
Una stella morente catturata da un telescopio.
L'implicito cruciale è: se lo possiamo osservare allora lo possiamo misurare.
Circa quest'ultimo fatto non aggiungiamo altro: non è la direzione che ci interessa.

Una *teoria fisica* è un modello per una famiglia di fenomeni fisici.
Si tratta cioè di un dispositivo che ne offre una rappresentazione imitando alcuni aspetti del loro comportamento.
Il modello si può applicare prima oppure dopo l'osservazione del fenomeno, ottenendo rispettivamente una previsione ed una descrizione.
La qualità di una teoria si misura con l'affidabilità combinata in queste due circostanze.

La *fisica* è la disciplina di chi osserva fenomeni e produce teorie.
Le finalità sono varie: se ad un estremo c'è chi s'interessa ai fenomeni e produce un modello empirico per ragioni eminentemente pratiche, all'altro alcuni esplorano le possibilità delle teorie ricercando ragioni profonde dietro alle manifestazioni dei fenomeni.



**NB modello non dev'essere verosimile. E.g. predictivity of Jam Axiom.**




## Cos'è la matematica?


Una *struttura matematica* è un'idea rigida.
Vale a dire, l'immagine mentale di un oggetto astratto ma dotato di proprietà precise.
L'insieme dei numeri naturali con l'addizione e le sue proprietà.
Il piano euclideo, per le cui coppie di punti passa sempre un'unica retta.
Si tratta insomma di contesti in cui ci sono permesse delle operazioni, ma esclusivamente nel rispetto di regole prefissate.

Una *teoria matematica* è il corpus di conoscenze inerente ad una famiglia di strutture matematiche.
Ovvero, è quanto necessario a descriverle tutte, ragionare dei rapporti che tra esse intercorrono e classificarle tramite delle proprietà.

La *matematica* è la disciplina di chi descrive strutture e produce teorie.
Le finalità sono varie: se ad un estremo alcuni hanno interesse immediato per approfondire la conoscenza di una struttura specifica, all'altro c'è chi cerca di realizzare teorie nella massima profondità e trasversalità possibili.




## Ma è vero?


Se lo chiedi a me, sì.

Si tratta di domande pericolose perché il consenso in filosofia della scienza è piuttosto limitato.
Per questa ragione ho cercato di delineare un'idea precisa ma non così dettagliata da sollevare il genere di *vespaio filosofico* che trascenderebbe i fini di questa lezione.

L'avrai notato, le due descrizioni si somigliano in forma e contenuto.
Non è un caso: le due discipline sono inscindibilmente intrecciate.

La matematica è un linguaggio irrinunciabile per la fisica e vi introduce l'astrazione garantendo visioni impossibili con la mera osservazione dei fenomeni. La fisica è un'ispirazione inesauribile per la matematica e suggerendo il confronto con l'esperienza ne permette una comprensione intuitiva altrimenti irraggiungibile.




## Chiosa


Si potrebbe arguire che fossero due manifestazioni della medesima entità, e la convinzione che ho maturato è esattamente questa.
Fisica e matematica sono entrambe frutto della tensione degli esseri umani alla comprensione della *realtà*.

La ragione per cui rimangono una necessaria all'altra pur divergendo è che sono l'effetto del medesimo slancio sottoposto a due vincoli differenti ma complementari:

* la Fisica è obbligata al confronto con l'esperienza,
* la Matematica è tenuta ad esserne indipendente.

Non si tratta di *fare gli studi di funzione* o *risolvere i piani inclinati*: la posta in gioco è molto più alta.
Chiunque ti abbia insegnato il contrario o ti mentiva o lo ignorava e quindi, comunque, si trovava dal lato sbagliato della cattedra.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Rudimenti di algebra


**Da riscrivere.
Questo è solo uno schizzo per permetterti di continuare la lettura.**

# Matrici e vettori

Le matrici sono griglie di numeri:

$$
\begin{pmatrix}a&b&\ldots\\c&d&\ldots\\\vdots&\vdots&\ddots\end{pmatrix}
$$

I vettori sono colonne di numeri: 

$$
\begin{pmatrix}x\\y\\\vdots\end{pmatrix}
$$

Noi useremo solo matrici con due righe e due colonne, e solo vettori con due righe.

Esiste un prodotto tra matrici, detto *riga per colonna*, ed il risultato è una matrice:

$$
\matcoord{\mathbf{a}}{\mathbf{b}}{c}{d}
\matcoord{\mathbf{e}}{f}{\mathbf{g}}{h}
=
\matcoord{\mathbf{ae+bg}}{af+bh}{ce+dg}{cf+dh}
$$

Esiste un analogo prodotto tra matrici e vettori, ed il risultato è un vettore:

$$
\matcoord{\mathbf{a}}{\mathbf{b}}{c}{d}
\veccoord{\mathbf{x}}{\mathbf{y}}
=
\veccoord{\mathbf{ax+by}}{cx+dy}
$$

Le matrici si possono sommare e moltiplicare per un numero:

$$
\matcoord{a}{b}{c}{d}
+
\matcoord{e}{f}{g}{h}
=
\matcoord{a+e}{b+f}{c+g}{d+h}
\qquad
k\matcoord{a}{b}{c}{d} = \matcoord{ka}{kb}{kc}{kd}
$$

Anche i vettori:

$$
\veccoord{x}{y}
+
\veccoord{z}{w}
=
\veccoord{x+z}{y+w}
\qquad
k\veccoord{x}{y} = \veccoord{kx}{ky}
$$








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Il cronotopo


Squit!
*Cronotopo* è una parola buffa di etimo greco.
Si forma unendo χρόνος (chrónos) e τόπος (tópos), ovvero tempo e luogo.
È infatti il nome che diamo alla collezione di ogni possibile *evento*, inteso come il dato congiunto di un tempo ed un luogo.
Si tratta di un elemento essenziale per fare fisica: gioca il ruolo di modello dell'ambiente in cui si collocano i fenomeni fisici.




## Osservatori e sistemi di riferimento


Noi stessi ci collochiamo nel cronotopo col ruolo di *osservatori* che percepiscono gli eventi.
Per parlare di questi ultimi però abbiamo bisogno di un *sistema di riferimento*.
Ovvero, dobbiamo scegliere un modo di descriverli *univocamente rispetto alla nostra esperienza*.
È pratica comune identificare un osservatore col suo sistema di riferimento e lo faremo anche noi poiché non genera ambiguità.

**In realtà questo vero solo in un senso adeguato, ma per quello che faremo non crea problemi.
Magari ti spiego a voce, non voglio allungare troppo il brodo.**




## Assoluto e relativo


Si dice che qualcosa è *assoluto* se è indipendente dall'osservatore.

Si dice che qualcosa è *relativo* quando non è assoluto.

Ad esempio, un evento in quanto oggetto astratto nel cronotopo è assoluto.
Le descrizioni che gli osservatori danno di esso, invece, sono univoche solo rispetto all'esperienza di ognuno e quindi sono relative.




## Trasformazioni tra sistemi di riferimento


Confrontare esperienze di osservatori differenti è una pretesa del tutto naturale, ma la relatività delle descrizioni degli eventi ci impedisce di farlo.
Infatti se già solo descrizioni dfferenti del medesimo evento potrebbero essere discordi, in generale le esperienze di osservatori diversi sono imcomparabili.
Abbiamo allora bisogno di *trasformazioni tra i sistemi di riferimento* in grado di compiere la traduzione da un osservatore all'altro.

Immaginiamo che il medesimo evento sia descritto come $\x$ oppure $\x'$ rispettivamente dai sistemi di riferimento $S$ ed $S'$.
Vorremmo una trasformazione $T_{S'\leftarrow S}$ tale che

$$
\x'=T_{S'\leftarrow S}(\x)
$$

Coinvolgendo anche un terzo osservatore in $S''$ avremmo anche

$$
\x''
=
T_{S''\leftarrow S}(\x)
\qquad
\x''
=
T_{S''\leftarrow S'}(\x')
$$

È naturale richiedere che le trasformazioni siano coerenti tra loro, ovvero:

$$
T_{S''\leftarrow S}(\x)
=
\x''
=
T_{S''\leftarrow S'}(\x')
=
T_{S''\leftarrow S'}(T_{S'\leftarrow S}(\x))
=
T_{S''\leftarrow S'}\circ T_{S'\leftarrow S}(\x)
$$

e che ciò valga indipendentemente per qualsiasi evento:

$$
T_{S''\leftarrow S}
=
T_{S''\leftarrow S'}\circ T_{S'\leftarrow S}
$$

È ragionevole aspettarsi l'esistenza di una trasformazione banale da un osservatore qualsiasi verso sé stesso, e quindi dell'inversa di qualsiasi trasformazione:

$$
T_{S\leftarrow S}
=
T_{S\leftarrow S'}\circ T_{S'\leftarrow S}
\qquad
T_{S'\leftarrow S'}
=
T_{S'\leftarrow S}\circ T_{S\leftarrow S'}
$$

In breve, ciò che stiamo chiedendo è che l'insieme delle trasformazioni tra sistemi di riferimento possegga una struttura di gruppo.




## Sistemi di riferimento inerziali


**Da rifrasare un po', forse.**

Si dice *apparente* una forza priva di *agente*, ovvero una forza che non è causata dall'interazione con un oggetto fisico.
La definizione è bizzarra e vale la pena di soffermarsi su qualche esempio.

Alla partenza di una giostra avvertiamo chiaramente una reazione all'indietro, e per tutto il giro ci sentiamo tirare verso l'esterno; scendendo in corsa e camminando sul pianale siamo disorientati da una spinta laterale.
Abbiamo nominato le tre forze apparenti abbastanza comuni da essere state battezzate: sono rispettivamente la f. di Eulero, la f. centrifuga e la f. di Coriolis.
Non c'è alcun oggetto a causarle, eppure i loro effetti sono evidenti.

Per capire cosa sta succedendo ragioniamo su un esempio più semplice.
Alla partenza di un treno vediamo l'intero paesaggio accelerare verso la coda.
Anche alla partenza di un aereo notiamo un'accelerazione, addirittura maggiore.
Invece dando gas alla retromarcia lo vediamo accelerare verso il muso.
Nonostante questo, da terra chiunque ci garantirà in ognuno di questi casi che non avverte alcuna forza.
Allora è chiaro la causa possiamo essere solo noi - o meglio, il nostro sistema di riferimento in quanto osservatori.

Chiameremo *inerziali* i *sistemi di riferimento privi di forze apparenti*.
Il nostro studio si limiterà ai soli sistemi inerziali poiché in essi abbiamo la garanzia che la descrizione della dinamica dipende solo dalle interazioni tra oggetti fisici e non dal nostro punto di vista.

Per caratterizzarli esplicitamente ci serve una definizione più pratica: *un moto rettilineo ed uniforme è tale osservato da qualsiasi sistema di riferimento inerziale*.
Infatti se un oggetto è in tale regime di moto significa che non sta accelerando, ovvero che non è soggetto ad una forza netta.
Ma allora ciò deve rimanere vero per qualsiasi osservatore inerziale, visto che devono tutti percepire le medesime forze fisiche e nessuna forza apparente.

Un'altra definizione equivalente ma più comune è: *i sistemi di riferimento inerziali sono quelli in cui vale la Prima Legge di Newton*.

Da qui in avanti ogni sistema di riferimento nominato sarà implicitamente inerziale.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Il modello


La teoria che svilupperemo sarà un modello giocattolo con due sole dimensioni: una temporale ed una spaziale.
Inoltre, i nostri osservatori useranno solo sistemi di riferimento basati su un sistema di assi cartesiani ortogonali.
Il vantaggio è che semplificheremo enormemente le procedure di calcolo pur preservando la maggior parte della fenomenologia.

**Qui sono sbrigativo perché non è un'usanza è nuova.
Un giorno sistemerò.**

Concretamente dunque un evento osservato da un sistema di riferimento $S$ sarà univocamente determinato da due *coordinate* che denoteremo come la tradizione comanda: $t$ ed $x$.
Con degli apici indicheremo i punti di vista di altri osservatori quando ne avremo bisogno.




## Trasformazioni tra sistemi di riferimento


Non sappiamo come sono fatte le trasformazioni, ma sappiamo che devono rispettare i moti rettilinei ed uniformi in virtù del fatto che essi devono risultatare tali per qualsiasi osservatore.
Faremo leva su ciò per capire che forma hanno.




### Generalità

Un moto rettilineo ed uniforme in $S$ è descritto da una relazione lineare tra spazio e tempo, come ad esempio $x=x_0+vt$.
Analogamente in $S'$ avremo $x'=x'_0+v't'$.
Nel massimo della generalità possibile la trasformazione di coordinate sarà una coppia di funzioni $t'(x,t)$ ed $x'(x,t)$ che per ogni evento ne esprimono le coordinate di $S'$ in termini di quelle di $S$.
Inserendole nella legge di $S'$ otteniamo $x'(x,t)=x'_0+v't'(x,t)$.
Quest'ultima diventa così una legge su $t$ ed $x$ ma deve continuare a valere.
Allora non può essere che lineare poiché la legge del moto in $S$ stabilisce che $t$ ed $x$ sono in relazione lineare.
L'unico modo perché ciò avvenga è ognuna delle funzioni sia a propria volta lineare.
Ovvero, se usiamo lettere greche per denotare delle costanti dipendenti solo da $S$ ed $S'$, la forma più generale ammissibile per la trasformazione è

$$\left\{\begin{align}
t' &= \tau+\gamma t+\varepsilon x\\
x' &= \sigma+\alpha t+\delta x	
\end{align}\right.
$$

Definendo un vettore $T$ ed una matrice $M$ legati alla trasformazione possiamo scrivere in modo molto più elegante il cambio di coordinate:

$$
T = \veccoord{\tau}{\sigma}
\qquad
M = \matcoord{\gamma}{\varepsilon}{\alpha}{\delta}
\qquad
\x' = T+M\x
$$

Naturalmente l'eleganza non è il motivo principale: facendolo abbiamo reso evidente la struttura di gruppo.
Infatti, se $(T,M)$ è la trasformazione da $S$ ad $S'$ e $(T',M')$ la trasformazione da $S'$ ad $S''$ allora possiamo calcolarne la composizione:

$$\begin{align}
\x' &= T + M\x \\
\x''
&= T'+M'\x' \\
&= T'+M'(T+M\x) \\
&= (T'+M'T)+(M'M)\x
\end{align}$$

e quindi la trasformazione da $S$ ad $S''$ è

$$
(T',M')\circ(T,M)
=
(T'+M'T,M'M)
$$

Abbiamo trovato esplicitamente l'operazione di prodotto del gruppo.
Non è difficile rendersi conto dell'esistenza dell'identità $(\mathbf{0},\mathbb{1})$.
Piuttosto, notiamo che si può sempre spezzare una trasformazione in due più semplici:

$$
(T,\mathbb{1})\circ(\mathbf{0},M)
=
(T,M)
$$

Ciò permette di spezzarene lo studio.




### Traslazioni


La trasformazione $(T,\mathbb{1})$ agisce come

$$
\x' = T+\mathbb{1}\x = T+\x
$$

che in coordinate dà

$$\left\{\begin{align}
\tau &= t'-t \\
\sigma &= x'-x
\end{align}\right.$$

Le due costanti sono indipendenti dagli eventi, quindi capiamo subito qual è il senso della trasformazione: si tratta di una traslazione di $\tau$ nella direzione del tempo e di $\sigma$ nella direzione dello spazio.
È facile anche verificare che rispettano i moti rettilinei ed uniformi senza alcuna restrizione su $\tau$ e $\sigma$.
Trasformazioni di questo tipo mettono in comunicazione osservatori con sistemi di riferimento identici eccetto che per la scelta dell'origine.




### Boost


Questa è la parte *veramente* interessante e infatti è un po' laboriosa.
La trasformazione $(\mathbf{0},M)$ agisce come

$$
\x' = \mathbf{0}+M\x = M\x
$$

Quale sia l'effetto sfugge all'intuizione, quindi appoggiamoci allo studio di alcune situazioni particolarmente semplici.

Immaginiamo che $S'$ si muova in $S$ con moto uniforme di velocità $v$ partendo dall'origine al tempo zero.
In $S$ il moto delle due origini è

$$
\o_S = \veccoord{t}{0}
\qquad
\o_{S'} = \veccoord{t}{vt}
$$

In $S'$ la situazione è reciproca:

$$
\o'_S = \veccoord{t'}{-vt'}
\qquad
\o'_{S'} = \veccoord{t'}{0}
$$

Conosciamo la descrizione dei due moti in entrambi i sistemi, ed esse devono essere compatibili secondo

$$
\o'_S = \M \o_S
\qquad
\o'_{S'} = \M \o_{S'}
$$

che in coordinate si scrive

$$
\veccoord{t'}{0}
=
\veccoord{(\gamma+\varepsilon v)t}{(\rho+\sigma v)t}
\qquad
\veccoord{t'}{-vt'}
=
\veccoord{\gamma t}{\rho t}
$$

È facile vedere che ciò implica $\rho=-v\sigma=-v\gamma$ e le matrici sono vincolate ad avere la forma

$$
M = \matcoord{\gamma}{\varepsilon}{-v\gamma}{\gamma}
$$

Mi aspetto che valgano proprietà di gruppo, e che quindi la composizione $MM'=M''$ abbia la medesima forma.
In particolare, gli elementi lungo la diagonale dovranno essere uguali:

$$
\matcoord{\gamma}{\varepsilon}{-v\gamma}{\gamma}
\matcoord{\gamma'}{\varepsilon'}{-v'\gamma'}{\gamma'}
=
\matcoord{\gamma'(\gamma-\varepsilon v')}{\gamma\varepsilon'+\gamma'\varepsilon}{-\gamma\gamma'(v+v')}{\gamma(-v\varepsilon'+\gamma')}
=
\matcoord{\gamma''}{\varepsilon''}{-v''\gamma''}{\gamma''}
$$

e quindi

$$
-\varepsilon\gamma'v'=-\varepsilon'\gamma v
$$

Solo $\varepsilon$, $\gamma$ e $v$ dipendono dalla scelta di $M$.
Siccome l'uguaglianza deve valere per qualunque scelta, $\varepsilon$ deve dipendere essa esattamente come $\gamma v$.
Il medesimo ragionamento si può fare per $M'$.
Da ciò segue che la forma più generale è

$$
\varepsilon = -\kappa\gamma v
$$

dove $\kappa$ è una costante universale per tutte le trasformazioni.
Su cosa sia ci ragioneremo dopo.

Riesaminiamo la composizione alla luce di queste nuove informazioni:

$$
\gamma\gamma'
\matcoord{1+\kappa vv'}{-\kappa(v+v')}{-\kappa(v+v')}{1+\kappa vv'}
=
\gamma''\matcoord{1}{-\kappa v''}{-v''}{1}
$$

ovvero

$$\left\{\begin{align}
\gamma\gamma'(1+\kappa vv') &= \gamma'' \\
-\gamma\gamma'(v+v') &= -\gamma''v''
\end{align}\right.$$

da cui

$$
v'' = \frac{v+v'}{1+\kappa vv'}
$$

Consideriamo ora il caso particolare in cui $M'$ sia l'inversa di $M$, e quindi $M''=\mathbb{1}$.
Certamente $\gamma''=1\neq 0$ e quindi affinché $-\gamma''v''=0$ è necessario che $v''=0$, ovvero $v'=-v$.
La prima equazione dell'ultimo sistema si riduce dunque a

$$
\gamma\gamma'=\frac{1}{1-\kappa v^2}
$$

Poi per una considerazione **che è semplice ma non ho ancora capito come dire in modo semplice** otteniamo

$$
\gamma = \frac{1}{\sqrt{1-\kappa v^2}}
$$

Tiriamo le somme.
La trasformazione da $S$ ad un sistema $S'$ che sia in moto relativo rispetto al primo con velocità $v$ è data da

$$
M=\matcoord{\gamma}{-v\kappa\gamma}{-v\gamma}{\gamma}
\qquad
\gamma = \frac{1}{\sqrt{1-\kappa v^2}}
$$

L'unico aspetto che non abbiamo ancora affrontato è la scelta di $\kappa$.
Lo posticipiamo ancora un po' perché sarà un colpo di scena.




### Riflessioni


Abbiamo esaurito tutte le trasformazioni?
No, in effetti ce ne sono ancora due.
**Ma sono poco importanti per noi quindi taglio corto.**
Sappiamo ricondurre un osservatore in moto ad uno fermo, e sappiamo far combaciare le origini con una traslazione.
Per cosa possono differire due sistemi di riferimento fermi e con la medesima origine?
Il verso degli assi.
Ecco, rispettivamente, l'inversione temporale e l'inversione spaziale:

$$
\matcoord{-1}{0}{0}{1}
\qquad
\matcoord{1}{0}{0}{-1}
$$




### Pensiero


**Qui magari ci sta na postilla su cosa siano sti gruppi.**




### Il colpo di scena

Avanza solo da capire chi è $\kappa$. Esso compare sotto un radicale:

$$
\sqrt{1-\kappa v^2}
$$

Allora sappiamo che deve valere, per qualsiasi velocità possibile,

$$
\kappa v^2 < 1
$$

Ci sono essenzialmente tre possibilità.

$\kappa < 0$.
È la scelta noiosa.
Produce un modello senza alcun riscontro sperimentale quindi la ignoreremo.

$\kappa = 0$.
È la scelta ovvia.
In questo caso $\gamma=1$ ed i boost, che ribattezziamo, prendono la seguente forma:

$$
\Gamma=\matcoord{1}{0}{-v}{1}
$$

Si tratta di una trasformazione di Galileo.
In pratica, abbiamo appena ottenuto la fisica classica.

$\kappa > 0$.
È la scelta interessante.
Chiedere l'esistenza di una simile costante universale è equivalente a chiedere che $v^2 < 1/\kappa$, ovvero stiamo ponendo un limite massimo alle velocità fisiche ammissibili.
Abbiamo appena ottenuto la fisica della relatività ristretta.
Naturalmente $\kappa = 1/c^2$ dove $c$ è la velocità della luce.
Ribattezziamo i boost come trasformazioni di Lorentz:

$$
\Lambda=\matcoord{\gamma}{-v\gamma/c^2}{-v\gamma}{\gamma}
\qquad
\gamma=\frac{1}{\sqrt{1-v^2/c^2}}
$$

**Ebbene sì.
Tutta la differenza tra meccanica newtoniana e relatività ristretta si può ricondurre alla scelta di un parametro.
Figo, eh?**








## Eventi e misure

Avremo bisogno di parlare molto di eventi.
Per evitare ripetizioni e noiose circonlocuzioni definiamo alcune parole nuove.
Data una qualsiasi coppia di eventi osservati dal medesimo sistema di riferimento

$$
\x_1 = \veccoord{t_1}{x_1}
\qquad
\x_2 = \veccoord{t_2}{x_2}
$$

diremo che essi sono:

* separati dalla *durata* $(t_2-t_1)$;
* *sincronici* se $(t_2-t_1)=0$;
* *diacronici* se $(t_2-t_1)\neq0$;
* separati dalla *lunghezza* $(x_2-x_1)$;
* *sintopici* se $(x_2-x_1)=0$;
* *diatopici* se $(x_2-x_1)\neq0$.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# La cinematica

Da qui in avanti useremo in modo ricorrente due sistemi di riferimento $S$ ed $S'$, il secondo in moto nel primo a velocità $v$.
Non lo ripeteremo.








## Orologi in moto

Immaginiamo di essere in $S$ ed osservare un orologio in moto solidale con $S'$.
Siano $\x'_1$ ed $\x'_2$ gli eventi corrispondenti a due ticchettii: essi sono diacronici e sintopici.




### Caso classico

Le coordinate del vettore tra i ticchettii in $S'$ sono

$$
\x'_2-\x'_1
=
\veccoord{t'_2-t'_1}{0}
=
\veccoord{t_2-t_1}{-v(t_2-t_1)+(x_2-x_1)}
$$

Da esse ricaviamo immediatamente due equazioni da interpretare fisicamente:

$$
\left\{\begin{align}
  (t_2-t_1) &= (t'_2-t'_1) \\
  (x_2-x_1) &= v(t_2-t_1)
\end{align}\right.
$$


La prima afferma che gli intervalli temporali misurati in $S$ ed $S'$ sono uguali.
In altri termini *la durata è assoluta*, ovvero indipendente dal sistema di riferimento.

Ricordando che i ticchettii dell'orologio sono diacronici in $S'$, esaminiamo la seconda:

$$
(x_2-x_1) = v(t'_2-t'_1) \neq 0
$$

cioè i due eventi sintopici in $S'$ sono diatopici in $S$.
Questo significa che *la sintopia è relativa* al sistema di riferimento.




### Caso relativistico

In $S'$ i ticchettii sono separati dal vettore di coordinate

$$
\veccoord{(t'_2-t'_1)}{0}
=
\veccoord{\gamma (t_2-t_1)-\gamma v(x_2-x_1)/c^2}
      {-\gamma v(t_2-t_1)+\gamma(x_2-x_1)}
$$

Eseguiamo alcune manipolazioni sulla parte spaziale, poi su quella temporale e poi ancora sulla prima:

$$
\begin{align*}
\gamma(x_2-x_1)
&= \gamma v(t_2-t_1) \\ \\
(t'_2-t'_1)
&= \gamma (t_2-t_1) - \gamma v(x_2-x_1)/c^2 \\
&= \gamma (t_2-t_1) - \gamma v^2(t_2-t_1)/c^2 \\
&= \gamma(1-v^2/c^2)c(t_2-t_1) \\
&= \frac{1}{\gamma}(t_2-t_1) \\ \\
(x_2-x_1)
&= \gamma v(t'_2-t'_1)
\end{align*}
$$

Semplificando le espressioni possiamo stabilire che

$$
\left\{\begin{align}
  (t_2-t_1) &= \gamma(t'_2-t'_1) \\
  (x_2-x_1) &= \gamma v(t'_2-t'_1)
\end{align}\right.
$$

Interpretiamo fisicamente queste due equazioni.

Ricordando che $\gamma>1$, esaminiamo la prima:

$$
(t_2-t_1) = \gamma(t'_2-t'_1) > (t'_2-t'_1)
$$

cioè gli intervalli temporali misurati in $S$ risultano maggiori di quelli misurati in $S'$, precisamente di un fattore $\gamma$.
Questo è il fenomeno noto come *dilatazione degli intervalli temporali*.
In altri termini, *la durata è relativa* al sistema di riferimento.

Ricordando che i ticchettii dell'orologio sono diacronici in $S'$, esaminiamo la seconda:

$$
(x_2-x_1) = \gamma v(t'_2-t'_1) \neq 0
$$

cioè i due eventi sintopici in $S'$ sono diatopici in $S$.
Questo significa che *la sintopia è relativa* al sistema di riferimento.












## Metri in moto


Immaginiamo di essere in $S$ ed osservare un metro in moto solidale con $S'$.
Siano gli eventi $\x'_1$ ed $\x'_2$ corrispondenti ai suoi estremi: essi sono sincronici e diatopici.




### Caso classico


Le coordinate del vettore che separa gli estremi in $S'$ sono

$$
\veccoord{0}{x'_2-x'_1}
=
\veccoord{t_2-t_1}{-v(t_2-t_1)+(x_2-x_1)}
$$

Da esse ricaviamo immediatamente due equazioni da interpretare fisicamente:

$$
\left\{\begin{align}
  (t_2-t_1) &= 0 \\
  (x_2-x_1) &= (x'_2-x'_1)
\end{align}\right.
$$


La seconda afferma che gli intervalli spaziali misurati in $S$ ed $S'$ sono uguali.
In altri termini *la lunghezza è assoluta*, ovvero indipendente dal sistema di riferimento.

La prima afferma che gli estremi del metro, sincronici in $S'$, lo sono anche in $S$.
Questo significa che *la sincronia è assoluta*, ovvero indipendente dal sistema di riferimento.




### Caso relativistico


Le coordinate del vettore spaziotemporale che li separa in $S'$ sono dunque

$$
\veccoord{0}{x'_2-x'_1}
=
\veccoord{\gamma c(t_2-t_1)-\gamma\beta(x_2-x_1)}
      {-\gamma\beta c(t_2-t_1)+\gamma(x_2-x_1)}
$$

Eseguiamo alcune manipolazioni sulla parte temporale, poi su quella spaziale e poi ancora sulla prima:

$$
\begin{align*}
\gamma c(t_2-t_1)
&= \gamma\beta(x_2-x_1) \\ \\
(x'_2-x'_1)
&= -\gamma\beta c(t_2-t_1)+\gamma(x_2-x_1) \\
&= -\gamma\beta^2 (x_2-x_1)+\gamma(x_2-x_1) \\
&= \gamma(-\beta^2 +1)(x_2-x_1) \\
&= \gamma (x_2-x_1) \\ \\
\gamma c(t_2-t_1)
&= \beta (x'_2-x'_1)
\end{align*}
$$

Semplificando le espressioni possiamo stabilire che

$$
\left\{\begin{align}
  (t_2-t_1) &= \frac{\beta}{\gamma c}(x'_2-x'_1) \\
  (x_2-x_1) &= \frac{1}{\gamma}(x'_2-x'_1)
\end{align}\right.
$$

Interpretiamo fisicamente queste due equazioni.

Ricordando che $\gamma>1$, esaminiamo la seconda:

$$
(x_2-x_1) = \frac{1}{\gamma}(x'_2-x'_1) < (x'_2-x'_1)
$$

cioè gli intervalli spaziali misurati in $S$ risultano minori di quelli misurati in $S'$, precisamente di un fattore $\gamma$.
Questo è il fenomeno noto come *contrazione degli intervalli spaziali*.
In altri termini, *la lunghezza è relativa* al sistema di riferimento.

Ricordando che gli estremi del metro sono diatopici in $S'$, esaminiamo la prima:

$$
(t_2-t_1) = \frac{\beta}{\gamma c}(x'_2-x'_1) \neq 0
$$

cioè i due eventi sincronici in $S'$ sono diacronici in $S$.
Questo significa che *la diacronia è relativa* al sistema di riferimento.









## Moti relativi



**Ok, questo è tutto da rifare**


### Caso classico


$$\begin{align}
\Gamma_u\Gamma_v
=
\matcoord{1}{0}{-u}{1}
\matcoord{1}{0}{-v}{1}
=
\matcoord{1}{0}{-(u+v)}{1}
=
\Gamma_{u\oplus v}
\end{align}$$

$$
u\oplus v = u+v
$$




### Caso relativistico


$$\begin{align}
\Lambda_u\Lambda_v
&=
\matcoord{\gamma_u}{-\gamma_u\beta_u}{-\gamma_u\beta_u}{\gamma_u}
\matcoord{\gamma_v}{-\gamma_v\beta_v}{-\gamma_v\beta_v}{\gamma_v} \\
&=
\gamma_u\gamma_v
\matcoord{1}{-\beta_u}{-\beta_u}{1}
\matcoord{1}{-\beta_v}{-\beta_v}{1} \\
&=
\gamma_u\gamma_v
\matcoord{1+\beta_u\beta_v}{-(\beta_u+\beta_v)}
       {-(\beta_u+\beta_v)}{1+\beta_u\beta_v}
\end{align}$$

$$\begin{align}
\frac{1}{\gamma_u\gamma_v}
&=
\sqrt{1-\beta_u^2}\sqrt{1-\beta_v^2}
=
\sqrt{(1-\beta_u^2)(1-\beta_v^2)} \\
&=
\sqrt{1-\beta_u^2-\beta_v^2+\beta_u^2\beta_v^2}
=
\sqrt{(1+\beta_u^2\beta_v^2)-(\beta_u^2+\beta_v^2)} \\
&=
\sqrt{(1+2\beta_u\beta_v+\beta_u^2\beta_v^2)-(\beta_u^2+2\beta_u\beta_v+\beta_v^2)} \\
&=
\sqrt{(1+\beta_u\beta_v)^2-(\beta_u+\beta_v)^2} \\
&=
(1+\beta_u\beta_v)\sqrt{1-\left(\frac{\beta_u+\beta_v}{1+\beta_u\beta_v}\right)^2} \\
\end{align}$$

$$
\beta_{u\oplus v}
= \frac{\beta_u+\beta_v}{1+\beta_u\beta_v}
= \frac{u+v}{c^2+uv}
\qquad
\gamma_{u\oplus v} = \frac{1}{\sqrt{1-\beta_{u\oplus v}^2}}
$$

$$
\frac{1}{\gamma_u\gamma_v}
=
(1+\beta_u\beta_v)\frac{1}{\gamma_{u\oplus v}}
$$


$$\begin{align}
\Lambda_u\Lambda_v
&=
\frac{\gamma_{u\oplus v}}{1+\beta_u\beta_v}
\matcoord{1+\beta_u\beta_v}{-(\beta_u+\beta_v)}
       {-(\beta_u+\beta_v)}{1+\beta_u\beta_v} \\
&=
\matcoord{\gamma_{u\oplus v}}{-\gamma_{u\oplus v}\beta_{u\oplus v}}
       {-\gamma_{u\oplus v}\beta_{u\oplus v}}{\gamma_{u\oplus v}}
=
\Lambda_{u\oplus v}
\end{align}
$$

$$
u\oplus v = \frac{c(u+v)}{c^2+uv}
$$











## Sorgenti in moto




### Caso classico

$$
\x'_2-\x'_1 = \veccoord{1/f'}{0}
$$

$$
\x_2-\x_1 = \veccoord{1/f'}{v/f'}
$$

$$
\frac{1}{f}
= \frac{1}{f'} + \frac{v/f'}{u}
= \frac{1}{f'}\left(1+\frac{v}{u}\right)
$$

$$
(-u) = (-u')\oplus v = -u'+v
$$

$$\begin{align}
\left(1+\frac{v}{u}\right)
= \left(1+\frac{v}{u'-v}\right)
= \left(1-\frac{v}{u'}\right)^{-1}
\end{align}$$

$$
f = f'\left(1-\frac{v}{u'}\right)
$$

### Caso relativistico

$$
\x'_2-\x'_1 = \veccoord{c/f'}{0}
$$

$$
\x_2-\x_1 = \veccoord{\gamma c/f'}{\gamma\beta c/f'}
$$

$$
\frac{1}{f}
= \frac{\gamma}{f'} + \frac{\gamma\beta c/f'}{u}
= \frac{1}{f'}\gamma\left(1+\frac{\beta c}{u}\right)
$$

$$
(-u) = (-u')\oplus v = \frac{-u'+v}{1-u'v/c^2}
$$

$$\begin{align}
\gamma\left(1+\frac{\beta c}{u}\right)
&= \gamma\left(1+\frac{\beta c(1-u'v/c^2)}{u'-v}\right) \\
&= \gamma\frac{u'-v+v(1-u'v/c^2)}{u'-v} \\
&= \gamma(1-v^2/c^2)\frac{u'}{u'-v} \\
&= \frac{1}{\gamma}\left(1-\frac{v}{u'}\right)^{-1}
\end{align}$$

$$
f = f'\gamma\left(1-\frac{v}{u'}\right)
$$




 * * *


# La dinamica