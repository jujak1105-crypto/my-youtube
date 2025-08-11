## SSH 키 로그인 - private일 때
# 기존 SSH키 삭제 (선택)
-- `rm ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub`
# SSH 키 새로 생성하하기
-- `ssh-keygen -t ed25519 -C "your_email@example.com"`
#공개키 복사하기
-- `cat ~/.ssh/id_ed25519.pub`

## GitHub에서 기존 SSH 키 삭제 (선택)
#GitHub → Settings → SSH and GPG keys <- 여기서 삭제
# GitHub에 새 SSH 키 등록하기
-- GitHub → Settings → SSH and GPG keys
-- New SSH key 클릭
-- Title에 이름 (예: My Laptop) 입력
-- Key 칸에 아까 복사한 공개키 붙여넣기
-- Add SSH key 클릭

## 설치 명령어

-- react 설치.              `npx create-react-app 프로젝트명`
-- react-router-dom 설치.   `npm install react-router-dom`
-- axios 설치.              `npm install axios`
-- react-icon 설치.         `npm install react-icons`
-- react-player 설치.       `npm install react-player`
-- sass 설치.               `npm install sass`
-- react-helmet-async 설치. `npm install react-helmet-async`
-- swiper 설치.             `npm install swiper`

## 설치하다가 버전이 맞지 않을 때, node_modules과 package-lock.json을 삭제하고 새로 설치
-- rm -rf node_modules package-lock.json
-- npm install

# Git 저장소를 초기화 (현재 폴더에 .git 생성)
-- git init

# git 전체 설정 보기
-- git config --list

# 안전한 디렉토리라고 설정 (프로젝트에만 적용하고 싶으면  --global 삭제)
-- git config --global --add safe.directory E:/_work/react-lab
-- git config --add safe.directory E:/_work/react-lab

# 깃이름, 멜주소 등록 (프로젝트에만 적용하고 싶으면  --global 삭제)
-- git config --global user.name "giuhub name"
-- git config user.name "giuhub name"
-- git config --global user.email "your_email@example.com"
-- git config user.email "your_email@example.com"

# README.md 파일을 생성하면서 제목을 적어 넣음
-- echo "# react-talk" >> README.md	

# 파일을 Git 스테이지에 올림
-- git add README.md

# 첫 커밋 생성
-- git commit -m "first commit"

# 현재 git branch 이름 확인
-- git branch

# 기본 브랜치 이름을 main으로 강제 변경
-- git branch -M main

# 원격 저장소(origin)를 GitHub 주소로 등록
-- git remote add origin https://github.com/jujak1105-crypto/react-talk.git

# 원격 저장소의 main 브랜치로 푸시함 (-u는 추후 git push만 쳐도 되게 설정함)
-- git push -u origin main

## 깃 명령어

-- git add .                         `어떤 파일을 저장할지 선택`
-- git status                        `어떤 파일이 저장될지 확인`
-- git commit -m "내가 적을 메세지"   `저장될 파일을 내 컴퓨터 폴더에 저장`
-- git push -u origin main           `깃허브로 저장될 파일 전송`