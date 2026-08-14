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

# CRUD(Creat Retrieve Update Delete) project 
Assume we are making a cart related project 
1. User can add any product (id,name,price ,qty) into cart .
2. user can see all the items of cart .
3. User can remove item from the cart .
4. User can also update qty of the product .
5. All the item should be stored after termination of project .
