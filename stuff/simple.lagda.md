# Fibrations in agda

I have recently decided to iron all the kinks of a few proofs left as exercises in Bart Jacobs' book _Categorical logic and type theory_, by proving them in agda (and in particular, using <a href="https://github.com/agda/agda-categories">agda-categories</a>).

The first obligatory step is some boilerplate code: let's keep this to a minimum.
```
module simple {I : Set} where

open import Categories.Category
open import Categories.Category.Cartesian.Bundle
open import Categories.Category.CartesianClosed.Canonical
open import Categories.Category.Core
open import Data.Product
open import Function using (const)
open import Level
open import Relation.Binary.Core using (Rel)
open import Relation.Binary.PropositionalEquality
open Relation.Binary.PropositionalEquality.≡-Reasoning
open import Categories.Functor
open import Categories.Functor.Bifunctor
open import Categories.Comonad
open import Categories.Category.Construction.CoEilenbergMoore
open import Categories.NaturalTransformation as NT using (ntHelper)
open import Categories.NaturalTransformation.NaturalIsomorphism hiding (refl; sym; trans)
import Categories.Category.Equivalence as E

private
  variable
    a b c : Level

-- I have to redefine function composition. A rename or this will do:
_⋆_ : ∀ {A : Set a} {B : A → Set b} {C : {x : A} → B x → Set c} →
      (∀ {x} (y : B x) → C y) → (g : (x : A) → B x) →
      ((x : A) → C (g x))
f ⋆ g = λ x → f (g x)
```
and next, the terminal type, and a lemma that says it has only one term (some proofs of uniqueness require extensionality plus this lemma):
```
data t : Set where
 ⊤ : t

!-unique-lemma : ∀ (x : t) → ⊤ ≡ x
!-unique-lemma ⊤ = refl

postulate
 -- we need to postulate extensionality...
 extensionality : ∀ {A B : Set} {f g : A → B} →
  (∀ (x : A) → f x ≡ g x) → f ≡ g

-- and a proof that the category of Sets is indeed a category.
SetC : Category (suc zero) zero zero
-- a category depends on three levels:
-- 1. where the objects live,
-- 2. where the hom-set(oid)s live,
-- 3. and where the category lives.
SetC =
 record
  { Obj = Set
  -- the class of objects
  ; _⇒_ = λ x y → x → y
  -- the relation defining the hom-setoids.
  ; _≈_ = _≡_
  -- def of equality in the homs
  ; id = λ x → x
  -- the identity function
  ; _∘_ = λ f g a → f (g a)
  -- category composition
  ; assoc = refl
  ; sym-assoc = refl
  -- two proofs of associativity: this makes (C^op)^op
  -- syntactically equal to C, which is nice
  ; identityˡ = refl
  ; identityʳ = refl
  ; identity² = refl
  -- proofs that id . f = f = f . id and id . id = id
  ; equiv = record { refl = refl ; sym = sym ; trans = trans }
  -- proof that _≈_ is an equivalence relation...
  ; ∘-resp-≈ = λ {refl refl → refl}
  -- and a congruence with respect to composition.
  }
```
Everything is quite trivial here; the comments I added clarify how the various records have to be filled. Probably one of the most useful tricks to learn here, is the way in which the last field was filled: I didn't know about the existence of this when I first opened this file, and it really saved me hours.

Now, one of the first interesting examples in Jacobs' book is that of a *simple fibration* over a category 𝔹 with finite products (let's say, all finite limits, and for fibration-theory purposes, even a *canonical* choice thereof).

Given such a category 𝔹, the category s(𝔹) is defined having

1. objects the pairs `(I , X)` of objects in 𝔹;
2. morphisms `(I , X) → (J , Y)` are pairs of morphisms `u : I → J` and `f : I × X → Y`.

The identity is the "trivial" pair made by the couple `(id {I} , proj₂)` (the projection on the second factor). The composition of `(u , f)` and `(v , g)` is defined as `(v ∘ u , g ∘ ⟨ u ∘ proj₁ , f ⟩)`, and all the other choices are either forced by this, or straightforward (for example, `_≈_` is just `_≡_`).

