---
title: Transfinite formal power series
tags: mathjax
---


Polynomials are for weaklings.
We long for a generalization.


## Foundation

Let `$(E,+)$` and `$(C,+,\cdot)$` be two algebraic structures with binary operations.
`$E$` and `$C$` are the collections of exponents and coefficients respectively.

Let `$X^{(E)}$` be the collection of formal monomials in the variable `$X$` with exponents in `$E$`.
The isomorphism `$p \mapsto X^p$` induce `$(X^{(E)},\cdot) \cong (E,+)$` asking for the commutation `$X^p X^q = X^{p+q}$` we all love. We will often confuse the two isomorphic structures.

The collection of formal polynomials in a single variable with coefficients in `$C$` is `$C^E$`.
The fact is made clearer representing such functions with formal sums over `$E$`:

``` tex
$$ a = \sum_{i} a_i X^i $$
```

The structure `$(C^E,+)$` defined by pointwise sum `$(a+b)_i = a_i + b_i$` inherits exactly the algebraic properties of `$(C,+)$`.

The same could be done for pointwise (Hadamard) product, if we wanted.

## Cauchy product

The only problem left is making sense of the structure `$(C^E,\cdot)$` defined by some interpretation of the Cauchy product

``` tex
$$ (ab)_i = \sum_{j+k=i} a_j b_k $$
```

A few alternatives come to mind:

 * inductively completing `$C$` with such formal sums over `$E$`;
 * asking `$(C,+)$` to be an abelian monoid;
 * asking `$(C,+)$` to be a monoid and `$(E,+)$` to be left-subtractive (or right-subtractive) and totally ordered.

The first possibility would be maximally general, but it seems to need some care and further meditation.
The other two cost a great loss in generality.
The structure that elicited this brief investigation is a particular case of the third possibility, so I'll concentrate on that for now.

## Transfinite formal series

Let `$(\mathbb{O};+,0,\cdot,1,\leq)$` be the totally ordered left near-semiring of ordinal arithmetic.
We call transfinite the formal series with ordinal exponents and taking coefficients in an additive semigroup.

Ordinal sum has left-subtraction, i.e. for any `$i \leq j$` there is a unique `$k$` such that `$i+k=j$`; we will denote it as `$(-i+j)$`. Furthermore we assume the non-commutative summations are performed respecting the order on `$\mathbb{O}$`. So we have a uniquely defined Cauchy product

``` tex
$$ (ab)_i = \sum_{j\leq i} a_j b_{(-j+i)} $$
```

If we also take coefficients to be ordinal numbers we can define a good notion of derivation.
For example,

``` tex
$$ \begin{align}
  D(X^\omega)
    & = D(X^{1+\omega})
      = D(X X^\omega)
      = D(X) X^\omega + X D(X^\omega) \\
    & = X^0 X^\omega + X^1 X^\omega + \ldots
      = X^\omega + X^\omega + \ldots
      = \omega X^\omega \\
  D(X^{\omega+1})
    & = D(X^\omega) X + D(X) X^\omega
      = \omega X^{\omega+1} + X^\omega
\end{align} $$
```

At this point one naturally hopes to generalize the techniques of generating functions, since the derivation makes perfect combinatorial sense as a rooting.
On the other side, all this is probably a decategorification akin to the one on combinatorial species.
It would make more sense to try and define a notion of species on `$\mathrm{core}(\mathbf{Set})$` and then decategorify it to obtain transfinite formal series.
