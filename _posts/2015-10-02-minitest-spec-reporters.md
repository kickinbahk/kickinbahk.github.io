---
layout: post
title: MiniTest Spec Reporters
tags:
- Ruby
- Coding
- Tools
- Programming
---
If you are using Minitest to test your rails app, there are a couple options for how you have it display the failing tests. Most know to use ["minitest-reporters"][0], however the default behavior when using it is for it to display dots and the Hartl tutorial has you implement the "Progress Reporter" behavior.

I am not a fan of either of these as you see the test failing, but not the order they are run in. Additionally, you only see the reports for the failing test and at least the progress behavior will only run till a failing test, then it will stop. This was a minor annoyance to me, so I went to find some of the other behaviors to see if there was one that I liked better.

### Spec Style

Spec style reporting allow you to see all the test that are run and whether it passed or failed. I like this way of displaying tests as I can see the order that they were run in, as well as it running all the tests; passed and failed. This saves time from having to re-run all the tests and I can see better if the order the tests are being run is changing causing them to fail. It also allows me to more easily use a gem like guard as I can save and flip to the terminal tab to see the tests that have run, which have passed and which have failed. If you want to have this reporting style, you do need minitest-reporters and need to add this code to your test_helper.rb file outside of the class:

<br>

###### *./test/test_helper.rb*


{% highlight ruby %}
  require "minitest/reporters"
  Minitest::Reporters.use!(
  Minitest::Reporters::SpecReporter.new,
  ENV,
  Minitest.backtrace_filter
  )
{% endhighlight %}

<br>
You should now see your test being displayed in the spec style. 


[0]: https://github.com/kern/minitest-reporters
<br>
