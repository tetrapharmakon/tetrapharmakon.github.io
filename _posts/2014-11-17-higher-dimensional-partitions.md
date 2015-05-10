---
title: "Higher-dimensional partitions"
tags: mathjax
lang: en
---


The notion of integer partition seemingly eludes a generalization.


Let the subscripts be `$n$`-dimensional multindices, i.e. elements of `$\mathbb{N}^n$`.

An *`$n$`-partition* is an `$n$`-dimensional array of natural numbers `$p_i$` such that only finitely many are nonzero and `$i \leq j$` implies `$p_i \geq p_j$`. Its *sum* is `$\sum_i p_i$`.

Let `$P_n(k)$` be the number of `$n$`-partitions whose sum is k. The generating function of `$n$`-partitions can be written as

``` tex
$$ \mathcal{P}_n(x) = \sum_{k=0}^\infty P_n(k) x^k $$
```

Euler proved that

``` tex
$$ \mathcal{P}_1(x) = \prod_{k=1}^\infty (1-x^k)^{-1} $$
```

MacMahon showed that for plane partitions

``` tex
$$ \mathcal{P}_2(x) = \prod_{k=1}^\infty (1-x^k)^{-k} $$
```

No further generalization is known.

Details can be found in *The Theory of Partitions* by George Eyre Andrews.
