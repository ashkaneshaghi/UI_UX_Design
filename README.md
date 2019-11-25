# Introducing Node and Express

## Exercise:
- Create an express server which serves a static html file
Go to http://localhost:3000/static and see “Hello world” page

- Create a simple JSON service that returns an array of locations of size N where N is passed into the service as a query a parameter.
curl ‘http://localhost:3000/api/v1/locations?num=5 will result in [{loc1},{loc2}, …,{loc5}]

![](../images/01.gif)

## Steps:
### - Verify node version:

```
node -v
```
(should show v4.x.x or higher)
    - if node is missing install it from https://nodejs.org

### - Verify npm version:


```
npm -v
```

(should show v3.x.x or higher) if running on version 2, run

```
npm install -g npm@latest
```

### - Install express package
```
cd srh-student-excercises
npm install express --save
```

### - install uuid package
```
cd srh-student-excercises
npm install --save uuid
```

### - Create src/service/locations.js
- require uuid module
- define initial list of locations as an array
- assign unique id (use uuid) for each location in array
- export function that returns list of location


### - Create static/app.js file
- add Hello world message to be rendered into root html

### - Create static/index.html file
- create container div with id=root
- add script src tag for static/app.js

### - Create src/server.js file
- import express and init it
- make express using static route to serve static files from /static  folder
- import src/service/locations.js and create locations service that returns getLocations function from  src/service/locations.js



### - start node and test your app

```
node src/server.js
```
- point your browser to http://localhost:3000/static and make sure you see  "Hello world"

-   s point your browser to http://localhost:3000/locations and make sure you are
getting the list of locations. Play with ?num=N query string. Make sure number of returned locations matches N.
