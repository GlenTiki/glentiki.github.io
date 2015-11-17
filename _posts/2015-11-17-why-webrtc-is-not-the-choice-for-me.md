---
layout: post
title: Realtime Browser Communications - Why WebRTC is not the choice for me.
redirect_from: "/2015/11/17/why-webrtc-is-not-the-choice-for-me/"
permalink: why-webrtc-is-not-the-right-choice-for-me
tags: 
  -  General
  -  Personal
  -  Software
  -  Websockets
  -  WebRTC
  -  "Realtime communications"
  -  "Final year project"
  -  Node.js
---

## Introduction

In my previous post, I talk about why WebSockets are a good choice for my final year project: Essentially, it is an “always open” connection from my server to clients in a room, which allows for the clients to send synchronization messages to each other quickly and easily.

In my post on why I am choosing node.js for my final year project, I talk about the differences between client-server and peer-to-peer architectures. The websocket implementation allows for a client-server approach for the development of my assignment, but using WebRTC would be a peer-to-peer implementation.

## What is WebRTC?

WebRTC stands for WebRealTimeCommunications. So, its name is _exactly_ what I want to achieve, so, why aren’t I using it? WebRTC would connect clients of my application together with a socket connection. So, if there was 10 users in “Room A”, the 10 users would all be directly connected to each other, with a socket connection, similar to how the websocket would connect the users to the server. This would make them all “peers”, which means they are clients _and_ servers. When there is a synchronization message sent from one user, it would go to all other connected users in the current room. This would mean that the majority of the networking for my applications doesn’t come from my server, it happens between clients, and could cut down networking and hosting costs. This is a nice advantage, which I would like to take use of.

## The Downside

However! I discussed using WebRTC with Dan Jenkins, a Google Certified Expert and WebRTC Aficionado, who has delivered many talks on the subject. He said that WebRTC, while a great technology, is limited right now, because a peer can only handle, at most, 8-20 connections to other peers. This is simply because WebRTC is designed for the use  of a small network of communicating users, such as a conference call. This is not ideal for a large social network type project, and because of this limitation I decided to go back to the client-server implementation of using WebSockets.

It is a shame, because WebRTC is a really cool emerging technology which also has a nice event-driven api, similar to websockets. There are other things to be considered when using WebRTC as well, such as the requirement to have a STUN server to help peers find other peers and connect to them. If there are any limitations to connecting a client in a peer-to-peer fashion with another client, that client will have to connect to a TURN server, with a websocket, and that server will relay the client's communications to other peers. Thus, running a WebRTC server, requires two other servers, which could possibly add more overhead. 

## A Workaround?

I started to think of/develop a solution for this limitation, but I decided it is not worth the amount of effort to develop it when websockets work.

My solution was to connect clients to a subset of the clients currently in a room, similar to the approach of torrenting, with seeds and leachs. But, for a client to know who it was connected to and the current network's topology it would need to be connected to a server. Also, to guarantee that a message seeded into the network was not duplicated, thus creating a seeded message loop (ie client 1 sends a message to client 2, client 2 sends it to client 3, client 3 sends it back to client 1) there would need to be a server regulating the network. The network management on a centralised server would also mean that the server is already connected to every client in a room, and probably through a websocket. Therefore, the benefit of a lower networking cost is lost for the server, and the peer-to-peer implementation would be too much work, so I might as well forward everything through my server with websockets!

## Conclusion:

So: thats it. While WebRTC seems really good to connecting users of a service together, it wasn’t suited for my application. This post/investigation was cut short when I was told that the most peers I could have connected to each other is 8-20 at once. I do believe that eventually, there will be a technological solution to this issue, and I would like to keep an eye on the ability to use peer-to-peer in the browser in future.