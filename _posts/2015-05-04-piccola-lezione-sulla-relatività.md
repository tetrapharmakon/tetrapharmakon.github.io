---
title: Piccola lezione sulla relatività
tags: draft
macros: |
  \def\x{\mathbf{x}}
  \def\o{\mathbf{o}}
  \def\M{\mathbf{M}}
  \def\d{\Delta}
  \def\mat#1#2#3#4{\begin{pmatrix}#1&#2\\#3&#4\end{pmatrix}}
  \def\vec#1#2{\begin{pmatrix}#1\\#2\end{pmatrix}}
  \def\sys#1{\left\{\begin{aligned}#1\end{aligned}\right.}
---


Una introduzione con prerequisiti quasi nulli, suddivisa in parti digeribili.
Embrionale.
Mi importa del taglio alternativo.


# Le discipline


Apriamo le danze abbozzando delle risposte a delle domande difficili.
L'intento è quello di schiarire un poco le idee a chi non si sia mai confrontato con la sistematizzazione della scienza.




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

Si tratta di domande difficili perché in generale il consenso in filosofia della scienza è tanto più limitato quanto più si investiga in profondità.
Ho cercato di delineare un'idea precisa evitando tecnicismi che trascenderebbero i fini di questa lezione.




## Chiosa


L'avrai notato, le due descrizioni si somigliano in forma e contenuto.
Non è un caso: le due discipline sono inscindibilmente intrecciate.

La matematica è un linguaggio irrinunciabile per la fisica e vi introduce l'astrazione garantendo visioni impossibili con la mera osservazione dei fenomeni. La fisica è un'ispirazione inesauribile per la matematica e suggerendo il confronto con l'esperienza ne permette una comprensione intuitiva altrimenti irraggiungibile.

Si potrebbe arguire che fossero due manifestazioni della medesima entità, e la convinzione che ho maturato è esattamente questa.
Fisica e matematica sono entrambe frutto della tensione degli esseri umani alla comprensione della *realtà*.

La ragione per cui rimangono una necessaria all'altra pur divergendo è che sono l'effetto del medesimo slancio sottoposto a due vincoli differenti ma complementari:

* la Fisica è obbligata al confronto con l'esperienza,
* la Matematica è tenuta ad esserne indipendente.

Non si tratta di *fare gli studi di funzione* o *risolvere i piani inclinati*: la posta in gioco è molto più alta.
Chiunque ti abbia insegnato il contrario o ti mentiva o lo ignorava e quindi, comunque, si trovava dal lato sbagliato della cattedra.








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
È pratica comune identificare un osservatore col suo sistema di riferimento e lo faremo anche noi poiché non genera particolare ambiguità.




## Assoluto e relativo


Diremo che qualcosa è *assoluto* se è indipendente dall'osservatore.

Diremo che qualcosa è *relativo* quando non è assoluto.

Ad esempio, un evento in quanto oggetto astratto nel cronotopo è assoluto.
Le descrizioni che gli osservatori danno di esso, invece, sono univoche solo rispetto all'esperienza di ognuno e quindi sono relative.




## Confronto tra eventi


Le descrizioni di due eventi date dallo stesso osservatore sono necessariamente comparabili tra loro.
È dunque opportuno definire del lessico per classificarli almeno in senso relativo.
Diremo che essi sono:

* *sincronici* se le loro coordinate temporali coincidono;
* *diacronici* se non sono sincronici;
* *sintopici* se le loro coordinate spaziali coincidono;
* *diatopici* se non sono sintopici.

Due eventi sincronici e sintopici sono il medesimo evento, in virtù dell'univocità della descrizione.




## Confronto tra osservatori


Confrontare esperienze di osservatori differenti è una pretesa del tutto ragionevole, ma la relatività delle descrizioni degli eventi ci impedisce di farlo.
Infatti, se già solo descrizioni differenti del medesimo evento potrebbero essere discordi, in generale le esperienze di osservatori diversi sono ovviamente incomparabili.

