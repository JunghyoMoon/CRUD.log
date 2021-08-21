2021.8.16 시작


프론트에서는 다음과 같이 데이터를 요청하려 합니다.

게시글 관련  
GET "https://localhost:3001/articles"  -> 전체 글 요청 (홈, 최초 접속시)  
GET "https://localhost:3001/articles?id=123456" -> id에 따른 개별 글 요청 (detail 페이지 접속)  
PUT "https://localhost:3001/articles?id=123456" + 수정한 데이터 -> id에 따른 개별 글의 수정  
DELETE "https://localhost:3001/articles?id=123456" -> id에 따른 개별 글의 삭제  
POST "https://localhost:3001/create" + 작성한 데이터 -> 게시글 생성  
