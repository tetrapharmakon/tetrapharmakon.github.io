---
title: Locally model bicategories
---

Let $\mathcal{V}$ be a model cosmos (e.g. $\mathbf{sSet}$); let $\mathbf{Prof}(\mathcal{V})$ the bicategory of $\mathcal{V}$-profunctors. This is a bicategory where every hom-category is a model category is a (non unique, but) natural way: $\mathbf{Prof}(\mathcal{V})(C,D) = \text{Fun}(C^\text{op}\times D, \mathbf{sSet})$. This is the paradigmatic example (the unique one at the moment) of a 2-category where every hom-category is a model category. Let $\mathbb{A}$ be a locally model 2-category.

   1. What is the universal property (in $2\text{-}\mathbf{Cat}$) of the 2-category having the same objects as $\mathbb{A}$ and hom-categories $\text{Ho}(\mathbb{A}(X,Y))$?
   2. Is the notion of a locally model 2-category the right notion of a 2-model category?
   3. Starting from the hom-wise model structure on each hom-category, is there a way to unravel a class of 1-cells in $\mathbb{A}$ which can be inverted (à la Pronk-Tommasini)? What's the answer in the case of $\mathbf{Prof}(\mathcal{V})$, or more specifically $\mathbf{Prof}(\mathbf{sSet})$?
   4. Let $\mathbf{sSet}^Q$ and $\mathbf{sSet}^J$ be the categories of simplicial sets endowed with the Quillen and Joyal model structure, respectively. There is a Bousfield localization of model categories $1\colon \mathbf{sSet}^Q \leftrightarrow \mathbf{sSet}^J \colon 1$. Does this adjunction induces a 2-adjunction
   $$\mathbf{Prof}(\mathbf{sSet}^Q) \leftrightarrows \mathbf{Prof}(\mathbf{sSet}^J)$$
   which can be thought as "Bousfield localization of a 2-model category"?
   5. Is it true that the functors $\text{Lan}_\varphi \dashv \varphi^*\dashv \text{Ran}_\varphi$ and $\text{Lift}_\varphi \dashv \varphi_*\dashv \text{Rift}_\varphi$ form triples of Quillen functors
   $$ \mathbf{Prof}(\mathbb{A},\mathbb{X}) \leftrightarrows  \mathbf{Prof}(\mathbb{A},\mathbb{Y}) $$
   6. Is there a way to link the homotopy theory of profunctors to linear logic?