---
author: Paolo Brasolin
title: Rational layouts grammar
tags: draft
---


    space   <- void | solid | sliced
    sliced  <- 1-slice{1-slice} | ... | N-slice{N-slice}
    n-slice <- space{n-mark}