Abbiamo allora bisogno di *trasformazioni tra i sistemi di riferimento* in grado di compiere la traduzione da un osservatore all'altro.
Inoltre è naturale chiedere che siano invertibili in modo coerente e concatenabili in modo univoco e consistente, ed il risultato non dipenda dall'ordine con cui effettuiamo tali operazioni.

Lo vedremo poi in dettaglio, questo comportamento è catturato con precisione dalla nozione matematica di *gruppo*.
Dunque in gergo tecnico ciò che chiediamo è che le trasformazioni tra sistemi di riferimento abbiano struttura di gruppo.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# La Prima Legge


Studiare esplicitamente il problema nei termini completamente generali posti finora eccede i nostri scopi.
Ora limiteremo il campo di studio: i risultati che otterremo saranno comunque piuttosto gustosi.




## Forze apparenti


Si dice *apparente* una forza priva di *agente*, ovvero una forza che non è causata dall'interazione con un oggetto fisico.
La definizione è bizzarra e vale la pena di soffermarsi su qualche esempio.

Alla partenza di una giostra avvertiamo chiaramente una reazione all'indietro, e per tutto il giro ci sentiamo tirare verso l'esterno; scendendo in corsa e camminando sul pianale siamo disorientati da una spinta laterale.
Abbiamo nominato le tre forze apparenti abbastanza comuni da essere state battezzate: sono rispettivamente la f. di Eulero, la f. centrifuga e la f. di Coriolis.
Non c'è alcun oggetto a causarle, eppure i loro effetti sono evidenti.




## Sistemi inerziali


Per capire cosa sta succedendo ragioniamo su un esempio più semplice.
Alla partenza di un treno vediamo l'intero paesaggio accelerare verso la coda.
Anche alla partenza di un aereo notiamo un'accelerazione, addirittura maggiore.
Invece dando gas alla retromarcia lo vediamo accelerare verso il muso.
Nonostante questo, da terra chiunque ci garantirà in ognuno di questi casi che non avverte alcuna forza.
Allora è chiaro la causa possiamo essere solo noi - o meglio, il nostro sistema di riferimento in quanto osservatori.

Chiameremo *inerziali* i *sistemi di riferimento privi di forze apparenti*.
Il nostro studio si limiterà ai soli sistemi inerziali poiché in essi abbiamo la garanzia che la descrizione della dinamica dipende solo dalle interazioni tra oggetti fisici e non dal nostro punto di vista.




## Definizioni equivalenti


Per caratterizzare esplicitamente i sistemi inerziali ci serve una definizione più pratica: *un moto rettilineo ed uniforme è tale osservato da qualsiasi sistema di riferimento inerziale*.
Infatti se un oggetto è in tale regime di moto significa che non sta accelerando, ovvero che non è soggetto ad una forza netta.
Ma allora ciò deve rimanere vero per qualsiasi osservatore inerziale, visto che devono tutti percepire le medesime forze fisiche e nessuna forza apparente.

Un'altra definizione equivalente ma più comune è: *i sistemi di riferimento inerziali sono quelli in cui vale la Prima Legge di Newton*.

Da qui in avanti ogni sistema di riferimento nominato sarà implicitamente inerziale.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Il modello giocattolo


La teoria che svilupperemo ora sarà un modello giocattolo con due sole dimensioni: una temporale ed una spaziale.
Le caratteristiche qualitative più stupefacenti della teoria generale sopravvivono alla semplificazione, ma i calcoli sono molto più semplici.


Concretamente dunque un evento osservato da un sistema di riferimento `$S$` sarà univocamente determinato da due *coordinate* che denoteremo come la tradizione comanda: `$t$` ed `$x$`.
Con degli apici indicheremo i punti di vista di altri osservatori quando ne avremo bisogno.




## Rudimenti di algebra


Per non rendere eccessivamente goffi i calcoli ed elucidare almeno in parte la struttura che il modello matematico possiede, abbiamo bisogno di un paio di nozioni.

