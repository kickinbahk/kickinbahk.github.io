---
layout: post
title: Remove Smart Quotes From Evernote on Mac
tags:
- Blogging
- Coding
- Evernote
- Tools
- Programming
---

If you are blogging about code or keeping any sort of notes about the code that you write, Evernote is a great way to manage your posts.

Even though I use markdown to make my posts, I like Evernote because I can write on my phone if I find myself with a couple of minutes of down time and the changes reflect to my computer.

However, there is a problem I have found with using Evernote to display code. While I can write the code that I want in Evernote and it formats reasonably well, anytime that quotes are used they were getting replaced by "Smart Quotes."

When I had html in my markdown for the code plugin that I use, the smart quotes messed up the code. Additionally, if I was copying code to my terminal or editor, the Smart Quotes were copied, causing errors.

You can change this by going opening System Preferences.

Then choose "Keyboard":
<div class="row">
  <div class="col-md-4">
    <img alt="System Preferences, Keyboard Area" src="assets/images/remove-smart-quotes/sys-pref-keyboard.png" />
  </div>
</div>
<br>

Choose "Text":
<div class="row">
  <div class="col-md-4">
    <img alt="Keyboard Area, Text Area" src="assets/images/remove-smart-quotes/sys-pref-keyboard-text.png" />
  </div>
</div>

Then uncheck the box "Use Smart Quotes and Dashes":
<div class="row">
  <div class="col-xs-4">
    <img alt="Text Area, Remove Smart Quotes and Dashes" src="assets/images/remove-smart-quotes/sys-pref-keyboard-text-smart-quotes.png" />
  </div>
</div>

This will turn off smart quotes for the whole system, so if you do need them for some reason, it may not be a good option. However, I cannot think of a reason I have ever needed them myself.
<br>
<br>
