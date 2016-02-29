---
layout: post
title: Navigating the .Emacs File
tags:
- Emacs 
- Coding
- Text Editor
- Programming
---

If you do not know how to access your .emacs file, you can see what I have written on it [here.]({% post_url 2015-09-25-getting-to-your-emacs-file %})

You can see the parameters that I have for my .emacs file to customize the functionality.

It is important to be careful about editing the information in .emacs file. I would recommend putting it under version control in github or similar location.

{% highlight elisp linenos %}

  (custom-set-variables
  ;; custom-set-variables was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
  '(cua-rectangle-modifier-key (quote meta))
  '(custom-enabled-themes (quote (misterioso)))
  '(global-linum-mode t)
  '(ns-alternate-modifier (quote meta))
  '(visible-bell t)

  '(default-frame-alist (quote ((height . 70) (width . 120))))
  '(markdown-command "/usr/local/bin/multimarkdown")
  '(markdown-open-command "/Users/loeffler/bin/mark"))

  (global-set-key (kbd "C-<right>") 'forward-word)
  (global-set-key (kbd "C-<left>") 'backward-word)
  (custom-set-faces

  ;; custom-set-faces was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
  )

  ;; My customizations

  (setq make-backup-files nil) ;Stops making backup files with the ~ at the end
  (setq-default indent-tabs-mode nil) ; always replace tabs with spaces
  (setq-default tab-width 4) ; set tab width to 4 for all buffers
  (setq-default tab-always-indent 'complete) ;; make tab key do indent first then completion.


  ;; Interactively Do Things (highly recommended, but not strictly required)

  (require 'ido)
  (ido-mode t)

  ;; Rinari
  (add-to-list 'load-path "~/.emacs.d/rinari")
  (require 'rinari)

  ;;; rhtml mode
  (add-to-list 'load-path "~/.emacs.d/rhtml")
  (require 'rhtml-mode)


  ;; Markdown Mode
  ;; This version 2 released on March 24, 2013 by JBlevins.
  ;; I cloned his git repository in my ~/.emacs.d directory.

  (add-to-list 'load-path "~/.emacs.d/markdown-mode")

  (autoload 'markdown-mode "markdown-mode"
  "Major mode for editing Markdown files" t)
  (add-to-list 'auto-mode-alist '("\\.md\\'" . markdown-mode))
  (add-to-list 'auto-mode-alist '("\\.markdown\\'" . markdown-mode))
  (add-to-list 'auto-mode-alist '("\\.text\\'" . markdown-mode))
  (add-to-list 'auto-mode-alist '("\\.txt\\'" . markdown-mode))
  (add-to-list 'auto-mode-alist '("README\\.md\\'" . gfm-mode))

  ;; Note: the markdown-command points to multimarkdown and was set with
  ;; "C-h v markdown-command" after loading a markdown file. There are other
  ;; ways to set this variable that involve a "hook" variable that is run
  ;; after the mode is loaded.  Initially this was set to "markdown".
  ;; markdown-open-command is set to ~/bin/mark which in turn is linked to
  ;; mark -> /Applications/Marked.app/Contents/Resources/mark

{% endhighlight %}

I tried to leave the comments for most the functions in the file which should be clear.

I don’t know what all the code does. I know that e-lisp is a bit similar to Javascript as it is also a type of lisp, so make sure all your parenthesis are in the right places, ect.

My personal favorite commands that I have added are:

{% highlight elisp %}

  (global-set-key (kbd "C-<right>") 'forward-word)
  (global-set-key (kbd "C-<left>") 'backward-word)

{% endhighlight %}

This allows me use the Control-Arrows to go back and forth by a word. There is a default option, however it can be difficult to use and this seems to fall under my hand a bit better.

I have also liked the added functionality of the markdown editor and renderer. If you want to add it, Jason Blevins has a great article on it. You can find it here.

When you use markdown mode, you can use this command to preview it in a browser:

{% highlight elisp %}
  C-c C-c p
{% endhighlight %}
