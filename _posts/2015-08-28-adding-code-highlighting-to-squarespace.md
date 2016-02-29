---
layout: post
title: Adding Code Highlighting to Squarespace
tags:
- Learning
- Coding
- Blogging
- Tools
---


Like many other developers, particularly younger ones, I felt/heard the need to blog. After getting up my website, I went through the process of adding a blog in my site, but I then realized that there were many reasons that it was a lot of work to support a blog and add in all the little features that something like Squarespace provide out of the box. I see now why it makes sense to not reinvent the wheel.

That said, there was an issue I was facing when trying to use a blog about coding. The code blocks that I was trying to input were not displaying properly. They looked fine if it is just one line of code, however if there were two or more lines, it looked pretty bad.

## [Prismjs][0]

[Prisimjs][0] provides a great option for inserting code blocks and highlighting the code. It also provides a way to colorize the code that you place in between the tags.

You can get the code to inject into your blog at their [download page][1]. The check boxes that you choose will add plugins to the code.

### Inserting the Code into Squarespace

I inserted the code into the Post Blog Item Injection. This should mean that the code is inserted on the full view of the post, it shouldn’t place it on the blog page that shows all posts. You can get to this area by Pages->Settings->Advanced and it will be near the bottom of the options. You will need to place html 'script' tags around the code.

You can place the CSS into the custom CSS area. You get to this area by going to Design->Custom CSS.

I recommend copying the code to a text editor and making any modifications you want. Then, you can past it into the sections. This keeps the editors for making any “modifications” for you.

### Using the Plugin

To use this plugin, you need to use these tags:

{% highlight html %}
  <pre><code>yourCodeHere</code></pre>
{% endhighlight %}

It is a little work to type this every time, however, it is a small pain with the options that you have. I know there are some that have added plugins to resolve this, but I didn’t see the necessity.

### Adding Parameters

If you chose to use some of the extra plugins (I recommend [Line Highlight][4], [Line Numbers][5], [Show Language][2], and [Highlight Keywords][3]), you can use them as classes. The classes I recommend that you add should be:

<br>

#### [line-numbers][4]
Add line numbers to the code block. Should be added to the 'pre' tag.
![code-highlight-with-line-numbers](./assets/images/add-code-highlighting-to-squarespace/code-highlight-with-line-numbers.png)

#### [language-xxx][2]
You replace the “xxx” with the language that you are using. Should be added to the 'code' tag.
![code-highlight-with-line-numbers](./assets/images/add-code-highlighting-to-squarespace/code-highlight-with-syntax-highlighting.png)

<br>
This plugin is great and works pretty well. I have seen some bugs that will cause it to not render the changes right after you save the post. However, if you refresh the page or go out of main page and come back to the post you will see it render correctly.


[0]: http://prismjs.com/
[1]: http://prismjs.com/download.html
[2]: http://prismjs.com/plugins/show-language/
[3]: http://prismjs.com/plugins/highlight-keywords/
[4]: http://prismjs.com/plugins/line-highlight/
[5]: http://prismjs.com/plugins/line-numbers/

<br>
