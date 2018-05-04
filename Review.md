# Review Questions

## What is Node.js?
It is a runtime environment written in JavaScript that executes server-side and facilitates back-end integration with web apps and sites.

## What is Express?
It's a web framework that allows developers to write handlers for CRUD requests; integrate with view rendering engines by inserting data into templates; defining common web app settings (lke port), and pointing to templates used to render things; and to add middleware at any point within the handling pipeline.

## Mention two parts of Express that you learned about this week.
We learned about middleware and how to use it to enable things like cross-origin resource sharing. Also learned about writing handlers to define different HTTP routes. 

## What is Middleware?
In the case of Node and Express, it's a function that has access to the request and response objects (the homies!) of the application. 

## What is a Resource?
Images, data, or other content that is being delivered by Node and Express to the presentation layer to be consumed by the client.

## What can the API return to help clients know if a request was successful?
A response code and message, such as '201. Created."

## How can we partition our application into sub-applications?
We can do something like:
1. partitioning the APIs into one file, so they will handle the JSON based API access for the app, separately from 
2. a web partition, which would handle the core pages of the browser-based usage, and also set up
3. an errors file that specifically handles the root level route and middleware errors in the application.


## What is CORS and why do we need it?
CORS is cross-origin resource sharing middleware, and it's needed to connect resources originating from different servers or locatinos to enable our applications to deliver the resources without any blockers that are caused by the browser when it sees a request coming from another point of origin.