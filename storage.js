// storage.js

async function saveToLocal(data) {
  try {
    if (typeof localStorage === "undefined") {
      console.log("localStorage is only available in the browser.");
      return;
    }

    const stringifiedData = JSON.stringify(data);

    localStorage.setItem("userPosts", stringifiedData);

    console.log("Posts saved to Local Storage");
  } catch (err) {
    console.error(err);
  }
}

// Default export
export default saveToLocal;
