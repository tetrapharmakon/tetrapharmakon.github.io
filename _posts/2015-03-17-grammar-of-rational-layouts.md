---
title: Grammar of rational layouts
tags: 
lang: en
---


I once needed to describe with a single string the sizes and the positions of all rectangular viewports tiling a screen.
Then I got carried away.


The string had to be independent of the screen size.
In fact, I was interested in reproducing [similar][similarity] tilings at fullscreen on different devices, so the only informations I needed were the relative sizes of the tiles along with their positions.

[similarity]: http://en.wikipedia.org/wiki/Similarity_(geometry)

Using a list of quadruples containg relative sizes and positions of each tile was out of the question: the result is not human-readable nor human-editable, and I needed to do that a lot.
It's also clearly gross.

So... what do we do?

The turning point is to think of a cut screen instead of glued tiles - that is, a partitioning instead of a tiling.
Then it's natural to observe that if there are at least two tiles then the screen has at least a cut transversing it completely in a direction.
Therefore the screen - hence every partition - is the gluing of at least two parallel slices, that are themselves partitions: we can describe them recursively.

At this point it costs no further effort to solve the problem in `N` dimensions instead of just `2`.
To put words into symbols we can use some bastardized [EBNF][ebnf] notation to describe the basic grammatical structure the string must have:


[ebnf]:       http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form

``` text
piece   <- whole | sliced
sliced  <- 1-slice{1-slice} | ... | N-slice{N-slice}
```

where `whole` is a letter from our alphabet of viewports.

We still have to decide how to denote slices.
Since the only difference between them is the direction of the cut and we need to separate them from parallel adjacent ones, a practical solution would be to define an alphabet of `N` marks and decide

``` text
1-slice <- {1-mark}piece
 ...
N-slice <- {N-mark}piece
```

We allow repetition of the marks to give slices different weights and account for relative dimensions.
That's not the optimal solution in terms of brevity, but the result is quite neat.

Let's make a bidimensional example.
We fix the necessary literal notation:

``` text
whole  <- A | B | C | ... | Y | Z
1-mark <- ,
2-mark <- ;
```

Here is a complex string, the corresponding screen and the same data written with quadruples:

``` text
,,;;;A;B,,;,;C;,D,E,F;G,;;;;;H;,I,J,K,L,;M;,N,O

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
```

Pretty self-explanatory.
You'll also find the transposition between screen and string, and viceversa, is really straightforward.

Enriching the alphabet of `whole` with an underscore one could also get creative and give a finite recursive presentation of some fractals.


``` text
Cantor set.

  C = ,C,_,C

Cantor dust.

  D = ;,D,_,D
      ;,_,_,_
      ;,D,_,D

Sierpiński carpet.

  S = ;,S,S,S
      ;,S,_,S
      ;,S,S,S

Now, let
3-mark <- .

Menger sponge.

  M = .;,M,M,M
       ;,M,_,M
       ;,M,M,M
      .;,M,_,M
       ;,_,_,_
       ;,M,_,M
      .;,M,M,M
       ;,M,_,M
       ;,M,M,M

Jerusalem cube (a version).

  J = ..;;,,J,.;J;_._,,J;.,J,,,_,J.
      _,,J,.;_;J._,,J;;.;.J..._.J;;
      ;_;.J..._.J..;;,,J,._.;J;_,,J
      ;._.,J,,,_,J,,J,._.;_;J,,J;;
```