Fortunately, agda needs just a little bit of help to figure everything out.
```
simple : Category (suc zero) zero zero
simple =
 record
  -- structure
  { Obj = Set × Set
  ; _⇒_ = _⇒_
  ; _≈_ = _≡_
  ; id = (λ z → z) , proj₁
  ; _∘_ = _∘_
  -- properties
  ; assoc = refl
  ; sym-assoc = refl
  ; identityˡ = refl
  ; identityʳ = refl
  ; identity² = refl
  -- whew, they're all trivial!
  ; equiv = record { refl = refl ; sym = sym ; trans = trans }
  ; ∘-resp-≈ = λ {refl refl → refl}
  }
  where
  _⇒_ : Rel (Set × Set) zero
  (i , x) ⇒ (j , y) = (i → j) × (x × i → y)
  _∘_ : {A B C : Set × Set} → B ⇒ C → A ⇒ B → A ⇒ C
  _∘_ {i , x} {j , y} {_} (u , f) (v , g) =
   (λ t → u (v t)) , λ t → f (g t , v (proj₂ t))
```
Now, `s(𝔹)` comes equipped with an obvious forgetful functor to 𝔹, projecting on the first component: the object of interest for Jacobs' is the fiber of this functor over a certain `I ∈ 𝔹`. Such a category can be characterised in many ways; the most elegant is: it is a certain Kleisli category.
```
fiber-of-simple : {I : Set} → Category (suc zero) zero zero
fiber-of-simple {I} =
 record
  { Obj = Set
  ; _⇒_ = λ X Y → X × I → Y
  ; _≈_ = _≡_
  ; id = proj₁
  ; _∘_ = _·_ -- this is the Kleisli composition
  ; assoc = refl
  ; sym-assoc = refl
  ; identityˡ = refl
  ; identityʳ = refl
  ; identity² = refl
  ; equiv = record { refl = refl ; sym = sym ; trans = trans }
  ; ∘-resp-≈ = rresp
  }
  where
   _·_ : {I : Set} {A B C : Set} → (B × I → C) → (A × I → B) → A × I → C
   _·_ {I} f g (x , i) = f (g(x , i) , i)
   rresp : {A B C : Set} {f h : B × I → C} {g i : A × I → B} →
    f ≡ h → g ≡ i → (f · g) ≡ (h · i)
   rresp {A} {B} {C} {f} {h} {g} {i} x y =
    trans (cong (λ t → t · g) x) (cong (_·_ h) y)
```
The proof that reindexing functors exist:
```
reindex : {I J : Set} →
 (u : I → J) →
 Functor (fiber-of-simple {J}) (fiber-of-simple {I})
reindex {I} {J} u = record
  { F₀ = F0
  ; F₁ = F1
  ; identity = refl
  ; homomorphism = refl
  ; F-resp-≈ = λ {refl → refl}
  }
  where
  open Category (fiber-of-simple {J})
  F0 : Obj → Set
  F0 X = X × J
  F1 : {A B : Obj} →
   (fiber-of-simple {J}) Categories.Category.[ A , B ] →
   (fiber-of-simple {I}) Categories.Category.[ F0 A , F0 B ]
  F1 {A} {B} u ((a , j) , i) = u (a , j) , j
```
Now, here's the proof that each fiber of a simple fibration is cartesian.

It is moderately painful, because the record `CartesianCategory` has other records nested inside...
```
fib-of-simple-cartesian : ∀ {I : Set} →
 CartesianCategory (suc zero) zero zero
fib-of-simple-cartesian {I} =
 record
  { U = fiber-of-simple {I}
  ; cartesian =
    record
     { terminal =
       record { ⊤ = t
           ; ⊤-is-terminal =
             record
              { ! = const ⊤
              ; !-unique =
                λ f → extensionality (λ x → !-unique-lemma (f x))
              }
           }
     ; products =
       record
        { product = λ {A} {B} →
          record
           { A×B = A × B
           ; π₁ = λ x → proj₁ (proj₁ x)
           ; π₂ = λ x → proj₂ (proj₁ x)
           ; ⟨_,_⟩ = λ f g t → f t , g t
           ; project₁ = refl
           ; project₂ = refl
           ; unique = λ {refl refl → refl}
           } } } }
```
but with a little help from our friend `λ {refl ... refl → refl}`, we did it!

