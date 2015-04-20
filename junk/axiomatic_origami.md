---
author: Paolo Brasolin
title: Axiomatic origami
created: 2012-11-04
published: 2012-11-04
---

What can be done with origami?

* cranes, duh.

What cannot be done with origami?

* doubling cubes volume (impossible also with origami). Unless you use more axioms.

Related to Hilbert 17th problem.

# Paper folding

<p class="definition">$(\mathcal{P},\mathcal{L})$ is an **origami pair** if $\mathcal{P}$ is a set of points and $\mathcal{L}$ is a collection of lines, both over an euclidean plane, satisfying:</p>

1) the point of intersection of any two non-parallel lines in $\mathcal{L}$ is a point in $\mathcal{P}$;
2) given any two distinct points in $\mathcal{P}$, there is a line in $\mathcal{L}$ going through them;
3) given any two distinct points in $\mathcal{P}$, the perpendicular bisector of the line segment with given end points is a line in $\mathcal{L}$;
4) if $L_1$ and $L_2$ are lines in $\mathcal{L}$, then the line which is equidistant from $L_1$ and $L_2$ is in $\mathcal{L}$;
5) if $L_1$ and $L_2$ are lines in $\mathcal{L}$, then there exists a line $L_3$ in $\mathcal{L}$ such that $L_3$ is the mirror reflection of $L_2$ about $L_1$.

<p class="definition">A set of points $\mathcal{P}$ is **closed under origami constructions** if there exists a collection of lines $\mathcal{P}$ such that $(\mathcal{P},\mathcal{L})$ is an origami pair.
</p>

The two most elementary closed origami pairs are $(\emptyset,\emptyset)$ and $(\{x\},\{\text{lines through }x\})$. The successive case would be $|\mathcal{P}|=2$, and this is equivalent to the situation with a *square* sheet of paper.

<p class="proposition">For any subset $\mathcal{P}$ of the plane containing at least two points, there is at most one collection $\mathcal{L}$ of lines such that $(\mathcal{P},\mathcal{L})$ is an origami pair.
</p>

<p class="definition">$\mathcal{P}_0=\bigcap\{\mathcal{P}|p,q\in\mathcal{P}\text{ and }\mathcal{P}\text{ is closed under origami constructions}\}$ is the set of **origami constructible points**. Let $p=(0,0),q=(0,1)$ for concreteness.
</p>

<p class="definition">$\mathbb{F}_0=\{\pm\mathrm{dist}(p,q)|p,q\in\mathcal{P}_0\}\subset\mathbb{R}$ is the **set of origami numbers**.
</p>

<p class="theorem">Some easy results:
</p>

* $(x,y)\in\mathcal{P}_0$ iff $x,y\in\mathbb{F}_0$
* $\mathbb{Q}\subset\mathbb{F}_0$

<p class="definition">Let $\mathbb{F}_{\sqrt{1+a^2}}$ be the smallest subfield of $\mathbb{C} closed under $a\mapsto\sqrt{1+a^2}$.
</p>

<p class="theorem">$\mathbb{F}_0$ is a field closed under $a\mapsto\sqrt{1+a^2}$. That is, $\mathbb{F}_{\sqrt{1+a^2}}\subset\mathbb{F}_0$.
</p>

Are there more operations? No. In fact,

<p class="theorem">$\mathbb{F}_{\sqrt{1+a^2}}=\mathbb{F}_0$.
</p>
<p class="proof">By exhaustion over axioms.
</p>

The algebraic characterization of origami number is now complete. It's quite clumsy, though. Let's do better.





# References

http://arxiv.org/abs/math/0407174v1
