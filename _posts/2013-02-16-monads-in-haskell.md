---
title: Monads in Haskell
tags: draft
lang: en
packages: |
  \usepackage[all]{xy}
macros: |
  % Some aliases
  \def\to{\rightarrow}
  \def\({\left(}
  \def\){\right)}
  \def\[{\left[}
  \def\]{\right]}
  \def\<{\left<}
  \def\>{\right>}
  \def\:{\colon}
  % Notation
  \def\C{C}            % Category
  \def\D{D}            % Category
  \def\M{M}            % Monad
  \def\L{L}            % Left adjoint
  \def\R{R}            % Right adjoint
  \def\u{\eta}         % Unit
  \def\c{\epsilon}     % Counit
  \def\m{\mu}          % Multiplication
  \def\id{1}           % Identity functor
---




A journey among diagrams and metacode.
Still aimless.








## Monads for mathematicians


A **monad** `$\<\M,\u,\m\>$` in a category `$\C$` is a functor `$\M\:\C\to\C$` together with two natural transformations, the unit `$\u\:\id\to\M$` and the multiplication `$\m\:\M^2\to\M$`, such that the diagrams expressing associativity and unit laws commute:

``` tex
\begin{displaymath}
  \xymatrix{
    \id\M & \M^2 & \M\id \\
          & \M   &
    \ar     "1,1";"1,2" ^{\u\M}
    \ar     "1,3";"1,2" _{\M\u}
    \ar     "1,2";"2,2" ^\m
    \ar@{=} "1,1";"2,2" 
    \ar@{=} "1,3";"2,2"
  }
  \qquad
  \xymatrix{
    \M^3 & \M^2 \\
    \M^2 & \M
    \ar "1,1";"1,2" ^{\M\m}
    \ar "1,1";"2,1" _{\m\M}
    \ar "1,2";"2,2" ^\m
    \ar "2,1";"2,2" _\m
  }
\end{displaymath}
```

We can straightforwardly implement it in Haskell as

``` haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b

class Functor m => Monad m where
  unit :: a -> m a
  mult :: m (m a) -> m a
```

Everything is going to work just fine as long as we ensure that every instance respects the following properties:

``` text
Functoriality:
  fmap id = id                                                          -- (F1)
  fmap (f . g) = (fmap f) . (fmap g)                                    -- (F2)

Naturality:
  fmap f . unit = unit . f                                              -- (N1)
  fmap f . mult = mult . fmap (fmap f)                                  -- (N2)

Consistency:
  mult . fmap unit = mult . unit = id                                   -- (C1)
  mult . fmap mult = mult . mult                                        -- (C2)
```








## Monads for programmers


In the *amazing world of computers*, monads are more commonly and more economically implemented as

``` haskell
class Monad m where
  unit  :: a -> m a
  (>>=) :: m a -> (a -> m b) -> m b
```

ensuring all instances respect

``` text
Monadicity: left unit, right unit, associativity
  unit x >>= f = f x                                                    -- (M1)
  m >>= unit = m                                                        -- (M2)
  (m >>= f) >>= g = m >>= (\x -> f x >>= g)                             -- (M3)
```

But are the two implementations any different?
No, they are not.
We will now show they are equivalent, and we will do it in a way so painstakingly straightforward we will probably just feel dull pain at the end.

Let us enrich the first implementation with

``` haskell
(>>=) :: m a -> (a -> m b) -> m b
x >>= f = mult (fmap f x)                                               -- (D1)
```

Every propery of the second one holds:

``` text
  unit x >>= f
= join (fmap f (unit x))                                               -- by D1
= join (unit (f x))                                                    -- by N1
= (join . unit) (f x)
= id (f x)                                                             -- by C1
= f x

  x >>= unit
= join (fmap unit x)                                                   -- by D1
= (join . fmap unit) x
= id x                                                                 -- by C1
= x

  (x >>= f) >>= g
= (join (fmap f x)) >>= g                                              -- by D1
= join (fmap g (join (fmap f x)))                                      -- by D1
= (join . fmap g . join . fmap f) x
= (join . join . fmap (fmap g) . fmap f) x                             -- by N2
= (join . join . fmap (fmap g . f)) x                                  -- by F2
= (join . fmap join . fmap (fmap g . f)) x                             -- by C2
= (join . fmap (join . fmap g . f)) x                                  -- by F2
= x >>= (join . fmap g . f)                                            -- by D1
= x >>= (\y -> join . fmap g . f y)
= x >>= (\y -> f y >>= g)                                              -- by D1
```

