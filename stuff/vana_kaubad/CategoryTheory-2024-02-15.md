# Category Theory and Applications (2024-02-15) - Practice session

## Today's plan

- Introduce a small programming language
- Recap categories
- Construct a category of types and total programs
- Reason on the equality of some morphisms of the category
- Observe some properties of our category
- Introduce the category of types and partial functions

## The Crust programming language

In order to introduce our example categories and see how category theory
is closely linked to programming, we need to agree on a small programming language, which we now introduce.
We call it the **Crust** language:
- **C**ategory theory-inspired
- **R**ust-like
- **U**nified language
- **S**upporting
- **T**ypes

We introduce the language not formally but only intuitively, by examples:

```rust
// We write comments like this

// Some example functions
fn addThree(x: Int): Int   => x + 3
fn isEven(a: Int): Bool    => a % 2 == 0
fn boolToInt(a: Bool): Int => if a then 1 else 0
fn twiceLength(s: String): Int => 2 * s.length() 
fn isGreaterThan18(n: Int): Bool => n > 18

// Convention: we will always start functions names in lowercase, and types in uppercase.

// Multiple arguments
fn test(n: Int, a: Bool): Bool => isGreaterThan18(n) && !a

// We can use a method-like syntax on the first argument of a function
/*
> let a: Int = 7
> a.addThree()
10
> test(a, false)    
false
> a.test(false)  
false
*/
```
```rust
// Define a new type
type List<A> = nil()
             | cons(A, List<A>)
/*
    Something of type list can either be 
    the expression nil or the expression cons(a, b),
    where a is of type A, and b is of type List<A>.
*/

// Functions which are parametric on their type.
/* 
This defines a *family* of programs: there is no *single* tail function, but there is a function 
  tail<Int>, tail<String>, ..., tail<A>, for any type A.

fn<A> tail(a: List<A>): List<A> =>
    match a with 
    | nil() => nil()
    | cons(x, vs) => vs
*/
```
```rust
// Pairs
type Pair<A,B> = pair(A, B)

fn<A> createCourse(a: A): Pair<String,A> => pair("category theory", a)
fn personAge(person: Pair<String,Int>): Int => 
    match person with
    | pair(name, age) => age 

// Method chaining
fn isAdult(person: Pair<String,Int>): Bool => 
    person.personAge().isGreaterThan18()

/*
In Crust, method chaining is just syntactic sugar for function application. Our last function could have equivalently been defined like this:

fn isAdult(person: Pair<String,Int>): Bool => 
    isGreaterThan18(personAge(person))

Notice: method chaining implicitly puts brackets on the left.

    (person.personAge()).isGreaterThan18()
    ((a.op1()).op2()).op3()

In this example, the other convention wouldn't typecheck:

    person.(personAge().isGreaterThan18())
           ^^^^^^^^^^^^^^^^^^^^^^^^^ personAge requires 1 arguments, 0 supplied.
*/

// Method chaining with some example functions (which take 2 arguments)
fn averageAge(people: List<Pair<String,Int>>): Float =>
    people.filter(isAdult)
          .map(personAge)
          .average()

// Note that there is no recursion in Crust.          
```

## Categories, recap

> Whenever we write $X \in A$ we mean that $X$ is in the set $A$.

As we've seen during the course, a category $C$ is constituted by the following data:

- *(objects)*        A collection of objects $C_0$,
- *(morphisms)*      For any two objects $A, B \in C_0$, a set of morphisms $C(A,B)$,
- *(identities)*     For any object $A \in C_0$, a morphism $id_A \in C(A,A)$,
- *(composition)*    For any two morphisms $f \in C(A,B), g \in C(B,C)$, a morphism $f\,;g \in C(A,C)$,

Satisfying the following conditions:

- *(identity left)*  For any morphism $f \in C(A,B)$, we have that $$f;id_B = f$$
- *(identity right)* For any morphism $f \in C(A,B)$, we have that $$id_A;f = f$$
- *(associativity)*  For any morphism $f \in C(A,B), g \in C(B,C), h \in C(C,D)$, we have that $$(f;g);h = f;(g;h)$$

