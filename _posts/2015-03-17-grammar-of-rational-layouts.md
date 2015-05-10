---
title: Grammar of rational layouts
tags: draft
lang: en
---


I once needed to describe with a single string the sizes and the positions of all rectangular viewports tiling a screen.
Then I got carried away.


The string had to be independent of the screen size.
In fact, I was interested in reproducing [similar][similarity] tilings on different devices, so the only informations I needed were the relative sizes of the tiles along with their positions.

[similarity]: http://en.wikipedia.org/wiki/Similarity_(geometry)

The trivial option to make a list of quadruples like `(positionX, positionY, sizeX, sizeY)` was out of the question: the result is not human-readable nor editable, and I needed to do that a lot.
It's also clearly gross.

So... what do we do?

The turning point is to think of a cut screen instead of glued tiles.
That is, a partitioning instead of a tiling.
We can now make the crucial observation that if there are at least two tiles then the screen has a cut transversing it completely.
This means the screen - hence every partition - is the gluing of at least two partitions: we can describe them recursively.

At this point it costs no effort to solve the problem in `N` dimensions instead of just `2`.
Let's put our observation into symbols using some bastardized [EBNF][ebnf] notation to describe the basic grammatical structure the string must have:

``` text
piece   <- whole | sliced
sliced  <- 1-slice{1-slice} | ... | N-slice{N-slice}
```

where `whole` would be a letter from our alphabet of viewports.

We still have to decide how to denote slices.
Since the only difference between them is the direction of the cut and we need to separate them from parallel adjacent ones, a practical solution would be to define an alphabet of `N` marks and define

``` text
1-slice <- space{1-mark}
 ...
N-slice <- space{N-mark}
```

The circle closed.
But why did we allow repetition of the marks?
To denote relative dimensions!
That's not the optimal solution in terms of brevity, but i find the result quite neat.

Let's explore the bidimensional case to understand how this all works.
We fix the necessary literal notation:

``` text
whole  <- A | B | C | ... | Y | Z
1-mark <- ,
2-mark <- ;
```

I'll let you play around with the basic examples.
Now we jump to a complex string and compare it with the corresponding screen and the same data written in a dumb way:

``` text
A;;;B;,,C;D,E,;,F,;G;,,H;;;;;I,J,K,L,M;N,O,;,;,

AAAAAAAAAAAAAAACCCCCCCCCCFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAACCCCCCCCCCFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAACCCCCCCCCCFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAADDDDDEEEEEFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAADDDDDEEEEEFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAADDDDDEEEEEFFFFFHHHHHHHHHH
AAAAAAAAAAAAAAAGGGGGGGGGGGGGGGHHHHHHHHHH
AAAAAAAAAAAAAAAGGGGGGGGGGGGGGGHHHHHHHHHH
AAAAAAAAAAAAAAAGGGGGGGGGGGGGGGHHHHHHHHHH
BBBBBBBBBBBBBBBGGGGGGGGGGGGGGGHHHHHHHHHH
BBBBBBBBBBBBBBBGGGGGGGGGGGGGGGIIJJKKLLMM
BBBBBBBBBBBBBBBGGGGGGGGGGGGGGGIIJJKKLLNO

{(A,1,1,15,9),(B,1,10,15,3),(C,16,1,10,3),
(D,16,4,5,3),(E,21,4,5,3),(F,26,1,5,6),
(G,16,7,15,9),(H,31,1,10,10),(I,31,11,2,2),
(J,33,11,2,2),(K,35,11,2,2),(L,37,11,2,2),
(M,39,11,2,1),(N,39,12,1,1),(O,40,12,1,1)}


A;;;B;,,C;D,E,;,F,;G;,,H;;;;;I,J,K,L,M;N,O,;,;,


#;;;#;,,#;#,#,;,#,;#;,,#;;;;;#,#,#,#,#;#,#,;,;,
```

Pretty self-explanatory.
You'll also find the transposition between screen and string is really straightforward.



...






[ebnf]:       http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form
