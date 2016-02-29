---
layout: post
title: Replacing Evernote
tags:
- Evernote
- Tools
- Github
---

![No Evernote, Go Octocat!](./assets/images/replacing-evernote/replacing-evernote.png)

There are few times in my life a service or tool has come along which completely changes how I work. This, for me, was Evernote.

<br>

## History Lesson

I started using Evernote 2011-2012, right around the time they launched, and I was hooked. Working in music, I had a mac, but being a verizon cell phone customer, I had an Android phone, the original Droid. (You might remember these dark days for cell phone customers; having to choose between good signal and an iPhone.) To have whatever notes I made on my computer get to my phone, or vice-versa, I had to perform a serious amount hoop jumping. The process was bad enough that I skipped it all together and was just emailing myself any notes I needed in both places.

<br>

## Enter Evernote

A small company with HUGE hype, I saw I would be able to sync my notes on **both** devices...**two platforms!!!** It was device and platform agnositic. Web, desktop, and mobile intefaces allowed you to have all the information you needed, where ever you needed it. HEAVEN!

I sang the praises to any who would listen...even for those that had both an iPhone and a mac, Evernote was just better than Notes, and/or anything else I had found. I eventually got an iPhone for myself; Evernote was still my staple. I would use notes here and there, but for any large task Evernote was the go to.

I continued using Evernote. Utilizing folders to organize and catagorize my life. Any thought, draft, idea, all started in an idea sheet and was then elaborated on and distilled. Even if I was writing a message or a letter I wanted to save, I would draft it there. It was my go to.

<br>

## A Great Divorce...

Last summer, I started noticing Evernote desktop app beginning to be slower. I would have trouble switching between folder and opening a note I needed to work with. Now, maybe this is partially due to my computer. It is a late 2012 Macbook Pro, with a spinning drive rather than a SSD, but I don't notice any problems working with any other programs. This is also not my only complaint.

Evernote has always been a subscription model and I will admit I never paid for it. I did try one time, but there were way too many steps and I had an issue, then never tried again. It really came down to simply not needing any of the premium features and, while I wanted to repay them for the value they had given me, it was too much work to give them my money.

<br>

## Don't Interrupt Me!
So I should not be surprised when they became nag-ware. I understand, they need to make money and give the customers a reason upgrade. The way Evernote implemented this was a pop-up every 4 hours or so. This pop up would bring Evernote into focus. So I would be working in the browser or emacs, then evernote would come to the front of the screen, then take about a minute to show the pop up.

If it was just the one pop up, I may have been okay. I use sublime text here and there and I am used to the pop up when saving. I don't mind it and if I used it more, I would definitely upgrade. With Evernote, it was not just one button. No, not at all.

First there was this pop-up:

![Evernote Nag Pop up 1](./assets/images/replacing-evernote/evernote-nag1.jpg)

<br>
When you clicked "Free", it would then move to this page:

![Evernote Nag Pop up 2](./assets/images/replacing-evernote/evernote-nag2.png)

<br>
This was too much for me. I had to decide if I wanted to invest for the yearly subscription, or move away. My dilemma (first world problems, I know) was if I upgraded, did I really expect the performance to improve that much? It would really just stop the nagging, but not the slow load times and laggy note opening. [David Brady](https://twitter.com/dbrady) from [Ruby Rogues](https://devchat.tv/ruby-rogues/) fame, often talked about the 7 second rule. It was essentially, "A program has 7 seconds before I get bored and start checking Twitter." While, it may be a little longer than 7 seconds for me, this rule definitely applies and if all I want to do is jot down a note, or copy and paste from a note I already have open, this is really annoying and interrupting to my workflow.

<br>

## Enter the Octocat

I thought through the tools I wanted to be able to sync with. I mostly work on a Mac at home, but there are times I am traveling where I don't want to carry around my Mac. I know an iPad will get me through the day if the most I will need is to possibly set up in a Starbucks and be productive by writing to kill some time. There are also times, where I know I will probably just want to make a couple quick edits with my phone. I have a 6plus, so the screen is big enough to do some quick work if needed.

I looked at Dropbox, but their mobile editing of text files was not great. I also thought about notes, but I am hesitant to trust Apple's syncing. I know it is pretty good most the time, but I have seen times where a note has not synced for several days. In this case the only option is the "rain dance" (trying to force a resync by logging in and out of iCloud), and that effort could nullify any benefit of my process. Additionally, I have mentioned that I work in emacs on my Mac and I love it. Editing text is great and I can write in markdown with nice highlighting to carry over any formatting to my blog. I just needed some way to work off an iPad sometimes.

After thinking about it a bit more, I realized Github really did provide everything I was looking for; a place to make and add notes, a way to be able to work from multiple devices, and a backup solution. I also realized I could do this in a private repo. I already pay for the minumum and I had no issue investing in a solution that did fit my needs.

<br>

## High Level View

My basic workflow consists of working on my Mac in the terminal, always pushing up any changes I make to my private repo. If I am ever away from my computer and I want to do some work from my iPad, I can simply open up github in safari and switch to the desktop view. Then, choose to edit the file I want to work on and commit any changes I make.

When I get back to my computer, I can *fetch* the changes and rebase master to get everything in-sync. I know it sounds a bit much, but really the workflow is pretty simple. I will do a post on exactly how to do it in the near future.

<br>

## In Closing

[It seems this was a common feeling](http://pocketnow.com/2015/07/24/evernote-premium-nagging) and I just found an alternative which worked for me. I am in github most of the day and it makes sense to keep what I need there. I also get the added benefit of being able to see my formatting beforehand with the Github preview option.

I am aware this may not work for everyone, but it works perfectly for my needs. I hope it helps anyone who may be looking for their alternative to Evernote.

