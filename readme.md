### Answering the following questions ;

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans:All of them are selectors.We can access elements using these method.
   by using "getElementsById" we can select single element.And Using "getElementsByClassName" we can select multiple elements and it return multiple classes as array of collections.And using "querySelector" we can select id and class both as like CSS selectors;And it select first element.And Using "querySelectorsAll" Select all elements matching as CSS Selectors.

2. How do you **create and insert a new element into the DOM**?
   Ans:We can create new Element by using Document.CreateElements() .and we can place it into parent element using appendChild.
3. What is **Event Bubbling** and how does it work?
   Ans:When a click happens on a button,first it go to the exact elements and then bubbles up to the parent and then grandparent so on and finally to the document.And it has 3 phase 1. Capture phase 2.Target phase and 3.Bubbling phase.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:Instead of adding a lot of event listeners in the child Elements we can add single event listener to its parent and when the bubble ups then parent can detect which children is triggered.And the process it Event Delegation.And it is useful because it improves performance as it has less event listener in the memory.and it works dynamically. 5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: PreventDefault() : 1.It stop default action of a form.
2.It doesn't stop event bubbling.
stopPropagation() : 1. It stops bubbling up.
2.It doesn't stop default action of a form.