Today we will focus on two specific categories, which we have seen during the lecture.

## The category `Prog` of types and Crust functions

The first category we define today is `Prog`, the category where objects are types, and morphisms are programs of Crust.

As the course progresses, we will reason on more properties of our language using category theory.

Observe that in our language **Crust** it is not possible to write a looping program. 

For today's lecture, we consider the language **Crust** assuming the following things: 
- Only `Int`, `Bool`, `String` types.
- Functions only take one argument.
- (No `List<A>`, no `Pair<A,B>`)

We will encounter these types again when talking about functors and cartesian closed categories.

> **Note**: types of programming languages are very similar to sets: if `Int` is a type, we can say that `3` has type `Int`, and similarly we can say that $3 \in \Z$ where $\Z = \{0,1,2,...,-1,-2,-3,...\}$ is the set of all integers.

## Definition of the category $\text{Prog}$.

- *(objects)*        $\text{Prog}_0$ is the collection of all the types in our current version of *Crust*.
- *(morphisms)*      Given two types `A`, `B` of *Crust*, $\text{Prog}($`A`$,$`B`) is the set of programs of *Crust* which take one argument of type `A` and have `B` as return type.

> **Note**: compared to `Prog` the category `Set` of sets and functions obviously way more objects. We only have three "sets" here, the set of integers, the set of strings, and the set with two elements, $\mathbb B = \{\texttt{true},\texttt{false}\}$. 

> **Note**: even by considering only `Int` and `Bool`, there are morphisms in set which are not represented by programs in `Prog`: there is no terminating program `def halts(code: Int): Bool` which gives `true` when the program represented by `code` terminates and `false` otherwise.

- *(identities)*     For any given type `A`, the identity morphism $\texttt{identity}_\texttt A \in C(A,B)$ is the function
    ```rust
    fn identity_a(x: A): A => x
    ```
    In other words, we define the following morphisms:
    ```rust
    fn identity_Int(x: Int): Int => x
    fn identity_Str(x: String): String => x
    fn identity_Bool(x: Bool): Bool => x
    ```

- *(composition)* For any two morphisms 
    ```rust
    fn f(x: A): B
    ```
    and
    ```rust
    fn g(x: B): C
    ```
    we define their composition to be the morphism
    ```rust
    fn comp_f_g(x: A): C => x.f().g()
    ```
    Note that we put `f` and `g` in the name of the composition morphism because they are the two names of the morphisms we compose.
    <!-- > **Note**: the program `fn<A,B,C> compose(f: Func<A,B>, g: Func<B,C>): Func<A,C>` is not even a morphism of our current version of *Crust*, since `Func<A,B>`, for now, is not a type of our programming language. -->

## Program equivalence

Now we need to check that the definitions we provided satisfy the equations of a category.

**Important:** We define equality in our category to be *program equivalence*.

> **Program equivalence:** given two types `A` and `B` two programs `fn f(x: A): B` and `fn g(x: A): B`, we say that they are *equal* (written `f = g`) when: *for every value `x` of type `A`, the two calls `f(x)` and `g(x)` return the same value*.

For example, these two programs are not *syntactically the same*!
```rust
fn addA(n: Int): Int => 4 + (n + 3)
fn addB(n: Int): Int => n + 7
```
However, they are clearly equivalent, because they always return the same value.

Similarly, these two programs are going to be defined very differently, and they are going to be compiled to different machine codes. 
```rust
fn quicksort(l: List<Int>): List<Int> => ...
fn mergesort(l: List<Int>): List<Int> => ...
```
However, they are equivalent, since they return equal values for any list `l: List<Int>`.

**How do we establish program equivalence?**

In order to say when two functions are equal we introduce the notion of *symbolic reasoning*. This is an heuristic: it works to prove equality most of the times, but sometimes a stronger argument might be needed.

