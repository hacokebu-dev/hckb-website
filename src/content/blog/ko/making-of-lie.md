---
id: making-of-liedetector
title: 거짓말 탐지기 앱, 〈거짓말 탐지기 3.0〉 제작기
date: 26년 5월 27일
category: 제작기
description: "시장의 수요를 확인하고자 쉐이더를 활용한 생동감 있는 UI로 뻔한 장난 앱을 차별화하려 시도한 실험과 그 결과입니다."
---

## 시작

이 앱은 실험 용도였다. 지금까지 만든 앱들은 나름의 차별화 포인트를 넣으려 애썼다. 하지만 이 앱은 차별화에 신경 쓰지 않았다. 즉, 뻔한 거짓말 탐지기 중 하나다. 물론 디자인 측면으로 보면 내 마음에 들게 애쓴 만큼 괜찮은 편이라 생각하고, 그게 나름의 차별화 포인트라 볼 수도 있겠지만 아무튼 그렇다.

무슨 실험이냐 하면, "정말 이런 앱들이 수요가 있을까?" 하는 의문에 대한 실험이다.

이런 앱을 지금 개발해도 내가 생각하는 수준의 다운로드 수를 확보할 수 있을까? 또 광고로 수익을 얻을 수 있을까? 같은 의문에 답을 줄 수 있으면 하는 기대로 만들게 되었다.
&nbsp;

&nbsp; 

## 구조

진짜 거짓말 여부를 탐지하는 건 아니고, 장난 앱이기 때문에 사실상 로직이라 할 것도 없이 간단하다.

측정 -> 랜덤한 결과 노출.

다만, 유사 앱을 살펴보며 리서치를 해보니 음성을 이용하거나, 지문을 이용하는(물론 진짜 측정은 아니다) 방식이 주로 쓰이는 것을 볼 수 있었는데, 나는 뭐로 할까 고민하다가 그냥 2개 방식을 모두 넣기로 했다. 

메인 기능은 '음성 분석'으로 선택했다. 말하면 음성 파형이 목소리 크기에 따라 나오는 UI가 그럴싸하기 때문이다.
&nbsp;

&nbsp; 

## 디자인

앱의 디자인은 〈데시벨 마스터 X〉를 기초 삼았다. 물론, 만들다 보니 상당히 달라지긴 했다.

이번 앱 디자인에 특징을 한 가지 더 말하자면, Shader를 사용했다는 점이다. 

&nbsp; 
<video
src="/assets/lie/shader.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
&nbsp; 

측정 대기화면이 너무 정적이라 뭔가 움직이는 것을 넣고 싶었다. 평소라면 즐겨 사용하는 lottie를 썼겠지만, 이 앱에는 로티의 플랫한 애니메이션이 그다지 잘 어울릴 거 같지 않았다. 그래서 쉐이더를 떠올렸다.

아름답게 작동하는 쉐이더를 사용하니 훨씬 생동감 있는 앱이 된 거 같아 만족스럽다.
이번에는 기술 부족으로 직접 만든 쉐이더를 사용하지는 못했다. 다음에는 내가 직접 만든 쉐이더까지 사용해 보고 싶다.
&nbsp;

&nbsp; 

## 앱 이름

앱의 이름에 3.0이라는 숫자를 붙였다. 마치 3번째 버전인 것처럼 보이고 싶었다. 나름의 역사가 있는 앱처럼 보이고 싶다는 바람을 담은 꼼수였다. 효과는 모르겠다. 하지만 손쉽게 이름을 짓고 나름의 차별화를 줄 수 있다는 점에서 괜찮은 방식이 아닌가 싶다.
&nbsp;

&nbsp; 

## 완성

주변에 완성된 〈거짓말 탐지기 3.0〉을 써보게 하니까 모두들 "진짜야?"라고 물었다. 물론 못 믿겠으니까 그렇게 말했겠지만, 한편 꽤 그럴싸하긴 한가보다 싶었다. 애당초 아예 가짜 같았으면 "그럴싸하다"라고 했을 거 같다는 근거 없는 생각을 했다.
&nbsp;

&nbsp; 

## 결과

실험 결과를 말하자면 실패다. 다른 앱들과 크게 차이 없는 다운로드 수를 보여주고 있고, 반응도 크게 다르지 않다. 양산된 앱들이 많은 건 시장이 커서가 아니라 그저 만들기 쉬워서일 수도 있겠다.

어차피 만들 거라면 똑같은 게 아닌, 나름의 차별화와 소구점이 있는 서비스를 만들자.

&nbsp;
<video
src="/assets/lie/lie.mp4"
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

〈거짓말 탐지기 3.0〉 다운로드 링크

<a href="https://apps.apple.com/kr/app/%EA%B1%B0%EC%A7%93%EB%A7%90-%ED%83%90%EC%A7%80%EA%B8%B0-3-0/id6760927424" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## 새 글이 올라오면 알려드릴게요

· <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHuizTnOoWGSPrmEpZFMyyVwV7yFAOE-V315bViF04uWnZA/viewform?usp=publish-editor" target="_blank">뉴스레터 신청</a>

· <a href="https://hacokebu.com/ko/rss.xml" target="_blank">RSS 구독</a>

