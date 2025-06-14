const fs = require("fs");
fs.mkdirSync("dir-akash/a/b",{recursive: true});
// { recursive: true }:

// This is an options object passed to fs.mkdirSync().

// The recursive property is set to true, which means:

// If any parent directory in the path does not exist, it will be created automatically.

// If the directory already exists, no error will be thrown.

// fs.mkdirSync():

// This is a synchronous method from the fs (file system) module in Node.js.

// It is used to create a directory.

// If the directory already exists, it throws an error (unless the recursive option is used).

// "dir-akash/a/b":

// This is the path of the directory (or nested directories) to be created.

// The path is relative to the current working directory (where the script is executed).

// In this case, it will create:

// A directory named dir-akash.

// Inside dir-akash, a subdirectory named a.

// Inside a, a subdirectory named b.