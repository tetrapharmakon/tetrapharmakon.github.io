---
title: Plots
---

A small category is a monoid with more than one object.

Now, if we do Abstract Algebra *à la Bourbaki*, monoids appear as rather
highly-structured objects: they are unital, associative, total magmas
(*total*, opposed to partial, means the operation is everywhere
defined).

What happens when you try to understand what is a "partial magma with
more than one object"?

In a few words, you get these things called *plots* studied in
Tringali’s "<a href="https://arxiv.org/abs/1311.3524">Plots and Their 
Applications - Part I: Foundations</a>" where
your composition is not defined for each pair of consecutive arrows, and
even if it’s defined it is possibly non-associative. Finally, you don’t
have identities everywhere. Salvatore is a good friend of mine, and I’ve
been pleased to slightly collaborate to his visionary project. I
definitely fell in love with it.

Even if it’s difficult to believe so, even in such a poorly behaved
setting one is able to find interesting results, and the theory
established so far is everything but an empty academic exercise.

In (what we would like to call) *plot theory* you can define
*isomorphisms* (yes, *without* having identities), and notice that
"being an isomorphism" and "admitting an inverse" are *different*
notions in the world of plots: the two notions collapse in category
theory (a category is an associative plot, where the composition is
defined and every object has a unit, in the same vein a monoid is an
"extremely smooth partial magma"). You can then define *isoids*, i.e.
plots where every arrow is an isomorphism.

Salvatore is even able to define morphisms of plots (*p*unctors),
natural transformations (*trimmings*, if I remember well the name I
helped him to chose to continue the sartorial inspiration), adjoints,
limits, and a chain of free-forgetful adjunctions which connects the
category (it *is* a category!) $\mathbf{Plt}$ of plots to the category of
associative plots, semi-categories [the obvious forgetful has two
adjoints, left and right, giving two different completions], and
categories.

Salvo to-do list:

-   What’s a $n$-dimensional version of these guys?

-   How can one define classical category theoretic notions (Kan
    extensions, adjunctions between punctors and their monads [do we
    obtain...*magmads*?], representables...are they still the same or not?)
    in the setting of plots?

-   What is the localization of a plot with respect to a family of
    arrows, given that we lack associativity and unitality?

-   How about a "simplicial" <span
    style="font-variant:small-caps;">pov</span>? Is there a
    [shape](http://ncatlab.org/nlab/show/geometric+shape+for+higher+structures)
    giving $\mathbf{Plt}$ as a full subcategory of a category of
    presheaves, in the same way
    $\mathbf{Cat}\subset [\Delta^\text{op}, \mathbf{Sets}]$ and
    semi-categories arise as suitable *semi*simplicial sets
    ("degeneracies give identities")?

-   What about enrichment (whatever this means, in this context)? Can we
    do "formal" plot theory?

Functional analysis and symplectic geometry provide "natural factories"
(read Examples **10**-**14** of Salvatore’s paper) of examples for such
structures. As a toy example, one of our two unitization functors
applied to the category of symplectic relations gives precisely the
Woodward-Wehrheim category.
