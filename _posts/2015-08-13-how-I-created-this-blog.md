---
layout: post
title: How I created this blog/site, using Jekyll, Github pages, Bootstrap, Disqus and even more handy (and free!) tools.
redirect_from: "/2015/08/13/how-I-created-this-blog/"
permalink: how-I-created-this-blog
tags: 
  -  Meta
  -  Jekyll
  -  Github pages
  -  Disqus
  -  How to
  -  Technical
---

When I finished my site and published [my first post][1], which detailed why I created this site and what I plan on doing with it, I promised at the end of it to explain in detail _how_ I created this blog, so you, the readers, can do something similar, if you like. The tools I used are free to download and use, so anyone can start using them today to make a site of their own. 


##My overall experience creating this site

I had this site ready to use after two to three nights of hacking around with jekyll, which is _awesome_! If you have any programming experience and you are looking to create a personal blog, I totally recommend using jekyll, as there is a plethora of documentation, themes and all out there already. Its super easy to go from 0 to full custom blog. Being the techy type, I didn't want to use a bog standard theme, I wanted to hack around and create my own theme, but this shouldn't stop you from using a theme someone created :) I got stuck implementing some things just using the jekyll docs, but after a little bit of googling, I usually found a blog post which showed exactly how I could do what I wanted. I think taking an hour or two to simply familiarise yourself with the templating system would be more than enough to create a full featured blog site, using some samples from other peoples blogs, like I did. :)


#### So what did I add to my site worth talking about? 

Heres a quick list of what I did:

