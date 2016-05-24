---
layout: post
title: Making Custom Snippets in Atom
tags:
- Atom
- Programming
- Editor
- Snippets
---
![Atom logo](./assets/images/atom-custom-snippets/atom-custom-snippets.png)
<br>

I have been using atom for about a month now. It has quickly become my editor of choice after using Emacs for most of my coding career. Coming from an editor like Emacs, I am used to having the option to customize almost anything I would like to and as I have used Atom, I have looked to make some of the customizations that I like to use.

## Snippets
One of these customizations are 'Snippets'. They are basically autocomplete for code, similar to how [TextExpander](http://textexpander.com) works. Not only were there a couple custom snippets I wanted to add, but I also wanted to change some of the default options since I used [Standard](http://standardjs.com/) for formatting my Javascript and end up having to remove a lot of semi-colons from the default Javascript snippets to stay within the style.

## Using Snippets

### By Searching All Available
To use snippets, you simply can hit `⌥ + ⇧ + s` and a list of all available snippets for that file type (javascript, html, ruby, ect) will appear. You can scroll through the list or you can search for something specifically.

### By Shortcut
Most snippets have a shortcut associated with them. You can see this next to the name of the snippet when you search for it or you may see it as an autocomplete option as you are typing some code. This is my preferred usage of snippets. Let's see one of these in action:
1. Open up a javascript (.js) file.
2. Type `expmod` in the file. When you see the autocomplete show, hit enter on that shortcut.
3. You should see it auto fill with:

{% highlight javascript %}
    module.exports = name;
{% endhighlight %}

Pretty cool right? Lets try one more:
1. In the same file
2. Type `req` at the top. When you see the autocomplete show, hit enter.
3. You should see it auto fill with:

{% highlight javascript %}
    require('module');
{% endhighlight %}

Again, really cool. It even places our cursor in the proper place to begin editing the code and adding the name we need.

This can even be for multi-line code snippets:

1. In the same file
2. Type `iife` at the top. When you see the autocomplete show, hit enter.
3. You should see it auto fill with:

{% highlight javascript %}
  (function() {
    'use strict';

  }());
{% endhighlight %}

## Snippet Format

You may want to make your own snippets for cases that are not included by the default package. I, however, wanted to make some snippets that overode the default ones; not including the semi-colons to fit [Standard](http://standardjs.com/)'s format. You can make custom snippets to do either.

Custom snippets are easy enough to make, however the documentation on doing so is missing a couple steps, so I figured writing down the current way to do it would be beneficial.

When you are in Atom click the dropdown menu and you should see an option for 'snippets'.

![Atom settings drop down](./assets/images/atom-custom-snippets/drop-down.png)

When you open this up, you will see the template for creating your own snippet. It should look something like:

{% highlight json %}
'.source.coffee':
   'Console log':
     'prefix': 'log'
     'body': 'console.log $1'
{% endhighlight %}

Let's break this down...`.source.coffee` is the package name that you want this to apply to (i.e. javascript, ruby, ect). `Console log` is the name of the snippet. The shortcut we will use it denoted by the `prefix`. Lastly, the `body` is what will actually be 'filled' by the shortcut.

## Making our own Snippets

### Find the Package Name
When you make your own snippet, you need to first know the package/packages you want the snippet to apply to.

###### Note: To my knowledge, you cannot declare multiple packages in the snippets, you need to make a new snippet for each package you want it for.

#### To find the package name:

1. Click on `Preferences` in the dropdown
2. In the `Settings` tab that appears, choose `Packages`
3. Under `Installed Packages`, type 'languages'. This will bring up a list of all the languages you have installed.
![Packages list](./assets/images/atom-custom-snippets/installed-packages.png)
4. Find the language you want to make a snippet for and Click `Settings`. __You can also scroll all the way down on this page to see the default snippets__
5. Part way down you will see `Scope`, this is what you want to use as the package name.

![Javascript Package Scope](./assets/images/atom-custom-snippets/package-js.png)

I want to modify the javascript default for exporting a module, so I can use `source.js`

** NOTE: Sometimes this can be different, for example the Ruby package scope: **

![Ruby Package Scope](./assets/images/atom-custom-snippets/package-ruby.png)

### Choose the Name
You will then want to choose a name for your snippet. In this case, it is pretty straight forward; I am just going to use the same name `Module Exports`.

### Choose the Shortcut
Again, since I am modifying a current package, I will just use the same name for it, `expmod`.

### Add the Body
This is what will replace the shortcut (aka: added to your file). I want it to be the same, but not include the semi-colon, `module.exports = name`

This is great, however what if we want the cursor placed where we need to type we need to make a small change. You can add `$1` and when you use the snippet, it will automatically place the cursor there for you to type. You can change the syntax slightly to `${1:name}`. This will place your cusor there, but use 'name' as a placeholder.

We can add additional numebers if there are additional areas that we need to be filled in by incrementing the syntax (`$2`... or `${2:foo}`). The entire syntax we have been doing would end up looking like:

{% highlight json %}
'.source.js':
  'Module Exports':
    'prefix': 'expmod'
    'body': 'module.exports = ${1:name}'
{% endhighlight %}

### Add a multi-line snippet
If we want the snippet to be multi-lined we need to make a simple change to the syntax. We just need to use 3 double quotes rather than single quotes. Here is the way that would look:

{% highlight json %}
'.source.js':
   'function':
     'prefix': 'newfunc'
     'body': """
      function () {
        $1
      }
     """
{% endhighlight %}

This should allow the customization of snippets you want and hopefully will speed up your coding.

###### Happy Coding!
