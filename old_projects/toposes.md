---
title: Join of toposes
---

Let $\mathbf{X}, \mathbf{Y}$ be two toposes of sheaves on topological spaces $X,Y$. Let $\mathbf{X}\star \mathbf{Y}$ be the join of the two toposes seen as categories. This is not a topos anymore, but there is a canonical procedure to turn it into a topos: just compose the functors
$$\mathbf{Cat} \to_N \mathbf{sSet} \to_L \mathbf{Topos}$$
where $N$ is the nerve functor, $\mathbf{Topos}$ is a category of sufficiently small toposes, and $L$ is the functor which arises as the left Kan extension of $J\colon \Delta \to \mathbf{Topos}$ (which sends $[n]$ to the category of sheaves on the sphere $\partial\Delta[n]$) along the Yoneda embedding. Define
$$\mathbf{X} \odot \mathbf{Y} := L(N(\mathbf{X}\star \mathbf{Y}))$$

- Is $\odot$ a monoidal structure on $\mathbf{Topos}$?
- Under which conditions on $X,Y$ is $\mathbf{X} \odot \mathbf{Y}$ equivalent to a topos of sheaves on a topological space $X \odot Y$? 
- What are the properties of the bifunctor $(X,Y)\mapsto X \odot Y$? How much does this operation resemble the join of topological spaces?