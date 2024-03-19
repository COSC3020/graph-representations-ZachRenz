[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Runtime Analysis Answer

My code features two for loops that both iterate over all of the verteces that exist to find any connections and store them. Therefore my code has a runtime analysis of $\Theta(V^2)$.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

### Runtime Analysis for Bonus Answer

My second function `convertToAdjMatrix()` also has two for loops but they iterate differently. My first for loop iterates over every vertex, but my nested for loop runs for every edge that is connected to that vertex. Therefore my bonus code has a runtime analysis of $\Theta(V*E)$.