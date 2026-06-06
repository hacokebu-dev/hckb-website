---
id: making-of-breatheboy
title: 레트로 게임기 스타일 호흡 타이머, 〈브레스 보이〉 제작기
date: 26년 6월 5일
category: 제작기
description: "게임보이 감성을 담은 리얼한 3D 버튼 UI를 리얼리티킷으로 구현하고 호흡 타이머와 미니 게임을 결합해 출시한 기록입니다."
---

## 시작

미니 게임기 앱을 만들고 싶었다. 미니 게임이 잔뜩 들어있는 그런 미니 게임기.
그리고 버튼이 '리얼'한 미니 게임기. 진짜 눌리는 것처럼 말이다.

앞서 〈스트릭 다이얼〉, 〈데시벨 마스터 X〉, 〈거짓말 탐지기 3.0〉을 만들면서 진짜를 흉내 낸 그래픽을 여러 차례 만들었고, 나름의 노하우도 쌓였다. 하지만 그래픽 수준이 높아졌을 뿐, '진짜 같음'에 다가가진 못했다. 난 그 이유 중 하나가 '빛'이라고 생각했다. 그래픽으로 만든 것은 빛과 그림자과 항상 일정하니 가짜 같을 수 밖에 없다.

<video
src="/assets/breatheboy/apple.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
<div class="space-16"></div>
<figcaption>© APPLE</figcaption>
&nbsp;

iOS 26부터 도입된 Liquid Glass를 보면, 핸드폰을 이리저리 돌릴 때마다 아이콘 가장자리 하이라이트의 위치가 바뀐다. 아마 자이로스코프나 가속도계 같은 센서를 이용해 반사 위치를 실시간으로 계산하는 것일 테다. 나도 이런 방법을 응용해서 더 리얼한 물성을 만들어 보고 싶었다.
&nbsp;

&nbsp; 

## 시도

현실은 녹록지 않았다. 그래서 다른 방법을 생각했다. 3D 흉내가 아닌, 모델링으로 된 진짜 '3D 버튼'을 넣는 것이었다. 하지만 개발을 하려고 보니 참고할 만한 자료가 너무 없었다. 세상에 이딴 짓(?)은 아무도 하지 않는다는 듯했다.

그렇지만 이론적으로는 가능할 거 같았다. 우선 애플은 자체 3D 엔진인 리얼리티킷(RealityKit)을 제공하고 있었다. 3D 렌더링만 화면에 문제없이 보여진다면 어떻게든 되지 않을까 싶었다.

<img src="/assets/breatheboy/breathe01.jpg">
<figcaption>키 모델링</figcaption>
&nbsp;

다행히 테스트 삼아 만든 USDZ 파일이 문제없이 잘 열렸다. 처음엔 더 복잡한 모델을 사용하려 시도했는데, 렌더링에 자꾸 문제가 생겨서 결국 최대한 간결한 디자인의 모델로 변경하기도 했다.

변경한 모델은 X, Y, Z축을 기준으로 움직이는 각도와 방향을 제어하는 게 조금 헷갈렸을 뿐, 원하는 대로 작동해 주었다.
&nbsp;

&nbsp; 

## 아쉬움

다만 아쉬운 건 방향키가 눌렸을 때의 앵커 포인트(Anchor Point)가 조금 높다는 점이다. 앵커 포인트가 방향키 정중앙에 있어서, 버튼을 눌렀을 때 움직임이 약간 어색하다. 이것도 코드를 잘 만지면 될 거 같은데 계속 잘 안 돼서 그냥 포기했다. 완성도에 타협을 안 하고 싶은데, 만들다 보면 자꾸 타협을 하게 된다...

<video
src="/assets/breatheboy/pad.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
<div class="space-16"></div>
<figcaption>게임패드 키</figcaption>
&nbsp;

아무튼 이런저런 시도 끝에 3D 버튼을 사용하는 게임보이 스타일의 프로토타입을 만들 수 있었다. 화면 속 버튼이 진짜 입체적으로 움직이는 걸 보며 '이게 되는구나' 싶어 정말 기뻤다.
&nbsp;

