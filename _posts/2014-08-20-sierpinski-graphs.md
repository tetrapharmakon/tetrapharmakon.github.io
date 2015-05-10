---
title: Sierpiński graphs
tags: mathjax
lang: en
---


A mathematical riddle struck me: the solution was slick and I longed for a generalization. This is the account of a brief success.




## The riddle

Let `$S_0$` be the complete graph of order three. We define `$S_{n+1}$` as the gluing of three copies of `$S_n$` by their vertices of degree `$2$`.

{% include figure source="S_0_to_S_3.svg" %}

These are the steps in the construction of the Sierpiński graph. We want to know the number of hamiltonian cycles on `$S_n$`, i.e. the number of closed paths crossing every vertex exactly once.

Think about it now - it's a lot of fun!




## Finger counting

Let us just naively proceed by counting. It's easy to see that both `$S_0$` and `$S_1$` have only one. Things start to get interesting with the eight cycles of `$S_2$`.

{% include figure source="O_paths_on_S_2.svg" %}

`$S_3$` has just too many for us to count: `$13824$`. `$S_4$` has `$71328803586048$` and after that computers start getting choked too. On a side note: every single cell in a kid could take a different hamiltonian cycle on `$S_4$`. Gruesome.




## Recurrence relations

The laernean nature of the problem is easily tamed exploiting the recursive nature of the graphs. In fact, the solution is so simple it's anticlimatic.

We need some notation to enlighten the prose:

* `$O$`-paths are hamiltonian cycles;
* `$C$`-paths are hamiltonian paths between vertices of degree `$2$`;
* `$V$`-paths are hamiltonian paths between vertices of degree `$2$` that don't tread the third one.

We will denote their respective counts on `$S_n$` using `$n$` as a subscript.

The vertices joining copies of `$S_n$` to form `$S_{n+1}$` are the only possible crossing points between them. Therefore the portion of an `$O$`-path between a pair of them must completely tread one. This leads to the observation that an `$O$`-path on `$S_{n+1}$` is the gluing of three `$C$`-paths on `$S_n$`.

``` tex
$$ O_{n+1} = C_n^3 $$
```

A `$C$`-path must cross two of the joining vertices to reach the third vertex of degree `$2$`, but it's not a cycle so it can't cross the third joining vertex to the adjacent copy of `$S_{n}$`. This means a `$C$`-path on `$S_{n+1}$` is one of the two possible gluings of two `$C$`-paths and a `$V$`-path on `$S_n$`.

``` tex
$$ C_{n+1} = 2 C_n^2 V_n $$
```

A similar argument holds for `$V$`-paths, except that it must skip the third vertex of degree `$2$`. Therefore a `$V$`-path on `$S_{n+1}$` is one of the two possible gluings of two `$V$`-paths and a `$C$`-path on `$S_n$`.

``` tex
$$ V_{n+1} = 2 V_n^2 C_n $$
```

Excellent! We caught the problem into some recurrence relations. Doing some easy counting we compute the boundary values and obtain a complete description:

``` tex
$$ \begin{array}{lll}
   O_0 = 1 \quad& O_1 = 1 \quad& O_{n+1} =   C_n^3     \\
   C_0 = 1 \quad& C_1 = 2 \quad& C_{n+1} = 2 C_n^2 V_n \\
   V_0 = 1 \quad& V_1 = 3 \quad& V_{n+1} = 2 V_n^2 C_n
\end{array} $$
```



## Algebraic hockety-pockety

The relations we found are sufficient to compute any value we desire, but we got extremely lucky: a closed form solution exists. Plugging the last two recurrence relations into themselves `$i$` times we obtain

``` tex
$$\begin{array}{rcccl}
  C_{n+1} &=& 2^{x_i} C_{n+1-i}^{y_i} V_{n+1-i}^{z_i}
          &=& 2^{x_n} C_1^{y_n}       V_1^{z_n}       \\
  V_{n+1} &=& 2^{x_i} V_{n+1-i}^{y_i} C_{n+1-i}^{z_i}
          &=& 2^{x_n} V_1^{y_n}       C_1^{z_n}
\end{array}$$
```

where `$x_1=z_1=1$` and `$y_1=2$`.

The recurrence relations constrain the exponents with

