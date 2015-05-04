---
title: Cronotopi apedici
tags: draft
---





<p style="display:none;">
Questo paragrafo contiene le macro per $\LaTeX$ e dovrebbe essere invisibile.
$$
\def\nn{M}
\def\pp{A}%\aleph
\def\pq{B}%\beth
\def\qp{C}%\gimel
\def\qq{D}%\daleth
\def\p{t}
\def\q{x}
\def\v{v}
\def\c#1{\tilde{#1}}
\def\i#1{#1^{-1}}
\def\t#1{#1^{T}}
\def\mat#1#2#3#4{\begin{pmatrix}#1&#2\\#3&#4\end{pmatrix}}
\def\vec#1#2{\begin{pmatrix}#1\\#2\end{pmatrix}}
\def\sys#1{\left\{\begin{aligned}#1\end{aligned}\right.}
\def\metric{\eta}
\def\glnf{\mathrm{GL}_n(\mathbb{F})}
$$
</p>







# Choppity chop

Let $p$, $q$ and $n$ be three nonnegative integers such that $p+q=n$.
Every square matrix $\nn$ of size $n$ can be carved into two square blocks $\pp$ and $\qq$ sized respectively $p$ and $q$, and two rectangular blocks $\pq$ and $\qp$:

$$
\nn = \mat{\pp}{\pq}{\qp}{\qq}
$$



## Be kind rewind

Nonsingularity of block $\pp$ allows an LDU decomposition.
The determinant of $\nn$ is then easily computed.
Nonsingularity of $\nn$ and the Schur complement of $\pp$ are equivalent.
If one holds, the inverse of $\nn$ is quickly found.

$$\begin{align}
\nn &= 
\mat{1}{0}
    {\qp\i\pp}{1}
\mat{\pp}{0}
    {0}{\qq-\qp\i\pp\pq}
\mat{1}{\i\pp\pq}
    {0}{1} \\
\det(\nn) &=
\det(\pp) \det(\qq-\qp\i\pp\pq) \\
\i\nn &=
\mat{1}{-\i\pp\pq}
    {0}{1}
\mat{\i\pp}{0}
    {0}{\i{(\qq-\qp\i\pp\pq)}}
\mat{1}{0}
    {-\qp\i\pp}{1}
\end{align}$$

Nonsingularity of block $\qq$ allows an UDL decomposition.
The determinant of $\nn$ is then easily computed.
Nonsingularity of $\nn$ and the Schur complement of $\qq$ are equivalent.
If one holds, the inverse of $\nn$ is quickly found.

$$\begin{align}
\nn &= 
\mat{1}{\pq\i\qq}
    {0}{1}
\mat{\pp-\pq\i\qq\qp}{0}
    {0}{\qq}
\mat{1}{0}
    {\i\qq\qp}{1} \\
\det(\nn) &=
\det(\qq) \det(\pp-\pq\i\qq\qp) \\
\i\nn &= 
\mat{1}{0}
    {-\i\qq\qp}{1}
\mat{\i{(\pp-\pq\i\qq\qp)}}{0}
    {0}{\i\qq}
\mat{1}{-\pq\i\qq}
    {0}{1}
\end{align}$$

If both $\pp$ and $\qq$ are nonsingular we find four equivalent conditions:

$$\begin{align}
\det(M)\det(\i\pp)\det(\i\qq)
 &= \det(1-\i\pp\pq\i\qq\qp) \\
 &= \det(1-\pq\i\qq\qp\i\pp) \\
 &= \det(1-\i\qq\qp\i\pp\pq) \\
 &= \det(1-\qp\i\pp\pq\i\qq)
\end{align}$$









## Yo, respect

Let $\metric$ be the metric of signature $(p,q)$.
If a matrix $\nn$ preserves it (i.e. $\t\nn \metric \nn = \metric$) its inverse is easily computed as $\i\nn = \i\metric \t\nn \metric$.

The calculation can be carried out using blocks:

$$
\metric = \mat{1}{0}{0}{-1}
\qquad
\nn = \mat{\pp}{\pq}{\qp}{\qq}
\qquad
\i\nn = \mat{\t\pp}{-\t\qp}{-\t\pq}{\t\qq}
$$

where the following two sets of relations must hold, the left one coming from metric preservation and the right one from inversion:

$$
\sys{
\t\pp\pp - \t\qp\qp &=  1 \\
\t\pp\pq - \t\qp\qq &=  0 \\
\t\pq\pq - \t\qq\qq &= -1
}
\qquad
\sys{
\pp\t\pp - \pq\t\pq &=  1 \\
\pp\t\qp - \pq\t\qq &=  0 \\
\qp\t\qp - \qq\t\qq &= -1
}$$

If $\nn$ is nonsingular the inverse is immediately available:

