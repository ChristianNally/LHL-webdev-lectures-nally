convert blank-1024-768.png -gravity northeast -compose over \
\( -size ${wid}x -background black -fill white -gravity center -pointsize 48 label:"What is DOM traversal?" \) \
-append result.png
