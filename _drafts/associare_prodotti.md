---
author: Paolo Brasolin
title: Associare prodotti
created: 2013-04-01
published: 2013-04-01
---

In quanti modi un'operazione $p$-aria sopra un magma può agire su un'$n$-upla di elementi?
$$
{p(n-1) \choose n-1}\frac{1}{(p-1)(n-1)+1}
$$

But why?

È immediato che
$$
\tilde{f}_n =
  \begin{cases}
    1 \text{ se } n=1 \\
    0 \text{ se } 1<n<p \\
    1 \text{ se } n=p
  \end{cases}
$$
mentre un semplice argomento ricorsivo mostra
$$
\tilde{f}_n =
  \sum_{1\leq \tilde{k}_1,\ldots,\tilde{k}_p}
      ^{n=\tilde{k}_1+\ldots+\tilde{k}_p}
    \prod_{i=1}^p\tilde{f}_{\tilde{k}_i} \qquad \text{ se } n>p
$$
Conviene traslare un po' d'indici:
$$
\tilde{k}_i\mapsto k_i=\tilde{k}_i-1 \qquad \tilde{f}_i\mapsto f_i=\tilde{f}_{i+1}
$$
sicché
$$
f_{n+p-1} =
  \sum_{0\leq k_1,\ldots,k_p}
      ^{n=k_1+\ldots+k_p}
    \prod_{i=1}^pf_{k_i}
$$
Definiamo ora la funzione generatrice
$$
F(x) = \sum_{k=0}^\infty f_kx^k
$$
e notiamo che
$$
[F(x)]^p
  = \sum_{k=0}\left(
     \sum_{0\leq k_1,\ldots,k_p}^{k=k_1+\ldots+k_p}\prod_{i=1}^pf_{k_i}
     \right)x^k
  = \sum_{k=0}^\infty f_{k+p-1}x^k
$$
ovvero
$$
x^{p-1}[F(x)]^p
  = F(x) - \sum_{k=0}^{p-2} f_kx^k
  = F(x) - 1
$$
Risolvendo queste equazioni per $p=2,3,4$, e studiando gli sviluppi delle soluzioni reali e pole free sull'origine, ci si rende conto di un pattern che suggerisce
$$
f_k={pk \choose k}\frac{1}{(p-1)k+1}
$$
Ovviamente la validità di tale espressione andrebbe verificata a posteriori in qualche maniera.

Comunque, quanto detto basta a rintracciare il nome dei numeri in questione, appartenenti alla serie multivariata di Fuss-Catalan. In *arXiv:0711.0906* c'è una soluzione completa al problema.