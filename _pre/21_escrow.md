---
datefrom: May 2021
dateto: May 2021
title: Escrows are optics
---

[2105.10028](https://arxiv.org/abs/2105.10028) • We provide a categorical interpretation for _escrows_, i.e. trading protocols
in trustless environment, where the exchange between two agents is mediated by
a third party where the buyer locks the money until they receive the goods they
want from the seller. A simplified escrow system can be modeled as a certain
kind of _optic_ in a monoidal category $\mathcal{M}$ (e.g., the category of sets
with cartesian product); escrows can be regarded as morphisms of a category
$\mathcal{E}(\mathcal{M})$, with the same objects of $\mathcal{M}$, and where the
hom-objects are $\langle X , Y \rangle = \mathsf{Opt}_{\mathcal{M}}(
\binom Y  X ,
\binom X  Y )$. When $X$ is a comonoid
and $Y$ is a monoid in $\mathcal{M}$, $\mathcal{E}(\mathcal{M})(X,Y)$ is a monoid
in $\mathsf{Set}$ (or in the base of enrichment chosen to model one's specific
problem), acting on the set of optics $ \binom B  B
 \to  \binom X  Y
$. Moreover, we define a map

$$\textstyle\lhd : \langle Y , X \rangle \times \mathsf{Opt}( \binom Y  X ,  \binom B  B ) \to \mathsf{Opt}( \binom Y  X ,  \binom{X\otimes B} {Y\otimes B} )$$

 having action-like properties. This has the following
interpretation: the object $B$ acts as an intermediary in a transaction between
$X$ and $Y$, modeled by an escrow in $\langle Y , X \rangle$.