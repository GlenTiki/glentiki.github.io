---
layout: post
title: Why choose node.js for my final year project.
redirect_from: "/2015/10/05/why-choose-node.js-for-my-final-year-project/"
permalink: why-choose-node
tags: 
  -  General
  -  Personal
  -  Software
  -  "Final year project"
  -  Node.js
---

## Introduction

Today, I'll be talking about why I think node.js is the right choice for the server for my final year project. Full disclosure before we go any further, I am a node.js developer and have contributed to the node.js core, but I try my best to put any previous experience aside for the purpose of this excercise.

So, __What the hell is my final year project?__. Well, to put it simply, it is a web service on which you can watch videos in sync with your friends across the internet in realtime. So if you pause a video, it pauses your friends videos, if you skip ahead to 1:20, it skips everyone else whos connected to 1:20... etc.

### Models for connecting users together, and how they influence my choice.

So, to build this system I have looked at different models of connecting clients of my service together. There are only really two broad approaches to networking, and these are client-server and client-client(peer-to-peer, or p2p)

Peer-to-peer(p2p) technologies require you to build a network of connected clients who are connected to most, if not all currently connected clients, and between them they share computing power to carry out tasks. 

In my final year project, I will be building "rooms" for users to watch videos in, so a p2p model would connect clients to other clients currently in a room. 

The client-server approach to networking lets clients connect individually to a server, and the server then manages the state of the system and does most, if not all, the computing. The client-server approach gives the developer of the server more security over the system as all input to the system or application can be verified at a source which the users or clients do not, or should not, have access to.

The client-server approach would connect all of the clients to a central hub (the server) and they would communicate through that hub.

A server may be built in one of two manners, as a **"monolithic"** application where all of the functionality is hosted in one running program, on a single machine, or as a **"microservice"** deployment, where parts of the functionality are broken up into multiple small programs, possibly on multiple different machines, and all linked together with a message bus/queue between them. 

A typical server setup with monolithic apps is to deploy the running program onto multiple machines at once and load balance (split all traffic up) between them. A downside of monolithic applications is that a single bottleneck in your application code could hold up your entire application, and if the server "breaks" or unexpectedly shuts down, your entire webservice could shut down. an advantage of a monolithic application is that it is easier to log and see what happened, and that it is not as complex to develop as a microservice architecture, as it is a well established way of developing applications.

A typical server setup with microservice apps is to deploy lots of small modules which house functionality for a single/ actions or related actions, and then when a user tries to carry out an action, the action emits a message on the message bus and the service related to that action sends a reply for the user to use. A downside of microservices is that getting started with them can be complex, they are relatively "new" and people are still investigating them, and as such there are no best practices, anarchy reigns (although some argue this is an advanntage of microservices, as the developers can make a functional piece of software and move on asap, and later that piece of software can be iterated on and improved, as it is only a small module in comparison to the overall system.) Some advantages of microservices is that they allow you to run multiple different services which cater to specific need, and therefore can allow you build lots of complex functionality quickly.

How clients communicate through that central hub, or to each other is beyond the scope of this article and will be investigated later.

With this project being a webservice however, it means that the frontend part of the service must be done with Javascript because Javascript is considered "the language of the web", because it is the sole programming language supported within all modern web browsers. [(According to mozillas developer network anyway)][1]

What this means is that on the client side, within the web browsers, or on the clients who connect to a room, I will have to use javascript. These browsers must first download the functionality, _or how this is all done_, from a server. So whether I use p2p or the client-server model for communicating between connected users of the service, I must use javascript, and I must build a server, or some kind, for clients to get the p2p functionality from (how the clients connect to each other... etc).

A server must be built, then, and there are many popilar solution out there to build a server with. Most programming languages have libraries to build a web server with, so a server could be built with javascript, ruby, python, c++, golang, fortran or even cobal!

In this article, I look at three scripting languages on the server side, javascript, ruby and python, and I look at three compiled languages on the server side, c++, java and golang. Scripting languages are dynamically interpretted at run time (with a compiled interpreter that builds a set of instructions to run, so the interpretation/runtime compilation of the code could be a performance hit) while compiled languages build a predefined set of instructions which are simply ran during the running of the program, with no interpretation at runtime. It is worth noting that compiled languages are considered "low level" and scripting languages are considered "high level". what this means, is that one is made to be "easy to understand" by the computer, and the other is made to be easier for the developer. This has a knock on effect, which means the easier to understand code is easier to write, which means its faster to write and develop something with it.

## Analysis

__Javascript__ on the server uses node.js. Node.js is described as a ["server side event-driven runtime built on chrome's v8 scripting engine"][2]. This means that it is a server side  _scripting_ solution which interprets/compiles javascript at runtime, and is built on the same javascript engine used within google chrome. It runs with an event loop, and has been [designed and recorded to handle thousands of dynamic requests][3] faster than apache web server, which can only send static html replies. So, out of the box it is fast, should scale well (handle more and more users connecting at once), and it is built with javascript, which I will also need to be familiar with for the client side, anyway. I am very familiar with node.js, as I am primarily a node.js developer, and have even committed code to the node.js c++ core in the past.

