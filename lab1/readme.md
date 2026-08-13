# EventLoop -:
JS is synchronous and single threaded bydefault 

## There can be async behaviour 
- with BrowrerAPI - setTimeout , setInterval , setImmediate , nextTick
- with promises 
- with event handlers

# Promises  -:
- A function not executed immediately , but it must be executed after a while . it has some status during the execution .
At final it may resolve (success) or reject (unsuccess) .

# Callback -:
- That pass as argument or the parameter to  another function .
## Modern js is divided in two types
1. commonJs (.cjs) -> support OOPS
   - priority (nextTick . promise , setImmediate /    setTimeout) 
2. ModuleJs (.mjs) -> follow modular approach -> important
    - priority ( promise , nextTick , setImmediate / setTimeout) 