---
datefrom: Jan 2020
dateto: Jan 2020
title: Profunctor optics, a categorical update
url: https://arxiv.org/abs/2001.07488
---

[arXiv:2001.07488](https://arxiv.org/abs/2001.07488) • Profunctor optics are bidirectional data accessors that capture data transformation patterns such as accessing subfields or iterating over containers. They are modular, meaning that we can construct accessors for complex structures by combining simpler ones. Profunctor optics have been studied only using **Sets** as the enriching category and in the non-mixed case. However, functional programming languages are arguably better described by enriched categories and we have found that some structures in the literature are actually mixed optics. Our work generalizes a classic result by Pastro and Street on Tambara theory and uses it to describe mixed V-enriched profunctor optics and to endow them with $\mathcal{V}$-category structure. We provide some original families of optics and derivations, including an elementary one for traversals that solves an open problem posed by Milewski. Finally, we discuss a Haskell implementation.