Some other interesting facts about node.js is that (1) I don't need to do any thread based programming, as node.js abstracts all of the multiple connection computational complexity away from me with its event loop (2) [javascript is the most popular language on github][4], meaning that there is ample examples to learn from on the internet (3) [its package manager (npm) has the largest number of modules, or libraries in comparison to other languages][5], (4) if I want to write c++ code and use it with my javascript I can, as node.js [has a super simple library to use for binding your c++ code to javascript with][6] (5) has some actively maintained and updated [frameworks][7] for [building servers][8] with, and finally (6) has a great community who love to help and are actively maintaining the project.

The shortcoming of node.js is that it solely exists within the event loop it has created (which is great too, because it takes the complexity out of writing code...) but this event loop is exclusively single threaded, so it doesn't matter how many cores the processor of your server has to use, it can only use one at once, for the main execution of the code. This can be overcome by running multiple processes at the same time and load balancing between them, but it should be able to handle a very large load before this needs to happen, anyway. I feel my experience with node will not be a limiting factor.

__Ruby__ is another very popular _scripting_ language because of its simplicity to write as a software developer, and for building web servers with it because of the prevailance of ruby-on-rails. Ruby on rails is __The__ ruby framework for developing servers. Ruby on rails gives software developers a lot of features out of the box for developing their applications, which makes getting started with developing those sites really easy to begin with. Ruby also has a very active development community who maintain the language and the ruby on rails framework, and there is a huge number of ruby modules available as well, just as there is for node.js. I am somewhat familiar with Ruby.

However, ruby has its downfalls as well, just like node.js, as it has been known to [not scale very well for lots of users using it at once][9] and lacks large scale [profiling/debugging][10] tools. I also don't know if it is as easy to build native components for your ruby apps like it is simple for node.js. I have built a webapp in ruby on rails in the past, but I feel I may lag behind in development if using ruby due to Rails approach to features (it supplies them all with very little modularity, I can drown in documentation before I know it).

__Python__ is a really popular _scripting_ language which could also be used for my server side implementation. Python is recognised for its simplicity to write and learn, and its prevailant use in modern scientific computing. Python also gives developers access to using threads and such within their code, so they can build large scale apps which are fast, with the added complexity of threading. I am not very familar with python.

Python, while it has a large development community, lacks the large number of modules which both node.js and ruby have. It also has the disadvantage of not being well suited to handle io in an asynchronous manner, as node.js has been designed from the ground up to do this. Also, because I am only somewhat familiar with python, I may need to learn things I don't currently don't know.

__C++__ is a very fast, efficient _compiled_ language which has been around for decades and is well documented. C++ has many open source libraries that can be hooked into with a small bit of effort from the developer. I am familar with writing c++.

However, C++ is a very large language, and to use it, I would need to write a lot of _boiler plate_ code which is already taken care of for me in other languages, such as handling IO being opened/closed, managing object references and memory... etc. C++ is also such a large language with so many possible pitfalls, I wouldn't feel truely comfortable building a production system in it by myself, I would only be comfortable extending the scripting languages listed above with small modules using C++, or working with another more familiar with the language to develop a c++ system.

__Java__ is another _compiled_ language which I am comfortable with. Java runs on a virtual machine which means developers don't have to worry about memory management as much as they do in a lower level compiled language such as c++. 

Java is like c++ because there are a lot of libraries out there that do much of what you want for you, but when you need a bespoke solution such as I will have to develop, it requires a lot of boiler plate code. I feel with my familarity with java I would be able to develop the solution for my final year project, but it is not the right fit, and it would take a lot longer than with a scripting language, and would require much more boiler plate code, than javascript, ruby, or python.

__Golang__ is a _compiled_ language which is being heavily developed by google for use on web servers. This language is designed from the ground up to be as extensible as c++, with its fine grained control, but it should be nearly as easy to write as a scripting language such as javascript, ruby, or python. Currently however, there is no nice package manager for golang like with node.js or python, as the "package manager" currently counts the number of technical documents for published go modules and redirects to them. I have looked at go, and it looks promising.

I would like to use golang in my final year project, but I feel with the time constraints, and my lack of familiarity with the language, I would not be able to complete the project.

## Conclusion.

I feel that golang is such a large language, I could end up spending a lot of time learning it and not enough time to implement my final year project. If time wasn't a constraint, I would write my server in golang, and my front end with javascript, and possibly look at developing a microservice architecture on the server side using all languages, and playing to their individual strengths. However, due to the fact time is a factor, and I am already familiar with node.js, I feel I will be best suited to develop my project primarily with node.js.


[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[2]: https://nodejs.org/en/
[3]: http://zgadzaj.com/benchmarking-nodejs-basic-performance-tests-against-apache-php
[5]: http://www.modulecounts.com/
[6]: https://github.com/nodejs/nan
[7]: http://expressjs.com/
[8]: http://hapijs.com/
[9]: https://bearmetal.eu/theden/does-rails-scale/
[10]: http://nirvdrum.com/2009/09/17/lessons-learned-in-large-computations-with-ruby.html


