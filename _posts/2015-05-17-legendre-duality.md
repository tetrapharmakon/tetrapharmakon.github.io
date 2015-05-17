---
title: Legendre duality
tags: mathjax quicklatex
lang: en
packages: |
  \usepackage{tikz}
  \usetikzlibrary{positioning,arrows,decorations.markings}
  \tikzset{
    K/.style={decoration={
      markings,
      mark=at position 0.6 with {\arrow{open triangle 45}}},
      postaction={decorate}
    },
    I/.style={decoration={
      markings,
      mark=at position 0.6 with {\arrow{triangle 45}}},
      postaction={decorate}
    },
    A/.style={circle,draw=black,minimum size=20},
    B/.style={circle,fill=black,minimum size=20},
    a/.style={circle,draw=black,minimum size=5},
    b/.style={circle,fill=black,minimum size=5},
    F/.style={},%circle,fill=red,minimum size=20},
    f/.style={}%circle,fill=red,minimum size=5}
  }
macros: |
  \def\D#1#2{\frac{\delta#1}{\delta#2}}
  \def\DD#1#2#3{\frac{\delta^2#1}{\delta#2\delta#3}}
  \def\DDD#1#2#3#4{\frac{\delta^3#1}{\delta#2\delta#3\delta#3}}
  \def\d{\mathrm{d}}
  \def\A{A}
  \def\a{a}
  \def\B{B}
  \def\b{b}
  \def\K{K}
  \def\I{I}
  \def\[{\left[}
  \def\]{\right]}
---


The formalism for irreducible vertex functions is really fascinating.
Here I just excise the idiosyncrasies of QFT and sketch some diagrams.

I won't really fix the meaning of symbols.

Let `$ \A $` and `$ \B $` be two functionals related by a kernel `$ \K $` as

``` tex
$$ \A[\a] + \B[\b] = \int \d x \d y \a(x) \K(x,y) \b(y) $$
```

where `$ \a $` and `$ \b $` are not independent.
Diagrammatically,

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[B, left =0.5 of equal](B){};
  \node[A, left =1.0 of B    ](A){};
  \node[a, right=0.5 of equal](a){};
  \node[b, right=1.0 of a    ](b){};
  \path[ ] (A) to node[midway] {$+$} (B);
  \draw[K] (a) to (b);
\end{tikzpicture}
```

First derivatives in `$ \a(x) $` and `$ \b(y) $` yield

``` tex
$$\begin{align}
  \D{\A}{\a(x)} - \int\d{y}\K(x,y)\b(y)
    &= - \int\d{y} \[
      \D{\B}{b(y)} - \int\d{z}\a(z)\K(z,y)
    \] \D{b(y)}{a(x)} \\
  \D{\B}{\b(y)} - \int\d{x}\a(x)\K(x,y)
    &= - \int\d{x} \[
      \D{\A}{a(x)} - \int\d{z}\K(x,z)b(z)
    \] \D{a(x)}{b(y)} \\
\end{align}$$
```

so we recover the two equivalent conjugation relations as

``` tex
$$\begin{align}
  \D{\A}{\a(x)} &= \int\d{y}\K(x,y)\b(y) \\
  \D{\B}{\b(y)} &= \int\d{x}\a(x)\K(x,y)
\end{align}$$
```

Diagrammatically,

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[A, left =0.5 of equal](A){};
  \node[F, left =1.0 of A    ](F){};
  \node[f, right=0.5 of equal](f){};
  \node[b, right=1.0 of f    ](b){};
  \draw[-] (F) to (A);
  \draw[K] (f) to (b);
\end{tikzpicture}
```

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[F, left =0.5 of equal](F){};
  \node[B, left =1.0 of F    ](B){};
  \node[a, right=0.5 of equal](a){};
  \node[f, right=1.0 of a    ](f){};
  \draw[-] (B) to (F);
  \draw[K] (a) to (f);
\end{tikzpicture}
```

If the kernel is invertible, in the sense that two functions `$ L $` and `$ R $` exist such that

``` tex
$$\begin{align}
\int\d{x} L(z,x)\K(x,y) &= \delta(z-y) \\
\int\d{y} \K(x,y)R(y,z) &= \delta(x-z)
\end{align}$$
```

it's easy to see that `$ \I := L = R $`.
Furthermore, we can invert the conjugation relations to obtain

``` tex
$$\begin{align}
  \int\d{x}\I(y,x)\D{\A}{\a(x)} &= \b(y) \\
  \int\d{y}\D{\B}{\b(y)}\I(y,x) &= \a(x)
\end{align}$$
```

Diagrammatically,

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[A, left =0.5 of equal](A){};
  \node[F, left =1.0 of A    ](F){};
  \node[b, right=0.5 of equal](b){};
  \draw[I] (F) to (A);
\end{tikzpicture}
```

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[F, left =0.5 of equal](F){};
  \node[B, left =1.0 of F    ](B){};
  \node[a, right=0.5 of equal](a){};
  \draw[I] (B) to (F);
