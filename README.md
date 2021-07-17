# Gallery of posts from Reddit
***

##### Task #1
Create a following gallery UI using ReactJS

Input data:
1. Headline: “Top commented.”
2. Gallery:
   * Image: (key: “thumbnail”)
   * Title: (key: “title”)
   * Number of comments: (key: “num_comments”)
   * Link: (key: “permalink”)

##### Task #2
Build an application using ReactJS. An application itself should be a custom image gallery. Images should be taken from Reddit: https://www.reddit.com/r/reactjs:
1. All the data should be fetched using the following JSON: https://www.reddit.com/r/reactjs.json?limit=100
2. Display “Loading...” status while data for the gallery is loading
3. Display comments number inside each image as shown on the screenshot. Take it from data.num_comments.
4. Add Reddit link next to comments counter. Take it from data.permalink.
5. Sort all images by a number of comments per each image (as shown on a screenshot).

##### Task #3
Add auto-refresh feature:
   1. When pressing “Start auto-refresh” button the application should update all image posts in a gallery every 3 seconds. The button changes to “Stop auto-refresh” when pressed.
   2. When pressing “Stop auto-refresh” button the application should stop refreshing data every 3 seconds
   3. Make sure sorting works with this feature

##### Task #4
Add comments filter:
   1. Add a range slider that filters all gallery image posts by comments number without passing any additional requests
   2. Make sure that sorting works as expected when using the slider
   3. Make sure auto-refresh feature works when using the slider
   4. Display “No results found matching your criteria” message if no image posts found
