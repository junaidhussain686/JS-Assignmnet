function createPost() {
    const userName = document.getElementById('user-name').value;
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;
    const backgroundImage = document.getElementById('background-image').files[0];
  
    
    if (!userName || !postTitle || !postContent) {
      alert('Please fill in all fields!');
      return;
    }
  
    const post = document.createElement('div');
    post.classList.add('post');
    const timestamp = new Date().toLocaleString();
  
    
    if (backgroundImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        post.style.backgroundImage = `url(${e.target.result})`;
        post.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(backgroundImage);
    }
    post.innerHTML = `
      <div class="user-name">${userName}</div>
      <div class="timestamp">${timestamp}</div>
      <h2>${postTitle}</h2>
      <p class="post-content">${postContent}</p>
      <div class="reactions">
        <button onclick="addReaction(this, 'Like')">Like</button>
        <button onclick="addReaction(this, 'Love')">Love</button>
      </div>
      <div class="comments">
        <input type="text" placeholder="Add a comment..." onkeyup="checkComment(event, this)" />
        <div class="comments-list"></div>
      </div>
    `;
  
    
    document.getElementById('post-feed').prepend(post);
  
    document.getElementById('user-name').value = '';
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('background-image').value = '';
  }
  

  function addReaction(button, reactionType) {
    const reactionsContainer = button.closest('.reactions');
    const currentReaction = document.createElement('span');
    currentReaction.textContent = `${reactionType} `;
    reactionsContainer.appendChild(currentReaction);
  }
  
  // Function to handle comments
  function checkComment(event, input) {
    if (event.key === 'Enter') {
      addComment(input.value, input);
      input.value = ''; // Clear the input field
    }
  }
  
  // Function to add a comment
  function addComment(commentText, inputField) {
    const commentList = inputField.closest('.comments').querySelector('.comments-list');
    const comment = document.createElement('div');
    comment.textContent = commentText;
    commentList.appendChild(comment);
  }
  
