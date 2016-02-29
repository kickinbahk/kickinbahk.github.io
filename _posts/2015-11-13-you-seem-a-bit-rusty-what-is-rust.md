---
layout: post
title: You Seem a Bit Rust-y (What is Rust?)
tags:
- Rust
- Programming
- Coding
- Learning
---
Rust is a new language from Mozilla. It has evolved into a systems or low level programming language and recently turned 1.0 (Summer of '15.) You can use the safe version of Rust or the Nightly build. The Nightly build has functions it is which can be used but may not protect the data in the same way as the safe build. Basically, there are some features which are still being tested out. I would recommend starting with the stable build when first testing Rust.

Here are some of the factors I often see the language being touted for.

Rust allows for concurrency to allow doing work with multiple threads. This allows your program to be very quick as it can handle processes at the same time, rather than waiting for each task to complete.

It guarantees memory safety and avoids data races. Simply, data races are when you have multiple threads attempting to access and change the same data in memory (like a variable.) If the thread is expecting one value but receives another, it can cause problems. Rust accomplishes this by making its types immutable, which means the value once assigned cannot be changed. This is sometimes referred to as "ownership" and assigning one variable to another is often referred to as "borrowing."

Rust's compiler provides fairly detailed descriptions of what error was caused. It attempts to be clear with the errors that may crop up.

Rust is not garbage collected and has a small runtime so it can be embedded into other languages. This means that I can use Rust to do a specific job and embed that into my Ruby project with a simple gem install.

Rust uses type inference for variables. Basically, when writing Rust code there is not a need to declare a variable's type, as in C++, Java, or C#. Rather the complier infers the type of the variable in a Ruby, Python, or Javascript fashion. I think this is a reason it feels a lot like Ruby, even with the brackets and semi-colons. However, Rust variables can use something called "pattern matching", which is extremely powerful. I will touch on this more in a later post.

Lastly, the Rust community is exceptional. I have not once been looked down upon or made to feel like the questions I asked weren't valid in the IRC or on the forums.

I think Rust is a language everyone should at least try and see how they like it and what it may solve for them.

You can see a full list of Rust's capabilities by going to its [website.](https://rust-lang.org)
