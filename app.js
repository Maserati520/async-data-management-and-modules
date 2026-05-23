// app.js

// Named import
import { fetchPosts } from "./API.js";

// Default import
import saveToLocal from "./storage.js";

async function initApp() {
  // Fetch posts
  const posts = await fetchPosts();

  // Get first 5 posts
  const firstFivePosts = posts.slice(0, 5);

  // Display posts in console
  firstFivePosts.forEach((post, index) => {
    console.log(`Post ${index + 1}`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log("---------------------");
  });

  // Save to Local Storage     
  await saveToLocal(firstFivePosts);
}

// Execute function
initApp();
