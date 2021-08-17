2021.8.16 시작

"server" 폴더에서 express로 api 구현하면 될 듯 합니다.  
(express, axios, nodemon 이미 설치되어 있습니다.)

로컬환경에서 돌리려면 
프론트는 localhost:3000, 서버는 localhost:3001입니다.

아래와 같은 라우터를 생각하고 있습니다. (페이지만)

/  
/login  
/create  
/search  
/category/:categoryname(or id)  
/edit/:id  
/details/:id  
