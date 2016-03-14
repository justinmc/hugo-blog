
+++
date = "2012-10-23T00:53:50-07:00"
draft = false
title = "Making API Calls in iOS"
pic = "/files/xcode.png"
+++

<p>
	I've been dabbling in Objective C at work recently when I'm not doing HTML5.  I found myself needing to make several API calls to external web servers, so I attempted to write a nice class to handle this, including callback functionality.  Let's look at the code.
</p>
<br /><br />
<i>ApiCall.h</i>
<pre class="code">
#import <Foundation/Foundation.h>

@interface ApiCall : NSObject

// The callback function pointer
@property (nonatomic) SEL *callback;
@property (nonatomic, retain) id delegate;

// The network response data stream
@property (nonatomic, retain) NSMutableData *dataStream;

// The main public call function
-(void)call:(NSManagedObjectContext *)managedObjectContext : (NSString *)apiUrl;

@end
</pre>
<br /><br />
<i>ApiCall.m</i>
<pre class="code">
#import "ApiCall.h"
#import "SBJson.h"

@implementation ApiCall

@synthesize callback;
@synthesize delegate;
@synthesize dataStream;

// This function makes a call to the given url, and on connectionDidFinishLoading calls the given callback
-(void)call: (NSManagedObjectContext *) managedObjectContext : (NSString *)apiUrl  {
    // create a fetch request and set the entity
    NSFetchRequest *request = [[NSFetchRequest alloc] init];
    NSEntityDescription *entity = [NSEntityDescription entityForName:@"Event" inManagedObjectContext:managedObjectContext];
    [request setEntity:entity];

    // Execute the fetch request
    NSError *error = nil;
    NSMutableArray *mutableFetchResults = [[managedObjectContext executeFetchRequest:request error:&error] mutableCopy];
    if (mutableFetchResults == nil) {
        // Handle the error.
    }
    
    // Call the API and prepare the NSMutableData receiver
	dataStream = [[NSMutableData alloc] init];
    NSURL *url = [NSURL URLWithString: apiUrl];
    NSURLRequest *requestApi = [[NSURLRequest alloc] initWithURL:url];
    NSURLConnection *connection = [[NSURLConnection alloc] initWithRequest:requestApi delegate:self];
    
    // release data!
    [mutableFetchResults release];
    [request release];
}

// Called when the web api call receives a response
- (void) connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
    NSLog(@"Received response from web API: %@", response);
}

// Called when the web api call receives data
- (void) connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
	// Append the incoming data to the data stream object
	[dataStream appendData:data];
    NSLog(@"Added data received from web api");
}

// Called when the web api call finishes loading
- (void) connectionDidFinishLoading:(NSURLConnection *)connection {
    NSLog(@"Web api call finised loading");
    
    // Convert the data stream object to a string
	NSString *response = [[NSString alloc] initWithData:dataStream encoding:NSUTF8StringEncoding];
    
	// Load the response data string into a dictionary
	NSDictionary *dict = [response JSONValue];
    
    // Call the callback function in the delegate and pass the dict object, if there is a callback
    if ((delegate != NULL) && (callback != NULL)) {
        if ([delegate respondsToSelector:*(callback)])
            [delegate performSelector:*(callback) withObject:dict];
    }
}

@end
</pre>
<br /><br />
<p>
Calling the <span class="code">call</span> function does just what I said without anything fancy: makes an http request to the given url and calls the callback function when it's done (if there is a callback).  The callback will also have the response of the API call passed to it, so if you're expecting to get data back you'll have it available.  Simple, but cleans up your code a lot if you try to do this inline and makes the asynchronous call a bit more intuitive to read.  Here is how to call it.
</p>
<br /><br />
<pre class="code">
// set up a url
NSMutableString *url = [NSMutableString stringWithString:@"http://localhost:8888/get_data?id="];
[url appendString: [NSString stringWithFormat: @"123"]];

// instantiate the object
ApiCall *saveStory = [ApiCall alloc];

// set the callback
[saveStory setCallback: &@selector(callback:)];
[saveStory setDelegate: self];

// make the call, escaping characters in the url
[saveStory call: managedObjectContext :[url stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding]];
</pre class="code">
<br /><br />
<p>
Of course don't forget to include the class with <span class="code">#import "ApiCall.h"</span>.  Also notice the callback selector.  Here, I am selecting a function named "callback", and the colon following the name shows that it will accept a parameter (the response data in the form of an NSDictionary).  So make sure that function exists on the class you make the call from, or wherever you set the delegate.
</p>
<br />
<p>
There you go, this made my life a bit easier while messing around writing some basic iOS stuff.  I'm by no means an expert though, so suggestions are welcome in the comments.
</p>