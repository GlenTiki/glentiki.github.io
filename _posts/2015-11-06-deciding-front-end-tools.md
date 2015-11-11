---
layout: post
title: Deciding on frontend tools for my final year project.
redirect_from: "/2015/11/06/deciding-front-end-tools/"
permalink: deciding-front-end-tools
tags: 
  -  General
  -  Personal
  -  Software
  -  Frontend
  -  React
  -  Angular
  -  "Final year project"
  -  Node.js
---

## Introduction

As I have already discussed in a previous post, I am using node.js for developing my final year project server, as it is the right fit for me personally. I will now discuss what I will be building the front end, or client side, of the application with. The main argument I will be making within this post will be angularjs vs reactjs for the User Interface. Finally, I will conclude with the choice I have made and my reasoning behind it.

### What kind of user interface I want to build

For my final year project, I am developing a platform to watch videos in sync with your friends/colleauges, and will be integrating a messaging service into the rooms for this project. I therefore need the clients to be in constant communication with the server, receiving client messages and video synchronisation messages. This means that my UI needs to be able to work with realtime data, possibly from multiple sources/clients, if I build my service with a peer-to-peer network.

I would also like my UI to be fully responsive, to handle window resizing in a manner which doesn't detract from the users experience, and works well on mobile devices. To build a responsive website, I will use tools to handle the resizing and viewport changing events. I will therefore seek to use a tool that is a good fit for the UI library or framework I choose to develop my project with.

Right now, there are many great tools to develop user interfaces in the browser. Some popular tools which are of note which I investigated are reactjs, angularjs, emberjs and backbonejs. These tools are great for developing a model-view-controller (mvc) application, and they are each indivually popular, as they each have their own indivual strengths. an MVC application is an application that is comprised of three components, the Model, which houses the logic and data of the application, the View, which is presentation layer of the application, which takes the data from the model and displays it, and the Controller, which handles user inputs and sends it to the view (to manipulate the presentation of the data) or the model(to manipulate or change the data). All the projects are open source projects, which means I have access to the source code to investigate "strange" behaviour. However, each of these tools are very restrictive, because they are only made to be used by themselves, not paired with another from the list. 

__React__ is simply described on its website as _A library for building User Interfaces_. It is gaining a lot of popularity right now. It is primarily developed by Facebook and Instagram, however, with it being an open source project, anyone can make bug fixes, or feature additions. Instagram's entire User Interface is built with React, and Facebook is now integrating React into aspects of their platform. With Reacts recent popularity spike, there is lots of examples and documentation online. React is considered to just give the developer the tools to build the V in mvc, which can give the developer more control when choosing how to develop the Model and the Controller. It also has a sister project called react-native, which takes your react application and optimises it for display on mobile devices, providing native like performance within the browser.

_Angular_ is described on its website as _HTML enhanced for web apps!_. It is already quite a popular framework. It is primarily developed by google, and used on many of googles platform services, but not on their main platforms, search, analytics, maps or youtube. Angular is currently in [state of upheavel][1] lately with the release of angular version 2, and has broken compatibility with angular 1. As such, developers are viewing angular versions 1 and 2 as similar but different frameworks. The possibility of using documentation for one version that is broken on the other is possible, and as such, can become a pitfall when using the framework. Angular encourages the use of MVC with the framework, and provides the tools to make an MVC application with just angular. Angular's performance is not optimised for mobile.

_Ember_ is described on its website as _A framework for developing ambitious webapps_. It is gaining popularity, but is not as popular as Angular or React. It is developed primarily by the open source community which has appeared around it, and while it has corporate sponsors, the development direction is driven primarily by the end users of the framework. It is used by yahoo, and groupon, but not on their primary sites. There are many examples online, and it is built as a client side mvc framework. Ember relies more on developer productivity than performance on devices.

_Backbone_  is another MVC application framework described on its site with the following paragraph:

 Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface. 

 It is a popular framework for developing UI's, but many people prefer to use a tools called Marionette.js to wrap around it. Marionette.js is described on its site as _The backbone framework_ and states that it "simplifies your Backbone application code with robust views and architecture solutions". It is a somewhat popular solution for developing MVC applications. This framework works to give the developer very fine grained control of their presentation. There is plenty of documentation usable for developing an app with Backbone/Marionette. Marionette is not described as optimised for mobile.

My application itself will only consist of one "Model" in the mvc scheme of development, the user. The user itself will not be a driving component within my application however, it is primarily driven by the actions which happen in a video room in realtime. Therefore there is no need to pull in a large mvc framework, such as angular, ember, or backbone. I believe that the control that react gives to my presentation layer is beneficial to the development of the web application.

So, now I have chosen React, I need to choose some components to be used in conjunction with it. I will be using a tool call "Flux" which the developers of React have developed in conjunction with the project. This tool favours a unidirectional data flow, compared to a bidirectional data flow which is prominent in MVC. In the flux architecture, the data flows from an action, to a singleton called the dispatcher. The dispatcher is in charge of sending that data to data-stores which require it. The data stores then have views which are associated with them, to display the data. These views can then create actions, which triggers the cycle again.

Another decision I must make is the presentation tools which I want to use. This is the design framework, which will define the look and feel of my website. The tools I considered are bootstrap and radium. Bootstrap is develped by twitter which is an extensible framework for developing uis on web applications, with the default look and feel being similar to that of twitter. Radium is a framework developed from the ground up to work with react. Bootstrap however has a project which rebuilt it for compatibility with react. Either of these choices will allow me to develop the ui I would like, but with my previous familiarity with bootstrap, I will try radium, and if I feel it is not as well suited for my project compared to bootstrap, I will then switch to bootstrap. The look and feel of my site should be a clean, colorful ui, with a color scheme to be decided later. 

## Conclusion
I believe that there are many very popular frameworks which would allow me to develop a fully functional web application within the timeframe alloted, but due to personal preference and current popularity, I will choose React to develop my UI. My UI look and feel should be a clean, flat colorful ui.I will be using Radium to develop this ui, and depending on my experience using that framework, I may end up switching to bootstrap if I feel it is a better choice.

[1]: https://jaxenter.com/angular-2-0-announcement-backfires-112127.html


