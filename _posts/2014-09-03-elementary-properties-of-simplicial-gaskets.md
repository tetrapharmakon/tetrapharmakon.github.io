---
title: Elementary properties of simplicial gaskets
---

Let's compute some basic characteristics of straightforwardly generalized Sierpinski gaskets.

Let $$\Delta^n_0$$ be the regular $$n$$-simplex of side length $$s$$.
We define $$\Delta^n_{i+1}$$ as the simplicial complex given by $$(n+1)$$ half-sized copies of $$\Delta^n_i$$, each one glued to every other by a single vertex not used in previous gluings.

The number of $$j$$-faces (let $$\delta$$ be $$1$$ if the condition at subscript holds and $$0$$ otherwise):

$$
\begin{align}
k_j(\Delta^n_i)
& = \delta_{j \leq n} (n+1) k_j(\Delta^n_{i-1}) -
    \delta_{j =    0} \frac{n(n+1)}{2} \\
& = \delta_{j \leq n} (n+1)^i k_j(\Delta^n_0) -
    \delta_{j =    0} \frac{(n+1)}{2} \left[(n+1)^i-1\right] \\
& = \delta_{j \leq n} (n+1)^i{ {n+1}\choose{j+1} } -
    \delta_{j =    0} \frac{(n+1)}{2} \left[(n+1)^i-1\right]
\end{align}
$$

The Euler characteristic:

$$
\begin{align}
\chi(\Delta^n_i)
& = \sum_{j=0}^n(-1)^jk_j(\Delta^n_i) \\
& = -\frac{(n+1)}{2}\left[(n+1)^i-1\right] + \sum_{j=0}^n(-1)^j{ {n+1}\choose{j+1} }(n+1)^j \\
& = \frac{n+1}{2}+\frac{1-n}{2}(n+1)^i
\end{align}
$$

The $$j$$-volume:

$$
\begin{align}
V_j(\Delta^n_i)
& = k_j(\Delta^n_i) V_j(\Delta^j_0) 2^{-ij} \\
& = k_j(\Delta^n_i) \frac{s^j\sqrt{j+1}}{j!\sqrt{2^j}} 2^{-ij}
\end{align}
$$

If $$j>0$$ we have

$$
V_j(\Delta^n_i)
 = (n+1)^i{ {n+1}\choose{j+1} } \frac{s^j\sqrt{j+1}}{j!\sqrt{2^j}} 2^{-ij}
$$