Tuttavia in questo momento non ho voglia di scrivere, pertanto riferisciti a Wikipedia per capire cosa sono

* gruppi,
* vettori,
* matrici.

Basta anche un'idea vaga.

**Tra l'altro: ad un certo punto devo anche dedurre che i sistemi di riferimento sono cartesiani, ma non sono sicuro di quale sia il punto migliore.**




## Trasformazioni tra sistemi di riferimento


Non sappiamo come sono fatte le trasformazioni, ma sappiamo che dovranno rispettare i moti rettilinei ed uniformi in virtù della Prima Legge.
Faremo leva su ciò non solo per capire che forma abbiano, ma anche per individuare in termini più concreti quali siano i sistemi di riferimento che ci è permesso utilizzare.




### Generalità


Un moto rettilineo ed uniforme è descritto da una relazione lineare tra spazio e tempo.
Ad esempio in `$S'$` scriveremmo la legge

``` tex
$$ x'=x'_0+v't' $$
```

La più generale trasformazione di coordinate possibile da `$S'$` ad `$S$` è una coppia di funzioni `$t'(x,t)$` ed `$x'(x,t)$` che esprimono le coordinate in `$S'$` di un qualsiasi evento nei termini delle coordinate che esso ha in `$S$`.
Inserendole nella legge di `$S'$` otteniamo una legge in `$S$`, poiché le variabili esplicite sono ora `$t$` ed `$x$`:

``` tex
$$x'(x,t)=x'_0+v't'(x,t)$$
```

Grazie alla Prima Legge sappiamo che anche questa relazione deve essere lineare.
Da ciò deduciamo una rozza caratterizzazione delle trasformazioni ammissibili: infatti la linearità della legge del moto è equivalente alla linearità di entrambi i lati dell'equazione, e quindi di entrambe le funzioni che caratterizzano la trasformazione.
Concretamente, se usiamo lettere greche per denotare delle costanti dipendenti solo dalla scelta di `$S$` ed `$S'$`, la forma più generale ammissibile per la trasformazione è

``` tex
$$\sys{
t' &= \tau   + \gamma t + \varepsilon x \\
x' &= \sigma + \alpha t + \delta x	
}$$
```



### La struttura gruppale


Definendo un vettore `$T$` ed una matrice `$M$` legati alla trasformazione possiamo scrivere in modo molto più elegante il cambio di coordinate, ora incapsulate in dei vettori:

``` tex
$$
T = \vec{\tau}{\sigma}
\qquad
M = \mat{\gamma}{\varepsilon}{\alpha}{\delta}
\qquad
\x' = T+M\x
$$
```

Così facendo abbiamo reso evidente la struttura di gruppo.
Infatti, se `$(T,M)$` è la trasformazione da `$S$` ad `$S'$` e `$(T',M')$` una trasformazione da `$S'$` ad `$S''$`, possiamo calcolarne la composizione:

``` tex
$$\begin{align}
\x' &= T + M\x \\
\x''
&= T'+M'\x' \\
&= T'+M'(T+M\x) \\
&= (T'+M'T)+(M'M)\x
\end{align}$$
```

e quindi la trasformazione da `$S$` ad `$S''$` è

``` tex
$$
(T',M')\circ(T,M)
=
(T'+M'T,M'M)
$$
```

Abbiamo trovato esplicitamente l'operazione di prodotto del gruppo di trasformazioni.
Non è difficile rendersi conto che l'identità del gruppo è `$(\mathbf{0},\mathbb{1})$`.
Inoltre, notiamo che si può spezzare qualsiasi trasformazione in due più semplici:

``` tex
$$ (T,M) = (T,\mathbb{1})\circ(\mathbf{0},M) $$
```

Ciò permette di semplificarne lo studio frammentandolo.




### Traslazioni ed inversioni


È possibile ricostruire tre famiglie di trasformazioni qualitativamente distinte.
Le prime due però sono irrilevanti ai fini delle conclusioni che ci interessa trarre, quindi le nominiamo ora per completezza ma su di esse non ci soffermiamo.