Let us enrich the second implementation with

``` haskell
fmap  :: (a -> b) -> f a -> f b
mult  :: m (m a) -> m a
fmap f x = x >>= unit . f                                               -- (D2)
mult x   = x >>= id                                                     -- (D3)
```

Every propery of the first one holds:

``` text
  fmap id x
= x >>= unit . id                                                      -- by D2
= x >>= unit
= x                                                                    -- by M2
= id x

  fmap (f . g) x
= x >>= unit . (f . g)                                                 -- by D2
= x >>= (\y -> unit . f . g y)
= x >>= (\y -> unit . g y >>= unit . f)                                -- by M1
= (x >>= unit . g) >>= unit . f                                        -- by M3
= (fmap f) (x >>= unit . g)                                            -- by D2
= (fmap f) . (fmap g) x                                                -- by D2

  (fmap f . unit) x
= unit x >>= unit . f                                                  -- by D2
= (unit . f) x                                                         -- by M1

  (fmap f . join) x
= (join x) >>= unit . f                                                -- by D2
= (x >>= id) >>= unit . f                                              -- by D3
= x >>= (\y -> id y >>= unit . f)                                      -- by M3
= x >>= (\y -> y >>= unit . f)
= x >>= (\y -> fmap f y)                                               -- by D2
= x >>= (\y -> id . (fmap f) y)
= x >>= (\y -> unit . (fmap f) y >>= id)                               -- by D3
= (x >>= unit . (fmap f)) >>= id                                       -- by M3
= (fmap (fmap f) x) >>= id                                             -- by D2
= (join . fmap (fmap f)) x                                             -- by D3

  (join . fmap unit) x
= fmap unit x >>= id                                                   -- by D3
= (x >>= unit . unit) >>= id                                           -- by D2
= x >>= (\y -> unit (unit y) >>= id)                                   -- by M3
= x >>= (\y -> unit y)                                                 -- by M1
= x >>= unit                                                           -- by M2
= x

  (join . unit) x
= unit x >>= id                                                        -- by D3
= id x                                                                 -- by M1

  (join . fmap join) x
= (fmap join x) >>= id                                                 -- by D3
= (x >>= unit . join) >>= id                                           -- by D2
= x >>= (\y -> unit . join y >>= id)                                   -- by M3
= x >>= (\y -> join y)                                                 -- by M1
= x >>= (\y -> y >>= id)                                               -- by D3
= (x >>= id) >>= id                                                    -- by M3
= join (x >>= id)                                                      -- by D3
= (join . join) x                                                      -- by D3
```

Everything worked fine.
Are you happy?
Neither I am.
Luckily we're up for some candy now.








## Monads for smarty pants


I present to you the Kleisli composition:

``` haskell
(>=>) :: Monad m => (a -> m b) -> (b -> m c) -> a -> m c
(m >=> n) x  = m x >>= n
```

It allows us to obtain a third implementation.
This time the equivalence with the second one is obvious, as we are just directly translating it

``` haskell
class Monad m where
  unit  :: a -> m a
  (>=>) :: (a -> m b) -> (b -> m c) -> a -> m c
```

along with its properties

``` text
Monadicity: left unit, right unit, associativity
  unit >=> g = g                                                        -- (K1)
  f >=> unit = f                                                        -- (K2)
  (f >=> g) >=> h = f >=> (g >=> h)                                     -- (K3)
```

This one looks surprisingly compelling, especially after seeing the other two for so long.
The properties names make sense too.
We may have struck something beautiful this time, but to delve deeper into the matter we need to do *some more of the maths*.








## Adjunctions for everyone


An **adjunction** `$\<\L,\R,\u,\c\>\:\C\to\D$` from a category `$\C$` to a category `$\D$` consists of two functors, `$\L\:\C\to\D$` and `$\R\:\D\to\C$`, and two natural transformations, the unit `$\u\:\id\to\R\L$` and the counit `$\c\:\L\R\to\id$`, such that the following diagrams espressing the triangle identities commute:

``` tex
\begin{displaymath}
  \xymatrix{
    \L & \L\R\L \\
       & \L
    \ar     "1,1";"1,2" ^{\L\u}
    \ar     "1,2";"2,2" ^{\c\L}
    \ar@{=} "2,2";"1,1"
  }
  \qquad
  \xymatrix{
    \R\L\R & \R \\
    \R     &
    \ar     "1,1";"2,1" _{\R\u}
    \ar     "1,2";"1,1" _{\c\R}
    \ar@{=} "2,1";"1,2"
  }
\end{displaymath}
```

