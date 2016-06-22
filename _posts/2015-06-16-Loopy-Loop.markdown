---
title:  "Loopy Loop"
date: 2015-06-16
---
In Programming you will come upon various concepts ranging in difficulty. Topics from Blocks, Procs, and even Lamdbas (not to be confused with musical lambadas) tend to be among the most difficult. It is also good to remember that programming concepts and conventions tend to stay the same across the board; the only difference between them will be the syntax, since each programming language has their own grammatical rules. Today, we will explore the concept of “loops” within the Ruby programming language, specifically the “while”, “until”, “for”, and “times” loops (we will leave iterators and loop blocks for another day). A loop is a piece of code that you want repeated until a certain condition is met, and when it is, then the cycle will stop. However I warn a CAUTION, because if your condition is not met, the loop will run infinitely and crash your computer/browser/terminal.

<strong>While Loop</strong>


To get into the “loop” of things, we will start with the “while” loop, as each loop has its own particular way of working. A "while" loop checks to see if a certain condition is true; while the condition remains true, the loop will continue until that condition turns false.

{% highlight ruby %}
counter = 1
while counter < 11
	puts counter
	counter += 1
end
{% endhighlight %}

(Here your are initializing a variable counter to number one to start your loop. You’re also setting your “while” loop’s condition to run while counter is else than eleven. Every time the loop runs your counter will be displayed, and one will be added to counter and repeat. Once your counter is greater than eleven, the loop will stop because it is false. Meaning that counter is know greater than eleven.)

<strong>Until Loop</strong>


The “until” loop works as the vice versa to the “while” loop. An “until” loop runs until a false condition becomes true.

{% highlight ruby %}
counter = 1
until counter > 10
	puts counter
	counter += 1
end
{% endhighlight %}

(Here your are also initializing a variable counter to number one to start your loop. You’re setting “until” loops’ condition to run until counter becomes greater than ten. Every time the loop runs, counter will be displayed and one will be added to counter and repeat. Once the condition becomes true, the “until” loop will stop.)

The next two loops are used for when you actually know how many times you want a piece of code to repeat.

<strong>For Loop</strong>


The “for” loop will run the number of times you want using inclusive and exclusive ranges. Inclusive range - will include the first object in the range until the last. Exclusive range - will exclude only the last object in the range but include all others.

{% highlight ruby %}
Inclusive range
	for num in 1..15
		puts num
	end

Exclusive range
	for num 1…15
		puts num
	end
{% endhighlight %}

(Here you’re for the variable “num” in the range of one to fifteen. Num will be displayed and will repeat until the range is done. Inclusive range will display one through fifteen, exclusive on the other hand, will only leave out fifteen.)

<strong>Times Loop</strong>


The “times” loop is a simpler version of the “for” loop, allowing you to run a code a certain amount of times.

{% highlight ruby %}
	10.times{ puts “repeat me 10 times." }
{% endhighlight %}

(Ten the in this example is the number of times you want your code to run and it will do so.)

I recommend that you take my code and run them on your terminal/browser to see how they work. Once you see how they work, edit or create your loop, and don’t be scared to play around with it. Just remember that when creating your loop it needs to have an end, so it doesn’t run infinitely, crashing your terminal/browser! As always, keep coding!
