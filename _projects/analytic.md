---
title: Analytic functors
---

Let $\mathbf{Bij}(\omega)$ be the
category having objects finite sets and morphisms only bijections. An
endofunctor
$F\colon \mathbf{Set}\to \mathbf{Set}$
is called *analytic* if it results as the left Kan extension of
$f\colon \mathbf{Bij}(\omega) \to \mathbf{Set}$
(the "generating species" of $F$) along the natural inclusion
$\mathbf{Bij}(\omega) \hookrightarrow \mathbf{Set}$.
This means that $F$ acts on objects as
$$X \mapsto \int^{k\in\mathbf{Bij}(\omega)} X^k \times f(k)$$
which is only a funny way to write the "formal power series"
$\sum_{k\ge 0} \frac{f(k)}{k!}X^k$.

Now, the coend above still makes sense if we replace
$\mathbf{Bij}(\omega)$ with
$\mathbf{Bij}(\lambda)$ for an
ordinale $\lambda > \omega$. This means that we can define a functor
$F\colon \mathbf{Set}\to\mathbf{Set}$
to be $\lambda$-*analytic* if $F$ acts on objects as
$$X \mapsto \int^{\mu <\lambda} X^\mu \times f(\mu)$$ which is
precisely the left Kan etension of a $\lambda$-generating species along
the inclusion
$\mathbf{Bij}(\lambda)\hookrightarrow \mathbf{Set}$.

-   Is it possible to study the combinatorics of infinite sets using
    this notion, as Joyal did for the combinatorics of finite sets with
    his generating species' theory?

-   Is there any hope to describe in a nifty way $\lambda$-analytic
    functors in a similar way to analytic ones ("$F$ is analytic iff it
    preserves weak pullbacks" should correspond to "$F$ is
    $\lambda$-analytic iff it preserves $\lambda$-ary pullbacks")?

-   Is it possible to generalize this construction from
    $\mathbf{Set}$ to a generic
    symmetric monoidal (bicomplete and closed?) category $\mathcal V$? This
    leads to the following question:

Is there a general theory of monoidal categories where the tensor
product has arbitrarily large arity?

Examples: every small-complete, cartesian category; every category of
modules over a ring $R$.

Weird things happen when one tries to perform transfinite tensor
products on the category $\text{Mod}(R)$ (to be more concrete, let's
take $R=$a field): in this case $R\otimes R \otimes R \otimes\cdots$ is
infinitely-dimensional, and it is really painful to find a basis for it.
Also, it is not clear how to retrieve the expected results "formally"
(does the pentagon identity still ensure that "all diagrams commute"?).

Let's decategorify this property to monoids: we're looking for a monoid
$M$ such that every sequence (every net, to be more precise, but let's
pretend that countable sequences are enough) of elements
$\{x_i\mid i\in\mathbb{N}\}$ has a well-defined product.

Let's assume that $M$ has a topology: we're asking that *every* sequence
$\{x_i\mid i\in\mathbb{N}\}$ is such that
$\lim_{k\to \infty}\prod_{i=1}^k x_i$ exists in $M$. I suspect that this
entails that $M$ has trivial (=initial) topology, because if you
consider $M = \{1,e\}$ and the jumping sequence $x_{2i}=1, x_{2i+1}=e$
its convergence means that the topology cannot distinguish $e$ from the
identity.

This is weird, but happens in rather common situations ($R$-modules,
sets…). Are there any other examples?