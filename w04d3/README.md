# W4D3 Lecture - AJAX

- What is AJAX?
- What are the pros and cons
- How it impacts the browser history
- CORS

## What is AJAX?

- AJAX calls get data from the server and updates the UI with the new data without reloading the whole web page.
- Microsoft added a then little-known function called XMLHttpRequest to IE5 in 2005
- It originated from Microst ActiveX, a component based software technology
- It took off after the publication [Ajax: A New Approach to Web Applications](https://www.semanticscholar.org/paper/Ajax%3A-A-new-approach-to-web-applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e) in 2005
- Before 2005, this could only be accomplished with Flash or Java Applets (which were not built into the browser)

## XMLHttpRequest

- In 2006 the W3 published a specification for the XMLHttpRequest object
- The XMLHttpRequest object is used to retrieve data from a server asynchronously.
- Initially, it was mainly using XML, but today it can use any other formats such as JSON.

## AJAX Pros/Cons

### Pros

- Improve user experience:
  - no page reloads
  - faster page renders and improved response times
- Client side rendering => reduce network load

### Cons

- Creating dynamic content is tricky
- Asynchronous programming patterns are more complex to code
- It requires js and XMLHTTPRequest support
- History is not automatically updated

## Browser History

Using AJAX you lose:

- history (back, forward)
- URL paths for different 'pages'

- Browsers provide a history API that you can use to programmatically interact with the Browser history.
- [History API](https://css-tricks.com/using-the-html5-history-api)

## Cross-Origin Resource Sharing (CORS)

- For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.
- Ajax requests follow the same-origin policy.
- A web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
- [CORS on Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


## References

- [Ajax: A New Approach to Web Applications](https://www.semanticscholar.org/paper/Ajax%3A-A-new-approach-to-web-applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e)
- [MDN Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Ajax Getting Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
