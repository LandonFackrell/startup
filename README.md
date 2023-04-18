# startup of Landon Fackrell
# Merge Conflict Homework
I can't seem to figure out how to get it to give me a merge conflict with the instructions we were given.. I seem to follow them exactly and I just keep having everything go smoothly! I even used the command line.. The only way I can think of getting a merge conflict is if I have two branches pulled off of main and have them both change the same line to different things. The after tyring to merge those then I know I would have a problem but it seems that even if I don't push changes and just try to pull them from git hub even after a commit everything goes fine.

# Startup Business Idea
## Elevator Pitch
Social media's purpose has evolved and expanded extremely overtime. The ability to monitor trends is vital to modern business success. With access to our dashboard, businesses are able to see what is the most trending topics are and adapt properly to reach the clients they need to. In the data age it is vital to have access to all the information your business needs to be on top.

## Key Features
- Dashboard with relevant trending data
- Metrics of your usage
- Ability to mark certain graphs as favorited and explain why
- See graphs other users have favorited and why

## Website Sample
<img src="./Website_Mockup.png">

# AWS Homework

Used the following commands to ssh into my server!

ssh -i [key pair file] ubuntu@[ip address]

And I used this to make sure my key wasn't public so I was permitted to ssh

chmod  600 [key pair file]

# How to update the live website

./deployFiles.sh -k yourpemkey -h yourdomain -s startup

# Things learned from designing the page

Honeslty I think using a framework like bootstrap is absolutely the best way to go. It can save so much time when you find the tools that you need! I am really excited to keep developing my page with that. Also, using online resources like codepen and others can be super helpful when trying to accomplish specific things!

# Things learned from implementing the java script

Ok that was actually super fun! It is really cool to see your website interact with you in ways that you want! Also thinging about asyncronous implementation to keep the experience smooth is so cool! I am learning alot about different ways to implement js and things you need to think about. Like making sure your js runs when you need it to! Loving this for sure

# Things learned from Simon javascript
Looking at the example was super helpful for seeing real examples on storing data, modifying the DOM, and processing operations in javascript! I thought the code was really well done and I am looking forward to writing more of my own JS!

# Things I learned form the Simon Service HW
This was extremely useful!! Looking through the code it was really nice to see how they configured everything and setup express. Looking at the different api calls and how they had express load all of the regular files using the static function was interesting and I did some digging into that. I also am glad I dug into the other js files to see how they used the defined apis by using the fetch function call. Super useful and I am excited to keep learning!

# Things I learned from the Simon DB HW
Mongo DB is so nice to use! I really like the organization that simon used seperating the method implementations away and I think I will follow a similare pattern in my startup. I really like the simple use of json that mongo db uses. It really was just so intuative! And the api is really easy to use and as soon as it was explained it made perfect sense. I am looking forward to implementing this myself!

# Things I learned from the Simon Login HW
The librarys make setting up a login service pretty intuitive, especially the database aspect of it. It just takes a little bit of know how with setting up the authentication is where things get hairy. There is definitely quite a bit to wrap my head around there with all of the http request but really when you break it down it is really managable. One thing I was kind of stuck on as well was how we compare passwords if one of them in encrypted but the bcrypt library makes that really easy with the compare method. It is crazy to see how far we have come!

# Things I learned from the Simon Websocket HW
Setting upa nd using websockets isn't as difficult as I thought it was! As I understand it, it seems like each websocket is basically a mini server that is interacting with eachother as well as the designated port in order to communicate and run! I would love to learn how this works and is run on a large scale! But as they do so YUou just need to juggle a few requests and you can really get everything done pretty easily! The file division on the simon project was done well and made everything easy to read and understand. I will definitely be following a similar pattern on my website. I especially like the ping and pong attributes to monitor what connections are still live!

# Things I want to remember from the simon React HW

React's approach of having a single page based wab application is so nice! I really like just using javascript to swap out elements as I need them and to me it makes a lot more sense coming from a more backend background. 

Dynamically showing elements based on variables has a pretty interesting syntax but makes sense as I think about short circut evaluation ex: {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>} I will definitley want to remember that.

Another thing that is really nice is being able to split out your different view components into seperate files. Just having seperate .jsx files makes organization really nice. All you need to do is just export your function at returns your component and you are set!

One thing I want to remember to is making sure in index.jsx is to setup the <BrowserRouter> with <App /> as a child so navigation can be done proply and setting up the nav buttons is a little different as well.

<a className="nav-link" href="play.html">Play</a>

to

<NavLink className='nav-link' to='play'>Play</NavLink>

Also got to remember to give the different routes so the router knows what to do with the different paths

<Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/scores' element={<Scores />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>

Going through all of these different things it is easy to see that React differs pretty fundamentally from bulding with vanilla js but I think I am definitely going to use it the next time I build a web application! Definitely looking forward to it