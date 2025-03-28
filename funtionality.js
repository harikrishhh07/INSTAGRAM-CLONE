// HTML structure for the app
document.body.innerHTML = `
    <div id="app">
        <h1>Mini Instagram</h1>
        <form id="postForm">
            <input type="text" id="caption" placeholder="Enter a caption" required />
            <input type="file" id="imageUpload" accept="image/*" required />
            <button type="submit">Post</button>
        </form>
        <div id="posts"></div>
    </div>
`;

// JavaScript functionality
const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('posts');

postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const caption = document.getElementById('caption').value;
    const imageUpload = document.getElementById('imageUpload').files[0];

    if (imageUpload) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const post = document.createElement('div');
            post.className = 'post';
            post.innerHTML = `
                <img src="${e.target.result}" alt="Post Image" />
                <p>${caption}</p>
            `;
            postsContainer.prepend(post);
        };
        reader.readAsDataURL(imageUpload);
    }

    postForm.reset();
});

// Like and comment functionality for stories
function likeStory(storyId) {
  const likesElement = document.getElementById(`story-likes-${storyId}`);
  let likes = parseInt(likesElement.textContent.split(': ')[1]);
  likes++;
  likesElement.textContent = `Likes: ${likes}`;
}

function commentStory(storyId) {
  const comment = prompt(`Add a comment for ${storyId}'s story:`);
  if (comment) {
    const commentsElement = document.getElementById(`story-comments-${storyId}`);
    let comments = parseInt(commentsElement.textContent.split(': ')[1]);
    comments++;
    commentsElement.textContent = `Comments: ${comments}`;
    alert(`Your comment: "${comment}" has been added to ${storyId}'s story.`);
  }
}

// Like and comment functionality for posts
function likePost(postId) {
  const likesElement = document.getElementById(`post-likes-${postId}`);
  let likes = parseInt(likesElement.textContent.split(': ')[1]);
  likes++;
  likesElement.textContent = `Likes: ${likes}`;
}

function commentPost(postId) {
  const comment = prompt(`Add a comment for this post:`);
  if (comment) {
    const commentsElement = document.getElementById(`post-comments-${postId}`);
    let comments = parseInt(commentsElement.textContent.split(': ')[1]);
    comments++;
    commentsElement.textContent = `Comments: ${comments}`;
    alert(`Your comment: "${comment}" has been added to the post.`);
  }
}