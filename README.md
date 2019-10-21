# 회의실 예약 시스템

### 프로젝트 시작
```
* properties.json 파일 수정 (username, password 입력)
* $ yarn run zigzag
```
***

### Api List

#### 1. 회의실 예약
```
$ curl \
    -X POST \
    -H "Content-Type:application/json" \
    --data-binary '{"query":"mutation ReserveRoom{\n  reserveRoom(start: \"2019-10-20 16:00\", end: \"2019-10-20 16:30\", userId: 1, roomId: 1) {id start end}}"}' --compressed \
    http://localhost:4000/graphql
```

#### 2. 이번 주 회의실 예약 내역 얻기
```
$ curl \
    -X POST \
    -H "Content-Type:application/json" \
    --data '{"query": "{getReservationsThisWeek {id start end room {id name size} user {id name team}}}"}' \
    http://localhost:4000/graphql
```

#### 3. 빈 회의실 목록 얻기
```
$ curl \
    -X POST \
    -H "Content-Type:application/json" \
    --data '{"query": "{getEmptyRooms(start:\"2019-10-21 17:00\",end:\"2019-10-21 17:20\") {id name}}"}' \
    http://localhost:4000/graphql
```

***

### 기타

+ 기본 데이터셋은 src/seeders 파일에서 확인할 수 있습니다. (yarn run zigzag 시 세팅)
+ 위의 curl 요청은 예시이며 http://localhost:4000/graphql 브라우저 상에서도 확인 가능합니다.
+ 테스트는 yarn run test 로 가능합니다.