Mimicking the same argument, just not restricted to the fiber at `I`, one proves that the entire s(𝔹) is a cartesian category.
```
simple-cartesian : CartesianCategory (suc zero) zero zero
simple-cartesian = record
 { U = simple
 ; cartesian = record
   { terminal = record
    { ⊤ = t , t
    ; ⊤-is-terminal =
      record { ! = const ⊤ , const ⊤
             ; !-unique = bang-uniq
             } }
   ; products = record { product = λ {A} {B} → record
    { A×B = (proj₁ A × proj₁ B) , (proj₂ A × proj₂ B)
    ; π₁ = proj₁ , λ x → proj₁ (proj₁ x)
    ; π₂ = proj₂ , (λ x → proj₂ (proj₁ x))
    ; ⟨_,_⟩ = ⟨_,_⟩
    ; project₁ = refl
    ; project₂ = refl
    ; unique = λ {refl refl → refl}
    } } } }
    where
     open Category simple
     bang-uniq :
      {A : Obj}
      -------------------------
      (f : A ⇒ (t , t)) →
      --------------------------------------
      (simple Category.≈ (const ⊤ , const ⊤)) f
     bang-uniq {I , X} (u , k) =
      cong₂ Data.Product._,_
       (extensionality (λ x → !-unique-lemma (u x)))
       (extensionality (λ x → !-unique-lemma (k x)))
     ⟨_,_⟩ :
      {A B C : Set × Set} →
      C ⇒ A →
      C ⇒ B →
      C ⇒ ((proj₁ A × proj₁ B) , (proj₂ A × proj₂ B))
     ⟨_,_⟩ {A0 , A1} {B0 , B1} {C0 , C1} (u , h) (v , k) =
      (λ x → (u x) , (v x)) , λ x → (h x) , (k x)
```
...the biggest pain was to indent the code in a logical way.

And now for the proof that each fiber of `U : s(𝔹) → 𝔹` is cartesian closed:
```
fib-of-simple-ccc : {I : Set} → CartesianClosed (fiber-of-simple {I})
fib-of-simple-ccc {I} =
 record
  { ⊤ = t
  ; _×_ = _×_
  ; ! = λ x → ⊤
  ; π₁ = proj₁ ⋆ proj₁
  ; π₂ = proj₂ ⋆ proj₁
  ; ⟨_,_⟩ = λ f g ci → (f ci) , (g ci)
  ; !-unique = λ f → extensionality λ x → !-unique-lemma (f x)
  ; π₁-comp = refl
  ; π₂-comp = refl
  ; ⟨,⟩-unique = λ {refl refl → refl}
  ; _^_ = λ A B → B → A
  ; eval = evev
  ; curry = λ f ci a → f (((proj₁ ci) , a) , (proj₂ ci))
  ; eval-comp = refl
  ; curry-resp-≈ = λ {refl → refl}
  ; curry-unique = λ {refl → refl}
  }
  where
  open Category (fiber-of-simple {I})
  evev : {B A : Obj} → ((A → B) × A) ⇒ B
  evev ((f , a) , i) = f a
```

Another interesting exercise is the following: for every category with finite products, the categories `𝔹//I` and `𝔹/I` admit equivalent presentations as, respectively, the coKleisli and the coEilenberg-Moore categories of the comonad `_ × I`.

First, let's summon the `Comonad` module:

```
open import Categories.Comonad
```
and prove that the functor `_ × I` is a comonad, providing all the structure.
```
─×_ : (I : Set) → Comonad SetC
─× I =
 record
  { F = F {I}
  ; ε = eps
  ; δ = comul
  ; assoc = refl
  ; sym-assoc = refl
  ; identityˡ = refl
  ; identityʳ = refl
  }
  where
  F : {I : Set} → Endofunctor SetC
  F {I} =
   record
    { F₀ = λ A → A × I
    ; F₁ = λ f x → (f (proj₁ x)) , (proj₂ x)
    ; identity = refl
    ; homomorphism = refl
    ; F-resp-≈ = λ {refl → refl}
    }
  eps : NT.NaturalTransformation (F {I}) Categories.Functor.id
  eps =
   record
    { η = λ X x → proj₁ x
    ; commute = λ f → refl
    ; sym-commute = λ f → refl }
  comul : NT.NaturalTransformation (F {I}) ((F {I}) ∘F (F {I}))
  comul =
   record
    { η = λ X x → x , proj₂ x
    ; commute = λ f → refl
    ; sym-commute = λ f → refl }
```
Easy as co-pie! Now, where is the `coKleisli` module...? Oh, you say you don't have it yet.

[...a few weeks of frantic, painful agda sessions later...]

tada!