&nbsp; 

## 아이디어

게임을 만들 차례가 되자 막상 내게 게임 아이디어가 없다는 사실을 깨달았다. (게임기를 만들고 싶었지, 게임을 만들고 싶었던 게 아니었던 것이다)

그래서 예전에 적어둔 아이디어 노트를 뒤적거리다 하나를 끄집어냈다. 바로 '호흡 타이머'였다.

게임기 UI에서 뭘 돌려야 가장 의미가 있을까 생각했는데 솔직히 딱히 떠오르는 게 없었다. 호흡 타이머는 그중에서 가장 손쉽고 직관적인 선택이었다.

우선 유명한 호흡법들을 탐색하고 앱에 추가했다. 호흡을 실행하고, 중단하고, 종료하는 과정에서 게임보이 특유의 감성을 느낄 수 있도록 UI를 세밀하게 구성했다. 조금이라도 앱을 더 자주 사용하길 바라는 마음에 '연속 일수(Streak)' 기능도 슬쩍 더했다.

마지막으로, 그래도 명색이 게임기 모양인데 게임이 하나도 없는 건 아쉬웠다. 그래서 인터넷 연결이 끊겼을 때 크롬 브라우저에서 하는 공룡 게임을 살짝 비틀어, 2단 점프가 되는 공룡 게임을 추가했다. 여기에 벽돌 깨기 등 가볍게 만들 수 있는 미니 게임들을 몇 가지 더 얹어서 구색을 맞췄다.
&nbsp;

&nbsp; 

## 수익화

수익 모델을 고민하다가, 호흡법이 당장 필요해서 숨을 고르려는 사람에게 광고를 강제로 보여주는 건 너무 과하다는 생각이 들었다. 그래서 호흡을 하는 동안에는 얼마나 오래 하건 광고가 전혀 나오지 않는다.

대신 기본 호흡법을 제외하면, 새로운 호흡법이나 게임을 해금하기 위해 1번씩 광고를 시청해야 하는 형태로 광고 노출을 설계했다.

사실 이 방식은 호흡법과 게임 종류를 계속 늘리지 않으면 내가 1명의 유저에게 얻을 수 있는 광고 수익에 명확한 한계가 있다. 그렇다고 콘텐츠를 늘린다고 해서 수익이 드라마틱하게 커지는 것도 아니고. 어쩔 수 없다고 생각했다. 결국 광고 수익이라는 건 사용자 수가 받쳐줘야 한다고 생각하며 넘겼다.

&nbsp; 

## 마치며

힘들게 3D로 구현한 UI인 만큼, 이 결과물을 호흡법 앱 하나에만 쓰고 끝낼 생각은 없다. 진짜 미니 게임기가 됐든, 전혀 다른 유틸리티가 됐든 다음 앱을 만들 때 이 3D 버튼 구조를 적극적으로 재사용할 예정이다.

마음을 차분하게 가라앉히는 호흡법도 좋고, 화면 속 3D 버튼을 누르는 손맛도 쏠쏠하니 다들 한 번씩 다운로드해서 사용해 보시면 좋겠다.

&nbsp;
<video
src="/assets/breatheboy/bb.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>

&nbsp; 
<hr>
<br>

〈브레스 보이 - 레트로 호흡 타이머〉 다운로드 링크

<a href="https://apps.apple.com/kr/app/%EB%B8%8C%EB%A0%88%EC%8A%A4-%EB%B3%B4%EC%9D%B4-%EB%A0%88%ED%8A%B8%EB%A1%9C-%ED%98%B8%ED%9D%A1-%ED%83%80%EC%9D%B4%EB%A8%B8/id6774436081" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## 새 글이 올라오면 알려드릴게요

· <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHuizTnOoWGSPrmEpZFMyyVwV7yFAOE-V315bViF04uWnZA/viewform?usp=publish-editor" target="_blank">뉴스레터 신청</a>

· <a href="https://hacokebu.com/ko/rss.xml" target="_blank">RSS 구독</a>

