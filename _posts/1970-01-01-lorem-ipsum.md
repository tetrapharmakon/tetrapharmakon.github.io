---
title: Lorem ipsum
tags: athjax uicklatex highlight haskell latex
---

Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.

``` latex
\usepackage[all]{xy}
```
{:.preamble}


## Ut enim ad minim

Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


### Dolor sit

Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.

Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


<pre>
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incid
unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exe
rcitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi c
onsequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore 
eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt 
in culpa qui officia deserunt mollit anim id est laborum.
</pre>




``` latex
\comando[12]{asd}
123+123
\begin{displaymath}
  \xymatrix{
    Ty \ar[r]^{Tg} & T^2z \ar[r]^{T^2h} \ar[d]_{\mu_z}
                   & T^3w \ar[d]^{T\mu_w} &  \\
    x \ar[u]^f     & Tz \ar[r]_{Th}
                   & T^2w \ar[r]_{\mu_w}  & Tw \\
  }
\end{displaymath}
```


ehvabè



``` latex
% tex comment
\begin{displaymath}
  \xymatrix{
    Ty \ar[r]^{Tg} & T^2z \ar[r]^{T^2h} \ar[d]_{\mu_z}
                   & T^3w \ar[d]^{T\mu_w} &  \\
    x \ar[u]^f     & Tz \ar[r]_{Th}
                   & T^2w \ar[r]_{\mu_w}  & Tw \\
  }
\end{displaymath}
```
{:.live}




Ma lol.




``` haskell
-- comment!
{-- megacomment 123123123123123132123333333333333333333333333333333333333333333
11111111111111111111111111111111111111111111111111111111111111111111oh yeah --}
class Functor f where
  fmap :: (a -> b) -> f a -> f b
class Functor m => Monad m where
  unit     :: a -> m a
  mult     :: m (m a) -> m a
```
