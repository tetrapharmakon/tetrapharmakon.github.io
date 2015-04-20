---
title: Rational layouts grammar
tags: draft
---


    whole   <- void | solid
    space   <- whole | sliced
    sliced  <- 1-slice{1-slice} | ... | N-slice{N-slice}
    1-slice <- space{1-mark}
     ...
    N-slice <- space{N-mark}



