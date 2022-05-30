/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
document
  .querySelectorAll(".site-title")
  .forEach((item) => (item.style.color = "red"));
document
  .querySelectorAll("header")
  .forEach((item) => (item.style.backgroundColor = "cyan"));
document
  .querySelectorAll("button")
  .forEach((item) => (item.style.backgroundColor = "white"));
document
  .querySelectorAll("button")
  .forEach((item) => (item.style.color = "red"));
document
  .querySelectorAll("button.lid-toggle")
  .forEach((item) => (item.style.backgroundColor = "black"));
document
  .querySelectorAll("button.lid-toggle")
  .forEach((item) => (item.style.color = "purple"));
document
  .querySelectorAll("li")
  .forEach((li) => (li.style.listStyleType = "circle"));
document
  .querySelectorAll("li")
  .forEach((li) => (li.style.listStyleType = "square"));
document
  .querySelectorAll("li:first-child")
  .forEach(
    (li) => ((li.style.listStyleType = "upper-roman"), (li.style.color = "red"))
  );
document
  .querySelectorAll("li:last-child")
  .forEach(
    (li) => (
      (li.style.listStyleType = "lower-alpha"), (li.style.color = "blue")
    )
  );
document
  .querySelectorAll("p")
  .forEach((p) => (p.style.textDecoration = "underline"));
