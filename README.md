# API-Testing-superTest-Mocha-Chai-babel-mochawesome-jenkies-
first Api testing framwork


# setup
 # 1: install npm and node 

  #  2: install the clone this repo

 # 3: in terimal 
  sudo npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env

  install all the above

# 4:  integrate a babel and mocha  =>
   how 
     create file .babelrc and  past this 
       {
         "presets": [ "@babel/preset-env" ]
       }

# 5: intergrate the mocha =>
  creater a .mocharc.yaml file
     require: '@babel/register'
    

 # 6: to run the test we will =>
   modify the package.json test=mocha  
    create a test/users.js in root of the project

   in terimal npm test =>
     it shows the pass message 


 # start the creating the test on   
 refere the channel   
 https://www.youtube.com/watch?v=TTyl1psI4DE&list=PL6AdzyjjD5HDR2kNRU2dA1C8ydXRAaaBV&index=7


