---
layout: post
title: Heroku CSS Assets Not Displaying
tags:
- Ruby
- Coding
- Heroku
- Tools
- Programming
---

When pushing to heroku, there is the potential with the standard rails 4 setup that you will get your website up and realize that none of the custom css rules that you have put in will be used.

This happens because the settings are not in place to precompile your assets.

### Quick Fix

To fix for the current setup you can run this command:

{% highlight bash %}
  bundle exec rake assets:precompile
{% endhighlight %}


Once you have run that, you can git commit and push the master to heroku. You will need to do this any time you update the css or update classes in the layout.

### Permanent Fix

Running through that process is fine, however you can easily change this behavior for all future pushes to heroku. You need to go to your production.rb file (path below) and add these rules:

_/config/environments/production.rb_

{% highlight ruby %}
  config.cache_classes = true
  config.serve_static_assets = true
  config.assets.compile = true
  config.assets.digest = true
{% endhighlight %}


After adding these rules, save and you can git commit and push the master to heroku. After adding these parameters, you should be good to go for all future commits.

<br>