Obviously we care about them because they are related to monads:

* to an adjunction `$\<\L,\R,\u,\c\>\:\C\to\D$` corresponds a monad `$\<\R\L,\u,\R\c\L\>$` over `$\C$`;
* different adjunctions may correspond to the same monad.

We don't care about the proofs of these facts -- if you are wary, that is an exercise for you -- we care about the relation they describe not being bijective.
There are many solutions to the problem of finding an adjunction from a monad.

When the question is made precise, the answers can be examined and one finds there are two *dually optimal* solutions.
One is called *Eilenberg--Moore category of a monad* and we don't care about it.
The other one is the *Kleisli category of a monad*: we already heard that name.








## Categories for Kleisli

We won't care about the sense in which Kleisli category is an optimal.
We just want the result.

### Statement

Let `$\<\M,\u,\m\>$` be a monad over `$\C$`. 
Consider to each object `$x\in\C$` a new object `$x_\M$` and to each arrow `$f:x\to\M y$` a new arrow `$f^\flat\:x_\M \to y_\M$`.
These new objects and arrows constitute a category `$\C_\M$` when the composite of `$f^\flat$` and `$g^\flat:y_\M\to z_\M$` is defined by

``` tex
$$ g^\flat \circ f^\flat = (\m_z \circ \M g \circ f)^\flat $$
```

Moreover, `$\<\L_\M,\R_\M,\u_\M,\c_\M\>\:\C\to\C_\M$` is an adjunction inducing the given monad on `$\C$`, where we have defined functors and natural transformations as

``` tex
$$
  \begin{aligned}
    \L_\M \:
      & \C \to \C_\M,
      & \(k \: x \to y\) \mapsto
        \[(\u_y \circ k)^\flat \: x_\M \to y_\M\] \\
    \R_\M \:
      & \C_\M \to \C,
      & \(f^\flat \: x_\M \to y_\M\) \mapsto
        \[\m_y \circ \M f \: \M x \to \M y\] \\
    \u_\M \:
      & \id_\C \to \R_\M \L_\M,
      & (\u_\M)_x = \u_x \: x \to \M x \\
    \c_\M \:
      & \L_\M \R_\M \to \id_{\C_\M},
      & (\c_\M)_{x_\M} = (\id_{\M x})^\flat \: (\M x)_\M \to x_\M
  \end{aligned}
$$
```

### Proof

*Meep.*








## The abrupt end

Got tired.
I'll continue another time.














{% include begin-hidden %}


<p class="proof">
First we show $X_T$ is a category.
<br>
Given $h^\flat:z_T\rightarrow w_T$,
$$\begin{align}
  & h^\flat \circ ( g^\flat \circ f^\flat )
  = ( \mu_w \circ Th \circ \mu_z \circ Tg \circ f )^\flat \\
= & ( h^\flat \circ g^\flat ) \circ f^\flat
  = ( \mu_w \circ T\mu_w \circ T^2h \circ Tg \circ f )^\flat \\
\end{align}$$
holds since
<span class="diagram">
$$\xymatrix{
Ty \ar[r]^{Tg} & T^2z \ar[r]^{T^2h} \ar[d]_{\mu_z}
               & T^3w \ar[d]^{T\mu_w} &    \\
x \ar[u]^f     & Tz \ar[r]_{Th}                    
               & T^2w \ar[r]_{\mu_w}  & Tw \\
}$$
</span>
commutes: associativity holds.
<br>
Right and left units are given by $(\eta_x)^\flat:x_T\rightarrow x_T$. In fact,
$$\begin{align}
(\eta_y)^\flat\circ f^\flat
  & = (\mu_{Ty}\circ T\eta_y\circ f)^\flat = f^\flat\\
f^\flat\circ (\eta_x)^\flat
  & = (\mu_{Ty}\circ Tf\circ \eta_x)^\flat = f^\flat\\
\end{align}$$
follow from the commutation of
<span class="diagram">
$$\xymatrix{
x \ar[r]^f \ar[d]_{\eta_x}
  & Ty \ar[d]_{\eta_{Ty}} \ar[r]^{T\eta_y}
  & T^2y \ar[d]^{\mu_{Ty}} \\
Tx \ar[r]_{Tf}
  & T^2y \ar[r]_{\mu_{Ty}}
  & Ty \ar@{=}[ul] \\
}$$
</span>
Now we show $\left<F_T,G_T,\eta_T,\epsilon_T\right>:X\rightharpoonup X_T$ is an adjunction.
Given $l:y\rightarrow z$, we have
$$\begin{align}
F_T(l\circ k)
  & = (\eta_z\circ l\circ k)^\flat \\
