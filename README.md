# NextJS boilerplate install

## 0. sample enter pages 

---

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6e7f18ea-c405-4b96-a59f-3c35e809708a%2FUntitled.png?table=block&id=ff07950e-f9de-442f-b986-844da5a78028&spaceId=07268960-0cc1-40f1-8528-112a589a48d8&width=2000&userId=4449deea-1ec5-4db8-a654-18707cae51e4&cache=v2)



## 1. OS 설치


---

> 일단 기본적으로 리눅스 셋팅 기준으로 가져가려고 함
> 
- MacOS 에서 셋팅 (`완료`)
- WSL2(우분투)에서 셋팅 (`완료`)  <- 현재 가이드 기준
- CentOS에서 셋팅(`진행예정`)

## 2. node.js

---

> 당연 노드부터 깔아야겠지?
> 

[WSL 2에 Node.js 설치](https://docs.microsoft.com/ko-kr/windows/dev-environment/javascript/nodejs-on-wsl)

1. 버전 관리 위해 NVM 설치
    
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
    
- curl 이 없으면 설치해야징
    
    ```bash
    sudo apt-get install curl
    ```
    
1. command -v nvm 으로 nvm 반환 되는지 확인
2. nvm ls 로 버전 확인
3. 안정버전으로 설치하자
    
    ```bash
    # lts 버전
    nvm install --lts
    
    ```
    

> 설치 before
> 

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e2ee41e-5ac0-4b86-b06e-602406a9b56d%2FUntitled.png?table=block&id=a4640032-2434-4a7a-9e9f-3719fcb54e31&spaceId=07268960-0cc1-40f1-8528-112a589a48d8&width=1940&userId=4449deea-1ec5-4db8-a654-18707cae51e4&cache=v2)

> 설치 after
> 

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F404de4d2-6caa-4d35-9106-5d5f284e05d2%2FUntitled.png?table=block&id=ffa83fac-0dce-4fd0-b60a-ddf2188104af&spaceId=07268960-0cc1-40f1-8528-112a589a48d8&width=1070&userId=4449deea-1ec5-4db8-a654-18707cae51e4&cache=v2)

> 프로젝트에 사용할 Node.js 버전을 변경하려면 새 프로젝트 디렉터리 `mkdir NodeTest`를 만들고 `cd NodeTest` 디렉터리로 들어간 다음, `nvm use node`를 입력하여 현재 버전으로 전환하거나 `nvm use --lts`를 입력하여 LTS 버전으로 전환합니다. `nvm use v8.2.1`처럼 설치한 버전의 특정 번호를 사용할 수도 있습니다. (사용 가능한 모든 Node.js 버전을 나열하려면 `nvm ls-remote` 명령을 사용합니다.)
> 

## 3. nextJS 설치

---

1. nextJS typescript 설치
    
    ```bash
    # 타입스크립트 
    npx create-next-app@latest --typescript
    ```
    

## 4. react 버전 확인후 18버전 설치

---

<aside>
💡 nextJS 설치했을때 react 18 이 설치 되어있음 따로 진행 안해도 됨

</aside>

> react 18버전 설치, nextJS 설치 기준 react18 rc를 설치했었음
> 

```bash
# react-dom@rc 설치
npm i next@latest react@rc react-dom@rc
```

## 5. tailwindCSS 설치

---

<aside>
💡 style css 사용 편의를 위해 tailwindcss 를 사용함

</aside>

- css 프레임워크, 깃헙에서도 사용하고 있다고 한다. 부트스트랩에 가까운데 사용성이 ❤
- [https://wonny.space/writing/dev/hello-tailwind-css](https://wonny.space/writing/dev/hello-tailwind-css)

> tailwindcss 와 autoprefixer 설치
> 

```bash
# tailwindcss 설치
npm install -D tailwindcss postcss autoprefixer

# init 
npx tailwindcss init -p

# postcss.config.js, tailwind.config.js 파일 생성되야함

```

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c3558a6-90f8-436d-af3c-99fc966ac0b4%2FUntitled.png?table=block&id=9fad7710-8d19-49e3-8a1f-185564f83192&spaceId=07268960-0cc1-40f1-8528-112a589a48d8&width=670&userId=4449deea-1ec5-4db8-a654-18707cae51e4&cache=v2)

> 이쯤에서 vsc(visual studio code) 에 익스텐션 Tailwind CSS IntelliSense 설치
> 

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F464334c4-70de-4dfc-805c-5c09a6403fa7%2FUntitled.png?table=block&id=451944e1-b071-4254-a77c-e82e3bb14045&spaceId=07268960-0cc1-40f1-8528-112a589a48d8&width=2000&userId=4449deea-1ec5-4db8-a654-18707cae51e4&cache=v2)

<aside>
🚧 엇 우분투에서 테일윈드 설치하고 undefined 에러가 나옴!

</aside>

```bash
# 에러 메시지
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
TypeError: Cannot set properties of undefined (setting 'reactRoot')

# next.config.js 파일 내용을 바꿔주자 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
  reactRoot: 'concurrent',
  },
  };
  
  module.exports = nextConfig;
```

## 6. prisma orm 설치

---

```bash

Prisma 셋업 (Typescript + MySQL)

1. npm install prisma -D

2. npx prisma init
이 명령은 schema.prisma라는 파일과 프로젝트 루트에 .env 파일을 포함하는 prisma라는 새 디렉토리를 생성했습니다. schema.prisma는 데이터베이스 연결과 Prisma Client 생성기가 있는 Prisma 스키마를 포함합니다. .env는 환경 변수를 정의하기 위한 dotenv 파일입니다. (데이터베이스 연결에 사용됨)
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql

Prisma Model 예시
https://www.prisma.io/docs/concepts/components/prisma-schema

VSCode Prisma Extension
https://marketplace.visualstudio.com/items?itemName=Prisma.prisma
```

