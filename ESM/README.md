1. 일일히 파일 만드는 것을 에디터 우클릭 하는 것이 귀찮으므로

- powershell에서 파일만드는 명령어
  `New-Item 파일명`
  명령을 하면 해커처럼 보인다.
- UNIX(맥 유저들)에서는
  `touch 파일명`
  명령을 하면 해커처럼 보인다.

(※ Linux명령어와 unix, git bash 명령어의 기본은 매우 비슷하며, powershell은 독자적이다.)

`New-Item app.js`
`touch app.js`

시스템에 맞게 명령어로 파일을 해커처럼 만든다.

2. npm 패키지를 설치한다.

`npm init -y`

- -y 옵션은 모든 질문에 yes라고 대답한다는 뜻
- npm init을 하면 package.json이라는 파일이 생긴다.
- entry point는 app.js로 설정 정상적으로 되어있는지 확인

3. debugger 설치
  
- windowsOS : ctrl + shift + D
- MacOS : cmd + shift + D

- 개인별 시스템에 맞추어 launch.json 파일을 만든다.
- 디버거 정상 작동하는지 확인

4. ESM 방식으로 개발환경 설정하기 위해 package.json 수정

- `"type": "module"` 추가

  간단히 JSON 객체의 key, value 한쌍을 추가하는 것이지만 프로젝트 전체의 '명세'를 설정하는 것이기 때문에
  프로젝트 최초에 한번은 결정해야되며, 이후에는 수정하지 않는다.

※ 해당 설정을 진행하면 더이상 **require**를 사용할 수 없다.


5. ESM 방식으로 import, export 가 작동되는지 확인
   