``` tex
$$\begin{array}{rrrrrr}
  x_n = & x_{n-1} & + &  y_{n-1} & + &  z_{n-1} \\
  y_n = &         &   & 2y_{n-1} & + &  z_{n-1} \\
  z_n = &         &   &  y_{n-1} & + & 2z_{n-1} \\
\end{array}$$
```

but we easily solve them:

``` tex
$$
\begin{array}{ll}
  (y+z)_n = 3(y+z)_{n-1} = 3^n(y+z)_1 & = 3^n \\
  (y-z)_n =  (y-z)_{n-1} =    (y-z)_1 & = 1 \\
\end{array}
\quad \Rightarrow \quad
\begin{array}{ll}
  y_n & = (3^n+1)/2 \\
  z_n & = (3^n-1)/2
\end{array}
$$
```

``` tex
$$
x_n
 = x_{n-1} + 3^n
 = x_1 + 3 + \ldots + 3^n
 = 1 + \ldots + 3^n
 = \frac{3^{n+1}-1}{3-1}
$$
```

Nailed it:

``` tex
$$\begin{array}{lll}
  O_0 = 1 \quad& O_1 = 1 \quad& O_{n+1} = 2^{3^n}   3^{\frac{3^n-3}{2}} \\
  C_0 = 1      & C_1 = 2      & C_{n+1} = 2^{3^n}   3^{\frac{3^n-1}{2}} \\
  V_0 = 1      & V_1 = 3      & V_{n+1} = 2^{3^n-1} 3^{\frac{3^n+1}{2}}
\end{array}$$
```




## General construction

The Sierpińskian construction can be generalized to any base graph `$S_0=(V_0,E_0)$` in a somewhat natural way.

Let's call the steps `$S_{n}=(V_n,E_n)$`. To build `$S_{n+1}$` we take a copy of `$S_n$` for each vertex of `$S_0$`. Thus, the vertex set `$V_{n+1}$` and the relation `$E_{n+1}$` can be drafted as

``` tex
$$
  \coprod_{V_0} V_n
  \qquad
  (x,v) \sim_{E_{n+1}} (y,v) \Leftrightarrow x \sim_{E_n} y
$$
```

We need to join the subgraphs. Denoting `$v_{(n+1)}=(v_{(n)},v)$` and `$v_{(1)}=v$`, the vertices to join are given by the relation `$J_{n+1}$` defined as

``` tex
$$ (x_{(n)},y) \sim_{J_{n+1}} (y_{(n)},x) \Leftrightarrow x \sim_{E_0} y $$
```

Quotienting the vertices, we obtain

``` tex
$$
  V_{n+1}=\coprod_{V_0} V_n \Big/ J_{n+1}
  \qquad
  (x,v) \sim_{E_{n+1}} (y,v) \Leftrightarrow x \sim_{E_n} y
$$
```

The properties of `$S_n$` vary wildly depending on `$S_0$` and `$n$`. However, if `$S_0$` is a complete graph it's easy to show that every step of the iteration `$S_n$` has an hamiltonian cycle. For this reason we restrict our attention to complete graphs.








## Pictorial wockety-wack

**Below this point, handwaving and pain.**

The Sierpińskian construction happens to be trivial for complete graphs of order `$0$`, `$1$` and `$2$` and easily handled at order three, as we have seen. However, we were able to solve the triangular case in closed form only because the low order brought some non apparent simplifications into the involved combinatorics. On the other hand, at orders four and higher the kinds of bad things happening stop changing, meaning that order four is both the first to fully manifest the structure of the construction and the last wieldy enough to be manually dealt with. Some precise fidgeting would be needed to convince ourselves of this. I won't do it here and now, because the tentative enumeration is going to fail miserably anyways.

To keep this readable we need some graphical notation. Let's review the case of `$K_3$`.

{% include figure source="combinatorics_over_K_3.svg" %}

Lines and dots represent edges and vertices. Each one of the graphs represent `$S_{n+1}$`. The gluing vertices have been prolonged to an edge. Gray triangles represent `$S_n$`. Edges and vertices with the same color belong to the same path, while gray ones belong to none. An edge leading out of the graph represents the end of an open path.

The three graphs perfectly capture the three recurrence relations we found.

