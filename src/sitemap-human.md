---
title  : Sitemap
layout : page.njk
excerpt: Maybe one of these pages will help?
permalink: /sitemap/
---

## Pages in this site

<ul class="bullet-list">
	<li>
		<a href="/">Home</a>
	</li>
	<li>
		<a href="/product-design/">Product Design</a>
		<ul class="bullet-list">
			{% for item in collections.productDesign %}
			<li>
				<a href="{{ item.url }}">{{ item.data.title }}</a>
			</li>
			{% endfor %}
		</ul>
	</li>
	<li>
		<a href="/accessibility/">Accessibility</a>
	</li>
	<li>
		<a href="/resume/">Resume</a>
	</li>
</ul>