> *Symbolic reasoning* to establish `f = g`:
> 1. Assume to have a "symbolic" variable `x: A` with the type of the input.
> 2. Start with the expression `f(x)` and with the expression `g(x)`.
> 3. Repeat the following rules on any of the two expressions as long as necessary:
>    1. **(Function evaluation)** *Given a function `fn f(x: A): B => ...` and a value `v: A`, we can evaluate the expression `f(v)` by taking the body of the function and replacing the variable `x` with the value `v`. For example, the expression `addA(42)` can be unfolded to `4 + (42 + 3)`.*
>    2. **(General rule.)** Apply any equivalence which is valid because of general reasons. For example, given `a, b: Int`, we can replace `a + b` with `b + a` because addition is commutative.
>    3. **(Match evaluation.)** *(Not needed for now.)* ...
>    4. **(Case analysis.)** *(Not needed for now.)* ...
> 4. Repeat step 3. until the two expressions match *syntactically*.

### Example:

`addv1 = addv2`:
```rust
  addv1(x)      (Function evaluation.)
= 4 + (x + 3)   (General rule: commutativity of addition)
= 4 + (3 + x)   (General rule: associativity of addition)
= (4 + 3) + x   (General rule: evaluation of addition)
= 7 + x        

  addv2(x)      (Function evaluation.)
= 7 + x         
```

## Checking that `Prog` satisfies the equations of a category

- *(identity right)* For any program `fn f(x: A): B`, we have that `comp_identityA_f = f`.
    *Proof.*
    ```
      comp_identityA_f(x)   (Function evaluation.)
    = x.identityA().f()     (Function evaluation.)
    = x.f()                 (General rule: method calls are just function calls.)
    = f(x)       
    ```

- *(identity left)*  For any program `fn f(x: A): B`, we have that `comp_id_identityB = f`.
    *Proof.*
    ```
      comp_f_identityB(x)   (Function evaluation.)
    = x.f().identityA()     (General rule: method calls are just function calls.)
    = identityA(x.f())      (Function evaluation.)
    = x.f()                 
    ```

- *(associativity)*  For any program `fn f(x: A): B`, `fn g(x: B): C`, `fn h(x: C): D` we have that the two programs `comp_comp_f_g_h = comp_f_comp_g_h` are equivalent.

    The signature of the two morphisms is `fn f(x: A): D`, so it makes sense to ask whether they are equivalent or not.

    *Proof.* 
    ```
      comp_comp_f_g_h(x)   (Function evaluation.)
    = x.comp_f_g().h()     (Function evaluation.)
    = (x.f().g()).h()      (General rule: convention selected for method chaining.)
    = x.f().g().h()        

      comp_f_comp_g_h(x)   (Function evaluation.)
    = x.f().comp_g_h()     (Function evaluation.)
    = (x.f()).g().h()      (General rule: convention selected for method chaining.)
    = x.f().g().h()      
    ```

# We need to add more rules to our program equivalence.

>    3. **(Match evaluation.)** *When given a `match v with ...` expression on a concrete value `v: A`, we can reduce the entire expression to the first case that matches by again doing substitution.* 
>    4. **(Case analysis.)** *We can reason on all the possible cases that a value of a type can be. If we can prove the same conclusion for all possible cases, we have covered all cases . For example, a list can either be `none()` or be `cons(a, as)` for some value `a` and `as`.*

# The category of partial functions `ParProg`.

We want to capture the idea that functions can either return a concrete value or fail and return no output. We can do this by defining a new structure that can contain a value of be empty. (You can think of it like a list that can be empty or it can have a single value.)

```rust
type Maybe<A> = none()
              | some(A)

fn giveAnswer(x: Maybe<Int>): Int =>
    match x with
    | none() => 42
    | some(v) => v + 42

fn divide(a: Int, b: Int): Maybe<Int> =>
    if b == 0 then
        none()
    else
        some(a / b) // This will never produce an error, so this is a valid Crust program.
```

Let's define the category `ParProg` of types and partial functions.

- *(objects)*        $\text{ParProg}_0$ is the collection of all the types in our current version of *Crust*.
- *(morphisms)*      Given two types `A`, `B` of *Crust*, the set $\text{ParProg}($`A`$,$`B`) is the set of programs of *Crust* which take one argument of type `A` and have `Maybe<B>` as return type.
  > Note that equality of morphisms is the same as before.