Let's take it up a notch and think about `$K_4$`.

{% include figure source="combinatorics_over_K_4.svg" %}

The left column gives the possible choices for the vertices of `$S_{n+1}$` of lowest degree. An omitted vertex can belong to any path, or to none. Each left graph must be completed choosing a possible set of gluing vertices from its right. These are listed up to permutations of the subgraphs `$S_n$`. A special care must be taken when gluing a pair of disjoint paths, as this can be done in various inequivalent ways.

This is complicated, but as we said no other special notations are necessary to handle higher orders.

Let's name the needed kinds of paths using somewhat suggestive letters:

* `$O$`-paths are hamiltonian cycles;
* `$C$`-paths are hamiltonian paths between vertices of degree `$3$`;
* `$V$`-paths are hamiltonian paths between vertices of degree `$3$` skipping one of the other two;
* `$I$`-paths are hamiltonian paths between vertices of degree `$3$` skipping the other two;
* `$X$`-paths are a pair of hamiltonian paths between vertices of degree `$3$`.

The pictures allow us to write the recurrence relations avoiding an excessive amount of pain to keep track of symmetries. I present the calculations using a bizarre notation. The first factors are the possible gluings of subpaths and represent just the product of their numbers. The other factors handle symmetries by just counting them. Each symbol can be just interpreted as a `$1$`. Boxes are identity, opposing arrowheads are permutations of the subgraphs and `$=$`, `$\shortparallel$` and `$\times$` are the possible gluings of pairs of paths.

``` tex
$$\begin{align}
  O_{n+1} =& \left[ {^C_V{}^C_V} + {^V_V{}^C_C}
                  + {^C_C{}^V_V} + {^V_C{}^V_C} \right]
             \times
             \left[
             {^\blacksquare_\blacksquare{
             }^\blacksquare_\blacksquare}+
             {^\blacksquare_\blacktriangleright{
             }^\blacksquare_\blacktriangleleft}+
             {^\blacksquare_\blacksquare{
             }^\blacktriangledown_\blacktriangle}
             \right] \\
          =& 12C_n^2V_n^2
\end{align}$$
```

``` tex
$$\begin{align}
C_{n+1}    =& C'_{n+1}+C''_{n+1}+C'''_{n+1} & \\
C'_{n+1}   =& \left[\begin{array}{l}
                {^C_C{}^I_V}+{^V_C{}^V_V}+
                {^V_C{}^I_C}+{^I_C{}^V_C}+\\
                {^C_V{}^V_V}+{^V_V{}^C_V}+
                {^V_V{}^V_C}+{^I_V{}^C_C}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 8C_n^2V_nI_n+8C_nV_n^3\\
C''_{n+1}  =& \left[\begin{array}{l}
                {^X_V{}^C_V}+{^X_C{}^V_V}+
                {^X_V{}^V_C}+{^X_C{}^I_C}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\shortparallel_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\times_\blacksquare{
                }^\blacksquare_\blacksquare}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 4X_nC_n^2I_n+12X_nC_nV^2_n\\
C'''_{n+1} =& \left[\begin{array}{l}
                {^X_C{}^X_V}+{^X_V{}^X_C}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^=_\blacksquare{
                }^\times_\blacksquare}+
                {^\times_\blacksquare{
                }^=_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^=_\blacksquare}+\\
                {^=_\blacksquare{
                }^\shortparallel_\blacksquare}+
                {^\times_\blacksquare{
                }^\times_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^\shortparallel_\blacksquare}
              \end{array}\right] \\
           =& 12X_n^2C_nV_n
\end{align}$$
```

