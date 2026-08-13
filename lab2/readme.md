# File System ( FS Module)
- FS Module directly communicate with operating system rather than browser , the common operations on a file or folders are 
1. File -:
    - write file , read file , append file .
2. Folder -:
    - MKdie / MD , rmdir / rm , readdir .
3. File Metadat -:
    - stat , lstat , rstat .
4. Watch -:
    - watch , unwatch .
5. Stream -: 
    - readstream()
    - writestream() .

- all functions are promise so it must be called with await .


- In file system  Append if file is present then it append or if file is not present then it will create