La trasformazione `$(T,\mathbb{1})$` agisce come

``` tex
$$
\x' = T+\mathbb{1}\x = T+\x
$$
```

Essa corrisponde ad una traslazione di `$\tau$` nella direzione del tempo e di `$\sigma$` nella direzione dello spazio.
È facile verificare che la Prima Legge non vincola in alcun modo la scelta dei due parametri.
Trasformazioni di questo tipo mettono in comunicazione osservatori con sistemi di riferimento identici eccetto che per la scelta dell'origine.

La trasformazione `$(\mathbf{0},M)$` agisce come

``` tex
$$
\x' = \mathbf{0}+M\x = M\x
$$
```

Quattro possibili scelte di `$M$` che rispettano la Prima Legge sono

``` tex
$$
\mat{1}{0}{0}{1}
\qquad
\mat{-1}{0}{0}{1}
\qquad
\mat{1}{0}{0}{-1}
\qquad
\mat{-1}{0}{0}{-1}
$$
```

Si tratta, nell'ordine, de: l'identità, l'inversione temporale, l'inversione spaziale e l'inversione spaziotemporale.
Le inversioni mettono in comunicazione osservatori con sistemi di riferimento identici eccetto che per la scelta dell'orientamento degli assi.




### Boost

**Tutta questa parte è cruciale ma un po' grezza.**

Veniamo ora alla terza famiglia, quella realmente interessante.
Riguardo al fatto che essa esaurisce tutte le trasformazioni rimaste dovrai credermi sulla parola, almeno per ora.

Si tratta di altre trasformazioni della forma `$ \x' = M\x $`.
Immaginiamo di avere due sistemi identici per orientamento degli assi.
`$S'$` si muova in `$S$` con moto uniforme di velocità `$v$` partendo dall'origine al tempo zero.
In `$S$` il moto delle due origini è descritto da

``` tex
$$
\o_S = \vec{t}{0}
\qquad
\o_{S'} = \vec{t}{vt}
$$
```

In `$S'$` la situazione è reciproca:

``` tex
$$
\o'_S = \vec{t'}{-vt'}
\qquad
\o'_{S'} = \vec{t'}{0}
$$
```

Conosciamo la descrizione dei due moti in entrambi i sistemi, ed esse devono essere compatibili, per una qualche `$\M$`, secondo

``` tex
$$
\o'_S = \M \o_S
\qquad
\o'_{S'} = \M \o_{S'}
$$
```

che in coordinate si scrive

``` tex
$$
\vec{t'}{0}
=
\vec{(\gamma+\varepsilon v)t}{(\rho+\sigma v)t}
\qquad
\vec{t'}{-vt'}
=
\vec{\gamma t}{\rho t}
$$
```

È facile vedere che ciò implica `$\rho=-v\sigma=-v\gamma$` e le matrici sono dunque vincolate ad avere la forma

``` tex
$$
M = \mat{\gamma}{\varepsilon}{-v\gamma}{\gamma}
$$
```

Mi aspetto che valgano proprietà di gruppo, e che quindi la composizione `$MM'=M''$` abbia la medesima forma.
In particolare, gli elementi lungo la diagonale dovranno essere uguali:

``` tex
$$
\mat{\gamma}{\varepsilon}{-v\gamma}{\gamma}
\mat{\gamma'}{\varepsilon'}{-v'\gamma'}{\gamma'}
=
\mat{\gamma'(\gamma-\varepsilon v')}{\gamma\varepsilon'+\gamma'\varepsilon}{-\gamma\gamma'(v+v')}{\gamma(-v\varepsilon'+\gamma')}
=
\mat{\gamma''}{\varepsilon''}{-v''\gamma''}{\gamma''}
$$
```

e quindi

``` tex
$$
-\varepsilon\gamma'v'=-\varepsilon'\gamma v
$$
```

