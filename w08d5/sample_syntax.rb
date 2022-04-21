
username = 'monkeyfuzz'

# typically, ruby programmers use snake_case

puts 7 === '7'

# there is no type coersion in ruby
# so people typically use ==

puts 7 == '7'  

# every single value you create is an object
# this is a way to check all the methods on an object

7.methods

# we fire functions on objects, using dot notation.
# there are no operators in Ruby

# this...
puts 7 == '7' 

# ... is converted to 
puts 7.== '7'

7.to_i

#
# end is like a JS ending curly brace
#

def foo arg
  puts "BAR! #{arg}"
  return 345
  puts "FOO"
end

val = foo(10)
puts val

#
# we often write ruby without parentheses
#

val = foo 10
puts val

# Ruby has a few quirks with statements and logical
# operators

# 1) no brackets needed

if result < 10
  puts "result is less than 10"
end

# elsif ends a block in and of itself

if result < 10
  puts "result is less than 10"
elsif result == 10
  puts "result is equal 10"
else
  puts "result is greater than 10"
end

# === in Ruby is a check for whether 
# something is included within something else


# unless is the opposite of 'if' and 
# this token allows you to make conditionals 
# that test for the positive case

# one liner IFs are interesting but 
# you put the one-liner command first.

puts "Truth!" if true

puts "Will be output" unless 10 < 1

#


# ruby has two and only two falsey values: 
# nil and false

# MANY ways to loop in Ruby
# (loop do, while <condition>, until <condition>, ...)

i = 0
loop do
  puts i
  break if i > 10
  i = i + 1
end

# a block starts with 'do' and ends with 'end'

# template literals (like `the quick ${color} fox` in JS)
# become ... 
puts "the quick #{username} fox"
# ... in Ruby

# ' means exactly, just like in JS


# JS Objects and Hashes in Ruby
hash = {a: 1, b: 2, c: 3}
puts hash

# notice that the 'properties' have prepended : characters

# dot notation won't retrieve properties
# instead you must use square brackets notation

# to loop through a hash use .each

hash.each do |pair|
  puts pair.to_s
end

hash.each do |k,v|
  puts "#{k} ==> #{v}"
end

# Since Ruby is synchronous (er... since Ruby doesn't have
# an event loop) 'callbacks' are rare BUT we do have yield

def high_order
  puts "start"
  yield
  puts "end"
end

high_order { puts "CALLBACK GOES HERE" }

# A yield can take a parameter

def high_order
  puts "start"
  yield 22
  puts "end"
end

high_order { |num| puts "CALLBACK GOES HERE: #{num}" }
