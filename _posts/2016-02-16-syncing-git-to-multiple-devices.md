---
layout: post
title: Using Github From Multiple Devices
tags:
- Writing
- Tools
- Github
- Syncing
- Fetch
- Rebase
---

![Child holding rock with word "Coopertive" on it](./assets/images/using-git-and-github-for-writing/cooperation.png)
<br>

I dropped Evernote as my note and writing tool and I am now using Github for any writing and note-taking needs. This is made possible by being able to edit the notes on multiple devices. This is done by editing the markdown or text files from the github website.

### Editing with a Computer

As a developer, I am used to working with github. You will need to set up a [github account](), installed Git, and initialized git in a folder on your device or clone the repo to your computer. [This article by Lifehacker](http://lifehacker.com/5983680/how-the-heck-do-i-use-github) describes the process of doing this.

<br>

#### Initialize `git` in your folder

![Gif of git init, add, and commiting](./assets/images/using-git-and-github-for-writing/init-repo.gif)

<br>

#### Create a Repo on Github

![Gif of creating repo on Github](./assets/images/using-git-and-github-for-writing/create-repo.gif)

<br>

#### Add remote to your local directory and push to Github

![Gif of adding remote and pushing commit](./assets/images/using-git-and-github-for-writing/add-remote.gif)

As you might expect, I am just making changes to a file with my text editor (Emacs), then staging, committing them, and pushing it to Github.

<br>

### Editing from Github Website

![Gif of editing file through website](./assets/images/using-git-and-github-for-writing/edit-web.gif)

Editing from the website is as simple as navigating to the file you want to work on, then clicking the "pencil" in the top right hand side. When you are done, you can commit the changes right from the bottom of this page.

<br>

### Bringing Down Changes from Github Website.

If we look at our local file right now, even though we made the changes on the website, they are currently empty or "behind" the version on the Github website.

![Gif of file not updated](./assets/images/using-git-and-github-for-writing/local-not-updated.gif)

We need to set up one thing for us to be able to pull down from the repo. Make sure to navigate into the directory you initiated `git` in and add this line:

<br>

{% highlight bash %}
$ git remote add origin upstream <url-to-your-repo>
{% endhighlight  %}

We will then need to `fetch` the changes from the remote (Github website) repo.

{% highlight bash %}
$ git fetch upstream
{% endhighlight  %}

Once we do this we can the `rebase` to catch our local repo up with the changes we pulled down.

{% highlight bash %}
$ git rebase upstream/master
{% endhighlight  %}

<br>

![Gif of adding Upstream](./assets/images/using-git-and-github-for-writing/add-upstream.gif)

<br>

#### Now we can see our changes from the remote repo.

![Gif fetching, rebasing, and showing new information](./assets/images/using-git-and-github-for-writing/git-fetch.gif)

<br>
We can push our changes from the local repo back to the remote repo and we are all synced up. Anytime we make the changes on the remote repo, we will want to `fetch` the changes and `rebase` to catch up our local repo to the remote.

<br>

***While this may seem like a long process, it can be done quickly once it is set up and in muscle memory.***

