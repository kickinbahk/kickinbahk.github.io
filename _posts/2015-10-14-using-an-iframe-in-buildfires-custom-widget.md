---
layout: post
title: Using an iFrame in BuildFire's Custom widget
tags:
- HTML
- CSS
- Coding
- Buildfire
- Programming
---
This is a simple problem that I have seen many get stuck with.

If you use an iframe in the custom widget that is meant to be scrollable; it is “taller” that the device’s length, you will see that it does not scroll. You are stuck to seeing only what fits in the device’s screen.

The way to fix this is to use the ‘overflow’ css property.

By default the overflow property is set to ‘none’ which keeps it from moving like you see.

If we tell it to use ‘scroll’ instead, it will allow the screen to scroll the length of the page.

You implement the overflow property in one of two ways.

<br>
{% highlight html %}
  <iframe src="kickinbahk.com" width="307" height="477" frameborder="0" allowfullscreen=“allowfullscreen” overflow="scroll"></iframe>
{% endhighlight %}
<br>

This is inline CSS. It is inserted straight into the HTML tag.

<br>

The other option is to use a CSS selector:

{% highlight css %}
  body {
    overflow: scroll;
  }
{% endhighlight %}
<br>

This would be put into the CSS section of the custom widget. You would use this if you are using many tags and more complex HTML.

Both ways should then allow the rendered code so be scrollable once it starts to go off screen.

<br>

