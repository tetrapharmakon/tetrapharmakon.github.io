---
title: Lezione sulla relatività
tags: draft
---


Una piccola lezione per una liceale astuta.
Inoltre, un esercizio di equilibrismo per me: niente ontologia da un lato, niente mistificazioni dall'altro.




$$
\def\x{\mathbf{x}}
\def\veccoord#1#2{\begin{pmatrix}#1\\#2\end{pmatrix}}
\def\matcoord#1#2#3#4{\begin{pmatrix}#1&#2\\#3&#4\end{pmatrix}}
$$



## Le discipline coinvolte


Apriamo le danze azzardando delle domande estremamente pericolose.




### Cos'è la fisica?


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




### Cos'è la matematica?


Una *struttura matematica* è un'idea rigida.
Vale a dire, l'immagine mentale di un oggetto astratto ma dotato di proprietà precise.
L'insieme dei numeri naturali con l'addizione e le sue proprietà.
Il piano euclideo, per le cui coppie di punti passa sempre un'unica retta.
Si tratta insomma di contesti in cui ci sono permesse delle operazioni, ma esclusivamente nel rispetto di regole prefissate.

Una *teoria matematica* è il corpus di conoscenze inerente ad una famiglia di strutture matematiche.
Ovvero, è quanto necessario a descriverle tutte, ragionare dei rapporti che tra esse intercorrono e classificarle tramite delle proprietà.

La *matematica* è la disciplina di chi descrive strutture e produce teorie.
Le finalità sono varie: se ad un estremo alcuni hanno interesse immediato per approfondire la conoscenza di una struttura specifica, all'altro c'è chi cerca di realizzare teorie nella massima profondità e trasversalità possibili.




### Ma è vero?


Se lo chiedi a me, sì.

Si tratta di domande pericolose perché il consenso in filosofia della scienza è piuttosto limitato.
Per questa ragione ho cercato di delineare un'idea precisa ma non così dettagliata da sollevare il genere di *vespaio filosofico* che trascenderebbe i fini di questa lezione.

L'avrai notato, le due descrizioni si somigliano in forma e contenuto.
Non è un caso: le due discipline sono inscindibilmente intrecciate.

La matematica è un linguaggio irrinunciabile per la fisica e vi introduce l'astrazione garantendo visioni impossibili con la mera osservazione dei fenomeni. La fisica è un'ispirazione inesauribile per la matematica e suggerendo il confronto con l'esperienza ne permette una comprensione intuitiva altrimenti irraggiungibile.




### Chiosa


Si potrebbe arguire che fossero due manifestazioni della medesima entità, e la convinzione che ho maturato è esattamente questa.
Fisica e matematica sono entrambe frutto della tensione degli esseri umani alla comprensione della *realtà*.

La ragione per cui rimangono una necessaria all'altra pur divergendo è che sono l'effetto del medesimo slancio sottoposto a due vincoli differenti ma complementari:

* la Fisica è obbligata al confronto con l'esperienza,
* la Matematica è tenuta ad esserne indipendente.

Non si tratta di *fare gli studi di funzione* o *risolvere i piani inclinati*: la posta in gioco è molto più alta.
Chiunque ti abbia insegnato il contrario o ti mentiva o lo ignorava e quindi, comunque, si trovava dal lato sbagliato della cattedra.




 * * *




## Prerequisiti




### Simmetria













Anubi è il nostro cane.

È nero, ha una macchia bianca attorno all'occhio sinistro e ci guarda perplesso.
Se lo guardiamo allo specchio però la macchia bianca è attorno all'occhio destro. D'altra parte guardandolo attraverso *due* specchi la macchia torna sull'occhio sinistro.

Se i tre cani che abbiamo visto siano il medesimo dipende solo da quanto raffinate sono le distinzioni che vogliamo fare. Ognuno era più vecchio del precedente di qualche istante e quindi potremmo dire che abbiamo visto tre cani distinti. D'altra parte trascurando l'età solo uno si distingue per una macchia differente e forse i cani erano solo due. In fondo, però, ognuno era Anubi e potremmo dire che ne abbiamo visto solo uno.


E Xolotl? Eh, mo' c'arrivo.




### Sistemi di riferimento


$$
\x'=\Gamma\x
$$

$$
\veccoord{t'}{x'}
=
\matcoord{1}{0}{-v}{1}
\veccoord{t}{x}
=
\veccoord{t}{-vt+x}
$$

$$
\x'=\Lambda\x
$$

$$
\veccoord{ct'}{x'}
=
\matcoord{\gamma}{-\gamma\beta}{-\gamma\beta}{\gamma}
\veccoord{ct}{x}
=
\veccoord{\gamma ct-\gamma\beta x}{-\gamma\beta ct+\gamma x}
$$

 * * *








 * * *








## Cinematica: orologi in moto

Immaginiamo di essere in $S$ ed osservare un orologio in moto solidale con $S'$.
Siano gli eventi $\x'_1$ ed $\x'_2$ corrispondenti a due ticchettii.
Essi sono diacronici e sintopici, ovvero $t'_2-t'_1\neq0$ ed $x'_2-x'_1=0$.




### Caso classico

Le coordinate del vettore che separa i ticchettii in $S'$ sono

$$
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

Le coordinate del vettore spaziotemporale che separa i ticchettii in $S'$ sono

$$
\veccoord{c(t'_2-t'_1)}{0}
=
\veccoord{\gamma c(t_2-t_1)-\gamma\beta(x_2-x_1)}
      {-\gamma\beta c(t_2-t_1)+\gamma(x_2-x_1)}
$$

Eseguiamo alcune manipolazioni sulla parte spaziale, poi su quella temporale e poi ancora sulla prima:

$$
\begin{align*}
\gamma(x_2-x_1)
&= \gamma\beta c(t_2-t_1) \\ \\
c(t'_2-t'_1)
&= \gamma c(t_2-t_1) - \gamma\beta(x_2-x_1) \\
&= \gamma c(t_2-t_1) - \gamma\beta^2c(t_2-t_1) \\
&= \gamma(1-\beta^2)c(t_2-t_1) \\
&= \frac{1}{\gamma}c(t_2-t_1) \\ \\
\gamma(x_2-x_1)
&= \gamma^2\beta c(t'_2-t'_1)
\end{align*}
$$

Semplificando le espressioni possiamo stabilire che

$$
\left\{\begin{align}
  (t_2-t_1) &= \gamma(t'_2-t'_1) \\
  (x_2-x_1) &= \gamma\beta c(t'_2-t'_1)
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
(x_2-x_1) = \gamma\beta c(t'_2-t'_1) \neq 0
$$

cioè i due eventi sintopici in $S'$ sono diatopici in $S$.
Questo significa che *la sintopia è relativa* al sistema di riferimento.








 * * *








## Cinematica: metri in moto


Immaginiamo di essere in $S$ ed osservare un metro in moto solidale con $S'$.
Siano gli eventi $\x'_1$ ed $\x'_2$ corrispondenti ai suoi estremi.
Essi sono sincronici e diatopici, ovvero $t'_2-t'_1=0$ ed $x'_2-x'_1\neq0$.




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








 * * *








## Cinematica: moti relativi




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








 * * *








## Cinematica: sorgenti in moto




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