Solo `$\varepsilon$`, `$\gamma$` e `$v$` dipendono dalla scelta di `$M$`.
Siccome l'uguaglianza deve valere per qualunque scelta, `$\varepsilon$` deve dipendere essa esattamente come `$\gamma v$`.
Il medesimo ragionamento si può fare per `$M'$`.
Da ciò segue che la forma più generale è

``` tex
$$
\varepsilon = -\kappa\gamma v
$$
```

dove `$\kappa$` è una costante universale per tutte le trasformazioni.

**Questo passaggio non era molto chiaro, andrebbe riscritto.**

Riesaminiamo la composizione alla luce di queste nuove informazioni:

``` tex
$$
\gamma\gamma'
\mat{1+\kappa vv'}{-\kappa(v+v')}{-\kappa(v+v')}{1+\kappa vv'}
=
\gamma''\mat{1}{-\kappa v''}{-v''}{1}
$$
```

ovvero

``` tex
$$\left\{\begin{align}
\gamma\gamma'(1+\kappa vv') &= \gamma'' \\
-\gamma\gamma'(v+v') &= -\gamma''v''
\end{align}\right.$$
```

da cui

``` tex
$$
v'' = \frac{v+v'}{1+\kappa vv'}
$$
```

Consideriamo ora il caso particolare in cui `$M'$` sia l'inversa di `$M$`, e quindi `$M''=\mathbb{1}$`.
Certamente `$\gamma''=1\neq 0$` e quindi affinché `$-\gamma''v''=0$` è necessario che `$v''=0$`, ovvero `$v'=-v$`.
La prima equazione dell'ultimo sistema si riduce dunque a

``` tex
$$
\gamma\gamma'=\frac{1}{1-\kappa v^2}
$$
```

Poi per una considerazione di simmetria **che è semplice ma non ho ancora capito come dire in modo semplice** otteniamo

``` tex
$$
\gamma = \frac{1}{\sqrt{1-\kappa v^2}}
$$
```

Tiriamo ora le somme.
La trasformazione da `$S$` ad un sistema `$S'$` che sia in moto relativo rispetto al primo con velocità `$v$` si chiama *boost* ed è data da

``` tex
$$
\Lambda=\mat{\gamma}{-v\kappa\gamma}{-v\gamma}{\gamma}
\qquad
\gamma = \frac{1}{\sqrt{1-\kappa v^2}}
$$
```

L'unico aspetto che non abbiamo ancora affrontato è la scelta di `$\kappa$`.
Lo posticiperemo fino all'ultimo per minimizzare le ripetizioni nei calcoli.
Inoltre, si tratta del colpo di scena.



 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


**DA QUI IN POI È DA SISTEMARE**


 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Eventi e misure

Avremo bisogno di parlare molto di eventi.
Per evitare ripetizioni e noiose circonlocuzioni definiamo alcune parole nuove.
Data una qualsiasi coppia di eventi osservati dal medesimo sistema di riferimento

``` tex
$$
\x_1 = \vec{t_1}{x_1}
\qquad
\x_2 = \vec{t_2}{x_2}
$$
```

diremo che essi sono:

* separati dalla *durata* `$(t_2-t_1)$`;
* *sincronici* se `$(t_2-t_1)=0$`;
* *diacronici* se `$(t_2-t_1)\neq0$`;
* separati dalla *lunghezza* `$(x_2-x_1)$`;
* *sintopici* se `$(x_2-x_1)=0$`;
* *diatopici* se `$(x_2-x_1)\neq0$`.








 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








# Misure

Da qui in avanti useremo in modo ricorrente due sistemi di riferimento `$S$` ed `$S'$`, il secondo in moto rispetto al primo a velocità `$v$`, le cui coordinate sono quindi legate da

``` tex
$$ \x' = \Lambda \x $$
```



## Orologi in moto

Immaginiamo di essere in `$S$` ed osservare un orologio in moto solidale con `$S'$`.
Siano `$\x'_1$` ed `$\x'_2$` gli eventi corrispondenti a due ticchettii: essi sono diacronici e sintopici.
Il cambio di coordinate è

