---
title: On Collatz conjecture
tags: mathjax
lang: en
---


Could not sleep one night.
Found this at morning.
Not really sure what I was doing.


``` tex
$$ \begin{align}
  C_\emptyset
    &= 1 \\
  C_{\{x_1, \dotsc, x_n\}}
    &= 3^{-1} \left( 2^{x_n}      C_{\{x_1, \dotsc, x_{n-1}\}} - 1 \right) \\
    &= 3^{-n} \left( 2^{X_{1, n}} C_\emptyset
                   - \sum_{i=2}^{n+1} 3^{i-2} 2^{X_{i, n}}         \right)
\end{align} $$
```

``` tex
$$ \begin{align}
  C_{\{x_1+p_1, \dotsc, x_n+p_n\}}
    &= 3^{-n} \left( 2^{X_{1, n} + P_{1, n}} C_\emptyset
                   - \sum_{i=2}^{n+1} 3^{i-2} 2^{X_{i,n} + P_{i,n}} \right) \\
  &= 2^{P_{1,n}} C_{\{x_1, \dotsc, x_n\}}
   + 3^{-n} \sum_{i=2}^{n+1} 3^{i-2} 2^{X_{i,n}}
              \left( 2^{P_{1,n}} - 2^{P_{i,n}} \right) \\
  &= 2^{P_{1,n}} C_{\{x_1, \dotsc, x_n\}}
   + \sum_{i=2}^{n+1} 3^{i-2-n} 2^{X_{i,n} + P_{i,n}}
       \left( 2^{P_{1,i-1}} - 1 \right) \\
  &= 2^{P_{1,n}} C_{\{x_1, \dotsc, x_n\}}
   + \sum_{i=2}^{n+1} \sum_{k=1}^{i-1}
                        2^{X_{i,n} + P_{i,n} + P_{1,k-1}}
                        \frac{2^{p_k} - 1}{3^{n+2-i}}
\end{align} $$
```

``` tex
$$ \begin{align}
  C_{\{x_1, \dotsc, x_n\}}
    &= C_{\{y_1, \dotsc, y_m\}} \\
  2^{x_n} C_{\{x_1, \dotsc, x_{n-1}\}}
    &= 2^{y_m} C_{\{y_1, \dotsc, y_{m-1}\}} \\
  1
    &= C_{\{y_1, \dotsc, y_{m-n}\}}
\end{align} $$
```

"*Therefore `$P_k$` has period `$2 \cdot 3^{n-k}$`*", whatever that means.