- *(identities)*     For any given type `A`, the identity morphism $\texttt{identity}_\texttt A \in C(A,B)$ is the function
    ```rust
    fn identity_A(x: A): Maybe<A> => some(x)
    ```
    In other words, we define the following morphisms:
    ```rust
    fn identity_Int(x: Int): Maybe<Int> => some(x)
    fn identity_Str(x: String): Maybe<String> => some(x)
    fn identity_Bool(x: Bool): Maybe<Bool> => some(x)
    ```

- (composition) For any two morphisms 
    ```rust
    fn f(x: A): Maybe<B>
    ```
    and
    ```rust
    fn g(x: B): Maybe<C>
    ```
    we define their composition to be the morphism
    ```rust
    fn comp_f_g(x: A): Maybe<C> => 
        match x.f() with
        | none() => none()
        | some(v) => v.g()
    ```
Let's check that the identities hold.    

- *(identity right)* For any program `fn f(x: A): Maybe<B>`, we have that `comp_identityA_f = f`.
    *Proof.*
    ```rust
      comp_identityA_f(x)       (Function evaluation.)
    = match x.identityA() with  (Function evaluation.)
      | none() => none()
      | some(v) => v.f()   
    = match some(x) with        (Match evaluation.)
      | none() => none()
      | some(v) => v.f() 
    = x.f()                   
    ```

- *(identity left)*  For any program `fn f(x: A): Maybe<B>`, we have that `comp_id_identityB = f`.
    *Proof.*
    ```rust
      comp_f_identityB(x)   (Function evaluation.)
    = match x.f() with 
      | none() => none() 
      | some(v) => v.identityB() 

    Let's reason by cases on what x.f() evaluates to.

    Case 1. Case x.f() = none().  
        = match none() with           (Match evaluation)
          | none() => none() 
          | some(v) => v.identityB() 
        = none()                      (Assumption)
        = x.f()

        Therefore, it is equal to the value of f(x).

    Case 2. Case x.f() = some(w) for some value w: B.
        = match some(w) with          (Match evaluation)
          | none() => none() 
          | some(v) => v.identityB() 
        = w.identityB()               (Assumption)
        = some(w)
        = x.f()

        Therefore it is equal to the value of f(x).
    ```

- *(associativity)*  For any program `fn f(x: A): Maybe<B>`, `fn g(x: B): Maybe<C>`, `fn h(x: C): Maybe<D>` we have that the two programs `comp_comp_f_g_h = comp_f_comp_g_h` are equivalent.

    The signature of the two morphisms is `fn f(x: A): D`, so it makes sense to ask whether they are equivalent or not.

    *Proof.* 
    
    ```rust
      comp_comp_f_g_h(x)               (Function evaluation.)
    = match x.comp_f_g() with          (Function evaluation.)
      | none() => none()
      | some(v) => v.h()     
    = match (match x.f() with
            | none() => none()
            | some(v) => v.g()) with
      | none() => none()
      | some(v) => v.h() 

      comp_f_comp_g_h(x)               (Function evaluation.)
    = match x.f() with                 (Function evaluation.)
      | none() => none()
      | some(v) => v.comp_g_h()     
    = match x.f() with                 (Function evaluation.)
      | none() => none()
      | some(v) => match v.g() with    (Function evaluation.)
                   | none() => none()
                   | some(v) => v.h()

    Consider all possible cases on what x.f() evaluates to.
    Case A. Case x.f() = none().  
    
      The first expression evaluates like this:
        = match (match x.f() with
                | none() => none()
                | some(v) => v.g()) with
        | none() => none()
        | some(v) => v.h() 
        = match (match none() with
                | none() => none()
                | some(v) => v.g()) with
        | none() => none()
        | some(v) => v.h() 
        = match none() with
        | none() => none()
        | some(v) => v.h() 
        = none()

      The second expression evaluates like this:
      
        = match x.f() with                
        | none() => none()
        | some(v) => match v.g() with   
                     | none() => none()
                     | some(v) => v.h()
        = match none() with                
        | none() => none()
        | some(v) => match v.g() with   
                     | none() => none()
                     | some(v) => v.h()
        = none()

      So the functions agree in this case.
    
    Case 2. Case x.f() = some(w) for some value w: B.
        
        The first expression evaluates like this:

        = match (match x.f() with
                | none() => none()
                | some(v) => v.g()) with
        | none() => none()
        | some(v) => v.h() 
        = match (match some(w) with
                | none() => none()
                | some(v) => v.g()) with
        | none() => none()
        | some(v) => v.h() 
        = match w.g() with
        | none() => none()
        | some(v) => v.h() 
        
      The second expression evaluates like this:
        
        = match x.f() with                
        | none() => none()
        | some(v) => match v.g() with   
                     | none() => none()
                     | some(v) => v.h()
        = match some(w) with                
        | none() => none()
        | some(v) => match v.g() with   
                     | none() => none()
                     | some(v) => v.h()
        = match w.g() with   
        | none() => none()
        | some(v) => v.h()
                
      So the functions agree in this case as well.
    ```

