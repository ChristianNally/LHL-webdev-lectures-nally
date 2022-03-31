
username = 'jstamos'

# typically, ruby programmers use snake_case

puts 7 === '7'
puts 7 == '7'  # there is no type coersion in ruby, so people typically use ==

# every single value you create is an object


7.methods # this is a way to check all the methods on an object

# we fire functions on objects, using dot notation.
# there are no operators in Ruby
# this puts 7 == '7' is converted to puts 7.== '7'

7 to_i

# end is like a JS ending curly brace

# we often write ruby without parentheses

# unless is the opposite of 'if' and this token allows you to make conditionals that test for the positive case

# one liner IFs are interesting but you put the one-liner command first.

# ruby has two and only two falsey values: nil and false


# MANY ways to loop in Ruby (loop do, while <condition>, until <condition>, ...)

i = 0
loop do
  puts i
  break if i > 10
end

# a block starts with 'do' and ends with 'end'

# template literals (like `the quick ${color} fox` in JS) is "the quick #{color} fox" in Ruby

# ' means exactly, just like in JS
