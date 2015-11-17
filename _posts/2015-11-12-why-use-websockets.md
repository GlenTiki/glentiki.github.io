---
layout: post
title: Realtime Browser Communications - Why use WebSockets?
redirect_from: "/2015/11/12/why-use-websockets/"
permalink: why-use-websockets
tags: 
  -  General
  -  Personal
  -  Software
  -  Websockets
  -  "Realtime communications"
  -  "Final year project"
  -  Node.js
---

## Introduction:

For my final year project for college, I am building a service for users to sign up to, create their own “rooms”, share their rooms and get other users connecting to those said rooms. In these rooms, you setup a queue of youtube videos, and view them. The cool thing is that it keeps the video in sync across all connected users in realtime! Booyeah!

So, behind the scenes, I have decided to use node.js for the server, and use React for the UI. Now, in my previous posts talking about why I’m using them, I avoided the topic of how the clients will keep the videos in sync, only alluding to the cool tech in the background. 

Well here it is, my post on the cool tech! I am using websockets to share synchronization messages across all of the clients. Thats all. We can all go home now. Or, stay for tea and hear me ramble about why I’m using them.

## Why they are the right choice for me

Websockets are essentially [Transmission-Control-Protocol (tcp) socket connections](http://tools.ietf.org/html/rfc6455) and in the case of my application, they go from the browser, which connects the web service, to the server, running the application. This would mean that using them means I am using the client-server architecture. Websockets are fully duplexed connections, allowing for two-way realtime communications, and within javascript (within the browser, and on my node.js server) the websocket implementation is very cool, [allowing for an event-driven api](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). The event driven api allows for a really nice interface for building your applications, because (if you’re familiar with javascript…) you can simply do things like websocket.emit(‘message’, args) and websocket.on(‘message’, function(args){}), where “args” passed into the “.on” callback function is the object which corresponds to the args object which was emitted from the other side of the websocket. I say “other side” because both the client and server can use the “emit” and “on” functions corresponding to their socket connection. You might see, it is simple to get a message from client to server, or vice versa.

For my project, I will use a node.js module called [socket.io](http://socket.io/) which gives the developer access to a lot a features out of the box, which would require a lot of boilerplate code to be implemented otherwise. Some of these features are websocket channels, and broadcasts to all other connected clients in the channel. nifty.

So, why not use classic AJAX, you may ask? [AJAX is a method for broswsers to get messages from the server.](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) It works by sending a http message to the server, and getting a reply from the server, this can be a long-polling request which means it stays open, but long-polling requests were essentially a workaround until websockets were created, and anyway, many modern longpolling techniques [actually use websockets under the hood.](http://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery/) The main limitation of ajax is that a server can’t send data to a client/browser unless the browser has made a http request. Using just default ajax, I need to wait for http requests to be opened to send data, because the broswer closes itself off from messages from a server after receiving a http message.

Well, that means I can either make the request/reopen a connection every x amount of seconds and possibly receive some updates, or use a websocket, for a two-way communication channel which is always open. 

_The “always open” connection choice is the better choice for a realtime app._

## How I will use WebSockets

To keep my clients in sync in a particular room, I will store the rooms current video time on the server, and update it while clients are still connected to the room. I will send all connected clients a message with the current video time every 10 seconds, and I will send them a message to say when another client has changed the time, and what that user has changed the time to, to update it. I will also do all video searches through the server, so I will send the server the search message, and the server will send the results back. The server will send the queue for a room and any queue updates to clients. All messages within chat will also be dealt with through the websocket, and the new settings for a room after it was updated.

## Conclusion

Now I have explained why I believe websockets are a good choice for my final year project. They are an always open two way communication channel between my server and connected clients. The interface on both the client and server are nice, event driven, apis, which makes developing the realtime application easy and fast. There are benefits to using WebSockets over AJAX.