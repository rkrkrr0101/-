네이버 실시간 검색어의 폐지 이후,현재 뜨는 검색어를 쉽게 알아볼수있는 사이트가 몇개 남지않았음
그 몇 안되는것중 하나가 나무위키인데,나무위키의 실시간 검색어는 변동이 너무 빨라서,
시간단위,일단위의 검색량을 알아보기엔 적합하지 않음
그래서 나무위키의 데이터를 모아,일단위 주단위로 값을 뽑아내는 프로젝트를 만들게됐음

---

프로젝트 내에서는k8s를 사용해서,configmap을 사용해서 env를 넣었음(기밀정보기때문에 따로관리중),
k8s가 없으면 도커파일로 env를 넣어야하고,
k8s를 사용할거면 테스트데이터/dbconfig.yaml 컨피그맵 데이터를 완성해서 k8s에 넣어둬야함
아니면 config/config.js가서 deployment에 db관련 커넥션정보들 env에서 변경해야함

---

## db테이블생성은 테이블데이터/table_create.txt 참고해서 생성하면됨(mysql 8.0)

나무크롤이 namu_log테이블에 raw data를 밀어넣고,거기서 밀어넣을때마다 시간별 데이터를 캐시로 만들어서
namu_data테이블에 넣어두고,나무서치가 namu_data테이블을 조회하는식임

---

도커파일없이 실행

1.config변경

2.db테이블 생성

3.npm install

4.npm start

---

도커파일로 실행

1.config변경

2.db테이블 생성

3.docker build -t gcr.io/second-form-351817/namusearch:1.0.0 .

4.docker이미지 실행

---

이 레포자체는 현재 들어온 namu_data(캐시데이터)를 보여주는역할밖에 없어서,데이터를 주기적으로 긁어와야함
https://github.com/rkrkrr0101/namucrol
여기서 namucrol.py를 크론잡이나 크론탭으로 n분마다 돌려야함(크론잡은 해당레포의 namucroljob.yaml 참고)

---

포트는 3000사용중(app.js에서 변경가능)

---

프로젝트 구조는,나무서치 자체는 레이어드 아키텍처를 사용하고,appconfig.js에서 di하는식으로 구성했고,
테스트툴로는 jest와(유닛테스트) artillery(부하테스트)를 사용함

---

상세 제작로그는 계획.txt참조

---

api에는

http://127.0.0.1:3000/logs/:kind //단일조회
kind는 (hour,day,week,month)중 하나
200 ok

출력형식

```
[
{
"id": 22,
"nd_one": "현충일",
"nd_two": "붉은사슴뿔버섯",
"nd_three": "범죄도시 2",
"nd_four": "디아블로 이모탈",
"nd_five": "윤석열",
"nd_six": "손석구",
"nd_seven": "전미도",
"nd_eight": "야란",
"nd_nine": "자낳대",
"nd_ten": "카타르 월드컵",
"nd_time": "2022-06-06T02:55:06.000Z"
}
]
```

(kind가 케이스내에 없을때)
400 bad request
kindError: 현재 kind케이스가 배열에 없습니다
