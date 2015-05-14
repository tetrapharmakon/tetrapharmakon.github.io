---
title: Bézier hypersurfaces
tags: draft mathjax
lang: en
macros: |
  \def\({\left(}
  \def\){\right)}
  \def\[{\left[}
  \def\]{\right]}
  \def\bez#1#2#3#4{B_{#1}^{#2}(t;#3,#4)}
  \def\ber#1#2{b^#1_#2(t)}
  \def\bz#1#2{B_{#1}^{#2}(t)}
  \def\F{\mathbb{F}}
  \def\mnm#1#2{m^{#1}_{#2}}
  \def\brn#1#2{b^{#1}_{#2}}
  \def\N{\mathbb{N}}
---


I like my women like i like my interpolations: smooth, curvy, and computationally stable.








## Multindex notation

We will use multindices profusely, so this would probably be a good time for a refresher.
*Wink*.








## Bernstein polynomials

The set `$ \F\[x\] $` of polynomials in the `$ n $` variables `$ x $` with coefficients in a field `$ \F $` is a vector space of countable dimension.
The monomials `$ \mnm{}{i} = x^i $` form for `$ 0 \leq i $` the monomial basis; coordinates are coefficients.

The subset `$ \F_d\[x\] $`, containing polynomials of multidegree less than or equal to `$ d $`, is a vector subspace of `$ \F\[x\] $`.
The monomial basis naturally restricts to `$ \mnm{d}{i} = x^i $` for `$ i \leq d $`; it has finite dimension `$ (d+1)^1 $`.

The Bernstein basis of `$ \F_d\[x\] $` is formed by the polynomials

``` tex
$$ \brn{d}{i} = {d \choose i} x^i (1-x)^{d-i} $$
```




{% include begin-hidden %}
We can massage them as follows
``` tex
$$\begin{align}
\brn{d}{i}
  &= {d \choose i} x^i \sum^{d-i}_k {d-i \choose k} (-x)^k \\
  &= \sum^d_{j=i} (-1)^{j-i} {d \choose i} {d-i \choose j-i} x^j \\
  &= \sum^d_{j=i} (-1)^{j-i} {d \choose j} {j \choose i} x^j \\
\end{align}$$
```
and obtain the lower triangular base change matrix from Bernstein basis to monomial basis:
``` tex
$$
(B^d)_{ji}
  = \mnm{d}{j} \cdot \brn{d}{i}
  = (-1)^{j-i} {d \choose j} {j \choose i} $$
```
{% include end-hidden %}








## Bézier interpolations


Choose three `$ n $`-dimensional multindices such that `$ d = f-i $`.
Let `$ t $` be a parameter taking values in the `$ n $`-dimensional unit hypercube.

A Bézier interpolation of multiorder `$ d $` is a recursion of independent linear interpolations, in the sense that for every `$ 1 \leq k \leq n $` it abides to

``` tex
$$
\bez{d}{}{i}{f}
  = (1-t_k) \bez{d-1}{}{i}{f-\delta_k}
  +   (t_k) \bez{d-1}{}{i+\delta_k}{f}
$$
```

Up to a multiplicative constant, the terms produced by expanding each recursion respectively `$ x+y \leq d $` times have the form

``` tex
$$ (t)^x (1-t)^y \bez{d-x-y}{}{i+x}{f-y} $$
```

Calculation of the constant is equivalent to counting the staircase walks on an `$ (x_k+1)\times(y_k+1) $` lattice for each `$ k $`: moving up or right on them correspond to choosing between the left and right addends in the relative recursive expression.
The lattices are independent, so the results factor and the full form is therefore

``` tex
$$ \frac{(x+y)!}{x!y!} (t)^x (1-t)^y \bez{d-x-y}{}{i+x}{f-y} $$
```

The recursions can be expanded up to `$ d $` times, producing terms such that `$ x+y = d = f-i $`.
Explicitly,


``` tex
$$
\frac{d!}{x!(d-x)!} (t)^x (1-t)^{d-x} \bez{0}{}{i+x}{i+x}
$$
```

Then using the Bernstein basis we can write

``` tex
$$
\bez{d}{}{i}{f} = \sum_{0 \leq x \leq d} \ber{d}{x} \bez{0}{}{i+x}{i+x}
$$
```

It's now clear that WLOG we can choose `$ i=0 $`, hence `$ f=d $`.
We drop every redundancy and write

``` tex
$$
\bz{d}{} = \sum_{0 \leq x \leq d} \bz{0}{x} \ber{d}{x}
$$
```

The `$ (d+1)^1 $` functions `$ \bz{0}{x} $` are the objects we are interpolating.
If they are constants, i.e. points, we recover the notion of Bézier hypersurface of multiorder `$ d $`.
We'll assume that's the case from now on.








## De Casteljau's algorithm

A generalization of the algorithm would be really cool.
But I don't need it, so I won't work it out right now.







