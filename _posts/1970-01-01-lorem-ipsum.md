---
title: Lorem ipsum
tags: quicklatex
---


Lorem "ipsum" dolor 'sit' `\sum x` amet, consectetur `$\sum x$` adipisci elit,
 sed eiusmod incidunt -- ut --- labore 

``` tex
$$
\sum x
$$
```

``` tex
\[
\mathbf{X}_{n,p} = \mathbf{A}_{n,k} \mathbf{B}_{k,p}
\]
```

asd

``` tex
\[
\mathbf{X}_{n,p} = \mathbf{A}_{n,k} \mathbf{B}_{k,p}
\]
```

asd


``` ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

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
{: .test}