1. vsc에 프리즈마 익스텐션 먼저 설치
2. prisma 설치

```bash
# 프리즈마 설치 developer dependency (-D)
npm i prisma -D

# prisma 불러오기 
npx prisma

# prisma 초기화
npx prisma init

```

## 7. planetScale 설치

---

```bash
PlanetScale CLI
PlanetScale은 데이터베이스 이상이며 CLI는 복잡한 명령 이상입니다. pscale 커맨드 라인을 사용하면 branch, deploy 요청 및 기타 PlanetScale 개념을 손쉽게 사용할 수 있습니다.
https://github.com/planetscale/cli

Planet Scale cli 설치 (맥)
터미널에서 아래를 차례대로 실행
1. brew install planetscale/tap/pscale
(pscale은 Homebrew Tap을 통해 사용할 수 있습니다.)
2. brew install mysql-client (mysql client설치)
3. brew upgrade pscale (최신 버전 업데이트)

Planet Scale cli 설치 (윈도우)
1. Scoop 설치 (Windows용 커맨드 라인 설치 프로그램)
https://scoop.sh/
2. scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
3. scoop install pscale mysql
4. scoop update pscale

PlanetScale CLI를 사용하여 데이터베이스를 생성
pscale database create carrot-market --region ap-northeast

DATABASE_URL
mysql://127.0.0.1:3306/carrot-market
IP 주소 127.0.0.1은 localhost 또는 루프백 주소 라고하는 특수 목적의 IPv4 주소 입니다.

Prisma를 통한 MySQL 데이터베이스 서버에 연결
ex) mysql://USER:PASSWORD@HOST:PORT/DATABASE
https://www.prisma.io/docs/concepts/database-connectors/mysql
```

## 8. etc..

---

<aside>
📢 롬리서치 메모 가져옴 메모 포멧이 좀 다름

</aside>

- [[iron-session]]
    - 세션관리를 JWT 나 별도의 백앤드를 만들지 않고 쿠키로 encrypt 해서 저장하는 형태로 사용
    - `shell // '설치'
    npm i iron-session`
    - [https://github.com/vvo/iron-session#typing-session-data-with-typescript](https://github.com/vvo/iron-session#typing-session-data-with-typescript)
- [[NextAuth]]
    - authorization 을 관리해주는 라이브러리인데 기능이 엄청 매직같다 함
    - 다만 prisma 도 어답터 형식을 맞춰줘야하고 요기에는 안쓰기로 했다고..
    - 아쉽지만 커스터마이징이 쉽지 않기때문에 패스하는걸로
- [[SWR]]
    - 데이터 가져오기를 위한 React Hooks
    - SWR은 먼저 캐시(스태일)로부터 데이터를 반환한 후, fetch 요청(재검증)을 하고, 최종적으로 최신화된 데이터를 가져오는 전략입니다. SWR을 사용하면 컴포넌트는 지속적이며 자동으로 데이터 업데이트 스트림을 받게 됩니다. 그리고 UI는 항상 빠르고 반응적입니다.
    - Stale-while-revalidate
    - 설치 명령어
        - `javascript
        // --legacy-peer-deps 는 react18이 아직 출시가 안되서 붙이는거임
        npm i swr --legacy-peer-deps`
        - [https://swr.vercel.app/ko/docs/getting-started](https://swr.vercel.app/ko/docs/getting-started)
- [[prisma]]
    - [[nodeJS]] ORM
    - [[nextJS]] 과 [[pscale]] 에 상당히 쓰기 좋은거 같음
    - 스투디오 실행
        - `prisma run studio`
    - db 반영
        - `npx prisma db push`

## 번외. eslint prettier 셋팅

---

<aside>
📢 eslint 를 현재 mac에서 사용 못하고 있는데(~~내가 셋팅을 못해서그렇지;~~) wsl2 에서 다시 셋팅해보았음 적용은 되는데 까다로운 점이 몇가지 있네

</aside>

> 참고자료
> 
- 이거 두개 자료가 제일 도움됨

[Next.js project에 ESLint와 Prettier 설정하기](https://www.kenrhee.com/blog/eslint-and-prettier-for-nextjs)

[[Next.js] 프로젝트 기초 세팅하기 - ESLint, Prettier 는 필수!](https://velog.io/@mayinjanuary/Next.js-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-ESLint-Prettier-%EC%84%A4%EC%A0%95)

- 근데 eslint 활성화되면서 react jsx eslint 오류가 계속 남..

```bash
#기본적으로 nextJS 는 next를 import 하는데,,
import type {NextPage} from 'next';

# 아래와 같이 jsx 형식을 쓰면 상단에 리액트를 import 해주면 해결은 됨 
import React from 'react'; 

# or 아예 global 로 선언하면 되는데 뭔가 싫다 -_- 

```

`.eslintrc.json` 파일의 `rules` 파트에 아래 두 내용을 추가하자

```
  "rules": {
    "react/react-in-jsx-scope": 0,
  },
  "globals": {
    "React": "writable"
  }
```

[[ESLint&airbnb] 기억해 둘 스타일 가드](https://kline1103.tistory.com/93)

```bash

# eslint 초기화 
npx eslint --init

# eslint-prettier 플러그인 설치
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

```bash
# .prettierrc.js 파일

module.exports = {
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "printWidth": 120,
  "tabWidth": 2,
  "semi": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

```bash
# .eslintrc.js 파일

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // plugin과 eslint-config-prettier 설정
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
```

끝.