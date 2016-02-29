---
layout: post
title: Rust Installation
tags:
- Rust
- Programming
- Coding
---


This must be the easiest language installation I have had to do to date. Not that using homebrew is difficult, but some beginners don't love the command line.

If you go to the main page for the language, [rust-lang.org](https://rust-lang.org). You it will attempt to auto-detect the right installer for you and you can just click the "Install" button.

If you are downloading Rust to install on a different machine, or want control over which version you are getting, you can go to the [downloads](https://www.rust-lang.org/downloads.html) page instead.

Once it is downloaded, open the package and run through the wizard. On a mac, you will need to open it using the override method, by option-clicking on it or right click and choose open.

Once it finishes going through the wizard, you are ready to go!

You can confirm rust is indeed installed by opening terminal and running:

{% highlight bash %}
  $ rustc --version
  rustc 1.3.0 (9a92aaf19 2015-09-15)
{% endhighlight %}

As long as you get something returned like the second line (depending on your version), you should be good to go!