F_Tl\circ F_Tk
  & = (\eta_z\circ l)^\flat\circ(\eta_y\circ k)^\flat \\
  & = (\mu_{Tz}\circ T\eta_z\circ Tl\circ\eta_y\circ k)^\flat \\
\end{align}$$
and $F_T$ is a functor by commutativity of
<span class="diagram">
$$\xymatrix{
x \ar[r]^k & y \ar[r]^l \ar[d]_{\eta_y} & z \ar[d]^{\eta_z}
           & Tz \ar@{=}[dl] \\
           & Ty \ar[r]_{Tl}          & Tz \ar[r]_{T{\eta_z}}
           & T^2z \ar[u]_{\mu_{Tz}}
}$$
</span>
Analogously, since
$$\begin{align}
G_T(g^\flat\circ f^\flat)
  & = G_T(\mu_z\circ Tg\circ f)^\flat \\
  & = \mu_z\circ T\mu_z\circ T^2g\circ Tf \\
G_Tg^\flat\circ G_Tf^\flat
  & = \mu_z\circ Tg\circ\mu_y\circ Tf \\
\end{align}$$
$G_T$ is a functor by commutativity of
<span class="diagram">
$$\xymatrix{
Tx \ar[r]^{Tf} & T^2y \ar[r]^{T^2g} \ar[d]_{\mu_y}
               & T^3z \ar[r]^{T\mu_z} \ar[d]_{\mu_{Tz}}
               & T^2z \ar[d]^{\mu_z} \\
               & Ty \ar[r]_{Tg}
               & T^2z \ar[r]_{\mu_z}
               & Tz \\
}$$
</span>
Now note that by the monad right unit law
$$\begin{align}
G_TF_Tk = G_T(\eta_y\circ k)^\flat = \mu_y\circ T\eta_y\circ Tk = Tk
\end{align}$$
so $G_TF_T=T$ and $\eta_T=\eta$, hence its naturality.
<br>
Naturality of $\epsilon_T$ is the commutation of
<span class="diagram">
$$\xymatrix{
F_TG_Tx_T \ar[r]^{F_TG_Tf^\flat} \ar[d]^{(\epsilon_T)_{x_T}}
  & F_TG_Ty_T \ar[d]^{(\epsilon_T)_{y_T}} \\
I_{X_T}x_T \ar[r]_{I_{X_T}f^\flat}
  & I_{X_T}y_T \\
}$$
</span>
so using
we have
$$\begin{align}
(\epsilon_T)_{y_T} \circ F_TG_Tf^\flat
  & = I_{X_T}f^\flat \circ (\epsilon_T)_{x_T} \\
(1_{Ty})^\flat \circ F_T(\mu_y\circ Tf)
  & = f^\flat \circ (1_{Tx})^\flat \\
(1_{Ty})^\flat \circ (\eta_{Ty}\circ\mu_y\circ Tf)^\flat
  & = (\mu_y\circ Tf\circ 1_{Tx})^\flat \\
(\mu_y\circ T1_{Ty}\circ\eta_{Ty}\circ\mu_y\circ Tf)^\flat
  & = (\mu_y\circ Tf)^\flat \\
\end{align}$$
holding by commutativity of
<span class="diagram">
$$\xymatrix{
Tx \ar[r]^{Tf} & T^2y \ar[r]^{\mu_y}
               & Ty \ar[d]_{\eta_{Ty}} \ar[r]^{1_{Ty}}
               & Ty \ar[d]_{\eta_{Ty}} \ar@{=}[dr]
               & \\
               &
               & T^2y \ar[r]_{T1_{Ty}}
               & T^2y \ar[r]_{\mu_y}
               & Ty \\
}$$
</span>
[TODO triangle identities, monad induction]
</p>

Now everything is clearer! We have a monad $\left<T,\eta,\mu\right>$ on $\mathbf{Hask}$ but we work inside the Kleisli category $\mathbf{Hask}_T$ that induces it by adjunction. Why? Because the Kleisli composition we have there is tamer to implement, understand and use.

**KA-POW!**

























































<hr>













<!--

A category...


A functor...


A natural transformation...


