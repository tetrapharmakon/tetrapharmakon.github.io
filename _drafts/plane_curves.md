---
author: Paolo Brasolin
title: Plane curves
date: 2014-08-19
---

# Plane curves

This is a terse note on plane curves, transformations between them and relations between transformations.
While being mainly encyclopedic, the effort stems from the compelling categorial flavour that the opening period should suggest.

## Basic definitions

**Plane curves** are maps from a real interval $I$ to $\mathbb{C}$.
We will often omit the variable.

We will denote **complex conjugation** with overbars and **derivation** with overdots.
We define an antisymmetric **cross product** and a symmetric **dot product** as
$$
z\times w := \mathrm{Im}(\overline{z}w)
\qquad
z\cdot  w := \mathrm{Re}(z\overline{w}) = z\times iw
$$
We define **norm** and **normalization** as
$$
\vert z \vert := \sqrt{ z \overline{z} }
\qquad
\widehat{z} := z / \vert z \vert
$$

**Tangent**, **normal** and **curvature** of a curve $c$ are
$$
T_c := \widehat{\dot{c}}
\qquad
N_c := iT_c
\qquad
K_c :=
% (\dot{c}\times\ddot{c})/|\dot{c}|^3 = 
\dot{T_c}/\dot{c}
$$

 Arc length
$$ c(t) \mapsto s_{t_0}(t) := \int_{t_0}^t|\dot{c}(\tau)|d\tau $$

## Unary transformations

These are maps $\mathbb{C}^D\rightarrow\mathbb{C}^D$.

### Isometries

 Identity
$$ \mathrm{Id}: c \mapsto c $$

 Translation
$$ \mathrm{Tra}[o]: c \mapsto c+o $$

 Rotation
$$ \mathrm{Rot}[\alpha]: c \mapsto ce^{i\alpha} $$
$$ \mathrm{Rot}[\alpha,o] = \mathrm{Tra}[o]\circ\mathrm{Rot}[\alpha]\circ\mathrm{Tra}[-o]$$

 Reflection

$$ \mathrm{Ref}[o,\alpha]: c \mapsto \overline{c-o}e^{2i\alpha}+o $$
$$ \mathrm{Ref}[p,q]: c \mapsto \overline{c-q}\frac{p-q}{\overline{p-q}}+q $$




### Affine transformations

 Dilation
$$ \mathrm{Sca}[\sigma]: c \mapsto c\sigma $$
$$ \mathrm{Sca}[\sigma,o] = \mathrm{Tra}[o]\circ\mathrm{Sca}[\sigma]\circ\mathrm{Tra}[-o]$$

 Shear




### Evolute

The **evolute** of a curve is defined in any of the sequent ways:

 1. locus of centers of curvature;
 2. envelope of normals;
 3. locus of the cusps of parallels.

From 1 we have an explicit definition:
$$ \mathrm{Evolute}: c \mapsto c+n/k $$

 Properties


by 3  (All involutes are parallel.)




If curve A is the involute of curve B, then curve B is the evolute of curve A.
$$\mathrm{Evolute}\circ\mathrm{Involute}=\mathrm{Id}$$

The converse is true locally, that is: If curve B is the evolute of curve A, then any part of curve A is the involute of some parts of B.




### Involute

It's the roulette of a line.

It's the locus of the end of a string winded around the curve. That is, it's a curve orthogonal to the tangents. The evolute of an involute is the original curve (lezz portions of zero or undefined curvature), but while the evolute is unique there are infinite involutes. Note the arc length (natural) parametrization is needed.
$$ \mathrm{Involute}[p]: c \mapsto c-s_{c^{-1}(p)}\dot{c} $$

All involutes are parallel. (Evolute is envelope of normals.)




### Radial

(cfr. Gauss Map)
$$ \mathrm{Radial}: c \mapsto o+n/k $$




### Parallel

Envelope of circles of fixed radius centered on the curve. Locus of points on normals at fixed distance from curve.
$$ \mathrm{Parallel}[\delta]: c \mapsto c+n\delta $$




### Inverse

$$ \mathrm{Inverse}[o,\rho]: c \mapsto o+\rho/\overline{c-o} $$

Inversion is an involution; its fixed points are anallagmatic curves.




### Dual

$$ \mathrm{Dual}: c \mapsto ic/c\times\dot{c} $$




### Pedal

The pedal with respect to a point $o$ is the locus of the foot of the perpendicular from $o$ to the tangents of the curve.
$$ \mathrm{Pedal}[o]: c \mapsto c+(t\cdot(o-c))t $$

### Negative pedal

$\mathrm{NPed}[o]\circ\mathrm{Ped}[o]=\mathrm{Id}$.
$$ \mathrm{NegativePedal}[o]: c \mapsto c+i(c-o)\frac{(c-o)\cdot\dot{c}}{(c-o)\times\dot{c}} $$

### Contrapedal

The contrapedal with respect to a point $o$ is the locus of the foot of the perpendicular from $o$ to the normals of the curve.
$$ \mathrm{ContraPedal}[o]: c \mapsto c+(n\cdot(o-c))n $$
Since $\mathrm{CPed}[o]=\mathrm{Ped}[o]\circ\mathrm{Evo}$ it has no inverse.




### Conchoid

$$ \mathrm{Conchoid}[\delta]: c \mapsto c+\delta\widehat{c-o} $$




### Strophoid

$$ \mathrm{Strophoid}: c \mapsto c\pm |c-a|\widehat{c-o} $$


### Catacaustic

$$ \mathrm{Catacaustic}: c \mapsto c+\overline{o-c}n^2\frac{\dot{c}\times(\overline{o-c}n^2)}{(\overline{o-c}n^2)\times(\overline{o-c}n^2)'} $$

### Diacaustic

### Orthotomic




### Isoptic

Given an invertible Gauss map $g$,
$$
\mathrm{Isoptic}[\alpha]: c \mapsto c+t\left.\frac{((c\circ\lambda)-c)\cdot (n\circ\lambda)}{t\cdot (n\circ\lambda)}\right\vert_{\lambda=g^{-1}\circ(e^{i\alpha}g)}
$$
$$
\mathrm{Isoptic}[\alpha]: c \mapsto c+t\frac{((c\circ n^{-1}\circ(e^{i\alpha}n))-c)\cdot (e^{i\alpha}n)}{t\cdot (e^{i\alpha}n)}
$$

### Orthoptic

$$
\mathrm{Orthoptic}: c \mapsto c+t\left[((c\circ n^{-1}\circ in)-c)\cdot t\right]
$$
$$
\mathrm{Orthoptic}=\mathrm{Isoptic}[\pi/2]
$$



## Funky stuff

$$\begin{align}
\mathcal{Roulette}[f,r,g](s) &= f(s)+(g-r(s))\frac{\dot{f}(s)}{\dot{r}(s)} \\
\end{align}$$


 * * *

http://xahlee.info/SpecialPlaneCurves_dir/specialPlaneCurves.html
http://alexandria.tue.nl/repository/books/475961.pdf
