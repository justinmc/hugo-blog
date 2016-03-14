
+++
date = "2012-10-31T03:27:09-07:00"
draft = false
title = "Now in Android: Asynchronous Web API Calls"
pic = "/files/android8bit.png"
+++

<p>
During my small look into <a href="http://justinmccandless.com/blog/Making+API+Calls+in+iOS">web API calls in native iOS</a>, I thought I would also take a look at Android to compare.  My first impressions were all positive with the much more C++ like syntax of Java and the XML based layout.  I quickly ran into my first hours long problem to solve in simply calling a web API, however.  The problem this time wasn't a lack of information available online, but actually so much that it was difficult to sift through it all and find a working example.  So, here is my working code after a lot of debugging.
</p>

<p><br>
<br></p>

<p>
The following class uses Android's AsyncTask to make an HTTP call on a separate thread from the main GUI thread.  In fact, in newer versions of Android, an exception <span class="code">android.os.networkonmainthreadexception</span> will be thrown if you do make this call on the main thread (reasonable, otherwise your GUI would freeze for the whole duration of the call over the internet!).
</p>

<pre class="code">public class ApiCall extends AsyncTask<url, integer,="" long=""> {
    private String result;
    protected Long doInBackground(URL... urls) {
int count = urls.length;
    long totalSize = 0;
    StringBuilder resultBuilder = new StringBuilder();
        for (int i = 0; i < count; i++) {
        try {
            // Read all the text returned by the server
                InputStreamReader reader = new InputStreamReader(urls[i].openStream());
                BufferedReader in = new BufferedReader(reader);
                String resultPiece;
                while ((resultPiece = in.readLine()) != null) {
                resultBuilder.append(resultPiece);
                }
                in.close();
             } catch (MalformedURLException e) {
             e.printStackTrace();
             } catch (IOException e) {
             e.printStackTrace();
             }
             // if cancel() is called, leave the loop early
             if (isCancelled()) {
             break;
             }
         }
         // save the result
         this.result = resultBuilder.toString();
         return totalSize;
     }
    protected void onProgressUpdate(Integer... progress) {
        // update progress here
    }
// called after doInBackground finishes
    protected void onPostExecute(Long result) { 
    Log.v("result, yay!", this.result);
    }
}
</url,></pre>

<br>

<p>
You can use the class to make a new API call like this:
</p>

<br>
<br>


<pre class="code">URL url = null;
try {
    url = new URL("http://search.twitter.com/search.json?q=@justinjmcc");
} catch (MalformedURLException e) {
    e.printStackTrace();
}
new ApiCall().execute(url);
</pre>

<p><br>
<br></p>

<p>
That call will return any recent tweets by me (usually few) in JSON as an example.  Before you implement this, note a few things that caught me up as I wrote it.
</p>

<p>
First of all, you'll have to give your app permission to access the internet.  If you don't you'll start seeing errors like this one: <span class="code">socket failed :EACCES (Permission denied)</span>.  To fix this, open up your main manifest file AndroidManifest.xml and add this line:
</p>

<p><br>
<br></p>

<pre class="code">&lt;uses-permission android:name="android.permission.INTERNET"&gt;
&lt;/uses-permission&gt;</pre>

<p><br>
<br></p>

<p>
I ran into another subtle problem when I tried to use this to connect to a local server.  Putting "localhost" into my URL parsed fine, but it led to the error <span class="code">ECONNREFUSED</span>.  A solution to this is to simply use your machine's local IP address, or use Android to get that for you to make things a bit nicer.  <span class="code">InetAddress.getByName</span> should be able to do that for you, though if you're accessing a local server this probably isn't a production version of your app anyway.
</p>

<p>
One last problem led me to use the seemingly redundant String and StringBuilder for the result of the call.  If you try to fill the String resultPiece directly in the condition of the while loop, but do nothing in the body of the while loop, then the while loop will not execute and the string won't be filled.  Subtlety of Java I guess.  There is probably a prettier way, but the above does do the job.
</p>

<p><br></p>

<p>
There is one glaring problem with this class, and that's the lack of an easy way to implement a callback.  Unless you always want to do the same thing after the call returns right there in <span class="code">onPostExecute</span>, then you will probably want to dynamically define a callback.  This will probably be my next tiny Android project when I have time.  It kind of makes me want to crawl back to javascript, but a good OOP excercise anyway!  I'll try to update this when I do.
</p>

<p><br /><br /></p>

<p>
Update: <a href="http://justinmccandless.com/blog/Setting+Up+a+Callback+Function+in+Android ">Callbacks in Android</a>!
</p>