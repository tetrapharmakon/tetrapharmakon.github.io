---
title: Grammar of rational layouts
tags: draft
---


Just the seed of an idea.



Using EBNF:

``` text
whole   <- void | solid
space   <- whole | sliced
sliced  <- 1-slice{1-slice} | ... | N-slice{N-slice}
1-slice <- space{1-mark}
 ...
N-slice <- space{N-mark}
```
