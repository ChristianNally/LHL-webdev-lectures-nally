# Vasily's Top Ten Tips for Debugging Rails

1) Inside an ERB

<%= variablename  %> is a great debugging tool, but beware...

<%= if ()   %> // would not work because it can't output the code.
<% if ()   %> // would work. notice the equals sign.

2) How to make a link in an ERB

<%= link_to "Text goes here", "/path/goes/here" %>

3) If you're wondering where a bit of HTML on your pages is coming from, 
you can search for that HTML and see if you can find it in your codebase in VS Code. 
You'll probably find it in an ERB file.

4) 
