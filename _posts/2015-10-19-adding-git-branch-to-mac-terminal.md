---
layout: post
title: Adding Git branch to Mac terminal
tags:
- Git
- Coding
- Terminal
- Bash
- Programming
---
<br>
I found this could be done from watching a couple tutorial videos.



![Show Git Branch in Mac Terminal](assets/images/git-branch-mac-terminal.png)

  


After a little research I found this code on this on [Martin Valasek's Blog](http://martinvalasek.com/blog/current-git-branch-name-in-command-prompt). I did add 'export' to the variable. This means that it is available for any process you run from the shell process. Not doing so will mean the variable's scope is restricted to the current process.

This is the code that you will need to add:

{% highlight bash %}
# Git branch in prompt.

parse_git_branch() {
git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
GREEN="\[\033[0;32m\]"
NO_COLOR="\[\033[0m\]"


export PS1="$RED\u@\h$NO_COLOR:\w$YELLOW\$(parse_git_branch)$NO_COLOR\$ "
{% endhighlight %}

<br />
Once you have added it, you can restart your terminal and you should see the branch appear in any directory that you have run a "git init" on.
<br>
