//
Routing

// Defination:
Routing refers to how an application’s endpoints (URIs) respond to client requests. 

//  What is application’s endpoints
"endpoints" refer to the specific routes or URLs that your application responds to

// How to define  routing
You define routing using methods of the Express `app` OBJECT that correspond to HTTP methods

EG :
const app = express() // here `app` is  a Variable running express as a object

// HTTP methods

app.all()       // <3 = is a catch-all method that can be used to handle any HTTP method for a specified route.
app.get()       // <3 = It is commonly used for retrieving[`to find and bring back something`] data from the server.
app.post()      // <3 =  It is commonly used for submitting data to be processed
app.put()       // <3 = Used to update a resource or create one if it doesn't exist.
app.delete()    // <3 = Used to request the removal or deletion of a resource.
app.patch()     // <3 = Used to apply partial modifications to a resource
app.options()   // <3 = Used to describe the communication options for the target resource
app.purge()     // <3 = is not a standard HTTP method can use for Caching
                 [Caching is a process that stores copies of frequently accessed data in temporary storage locations]


// HTTP methods that are part of the WebDAV protocol. 
WebDAV protocol : 
WebDAV, which stands for "Web Distributed Authoring and Versioning," 
is an extension of the Hypertext Transfer Protocol (HTTP) that facilitates collaborative editing and management of 
files on remote web servers

app.checkout()
app.copy()
app.head()
app.lock()
app.merge()
app.mkactivity()
app.mkcol()
app.move()
app.m-search()
app.notify()
app.report()
app.search()
app.subscribe()
app.unsubscribe()
app.trace()
app.unlock()