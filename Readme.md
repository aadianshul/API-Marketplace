# 🚀 [YourAPI]()


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) 
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

<br/>

# ✨ About
* A Hub of APIs where users can display their APIs and share it with others to use it and create a nice website on top of their APIs.
* Project also contains a Background Remover application to remove background of an image(uses remove.bg api).
* Background Remover application is presented as an example for other users to create an web app by taking inspiration from apis present on the explore page.

### Live Website - <b>[YourAPI](https://your-api.netlify.app/)</b>

<br/>

# ✨ Snapshots 💫💫

## Home Page

![clone images](/home1.png)

## Login Page

![clone images](/login.png)

## Register Page

![clone images](/signup.png)

## Add API Page

![clone images](/addapi.png)

## MY APIs Page

![clone images](/myapis.png)


<br/>

# ✨ Folder Structure

```
frontend
    src
        assets -> contains logos, images, etc.
        components -> react components
        pages -> contains the web pages
        utils -> utility functions
        
 backend
    src
        middlewares -> create and store new middlewares here
        models -> create and store new models here
        routes -> create and store new route groups here
        utils -> create and store new utilities here

```

<br/>

# ✨ Usage

## Prerequisites
* Git
* Node & npm
* MongoDB

<br/>

## Clone the repository
```
$ git clone https://github.com/belikeamitesh/Your-API-Marketplace/ 
```

<br/>

## Client Side (PORT: 3000)
1. Run following commands:
    ```
    $ cd frontend
    $ npm install
    ```

2. Copy & rename ``` .env.example ``` to ``` .env``` 

3. Add following environment variables:
    ```
    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```

4. start and you are ready to go
    ```
    $ npm run start
    ```

<br/>

### Getting a copy of this starter 

You can simply fork this folder to start working on it.

To push your changes to Github/Gitlab you need to create a new repository and push the changes there.


