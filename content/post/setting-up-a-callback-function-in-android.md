
+++
date = "2012-11-09T19:29:05-08:00"
draft = false
title = "Setting Up a Callback Function in Android"
pic = "/files/android8bitcallback.png"
aliases = [
  "/blog/Setting+Up+a+Callback+Function+in+Android"
]
+++

<p>
In my <a href="http://www.justinmccandless.com/blog/Now+in+Android%3A+Asynchronous+Web+API+Calls">previous post</a> I showed how to perform asynchronous web API calls in native Android code, after <a href="http://www.justinmccandless.com/blog/Making+API+Calls+in+iOS">showing how to do it in native iOS</a> a few days before.  My Android post was glaringly missing support for callback functions however, so today I'll show how to add that functionality in the Java world.
</p>

<br>
<br>

<p>
First we'll need to add some code to the class from where ApiCall is called.  This will be what represents our reference to the callback function that we can call from an ApiCall (thanks to <a href="http://stackoverflow.com/questions/9963691/android-asynctask-sending-callbacks-to-ui">this Stack Overflow post</a> for how to do this).
</p>

<br>
<br>


<pre class="code">public interface OnTaskCompleted{
    void onTaskCompleted(JSONObject result);
}
public class Callback implements OnTaskCompleted{
    @Override
    public void onTaskCompleted(JSONObject result) {
        // do something with result here!
    }
}
</pre>

<br>
<br>

<p>
Now let's modify ApiCall itself to accept the callback as a parameter.
</p>

<br>
<br>


<pre class="code">public class ApiCall extends AsyncTask {
    private OnTaskCompleted listener;
    private String result;
    public ApiCall(OnTaskCompleted listener){
        this.listener=listener;
    }
    protected Long doInBackground(URL... urls) {
        int count = urls.length;
        long totalSize = 0;
        StringBuilder resultBuilder = new StringBuilder();
        for (int i = 0; i &lt; count; i++) {
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
        // put result into a json object
        try {
            JSONObject jsonObject = new JSONObject(this.result);
            // call callback
            listener.onTaskCompleted(jsonObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
</pre>

<br>
<br>

<p>
Just a few small changes from <a href="http://www.justinmccandless.com/blog/Making+API+Calls+in+iOS">the original callback-less class</a>.  Up top we added a new private variable of type <span class="code">OnTaskCompleted</span>, which we just defined.  This object "listens" for us to send it a signal from this class, and then it executes the necessary action.  Kind of like a callback!
</p>

<p>
We also defined a constructor just below this, which now accepts an <span class="code">OnTaskCompleted</span> object as a paramter.  So now you can pass in your callback when you create a new ApiCall.  Down near the bottom, after receiving the response and putting our results nicely into a JSON object, we call this callback with <span class="code">listener.onTaskCompleted(jsonObject);</span> just as expected.
</p>

<p>
Finally, here is how you would call this new version of ApiCall from the other class where Callback is defined:
</p>

<br>
<br>


<pre class="code">URL url = null;
try {
    url = new URL("http://search.twitter.com/search.json?q=@justinjmcc");
} catch (MalformedURLException e) {
    e.printStackTrace();
}
new ApiCall(new Callback()).execute(url);
</pre>

<br>
<br>

<p>
And that is all you need to implement a callback in this asynchronous web API call.  By defining and passing a different callback when you create an ApiCall object, you can effectively have ApiCall call whatever function you want after receiving the results of the call.
</p>

<p>
Not as bad as I was expecting, but still a bit different from iOS and completely different from javascript.  While coding moves more and more onto the web where slow calls over the internet are common, it's hard not to see languages like javascript taking over...  But then again that's coming from an HTML5 fanboy playing around in native code.
</p>