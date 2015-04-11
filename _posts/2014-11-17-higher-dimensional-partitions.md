---
title: "Higher-dimensional partitions"
category: math
published: true
---

A quick note on the general notion of integer partition.

Let the subscripts be $n$-dimensional multindices, i.e. elements of $\mathbb{N}^n$.

An *$n$-partition* is an $n$-dimensional array of natural numbers $p_i$ such that only finitely many are nonzero and $i \leq j$ implies $p_i \geq p_j$. Its *sum* is $\sum_i p_i$.

Let $P_n(k)$ be the number of $n$-partitions whose sum is k. The generating function of $n$-partitions can be written as

\[
\mathcal{P}_n(x) = \sum_{k=0}^\infty P_n(k) x^k
\]

Euler proved that

\[
\mathcal{P}_1(x) = \prod_{k=1}^\infty (1-x^k)^{-1}
\]

MacMahon showed that for plane partitions

\[
\mathcal{P}_2(x) = \prod_{k=1}^\infty (1-x^k)^{-k}
\]

No generalization is known.

Details can be found in *The Theory of Partitions* by George Eyre Andrews.