# The unit type

```rust
type Unit = unit()

fn toUnit_Int(a: Int): Unit => unit()
fn toUnit_Str(a: Str): Unit => unit()
fn toUnit_Bool(a: Bool): Unit => unit()

// Alternatively, we could have defined it uniformly with a parametric schema:

fn<A> toUnit(a: Int): Unit => unit()

fn<A> justAnswer(a: Unit): Int => 
    match a with
    | unit() => 42
```

Notice the following:

> Given any type `A`, there is a morphism `fn toUnit(x: A): Unit`. Moreover, any morphism `fn f(a: A): Unit` is equivalent to `toUnit`.

*Proof.*

The morphism is `toUnit_A`. Let's assume to have another morphism `f` and let's see that it's equal to `toUnit_A`.

```
  f(a)       (General rule: there is no other option for `Unit`.)
= unit()         

  toUnit(x)  (Function evaluation.)
= unit()
```

# The Empty type

```rust
// No constructor!
type Empty 

fn fromEmpty_Int(a: Empty): Int => match a with 
fn fromEmpty_Str(a: Empty): Str => match a with 
fn fromEmpty_Bool(a: Empty): Bool => match a with 

// Alternatively, we could have defined it with a parametric schema:

fn<A> fromEmpty(a: Empty): A => 
  match a with 

/*
This is a valid Crust program!
The `match` construct needs one case for each possible way of constructing the type that it's matching on. In this case, there are no possible ways of constructing something of type Empty, so it is okay to simply put no cases in our match expression.
Note that the return type is allowed to be any type A because no concrete value needs to be provided, so it works with any type.
*/
```

Let's prove the following:

> Given any type `A`, there is a morphism `fn fromEmpty_A(x: Empty): A`. Moreover, any morphism `fn f(a: Empty): A` is equivalent to `fromEmpty_A`.

The morphism is `fromEmpty_A`. Let's assume to have another morphism `f` and let's see that it's equal to `fromEmpty_A`.

*Proof.*
```
Recall the definition of program equivalence.

> **Program equivalence:** given two types `A` and `B` two programs `fn f(x: A): B` and `fn g(x: A): B`, we say that they are *equal* (written `f = g`) when: *for every value `x` of type `A`, the two calls `f(x)` and `g(x)` return the same value*.

Therefore, we need to check that for every value `x` of type `Empty` the values `fromEmpty_A(x)` and `f(x)` are the same.

There is no value of type `Empty`, therefore we have already checked that in every possible case the values of the two functions is the same, so we are done.
```

# `Unit` is not a terminal object in `ParProg`.

> **Unit is NOT the terminal object of `Prog`.** Given any type `A`, there is a morphism `fn toUnit(x: A): Maybe<Unit>`. Moreover, *NOT EVERY* morphism `fn f(a: A): Maybe<Unit>` is equivalent to `toUnit`; that is, there are at least two morphisms which are not equivalent.

*Proof.*

The two morphisms are the following:

```
fn toUnit1(x: A): Maybe<Unit> => some(unit())
fn toUnit2(x: A): Maybe<Unit> => none()
```

They are clearly not equivalent.

# `Empty` is the initial object in `ParProg`.

