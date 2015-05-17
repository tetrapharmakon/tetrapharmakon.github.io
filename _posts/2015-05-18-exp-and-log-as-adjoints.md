---
title: Exp and Log as adjoints
tags: mathjax
lang: en
macros: |
  \def\G{G}
  \def\N{N}
  \def\E{E}
  \def\L{L}
---


Musings on the generalization of some functions.




## Formal relations


Consider the following formal recurrence relations with natural indices:

``` tex
$$\begin{align}
  \E_k &= \frac{\E^k}{k!} +         \E_{k+1} \\
  \L_k &= \frac{\L^k}{k!} - k \cdot \L_{k+1}
\end{align}$$
```

We define

``` tex
$$\begin{align}
  \exp(\E)        &= \E_0 \\
  \log(1+\L)      &= \L_1
\end{align}$$
```

The names suggest we expect them to be related by inversion, in some sense.
If `$ E $` corresponds to `$ L $` then these conditions should hold:

``` tex
$$\begin{align}
  \exp(\E)        &= 1 + \L \\
  \log(1+\L)      &=     \E
\end{align}$$
```

To justify the definitions one may recklessly solve the recurrences:

``` tex
$$\begin{align}
  \E_0 &= \sum_{k=0}^{+\infty}                         \frac{\E^k}{k!} \\
  \L_1 &= \sum_{k=1}^{+\infty} (-1)^{k-1} (k-1)! \cdot \frac{\L^k}{k!}
\end{align}$$
```




## Relations on sets

Let's interpret the relations in terms of sets.

* The sum `$ + $` is set ~~coproduct~~ union.
* The product `$ \cdot $` is set product.
* Natural numbers `$ k $` are the sets `$ [k] $` of cardinality `$ k $`.
* The power is set power. Hence `$ -^{k} $` is `$ -^{[k]} $`, isomorphic to a product iterated `$ k $` times.
* The difference is set complement; nonassociativity makes difficult to write series, but not recurrence relations.
* The quotient is tricky, but we need to make sense only of `$ -^k/k! $`. It is the quotient of the power by the action of `$ \mathcal{S}_k $`: the set of unordered `$ k $`-tuples.

We're *set*, now.
Heh.
Let's spell out the meaning of the relations, one by one.

``` tex
$$ \E_k = \frac{\E^k}{k!} + \E_{k+1} $$
```

The set of unordered tuples with at least `$ k $` elements is the union of the set of unordered `$ k $`-tuples and the set of unordered tuples with at least `$ k+1 $` elements.

``` tex
$$ \exp(\E) = \E_0 $$
```

The exponential is the set of unordered tuples with at least `$ 0 $` elements - that is, all of them.
Therefore, the exponential gives the *free commutative monoid* on a set.

``` tex
$$ \exp(E) = 1+\L $$
```

Equivalently, `$ \L = \exp(E)-1 $`.
This means `$ \L $` is the free commutative monoid on `$ \E $` without the empty tuple.
In other words, `$ \L $` is the *free commutative semigroup* on `$ \E $`

``` tex
$$ \log(1+\L) = \E $$
```

The logarithm of a free abelian monoid is the set of its *generators*.

``` tex
$$ \log(1+\L) = \L_1 $$
```

The set of generators of a free abelian monoid is the set of its unordered `$ 1 $`-tuples whose components are all unfactorable in `$ \L $`.


``` tex
$$ \L_k = \frac{\L^k}{k!} - k \cdot \L_{k+1} $$
```

`$ \L_k $` is the set of unordered `$ k $`-tuples whose components are all unfactorable in `$ \L $`.
`$ \L_k $` is the difference between the set of unordered `$ k $`-tuples and `$ k $` copies of `$ \L_{k+1} $`, each one eliminating `$ k $`-tuples factorable in one of the `$ k $` components.




## Exercise

Working out the anabelian case is completely analogous but easier.
I'll leave that as an exercise for you.

The recurrences are

``` tex
$$\begin{align}
  \G_k &= \G^k + \G_{k+1} \\
  \N_k &= \N^k - \N_{k+1}
\end{align}$$
```

So we'd define

``` tex
$$\begin{align}
  \frac{ 1}{1-\G} &= \G_0 \\
  \frac{\N}{1+\N} &= \N_1
\end{align}$$
```

expecting

``` tex
$$\begin{align}
  \frac{ 1}{1-\G} &= 1 + \N \\
  \frac{\N}{1+\N} &=     \G
\end{align}$$
```

and justifying the procedure with

``` tex
$$\begin{align}
  \G_0 &= \sum_{k=0}^{+\infty}            \G^k \\
  \N_1 &= \sum_{k=1}^{+\infty} (-1)^{k-1} \N^k
\end{align}$$
```
