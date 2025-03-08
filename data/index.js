const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '../posts.json'); // Move up one directory to find posts.json

async function getStoredPosts() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.posts ?? [];
  } catch (error) {
    console.error("Error reading posts.json:", error);
    return [];
  }
}

async function storePosts(posts) {
  try {
    await fs.writeFile(filePath, JSON.stringify({ posts: posts || [] }));
  } catch (error) {
    console.error("Error writing posts.json:", error);
  }
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