``` tex
$$\begin{align}
V_{n+1}    =& V'_{n+1}+V''_{n+1}+V'''_{n+1} & \\
V'_{n+1}   =& \left[\begin{array}{l}
                {^C_C{}^I_I}+{^V_C{}^V_I}+
                {^V_C{}^I_V}+{^I_C{}^V_V}+\\
                {^C_V{}^V_I}+{^V_V{}^C_I}+
                {^V_V{}^V_V}+{^I_V{}^C_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 2C_n^2I_n^2+12C_nV_n^2I_n+2V_n^4\\
V''_{n+1}  =& \left[\begin{array}{l}
                {^X_V{}^C_I}+{^X_C{}^V_I}+
                {^X_V{}^V_V}+{^X_C{}^I_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\shortparallel_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\times_\blacksquare{
                }^\blacksquare_\blacksquare}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 12X_nC_nV_nI_n+4X_nV_n^3\\
V'''_{n+1} =& \left[\begin{array}{l}
                {^X_C{}^X_I}+{^X_V{}^X_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^=_\blacksquare{
                }^\times_\blacksquare}+
                {^\times_\blacksquare{
                }^=_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^=_\blacksquare}+\\
                {^=_\blacksquare{
                }^\shortparallel_\blacksquare}+
                {^\times_\blacksquare{
                }^\times_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^\shortparallel_\blacksquare}
              \end{array}\right] \\
           =& 6X_n^2C_nI_n+6X_n^2V^2_n
\end{align}$$
```

``` tex
$$\begin{align}
I_{n+1}    =& I'_{n+1}+I''_{n+1}+I'''_{n+1} & \\
I'_{n+1}   =& \left[\begin{array}{l}
                {^C_V{}^I_I}+{^V_V{}^V_I}+
                {^V_V{}^I_V}+{^I_V{}^V_V}+\\
                {^C_I{}^V_I}+{^V_I{}^C_I}+
                {^V_I{}^V_V}+{^I_I{}^C_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 8C_nV_nI_n^2+8V_n^3I_n\\
I''_{n+1}  =& \left[\begin{array}{l}
                {^X_I{}^C_I}+{^X_V{}^V_I}+
                {^X_I{}^V_V}+{^X_V{}^I_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\shortparallel_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\times_\blacksquare{
                }^\blacksquare_\blacksquare}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^\blacksquare_\blacksquare{
                }^\blacksquare_\blacksquare}+
                {^\blacktriangleright_\blacksquare{
                }^\blacktriangleleft_\blacksquare}
              \end{array}\right] \\
           =& 4X_nC_nI_n^2+12X_nV^2_nI_n\\
I'''_{n+1} =& \left[\begin{array}{l}
                {^X_V{}^X_I}+{^X_I{}^X_V}
              \end{array}\right]
              \times
              \left[\begin{array}{l}
                {^=_\blacksquare{
                }^\times_\blacksquare}+
                {^\times_\blacksquare{
                }^=_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^=_\blacksquare}+\\
                {^=_\blacksquare{
                }^\shortparallel_\blacksquare}+
                {^\times_\blacksquare{
                }^\times_\blacksquare}+
                {^\shortparallel_\blacksquare{
                }^\shortparallel_\blacksquare}
              \end{array}\right] \\
           =& 12X_n^2V_nI_n\\
\end{align}$$
```

``` tex
$$\begin{align}
X_{n+1}     =& X'_{n+1}+X''_{n+1}+X'''_{n+1}+X''''_{n+1} & \\
X'_{n+1}    =& \left[\begin{array}{l}
                 {^C_I{}^C_I}+{^V_V{}^C_I}+
                 {^V_I{}^C_V}+{^I_V{}^C_V}+\\
                 {^C_V{}^V_I}+{^V_C{}^V_I}+
                 {^V_V{}^V_V}+{^I_C{}^V_V}+\\
                 {^C_I{}^V_V}+{^V_V{}^V_V}+
                 {^V_I{}^V_C}+{^I_V{}^V_C}+\\
                 {^C_V{}^I_V}+{^V_C{}^I_V}+
                 {^V_V{}^I_C}+{^I_C{}^I_C}
               \end{array}\right]
            =& 2C_n^2I_n^2+12C_nV_n^2I_n+2V_n^4\\
X''_{n+1}   =& \left[\begin{array}{l}
                 {^X_V{}^C_I}+{^X_C{}^V_I}+
                 {^X_V{}^V_V}+{^X_C{}^I_V}+\\
                 {^X_I{}^C_V}+{^X_V{}^V_V}+
                 {^X_I{}^V_C}+{^X_V{}^I_C}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^=_\blacksquare{
                 }^\blacksquare_\blacksquare}
               \end{array}\right]
               \times\\
             & \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\blacksquare_\blacksquare}+
                 {^\blacktriangleright_\blacksquare{
                 }^\blacktriangleleft_\blacksquare}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\blacksquare_\blacksquare}+
                 {^\blacktriangledown_\blacktriangle{
                 }^\blacktriangledown_\blacktriangle}
               \end{array}\right]
            =& 24X_nC_nV_nI_n+8X_nV_n^3\\
X'''_{n+1}  =& \left[\begin{array}{l}
                 {^X_X{}^X_X}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^=_\shortparallel{
                 }^\blacksquare_\times}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\times_\blacksquare}+
                 {^\blacksquare_\blacksquare{
                 }^\shortparallel_\blacksquare}
               \end{array}\right]
               \times\\
             & \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\blacksquare_\blacksquare}+
                 {^\blacktriangleright_\blacksquare{
                 }^\blacktriangleleft_\blacksquare}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\blacksquare_\blacksquare}+
                 {^\blacktriangledown_\blacktriangle{
                 }^\blacktriangledown_\blacktriangle}
               \end{array}\right]
            =& 8X_n^4\\
X''''_{n+1} =& \left[\begin{array}{l}
                 {^X_X{}^X_X}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^\shortparallel_\times{
                 }^\shortparallel_\times}
               \end{array}\right]
               \times
               \left[\begin{array}{l}
                 {^\blacksquare_\blacksquare{
                 }^\blacksquare_\blacksquare}+
                 {^\blacktriangledown_\blacktriangle{
                 }^\blacktriangledown_\blacktriangle}
               \end{array}\right]
            =& 2X_n^4
\end{align}$$
```

