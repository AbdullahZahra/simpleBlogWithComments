const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commetsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function creatCommentsList(comments) {
  const commentListElement = document.createElement("ol");

  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
    <h2>${comment.title}</h2>
    <p>${comment.text}</p>
    </article>
    `;
    commentListElement.appendChild(commentElement);
  }

  return commentListElement;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsBtnElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();

  if (responseData && responseData.length > 0) {
    const commentListElement = creatCommentsList(responseData);
    commentsSectionElement.innerHTML = "";
    commentsSectionElement.appendChild(commentListElement);
  } else {
    commentsSectionElement.firstElementChild.textContent = "No comments found!";
  }
}

async function saveComment(event) {
  event.preventDefault();
  const postId = commetsFormElement.dataset.postid;

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = { title: enteredText, text: enteredText };

  const response = await fetch(`/posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetchCommentsForPost();
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost);
commetsFormElement.addEventListener("submit", saveComment);
