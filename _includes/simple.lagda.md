I have recently decided to iron all the kinks of a few proofs left as exercises in Bart Jacobs' book "Categorical logic and type theory", by proving them in agda (and in particular, using <a href="https://github.com/agda/agda-categories">agda-categories</a>).

The first obligatory step is some boilerplate code: let's keep this to a minimum.

{% highlight agda %}
module simple where

open import Categories.Category.Cartesian.Bundle
open import Categories.Category.CartesianClosed.Canonical
open import Categories.Category.Core
open import Data.Product
open import Function using (const)
open import Level
open import Relation.Binary.Core using (Rel)
open import Relation.Binary.PropositionalEquality
open Relation.Binary.PropositionalEquality.≡-Reasoning

private
  variable
    a b c : Level

-- I have to redefine function composition. A rename or this will do:
_⋆_ : ∀ {A : Set a} {B : A → Set b} {C : {x : A} → B x → Set c} →
      (∀ {x} (y : B x) → C y) → (g : (x : A) → B x) →
      ((x : A) → C (g x))
f ⋆ g = λ x → f (g x)
{% endhighlight %}

and next, the terminal type, and a lemma that says it has only one term (some proofs of uniqueness require extensionality plus this lemma):


{% highlight agda %}
data t : Set where
 ⊤ : t

!-unique-lemma : ∀ (x : t) → ⊤ ≡ x
!-unique-lemma ⊤ = refl

postulate
 -- we need to postulate extensionality...
 extensionality : ∀ {A B : Set} {f g : A → B} → (∀ (x : A) → f x ≡ g x) → f ≡ g

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
{% endhighlight %}

Everything is quite trivial here; the comments I added clarify how the various records have to be filled. Probably one of the most useful tricks to learn here, is the way in which the last field was filled: I didn't know about the existence of this when I first opened this file, and it really saved me hours.

Now, one of the first interesting examples in Jacobs' book is that of a *simple fibration* over a category 𝔹 with finite products (let's say, all finite limits, and for fibration-theory purposes, even a *canonical* choice thereof).

Given such a category 𝔹, the category s(𝔹) is defined having

1. objects the pairs `(I , X)` of objects in 𝔹;
2. morphisms `(I , X) → (J , Y)` are pairs of morphisms `u : I → J` and $f : I × X → Y`.

the identity is the "trivial" pair made by the couple `(id {I} , proj₂)` (the projection on the second factor). The composition of `(u , f)` and `(v , g)` is defined as `(v ∘ u , g ∘ ⟨ u ∘ proj₁ , f ⟩)`, and all the other choices are either forced by this, or straightforward (for example, `_≈_` is just `_≡_`).

Fortunately, agda needs just a little bit of help to figure everything out.


{% highlight agda %}
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
{% endhighlight %}

Now, `s(𝔹)` comes equipped with an obvious forgetful functor to 𝔹, projecting on the first component: the object of interest for Jacobs' is the fiber of this functor over a certain `I ∈ 𝔹`. Such a category can be characterised in many ways; the most elegant is: it is a certain Kleisli category.


{% highlight agda %}
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
   rresp : {A B C : Set} {f h : B × I → C} {g i : A × I → B} → f ≡ h → g ≡ i → (f · g) ≡ (h · i)
   rresp {A} {B} {C} {f} {h} {g} {i} x y = trans (cong (λ t → t · g) x) (cong (_·_ h) y)
{% endhighlight %}

Now, here's the proof that each fiber of a simple fibration is cartesian.

It is moderately painful, because the record `CartesianCategory` has other records nested inside...


{% highlight agda %}
thm : ∀ {I : Set} → CartesianCategory (suc zero) zero zero
thm {I} =
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
{% endhighlight %}

but with a little help from our friend `λ {refl ... refl → refl}`, we did it!

Mimicking the same argument, just not restricted to the fiber at `I`, one proves that the entire s(𝔹) is a cartesian category.


{% highlight agda %}
thm2 : CartesianCategory (suc zero) zero zero
thm2 = record
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
     bang-uniq :
      {A : Category.Obj simple}
      -------------------------
      (f : (simple Category.⇒ A) (t , t)) →
      --------------------------------------
      (simple Category.≈ (const ⊤ , const ⊤)) f
     bang-uniq {I , X} (u , k) =
      cong₂ Data.Product._,_
       (extensionality (λ x → !-unique-lemma (u x)))
       (extensionality (λ x → !-unique-lemma (k x)))
     ⟨_,_⟩ :
      {A B C : Set × Set} →
      (simple Category.⇒ C) A →
      (simple Category.⇒ C) B →
      (simple Category.⇒ C) ((proj₁ A × proj₁ B) , (proj₂ A × proj₂ B))
     ⟨_,_⟩ {A0 , A1} {B0 , B1} {C0 , C1} (u , h) (v , k) =
      (λ x → (u x) , (v x)) , λ x → (h x) , (k x)
{% endhighlight %}

...the biggest pain was to indent the code in a logical way.

And now for the proof that each fiber of `U : s(𝔹) → 𝔹` is cartesian closed:


{% highlight agda %}
thm3 : {I : Set} → CartesianClosed (fiber-of-simple {I})
thm3 {I} =
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
  evev : {B A : Category.Obj (fiber-of-simple {I})} →
   (fiber-of-simple {I} Category.⇒ ((A → B) × A)) B
  evev ((f , a) , i) = f a
{% endhighlight %}