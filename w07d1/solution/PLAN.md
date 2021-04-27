# TODO List

# requirements

- show a list of task
- prioritize tasks
- add a new task
- mark as done
- deadline
- remove a task
- categorize
- modify a task

## Data

TODO: { 
description: string, 
deadline: datetime, 
completed: boolean, 
... }

List of TODOs: should this be an array or an object?

It depends:
if we only want to display, then an array is sufficient.  listOfTodos = [first, second, etc];
if we want to search for TODOs and manipulate TODOs often, then an object is better. listOfTodos = {first, second};

## HTML Skeleton (this is useful for understanding the HTML structure of your page)

body

header
  h1
main
  section
    h1
    ul
      li
  section
    h1
    form


## Components (in React we want to make independent components that will work well together)

Ask ourselves... given the HTML skeleton, what would be good candidates for components?

Header:
  header
    h1

TODO Form:
  section
    h1
    form

TODOListItem:
  li

TODOList:
  section
    h1
    ul
      TODOListItem

## Make a JSX file for each of these in your src/components directory.

# React has two types of components
  1) Class components (older react was done this way...)
  2) Functional components (built from functions)

One function per file means we can use this syntax...

export default function Header(){
  return (
    <section>
      <h1>I am a header</h1>
    </section>
  )
}

# Put your components into App.js

import Header from './components/Header';