```
open import Categories.Category.Construction.CoKleisli

fiber-of-simple≃CoKleisli─×I : {I : Set} →
  E.StrongEquivalence (fiber-of-simple {I}) (CoKleisli (─× I))
fiber-of-simple≃CoKleisli─×I = record
 { F = F
 ; G = G
 ; weak-inverse = winv
 }
 where
 F : {I : Set} → Functor (fiber-of-simple {I}) (CoKleisli (─× I))
 F = record
      { F₀ = λ A → A
      ; F₁ = λ f → f
      ; identity = refl
      ; homomorphism = refl
      ; F-resp-≈ = λ x → x
      }
 G : {I : Set} → Functor (CoKleisli (─× I)) (fiber-of-simple {I})
 G = record
      { F₀ = λ z → z
      ; F₁ = λ f → f
      ; identity = refl
      ; homomorphism = refl
      ; F-resp-≈ = λ x → x
      }
 winv : {I : Set} → E.WeakInverse (F {I}) G
 winv = record
  { F∘G≈id = niHelper (record
    { η = λ X → proj₁
    ; η⁻¹ = λ X → proj₁
    ; commute = λ f → refl
    ; iso = λ X → record { isoˡ = refl ; isoʳ = refl } })
  ; G∘F≈id = niHelper (record
    { η = λ X x → proj₁ x
    ; η⁻¹ = λ X x → proj₁ x
    ; commute = λ f → refl
    ; iso = λ X → record { isoˡ = refl ; isoʳ = refl } })
  }

```

The meat of the proof is in proving that the ordinary slice `𝔹/I` is the coEilenberg-Moore category of the `-×I` comonad:

```
open import Categories.Category.Construction.CoEilenbergMoore
open import Categories.Category.Slice SetC

Slice≃CoEilenbergMoore─×I : {I : Set} →
  E.StrongEquivalence (Slice I) (CoEilenbergMoore (─× I))
Slice≃CoEilenbergMoore─×I {I} = record
  { F = F
  ; G = G
  ; weak-inverse = winv
  }
  where
  F : Functor (Slice I) (CoEilenbergMoore (─× I))
  F = record
   { F₀ = λ { (sliceobj {Y} arr) →
     record { A = Y
            ; coaction = λ z → z , arr z
            ; commute = refl
            ; identity = refl } }
   ; F₁ = λ { (slicearr {h} Δ) → record
     { arr = λ x → h x
     ; commute = cong (λ x x₁ → h x₁ , x x₁) Δ  } }
   ; identity = refl
   ; homomorphism = refl
   ; F-resp-≈ = λ { refl → refl }
   }
  G : Functor (CoEilenbergMoore (─× I)) (Slice I)
  G = record
   { F₀ = λ { record
     { A = A
     ; coaction = coaction
     ; commute = commute
     ; identity = identity
     } → sliceobj λ x → proj₂ (coaction x) }
   ; F₁ = λ { record
     { arr = arr
     ; commute = commute
     } → slicearr {h = arr} (cong (λ x x₁ → proj₂ (x x₁)) commute) }
   ; identity = refl
   ; homomorphism = refl
   ; F-resp-≈ = λ { refl → refl }
   }
  winv : E.WeakInverse F G
  winv = record
   { F∘G≈id = niHelper (record
     { η = λ { record
       { A = A
       ; coaction = coaction
       ; commute = commute
       ; identity = identity
       } → record { arr = λ a → proj₁ (coaction a)
                  ; commute = cong (λ x x₁ → coaction (x x₁)) identity } }
     ; η⁻¹ = λ { record
       { A = A
       ; coaction = coaction
       ; commute = commute
       ; identity = identity
       } → record { arr = λ z → z
                  ; commute =
                    cong (λ x x₁ → x x₁ , proj₂ (coaction x₁) ) (sym identity) } }
     ; commute = λ { record
       { arr = arr
       ; commute = commute
       } → cong (λ x x₁ → proj₁ (x x₁)) commute }
     ; iso = λ { record
       { A = A
       ; coaction = coaction
       ; commute = commute
       ; identity = identity
       } → record { isoˡ = identity ; isoʳ = identity } }
     })
   ; G∘F≈id = niHelper (record
     { η = λ arr → slicearr refl
     ; η⁻¹ = λ obj → slicearr refl
     ; commute = λ arr → refl
     ; iso = λ X → record { isoˡ = refl ; isoʳ = refl }
     })
   }
```