``` tex
$$
\vec{\d t'}{0}
=
\vec{ \gamma   \d t - \kappa \gamma v \d x}
    {-\gamma v \d t +        \gamma   \d x}
$$
```

Eseguiamo alcune manipolazioni sulla parte spaziale, poi su quella temporale e poi ancora sulla prima:

``` tex
$$\begin{align*}
\gamma \d x
 &= \gamma v \d t \\ \\
\d t'
 &= \gamma \d t - \kappa \gamma v   \d x \\
 &= \gamma \d t - \kappa \gamma v^2 \d t \\
 &= \gamma (1-\kappa v^2) \d t \\
 &= \frac{1}{\gamma} \d t \\ \\
\d x
 &= \gamma v \d t'
\end{align*}$$
```

Abbiamo dunque stabilito che

``` tex
$$\sys{
 \d t &= \gamma   \d t' \\
 \d x &= \gamma v \d t'
}$$
```








## Metri in moto


Immaginiamo di essere in `$S$` ed osservare un metro in moto solidale con `$S'$`.
Siano `$\x'_1$` ed `$\x'_2$` gli eventi corrispondenti ai suoi estremi: essi sono sincronici e diatopici.
Il cambio di coordinate è

``` tex
$$
\vec{0}{\d x'}
=
\vec{ \gamma   \d t - \kappa \gamma v \d x}
    {-\gamma v \d t +        \gamma   \d x}
$$
```

Eseguiamo alcune manipolazioni sulla parte temporale, poi su quella spaziale e poi ancora sulla prima:

``` tex
$$\begin{align*}
\gamma \d t
 &= \kappa \gamma v \d x \\ \\
\d x'
 &= -       \gamma v   \d t + \gamma \d x \\
 &= -\kappa \gamma v^2 \d x + \gamma \d x \\
 &= \gamma (1-\kappa v^2) \d x \\
 &= \frac{1}{\gamma} \d x \\ \\
(t_2-t_1)
 &= \beta (x'_2-x'_1)
\end{align*}$$
```

Semplificando le espressioni possiamo stabilire che

``` tex
$$
\left\{\begin{align}
  (t_2-t_1) &= \frac{\beta}{\gamma c}(x'_2-x'_1) \\
  (x_2-x_1) &= \frac{1}{\gamma}(x'_2-x'_1)
\end{align}\right.
$$
```



















































{% include begin-hidden %}

## Moti relativi

**Ok, questo è tutto da rifare**

### Caso classico

$$\begin{align}
\Gamma_u\Gamma_v
=
\mat{1}{0}{-u}{1}
\mat{1}{0}{-v}{1}
=
\mat{1}{0}{-(u+v)}{1}
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
\mat{\gamma_u}{-\gamma_u\beta_u}{-\gamma_u\beta_u}{\gamma_u}
\mat{\gamma_v}{-\gamma_v\beta_v}{-\gamma_v\beta_v}{\gamma_v} \\
&=
\gamma_u\gamma_v
\mat{1}{-\beta_u}{-\beta_u}{1}
\mat{1}{-\beta_v}{-\beta_v}{1} \\
&=
\gamma_u\gamma_v
\mat{1+\beta_u\beta_v}{-(\beta_u+\beta_v)}
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
\mat{1+\beta_u\beta_v}{-(\beta_u+\beta_v)}
       {-(\beta_u+\beta_v)}{1+\beta_u\beta_v} \\
&=
\mat{\gamma_{u\oplus v}}{-\gamma_{u\oplus v}\beta_{u\oplus v}}
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
\x'_2-\x'_1 = \vec{1/f'}{0}
$$

$$
\x_2-\x_1 = \vec{1/f'}{v/f'}
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
\x'_2-\x'_1 = \vec{c/f'}{0}
$$

$$
\x_2-\x_1 = \vec{\gamma c/f'}{\gamma\beta c/f'}
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



{% include end-hidden %}