\end{tikzpicture}
```



Deriving the conjugations in `$ \b(y) $` and `$ \a(x) $` yield

``` tex
$$\begin{align}
  \int\d{z} \DD{\A}{\a(x)}{\a(z)} \D{\a(z)}{\b(y)} &= \K(x,y) \\
  \int\d{z} \D{\b(z)}{\a(x)} \DD{\B}{\b(z)}{\b(y)} &= \K(x,y)
\end{align}$$
```

and by substitution we obtain from either one

``` tex
$$
  \int\d{z}\d{w} \DD{\B}{\b(y)}{\b(z)}
         \I(z,w) \DD{\A}{\a(w)}{\a(x)} = \K(x,y)
$$
```

or

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){=};
  \node[F, left =0.5 of equal](2l){};
  \node[B, left =0.5 of 2l   ](B){};
  \node[A, left =1.0 of B    ](A){};
  \node[F, left =0.5 of A    ](1l){};
  \node[f, right=0.5 of equal](1r){};
  \node[f, right=1.0 of 1r   ](2r){};
  \draw[-] (2l) to (B);
  \draw[I] (B) to (A);
  \draw[-] (A) to (1l);
  \draw[K] (1r) to (2r);
\end{tikzpicture}
```

This diagram is symmetric under black--white exchange combined with arrow inversion.
Therefore every relation we compute from it will have a dual.

If we differentiate in `$ \b $`, the right side will be null, while at the left we find

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (plus){$+$};

  \node[A, left =2.5 of plus     ](A1){};
  \node[B](B1) at ([shift={(-30:2)}]A1) {};
  \node[B](B2) at ([shift={( 30:2)}]A1) {};

  \node[f, right=0.5 of B1](1l){};
  \node[f, right=0.5 of B2](2l){};
  \node[f, left =0.5 of A1](3l){};

  \node[A, right=1.0 of plus      ](A2){};
  \node[B, right=1.0 of A2](B3){};

  \node[f](1r) at ([shift={(-30:2)}]B3) {};
  \node[f](2r) at ([shift={( 30:2)}]B3) {};
  \node[f, left =0.5 of A2](3r){};

  \draw[I] (B1) to (A1);
  \draw[I] (B2) to (A1);
  \draw[I] (B3) to (A2);

  \draw[-] (1l) to (B1);
  \draw[-] (2l) to (B2);
  \draw[-] (3l) to (A1);

  \draw[-] (1r) to (B3);
  \draw[-] (2r) to (B3);
  \draw[-] (3r) to (A2);

\end{tikzpicture}
```

Thanks to the preceeding identities we can invert it to

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){$=$};
  \node[right=0.5 of equal](minus){$-$};

  \node[A, left = 2.5 of equal](A){};
  \node[B](B1) at ([shift={(-30:1.5)}]A) {};
  \node[B](B2) at ([shift={( 90:1.5)}]A) {};
  \node[B](B3) at ([shift={(210:1.5)}]A) {};
  \node[f](l1) at ([shift={(-30:1.0)}]B1) {};
  \node[f](l2) at ([shift={( 90:1.0)}]B2) {};
  \node[f](l3) at ([shift={(210:1.0)}]B3) {};

  \node[B, right=1.0 of minus](B){};
  \node[f](r1) at ([shift={(-30:1.0)}]B) {};
  \node[f](r2) at ([shift={( 90:1.0)}]B) {};
  \node[f](r3) at ([shift={(210:1.0)}]B) {};

  \draw[I] (B1) to (A);
  \draw[I] (B2) to (A);
  \draw[I] (B3) to (A);
  \draw[-] (l1) to (B1);
  \draw[-] (l2) to (B2);
  \draw[-] (l3) to (B3);
  \draw[-] (r1) to (B);
  \draw[-] (r2) to (B);
  \draw[-] (r3) to (B);

\end{tikzpicture}
```

and have its dual by symmetry:

``` tex
\begin{tikzpicture}
  \node[] at (0,0) (equal){$=$};
  \node[right=0.5 of equal](minus){$-$};

  \node[B, left = 2.5 of equal](B){};
  \node[A](A1) at ([shift={(-30:1.5)}]B) {};
  \node[A](A2) at ([shift={( 90:1.5)}]B) {};
  \node[A](A3) at ([shift={(210:1.5)}]B) {};
  \node[f](l1) at ([shift={(-30:1.0)}]A1) {};
  \node[f](l2) at ([shift={( 90:1.0)}]A2) {};
  \node[f](l3) at ([shift={(210:1.0)}]A3) {};

  \node[A, right=1.0 of minus](A){};
  \node[f](r1) at ([shift={(-30:1.0)}]A) {};
  \node[f](r2) at ([shift={( 90:1.0)}]A) {};
  \node[f](r3) at ([shift={(210:1.0)}]A) {};

  \draw[I] (B) to (A1);
  \draw[I] (B) to (A2);
  \draw[I] (B) to (A3);
  \draw[-] (l1) to (A1);
  \draw[-] (l2) to (A2);
  \draw[-] (l3) to (A3);
  \draw[-] (r1) to (A);
  \draw[-] (r2) to (A);
  \draw[-] (r3) to (A);

\end{tikzpicture}
```

By the way, we could have started using duality right away and halve the calculations.

The question now is: *what is happening*?