So we obtain

``` tex
$$\begin{align}
O_{n+1} =& 12C_n^2V_n^2\\
C_{n+1} =& 12X_n^2C_nV_n+4X_nC_n^2I_n+12X_nC_nV^2_n+8C_n^2V_nI_n+8C_nV_n^3\\
V_{n+1} =& 6X_n^2C_nI_n+6X_n^2V^2_n+12X_nC_nV_nI_n+4X_nV_n^3+2C_n^2I_n^2+12C_nV_n^2I_n+2V_n^4\\
I_{n+1} =& 12X_n^2V_nI_n+4X_nC_nI_n^2+12X_nV^2_nI_n+8C_nV_nI_n^2+8V_n^3I_n\\
X_{n+1} =& 10X_n^4+24X_nC_nV_nI_n+8X_nV_n^3+2C_n^2I_n^2+12C_nV_n^2I_n+2V_n^4
\end{align}$$
```

These are going to be hard to disentangle. The best I can do is noticing

``` tex
$$\begin{align}
O_{n+1} =& 12C_n^2V_n^2\\
C_{n+1} =& 4C_n\left(C_nI_n\left(X_n+2V_n\right)+3X_n^2V_n+3X_nV^2_n+2V_n^3\right)\\
I_{n+1} =& 4I_n\left(C_nI_n\left(X_n+2V_n\right)+3X_n^2V_n+3X_nV^2_n+2V_n^3\right)\\
V_{n+1} =& 2C_nI_n\left(3X_n^2+6X_nV_n+C_nI_n+6V_n^2\right)+2\left(3X_n^2V^2_n+2X_nV_n^3+V_n^4\right)\\
X_{n+1} =& 2C_nI_n\left(12X_nV_n+C_nI_n+6V_n^2\right)+2\left(5X_n^4+4X_nV_n^3+V_n^4\right)
\end{align}$$
```

So the problem is reduced to

``` tex
$$\begin{align}
C_{n+1}I_{n+1} =& 4C_nI_n\left(C_nI_n\left(X_n+2V_n\right)+3X_n^2V_n+3X_nV^2_n+2V_n^3\right)^2\\
V_{n+1} =& 2C_nI_n\left(3X_n^2+6X_nV_n+C_nI_n+6V_n^2\right)+2\left(3X_n^2V^2_n+2X_nV_n^3+V_n^4\right)\\
X_{n+1} =& 2C_nI_n\left(12X_nV_n+C_nI_n+6V_n^2\right)+2\left(5X_n^4+4X_nV_n^3+V_n^4\right)
\end{align}$$
```

Welp. We're screwed. Just for the record, `$O_0=3$`, `$C_0=2$`, `$I_0=1$`, `$V_0=2$` and `$X_0=1$`.
