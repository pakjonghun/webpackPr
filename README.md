## webpack config

1. entry : 진입점 다른모듈을 가져온다.
2. output : path : 폴더가 없으면 자동으로 생성한다. filename 파일명만
   1. default (filename:'main.js' path:path.resolve(\_\_dirname,'dist'))

## resource

1. module : 이미지 글꼴 텍스트 파일

   1. asset/resource : dist 폴더를 사용한다. 소스를 그대로 파일에 삽입함.
   2. asset/inline : small resource 처리에 사용(ex svg), 별도로 소스나 파일 생성 안함
   3. asset : 위 2가지 를 섞은것 default 기준은 8kb
      - 라이트 서버에서 웹팩으로 번들링한 리소스를 읽으려고 하면 접근이 금지 될 수 있다. 웹팩 개벌서버로 돌리면 잘 접근 된다 cors 문제 아니고 서버 설정 문제 같다'

1. loader
