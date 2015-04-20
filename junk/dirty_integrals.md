---
author: Paolo Brasolin
title: Dirty integrals
created: 2013-03-12
published: 2013-03-12
---

# Dirty integrals

###### Specimen 1

$$\begin{align}
e^{ax+kx}
  & = \sum_{n=0}^{+\infty} \frac{x^n}{n!}(a+k)^n \\
  & = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \sum_{m=0}^n{n\choose m}a^mk^{n-m} \\
  & = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \sum_{m=0}^n \frac{a^m}{m!} \frac{n!k^{n-m}}{(n-m)!} \\
  & = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \sum_{m=0}^{+\infty} \frac{a^m}{m!} \frac{d^mk^n}{dk^m} \\
  & = \sum_{m=0}^{+\infty} \frac{1}{m!} \left(a\frac{d}{dk}\right)^m \sum_{n=0}^{+\infty} \frac{(kx)^n}{n!} \\
  & = e^{a\frac{d}{dk}}e^{kx}
\end{align}$$