- [I used Github-pages for the hosting.](#github-pages-hosting)
- [I used Jekyll for generating the site, as it works with github-pages.](#using-jekyll)
- [I added pagination on the index page, and display an excerpt from each post.](#pagination)
- [I created static pages for the about/projects/archive/tags/404 pages.](#static-pages)
- [I am using Markdown for writing posts, everything else is done with html.](#markdown-posts)
- [I added disqus comments to posts.](#disqus-comments)
- [I added social media buttons to posts.](#social-buttons)
- [I default a posts author to me, but this can be overwritten per-post (to allow guest authoring).](#guest-authoring)
- [I have added the ability to add tags to posts.](#post-tagging)
- [I have added google analytics to the site.](#google-analytics)

<a class='anchor-link' id='github-pages-hosting'></a>
###Using Github pages for hosting

Github have a really nifty feature that allows you to create a special branch for your repositories, named `gh-pages`, to make a website for that repo. This is perfect for writing documentation for that repo/project. Github, however, also allow you to create a special repository, named in the form `yourUsername.github.io`, which doesn't require you to create a special branch to make a website for the repo, it builds the site from master and then simply serves the files directly from the source. (If this went over your head, I recommend you `checkout` [git basics][2], its a great tool) If you create a repo named yourUsername.github.io and added a html file name index.html to it, you would then be able to access it at the url `yourUsername.github.io/index.html`. Github-pages can be read about in much more detail [here][3]

Github also allows you to link a url you own to a github-pages hosted site, too. You must put a file named `CNAME` into the github-pages project, with your URL. You must correctly configure your DNS to point at your github pages when this file is added to the repo. This is normally configured where ever you purchased your url from. I used namecheap.io, and used their instructions [here][4], if you would like a simple guide which I know works.

<a class='anchor-link' id='using-jekyll'></a>
###Using Jekyll

While github pages can be used to serve up static pages, creating these pages, and editing existing static pages to point to new pages would be a nightmare every time you made a post.

Enter **Jekyll**. Jekyll is described as a simple, blog-aware, static site generator perfect for personal, project, or organization sites. It allows to use html, markdown and [liquid][5] (pretty similar to ERB, [read more][6]) to create your pages, partials and templates. [You can read more about jekyll here.][7]

What this means: You make your sites templates, create pages to fit those templates, which are html/liquid or markdown files, jekyll then creates static html pages from those pages, serves them up to you, and then when you're happy with your work you can then push to your Github-pages branch and it will work like a normal static site, but better and more magical.

First of all though, to start implementing some of the things in this post, you must create your jekyll project and the templates for that site. Explaining how to do this is outside the scope of this post, but you can read about getting started here, at the [jekyll documentation][8]

Using Bootstrap just required me to link to those css and js files from my default layout. :) 

<a class='anchor-link' id='pagination'></a>
###The index page, pagination of posts and excerpts

If you look at my [index page][9] you can see that it is paginated. This means that it displays several of my most recent posts, and allows you to jump forward and backwards to more/less recent posts (when I have more posts to make it paginated). Adding this feature with jekyll is super easy, it just takes a little bit of configuration.

In your sites `_config.yml` file, you must add the following:

```
paginate: NUMBER OF POSTS YOU WANT TO DISPLAY PER PAGE
baseurl: ""
```

and then in your `index.html` file, you will need to write some liquid. Mine is written like so:

{% raw %}
```
{% for post in paginator.posts %}
	<div class="post">
	  <h2>
		  <a class="text-default" href="{{ site.baseurl }}{{ post.url }}">
	      {{ post.title }}
	    </a>
	  </h2>
	  <p>
	  	{{ post.content | strip_html | truncatewords: 100 }}
	  </p>
	</div>
{% endfor %}
	
{% if paginator.total_pages > 1 %}
	<div class="pagination">
	  {% if paginator.previous_page %}
	    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
	  {% else %}
	    <span>&laquo; Prev</span>
	  {% endif %}
	
	  {% for page in (1..paginator.total_pages) %}
	    {% if page == paginator.page %}
	      <em>{{ page }}</em>
	    {% elsif page == 1 %}
	      <a href="/">{{ page }}</a>
	    {% else %}
	      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
	    {% endif %}
	  {% endfor %}
	
	  {% if paginator.next_page %}
	    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
	  {% else %}
	    <span>Next &raquo;</span>
	  {% endif %}
	</div>
{% endif %}
```
{% endraw %}

The excerpt above gives a nice output of the amount of posts you want on your index, with the first 100 words under the heading link, and under all of those, it gives a nice next and previous button, with page numbers to skip forward and back.

<a class='anchor-link' id='static-pages'></a>
###Static site pages, like the archive, tags, about and project sections

Adding static pages to your site is _super_ easy!

I first created a `page` layout template for these pages, and all these static pages extend this. 

An example archive page, is a file called archive.html in the main directory that extends the page template. An example would be like this:

{% raw %}
```
---
layout: page
title: My blog archive
---

{% for post in site.posts %}
  <h4 class="text-justify"><span class='muted'>{{ post.date | date: "%B %e, %Y" }}</span> | <a class='text-default' href="{{ post.url }}">{{ post.title }}</a></h4>
{% endfor %}
```
{% endraw %}

Its that simple to do!

####The 404 page

The 404 page is a little bit more tricky, its just a page extending the default layout, with some extra options in the frontmatter, mine is done like so:

{% raw %}
```
---
layout: default
title: '404: Page not found'
permalink: /404.html
---

	<h1 class='text-danger'>{{ page.title }}. Uh oh.</h1>
	<img class='img-responsive' src='/public/images/wat.png'></img>
	<h4 class='text-default'>You can try <a href='/'>going here</a> and looking for that page.</h4>
```
{% endraw %}

this means when you go to a page which doesn't exist, it will redirect to a nice error page.

<a class='anchor-link' id='markdown-posts'></a>
### Using markdown for my site posts

First, I needed to create a post layout for my posts, which all those markdown posts will then use. All the posts then just extend this template and are written in github flavored markdown. It seems to play pretty well with bootstrap as well, and doesn't look too bad! (code doesn't look great on mobile, however :()

I would recommend only using markdown for posts, as all other pages would probably benefit from having the more fine-grained of raw html/liquid.

<a class='anchor-link' id='disqus-comments'></a>
### Adding Disqus comments to posts

Okay, great, so far I have showed you how to do the static things, such as creating pages, posts and pagination. To let users _interact_ with those posts, you need to overcome the static nature of your static site. Luckily, disqus does this perfectly! Enabling disqus comments on your blog just requires signing up to disqus, registering your site, and adding a piece of html to your posts template. However, I put this piece of html in a partial and include it in my main layout, so I could technically enable comments on _any_ of my pages... even my about section or archive section, if I so wished.

So, once you have that piece of html, you can put it in a partial called `comments.html` which is included where you want it. I will show how to make it available to all pages, like I implemented.

First, create the comments.html like so...
{% raw %}
```
{% if page.comments %}
    <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'YOU SITE NAME'; // required: replace example with your forum shortname
        //var disqus_developer = 1; // Comment out when the site is live
        var disqus_identifier = "{{ page.url }}";
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
{% endif %}
```
{% endraw %}

Then, in your default layout, add the partial where ever you want it to be, I have mine after my content, like so:
{% raw %}
```
  {{ content }}
  {% include comments.html %}
```
{% endraw %}

So, to enable comments on any page or post, all you need to do is put `comments: true` in the frontmatter yaml. I have this set to true in my post.html layout, so all my posts extending this layout have comments enabled by default. I could disable comments on a per post basis by setting to false on that posts markdown, too, which is a nice side effect :)

<a class='anchor-link' id='social-buttons'></a>
###Adding social buttons to posts

Like the disqus site addition, social buttons required me to grab html excerpts from the sites I wanted to enable the buttons for, and then add them to my post layout page

for example, to add the tweet button to my site, all I needed to do was add the following to the posts layout, taken from twitter:

```
  <a href="https://twitter.com/share" class="twitter-share-button" data-via="YOUR-TWITTER-USERNAME-HERE">Tweet</a>
```

I added the [twitter button][10], the [linkedin button][11], A [hacker news button][12], and a [reddit button][13]. all of these used the html from the pages linked, if you want to use similar.


<a class='anchor-link' id='guest-authoring'></a>
###Post authors, and adding guest authors

I wanted to add the ability for my friends to author posts on my blog, which means they would need to be properly attributed to those authors, or people wouldn't do it at all! 

To do this, I set the posts default `author` variable to be me in my `_config.yml` like so:

```
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      author: "Glen Keane"
```

which then means posts will be attributed to me by default, but to attribute to another author, I can simply put their name in the front matter as the author variable to properly give credit! Now to find friends who would like to write a post or two... HA! :D

<a class='anchor-link' id='post-tagging'></a>
###Adding post tags

Jekyll makes adding post tags pretty easy, and I would highly recommend you add this to your site for your readers! :)

All you need to do, is add a `tags` section for each post, and tag them appropriately. An example tags section is shown below:

```
tags:
  - tag1
  - tag2
  - is this enough tags?
  - booooo!
```

Accessing all tags on your site uses the {% raw %}`{% for tag in site.tags %}`{% endraw %} liquid tag, and accessing the tags on a per post basis uses the same liquid, but with a small change {% raw %}`{% for tag in post.tags %}`{% endraw %} 

My tags pages uses the first form, and my posts page uses the second form. Here is my tags page if you want to do something similar:
{% raw %}
```
---
layout: page
title: Tags
---
	<div class="tags">
	{% for tag in site.tags%}
	  {% assign t = tag | first | downcase | replace:" ","-" %}
	  <div class='tag'><a href='#{{t}}'>{{t}}</a></div>
	{% endfor %}
	</div>
	<hr>

{% for tag in site.tags %}
	{% assign t = tag | first %}
	{% assign posts = tag | last %}

	<h3>
		<strong>
		  {{tag | first | downcase | replace:" ","-"}}
	  </strong>
	  {{ posts.size() }} post{% if posts.size() > 1 %}s{% endif %}. 
	</h3>
	<ul>
		{% for post in posts %}
  		{% if post.tags contains t %}
  		  <section id='{{tag | first | downcase | replace:" ","-"}}'>
  				<li>
  					<h4 class="text-justify"><span class='muted'>{{ post.date | date: "%B %e, %Y" }}</span> | <a class='text-default' href="{{ post.url }}">{{ post.title }}</a></h4>
  				</li>
  			</section>
  		{% endif %}
		{% endfor %}
	</ul>
{% endfor %}
```
{% endraw %}

<a class='anchor-link' id='google--analytics'></a>
###Adding Google analytics to your site

Google analytics is something you should definitely add to all your sites. Adding it just requires a piece of html taken from the analytics site. You must register your site with google, and then it gives you the piece of html to be added. Take this piece of html and add it to the bottom of your default layout. I put mine in a partial, and include it the main layout. Doing this is similar adding the disqus comments, first you need to create an `analytics.html` partial to be included, with your html taken from analytics, it might look like so:

```
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'YOUR CODE', 'auto');
	  ga('send', 'pageview');
	</script>
```

and then to use it, simply put {% raw %}`{% include analytics.html %}`{% endraw %} at the bottom of your default layout :)

### Thanks for reading!

If you have any thoughts to share, questions you want answered or anything you think should be added to this post, feel free to post a comment below!


[1]: /first-post
[2]: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
[3]: https://pages.github.com/
[4]: http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/
[5]: http://liquidmarkup.org/
[6]: http://www.sitepoint.com/ditching-erb-a-guide-to-using-liquid/
[7]: http://jekyllrb.com/
[8]: http://jekyllrb.com/docs/quickstart/
[9]: /
[10]: https://about.twitter.com/resources/buttons
[11]: https://developer.linkedin.com/plugins/share
[12]: http://www.hn-button.com/
[13]: https://www.reddit.com/buttons/



