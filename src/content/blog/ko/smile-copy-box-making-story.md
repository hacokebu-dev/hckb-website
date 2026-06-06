---
id: smile-copy-box-making-story
title: 클립보드 앱, 〈스마일 카피 박스〉 제작기
date: 26년 5월 20일
category: 제작기
description: "문장 복사를 위해 스마일 페이스를 터치하도록 설계하여, 효율성 대신 긍정적인 인터랙션과 의도적인 불편함을 제안하는 클립보드 앱 제작기입니다."
---

## 시작

당시 나는 AI가 내주는 퀴즈를 풀고 푼돈을 버는 앱테크를 하고 있었다. 퀴즈에는 AI에게 질문을 해서 힌트를 얻는 기능이 있었는데 여러 번 하다 보니 질문 프롬프트를 어떻게 작성하느냐에 따라 힌트의 수준 차이가 크다는 걸 알게 되었다. 그래서 여러 버전의 프롬프트를 만들어 좋은 힌트를 얻어냈다.

그런데 프롬프트를 매번 메모장에 적어두고 복사하고 붙여 넣는 과정이 여간 귀찮은 게 아니었다. 그래서 프롬프트 전용 클립보드 서비스를 떠올렸다.

사실 굳이 내가 만들 필요는 없었다. 내가 원하는 수준의 클립보드 서비스는 이미 시장에 많았기 때문이다. 하지만 나는 〈스트릭 다이얼〉 때와 마찬가지로 복잡한 기능 없이 가볍게 만들어 볼 수 있는 아이디어라는 점이 마음에 들어서 직접 만들기로 결심했다.
&nbsp;

&nbsp; 
## 뻔한데 뻔하지 않게

뻔한 아이디어였지만, 뻔한 클립보드 앱을 만들고 싶진 않았다. 그래서 추가한 것이 ‘기분을 좋게 하는’ 장치였다. 거창한 건 아니고, 화면에 스마일 페이스를 이미지를 보여줘 기분을 좋게 한다는 아이디어였다.  

정확한 기억은 아니지만, 인간은 웃는 얼굴 아이콘을 보는 것만으로도 뇌가 이를 '긍정적 사회 신호'로 처리하는 경향이 있다는 이야기를 들었었다. 이걸 응용해 서비스를 만들면 사용자에게 작은 소구점이라도 되지 않을까 생각했다.
&nbsp;

&nbsp; 
## 의도적인 불편

앱의 구조는 단순하다. 문장을 추가하고, 추가한 문장을 탭 하면 곧바로 복사된다. 집 주소나 인사말처럼 종종, 혹은 자주 써야 하는 문구들을 등록해 두고 쓰기에 좋은 서비스다.

앱의 구조가 단순한 만큼 UX도 단순하게 만들 수 있었다. 하지만 나는 일부러 UX를 불편하게 만들기로 했다. 새로운 글을 추가하거나 리스트를 편집하려면 반드시 화면의 스마일 얼굴을 눌러야 하게 단계를 추가했다.

이렇게 해서라도 스마일 페이스와의 인터랙션을 의도적으로 늘리는 것이 이 앱이 가진 특징을 잘 보여줄 방법이라고 생각했기 때문이다.
<img src="/assets/scb/sf.jpg">
<figcaption>스마일 페이스 인터랙션</figcaption>
&nbsp;

&nbsp; 
## 디자인

스마일 페이스가 조금은 살아있는 듯한 느낌을 주고 싶어서 Lottie로 애니메이션을 만들어 끄덕끄덕, 까딱까떡 거리게 만들었다. 그리고 앱의 상단에 흘러가는 텍스트 연출이나, 화면 아래로 내려갈수록 붉게 물드는 그라디언트 배경 같은 디테일들을 추가해 앱의 밋밋함을 덜어냈다.  
<img src="/assets/scb/ScreenRecording_05-20.gif">
<figcaption>끄덕끄덕 까딱까딱</figcaption>
&nbsp;

&nbsp; 
## 마치며

제작을 완료하고 한참이 지난 뒤에 쓰는 글이라 그런지, 지금 보면 여기저기 아쉬운 구석이 보인다. 
한편으론 생각보다 쓸만하다는 생각이 들기도 한다. (워낙 기능이 없는 앱이라 그렇겠지만...)   

출시 후 지금까지의 다운로드 수는 미미하고, 증가 추세도 매우 더디다. 아무런 홍보를 하지 않았음에도 누군가 이 앱을 다운로드 받는다는 것 자체가 신기한 일이라 생각하고 있지만, 그럼에도 기대를 한참 밑도는 성적은 아쉽다.

출시 이후 4번의 업데이트를 진행했다. 일부 글자가 제대로 보이지 않던 폰트 이슈를 제외하곤 매우 자잘한 업데이트였다. 앱을 전면적으로 뜯어고칠까? 하는 고민을 잠깐 하기도 했지만, 그 시간에 다른 앱에 신경 쓰는 게 낫다는 생각이 들어 접었다.

언젠가 다시 손을 댈 날이 오길 바란다.
&nbsp;

&nbsp; 
<hr>
<br>

〈스마일 카피 박스〉 다운로드 링크

<a href="https://apps.apple.com/kr/app/smile-copy-box-easy-clipboard/id6760682006?itscg=30200&itsct=apps_box_link&mttnsubad=6760682006" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>
<a href="https://play.google.com/store/apps/details?id=com.hckb.smilecopybox" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl_aos.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## 새 글이 올라오면 알려드릴게요

· <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHuizTnOoWGSPrmEpZFMyyVwV7yFAOE-V315bViF04uWnZA/viewform?usp=publish-editor" target="_blank">뉴스레터 신청</a>

· <a href="https://hacokebu.com/ko/rss.xml" target="_blank">RSS 구독</a>