Consider categories, functors and natural transformations as in
<figure class="center diagram"><img src='http://latex.codecogs.com/png.latex?\fg_657b83 \xymatrix{
C \ar@(u,u)[rr] _R="R" \ar[rr] |S="S" \ar@(d,d)[rr] ^T="T" && B
\ar "R";"S" _\sigma
\ar "S";"T" ^\tau
}'></img></figure>
The components of the natural transformations define the components of their vertical composition as $(\tau\cdot\sigma)_c=\tau_c\circ\sigma_c$, natural by commutativity of the squares in
<figure class="center diagram"><img src="http://latex.codecogs.com/png.latex?\fg_657b83 \xymatrix{
Rb \ar[r]^{Rf} \ar[d]_{\sigma_c} \ar@(l,l)[dd]_{(\tau\cdot\sigma)_c} & Rb' \ar[d]^{\sigma_{c'}} \ar@(r,r)[dd]^{(\tau\cdot\sigma)_{c'}} \\
Sb \ar[r]^{Sf} \ar[d]_{\tau_c} & Sb' \ar[d]^{\tau_{c'}} \\
Tb \ar[r]^{Tf} & Tb' \\
}"></img></figure>
for any $f:c\rightarrow c'$ in $C$.


Given categories, functors and natural transformations as in
<figure class="center diagram"><img src='http://latex.codecogs.com/png.latex?\fg_657b83 \xymatrix{
C \ar@(ur,ul)[rr] _S="S" \ar@(dr,dl)[rr] ^T="T" &&
B \ar@(ur,ul)[rr] _U="U" \ar@(dr,dl)[rr] ^V="V" &&
A
\ar "S";"T" _\tau
\ar "U";"V" ^\nu
}'></img></figure>
we can define the horizontal composition of natural transformations.
-->




























<p class="definition">
A comonad $\left<L,\epsilon,\delta\right>$ in a category $A$ consists of a functor $L:A\leftarrow A$ and two natural transformations, the counit $\epsilon:I_A\leftarrow L$ and the comultiplication $\delta:L^2\leftarrow L$. The following diagrams express the coassociativity and counit laws and must commute:
<span class="diagram">
$$\xymatrix{
L^3 & L^2 \ar[l]_{\delta L} \\
L^2 \ar[u]^{L\delta} & L \ar[l]^\delta \ar[u]_\delta
}$$
$$\xymatrix{
LI \ar@{=}[dr] & L^2 \ar[l]_{L\epsilon} \ar[r]^{\epsilon L} & IL \\
& L \ar@2{-}[ul] \ar[u]_\delta \ar@{=}[ur] & \\
}$$
</span>
</p>

<p class="proposition">
Every adjunction $\left<F,G,\eta,\epsilon\right>:X\rightharpoonup A$ define a monad in $X$ and a comonad in $A$, respectively $\left<GF,\eta,G\epsilon F\right>$ and $\left<FG,\epsilon,F\eta G\right>$.
</p>




<pre>


do { x }                 -->  x
do { let { y = v }; x }  -->  let y = v in do { x }
do { v <- y; x }         -->  y >>= \v -> do { x }
do { y; x }              -->  y >>= \_ -> do { x }

do { v <- unit x; f v } = do { f x }
do { v <- m; unit v } = do { m }
do { y <- do { x <- m; f x }; g y } = do { x <- m; y <- f x; g y }


class Functor f where
  fmap :: (a -> b) -> f a -> f b

class Functor c => Comonad c where
  counit   :: c a -> a
  cojoin   :: c a -> c (c a)

  (=>>)    :: c a -> (c a -> b) -> c b
  x =>> f   = fmap f (cojoin x)

Functoriality:
  fmap id = id
  fmap (f . g) = (fmap f) . (fmap g)

Naturality:
*  fmap f . unit = unit . f
*  fmap f . join = join . fmap (fmap f)
Consistency:
*  join . fmap unit = join . unit = id
*  join . fmap join = join . join


The haskeller way:

class Comonad c where
  counit   :: c a -> a
  (=>>)    :: c a -> (c a -> b) -> c b

  fmap     :: (a -> b) -> c a -> c b
  cojoin   :: c a -> c (c a)
  fmap f x  = x =>> f . counit
  cojoin x  = x =>> id

Monadicity:
*  unit x >>= f = f x
*  m >>= unit = m
*  (m >>= f) >>= g = m >>= (\x -> f x >>= g)


</pre>


<hr>
















Let `$F$` be an endofunctor on `$C$`.

An `$F$`-algebra is an object `$A$` together with a morphism `$a:F(A)\rightarrow A$`.


{% include end-hidden %}
