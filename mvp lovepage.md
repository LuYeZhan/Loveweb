**Description**

Tired of meaningless relationships in your life? Wasting your life in Tinder? You're in luck. 

The love of your life is just one click away!

**MPV**

Simple landing page, showing the navbar, the logo and a footer. 

When you click on the heart, you go to the Love page, where you can see a random generated profile, with name, gender, years, nationality and location.

[![img](/Users/SissyXia11/Downloads/mvp.jpg)

**Backlog**

2-3 animations each page

2-3 transitions each page

sound

improve img quality

improve user experience

**Data structure**

10 data archives.



Index.html

Basic html structure



style.css

Basic css structure, with the images, sounds and all display features



Main.js

Is a Construction Object function, with the main features.

Variables			                        Methods:

Entry point                                generateLayout

layoutInstance                          generateNavbar

navbarInstance						activateRouter

rootElements							addListenersToNavBar

links 											changePage



Loading.js

Loading page 

Properties:                             Methods:

no properties                         generate

​					                             render



Lovepage.js

Contents all the functions, variables, content, that it's displayed on the love page

properties:                                                     methods:

this.parentElement                                      render

this.elements                                                connecToApi  

this.love                                          

this.loading                                                     

​                                                          

Landingpage.js

Contents all the functions, variables, content, that it's displayed on the landing page

properties:                                                     methods:

no properties												render

​																		generate



Layout.js

properties:													Methods:											

this.root														render

this.style														getContainers

this.header

this.main

this.footer



Router.js

It's what we use for choosing which page we render

properties:													Methods:

this.page														buildDOM

var		  														generateLandingPage

routerInstance											 generateLovePage



LoveService.js

We use this file to connect our love page to our API.

var:																	Method:

Loveinstance													getAllUsers



Navbar.js

For navigating between landing page and love page

properties:														Method:

this.parentElement										 generate

this.links															render

this.style

this.elements



**States & states Transition**

There are two pages, landing page and love page.

We use app.js to build the structure of our pages.

layout.js we draw the design and the css of the DOM of each page.

router.js we choose with our events which of the two page we go

app.js interacts with layout and router to render the pages.

loveservice is where we interact with the our API



**Task**

To do

\- create archives

\- copy boilerplates

\- setup git, github

\- Create app.js

Create landing page

\- Create router.js

\- Create Layout.js

-Create Navbar

-Interaction between pages

-Create Loading

\- create lovepage

\- Create servicelove.js

\- Create animation

-Create transition



