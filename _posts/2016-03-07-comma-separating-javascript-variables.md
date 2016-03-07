---
layout: post
title: Comma Separating Javascript Variables
tags:
- Javascript
- Node
- Coding
- Variables
---
![Commas falling on green background](./assets/images/comma-separating-vars.jpg)
I was going through a book on node recently and came across something very unfamiliar. Usually, a quick Google search will resolve and clarify any questions or misconceptions, but this one had me stumped. Partially because I didn't really even know if I was searching for it the right way.

So what was my problem? I came across this line in a node tutorial:

{% highlight javascript %}
var querystring = require('querystring'), fa = require('fa'), formidable = require('formidable');
{% endhighlight  %}

Now you may know exactly what is happening here. I know I felt pretty dumb once I finally was able to figure it out, but at the time, I wasn't even sure how to search for it!  I am used to node files having the large list of requires at the top and it seemed this is what was going on, but I was not sure why. It reminded me that if I do not use a technique, it can be forgotten. This is how I usually see variables written:

{% highlight javascript %}
var querystring = require('querystring')
var fa = require('fa')
var formidable = require('formidable');
{% endhighlight %}

As I said, I knew the program was working how I was expecting it to function, but I wasn't sure why. Additionally, all my searches were not returning anywhere close to the answer I wanted. I knew this was a test, a challenge to my Google Fu, so I kept changing my searches, trying to find the answer to my question. Eventually, I came across [this stackoverflow question](http://stackoverflow.com/questions/21619413/comma-separation-in-javascript).

As I read the article, I remembered back to when I first started learning javascript. Variables can all be declared on one line by comma separating them. I am not sure have seen this done in a project since that lesson, till now. Success! I came, saw, and I conquered...okay maybe I should have remembered this, but I know we cannot keep it all in our heads and it is much more important to know how to find answers, than remember 'all the things'/

Personally, I still prefer to separate my variables by new lines. I don't have a great reason for it, but it just 'feels better' to me and seems to be more clear.

Either way, no matter how others choose to declare their requirements, I know I will not forget this convention the next time I see it in a project!
