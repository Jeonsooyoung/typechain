# Main Theme
typechain project.     
Learning TypeScript by making a Blockchain with it.

## TypeScript   
 ** 타입스크립트의 특징  
 1) 자바스크립트 위에서 동작함. 타입스크립트로 작성하는 것은 모두 자바스크립트로 변환됨. (Superset of Javascript) 자바스크립트가 가지고 있지 않은 규칙들을 가지고 있음. 자바스크립트는 엄격한 규칙이 없어서 사용하기 쉽고, 원하는 방향으로 수정이 용이함. 그러나 큰 프로젝트를 하거나 팀으로 일을 하거나, 버그를 최소화 하고 싶을때는 위의 장점이 단점이 될 수 있음
 2) typed language : 
 어떤 종류의 변수와 데이터인지 설정을 해줘야함. 

## Setting 
1. typescript 설치 
2. tsconfig.json 설정 
- compilerOption 
    - target : 어떤 버전의 자바스크립트로 컴파일 되고 싶은가
    - sourcemap 처리를 하고 싶은지 (true/false)
- include : 어떤 파일들이 컴파일 과정에 포함되는지 
- exclude : 어떤 파일들이 컴파일 과정에 제외되는지 
3. package.json 설정 
- 실행 명령어 설정 
scripts : start/prestart 설정 : 노드는 typescript 를 이해하지 못해서 자바스크립트로 컴파일 하는 작업이 필요함.
# typechain


## git 사용법 

- git 저장소 내 파일/폴더 삭제 : git rm -r --cached 파일명 파일명 (복수 사용 가능)
