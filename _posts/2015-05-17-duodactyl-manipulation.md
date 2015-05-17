---
title: Duodactyl manipulation
tags: mathjax
lang: en
macros: |
  \def\norm#1{\left\vert{#1}\right\vert}
  \def\i{\mathbf{i}}
  \def\f{\mathbf{f}}
  \def\mat#1#2#3#4{\begin{pmatrix}#1& #2\\ #3& #4\end{pmatrix}}
---


Two fingers moving on a screen univoquely determine the direct similitude of the euclidean plane corresponding to the natural gestures of dragging, rotating and zooming.


Let one finger move from point `$ A $` to point `$ B =: A + \i $` and the other one from point `$ X $` to point `$ Y =: X + \f $`.
Calling `$ \theta $` the counter-clockwise angle between `$ \i $` and `$ \f $` we can factor the similitude into a rotation sandwiched between scalings and translations:

``` tex
$$\begin{align}
  P &\mapsto P - A \\
  P &\mapsto P \norm\i^{-1} \\
  P &\mapsto R_\theta P \\
  P &\mapsto P \norm\f \\
  P &\mapsto P + B
\end{align}$$
```

Their composition is

``` tex
$$
  P \mapsto \frac{\norm\f}{\norm\i}
            R_\theta(P-A) + B
$$
```

Two obviously defined products

``` tex
$$\begin{align}
  \i \cdot  \f &= \norm\i \norm\f \cos\theta \\
  \i \times \f &= \norm\i \norm\f \sin\theta
\end{align}$$
```

allow us to write

``` tex
$$\begin{align}
  R_\theta
    &= \mat{\cos\theta}{-\sin\theta}{\sin\theta}{\cos\theta} \\
    &= \frac{1}{\norm\i \norm\f}
       \mat{\i\cdot\f}{-\i\times\f}{\i\times\f}{\i\cdot\f}
\end{align}$$
```

and produce the full trasformation in a  convenient form:

``` tex
$$
  P \mapsto \mat{\i\cdot\f}{-\i\times\f}{\i\times\f}{\i\cdot\f}
            \frac{P-A}{\i\cdot\i} + B
$$
```
