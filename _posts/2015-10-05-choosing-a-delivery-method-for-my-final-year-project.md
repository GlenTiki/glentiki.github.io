---
layout: post
title: Choosing a software delivery method for my final year project.
redirect_from: "/2015/10/05/choosing-a-delivery-method-for-my-final-year-project/"
permalink: choosing-a-delivery-method-for-my-final-year-project
tags: 
  -  General
  -  Personal
  -  Software
  -  "Final year project"
---

So, I recently started back in college for my fourth and final year. For my course, in my final year I have to complete a project which I propose and then carry out. I had my first interview with my project supervisor the other day and one of the take aways was that he wanted me to (1) keep a blog about my final year project and (2) do a bit of a write up on the delivery method of my final year project, and why I am choosing it versus other popular methods. So this post is the start of number 1, and fulfills need number 2!

**TLDR**: I am working with an iterative cycle because (1) Its great for single person projects, (2) it means I will always finish a cycle with some form of working product, so if things go wrong I still have some form of working product from the last phase, and (3) it should allow me to build extra features into the platform that I may not necessarily have alloted time for, if everything goes well overall, and I am ahead of time.

## Choosing the right delivery method.

Some common software delivery methodologies which I considered for my final project are:

- [The waterfall approach.](#waterfall-approach)
- [An iterative cycle approach.](#iterative-approach)
- [An agile approach (Scrum vs Kanban Approaches).](#agile-approach)

<a class='anchor-link' id='waterfall-approach'></a>
## The Waterfall approach
This is a formalized method of software delivery which was described in an [article published in 1970 by Winston W. Royce][1], despite the fact that the author never used the term "waterfall", which wasn't coined until a [1976 paper][2]. This approach consists of a series of steps which were originally described as follows:

1. Define the System and Software Requirements
2. Carry out analysis to further develop requirements
3. Design the system based on the requirements
4. Implement the system based on the design
5. Verify the implementation
6. Maintain the system

These are the order that the author recommended the actions should be carried out, but he also believed that there should be interaction for each step with its previous and successive step, for example if in step 2, the analysis uncovered a hidden requirement not thought of during step 1, the requirement should still be added to the system.

My issue with this method for my project, in my opinion, is the lack of prototyping or test driven development. Testing the system doesn't really appear to happen until the later stages, which is not ideal. I also believe primitive prototyping is an insanely useful approach to getting a _somewhat_ accurate delivery time frame for a project, because seeing the amount of time it takes to construct a (often crude) prototype is a must have.

<a class='anchor-link' id='iterative-approach'></a>
## The Iterative Cycle approach
The iterative cycle approach allows me to break the amount of time I have to complete my final year project up into many different cycles and then develop a feature, bug squash or work on something significant (such as a deployment strategy) within that cycle.

The cycle approach is very adaptable, and will allow me to do many different things for different cycles, such as: 

-  It can be a plain mini waterfall.
-  It can be iterating on components already developed.
-  It can be used Identifying possible issues and working on resolutions.
-  It can be a [cowboy coding][3] (work on whatever I feel like) cycle if I am stuck for how to proceed with my system.
-  It can consist of me working on prototypes for iterating on later.

It also means that when I decide what is done for a cycle, I can decide to write tests for the cycle up front for test driven development, or write them later to verify the system, which will give me freedom to take a verification approach which suits the part of the system being worked upon.

<a class='anchor-link' id='agile-approach'></a>
## An Agile Approach.
Agile software development is actually a group of separate delivery methodologies, based on the iterative cycle, which are much too broad to cover. The main ones are **Scrum** and **Kanban**. Both are designed for _teams_ but the Kanban approach seems more approachable from a single person project point of view. 

Scrum development consists of several different roles such as the product owner, the scrum master and then the development team. The scrum master is supposed to act as the buffer between the product owner and the development team... something which would be very hard to accomplish when I am both. 

Kanban was developed in Japan, and the word literally translates to signboard or billboard from japanese. This method is rooted in four basic principles: 1. use an existing method. 2. work towards incremental change. 3. Respect the current roles and responsibilities already in place. 4. leadership at all levels.

Kanban requires a board of objectives to be setup for the goals and the current status of those objectives tracked across several stages on that board. 

This appears to be a great method of keeping track of progress on system parts in development for a team, but seems to allow very little freedom in adding extra features as they pop up. I feel I need to allow for these changes to occur naturally in the course of my project, as I hope to have time to work on extra, unspecified features later in the development cycle.

## Conclusion
So, there you have it. I have reviewed 3/4 delivery methods for software and decided that the iterative/incremental approach would be well suited for a single person project which may change while in development. However, if this was a large team project, I would consider using a hybrid mix of scrum and kanban for development cycles, as they give a better ability to work with and in teams. The waterfall method is a great approach, but it lacks flexibility I felt was needed for my project to be a success.


[1]: http://www.cs.umd.edu/class/spring2003/cmsc838p/Process/waterfall.pdf
[2]: https://static.aminer.org/pdf/PDF/000/361/405/software_requirements_are_they_really_a_problem.pdf
[3]: https://en.wikipedia.org/wiki/Cowboy_coding

