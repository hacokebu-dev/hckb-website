---
id: making-of-croco
title: 악어 이빨 룰렛 게임, 〈두근두근 악어〉 제작기
date: 26년 5월 23일
category: 제작기
description: "피그마의 다이나믹 스트로크 그래픽과 로티 애니메이션으로 긴장감을 더해 구현한 클래식 악어 이빨 룰렛 게임 제작기입니다."
---

시각적인 즐거움이 있는 게임이 만들고 싶었다.

하지만 내가 생각한 '제대로 된 게임'이 갖춰야 할 방대한 요소들에 덜컥 겁부터 났다. 기획부터 리소스, 복잡한 로직까지 혼자 감당하기엔 무리겠다 싶어 고민을 이어가던 중, 문득 '악어 이빨 룰렛 게임'이 떠올랐다.

<img src="/assets/croco/croco01.jpg">
<figcaption>악어 이빨 룰렛 게임</figcaption>
&nbsp;

나름 그래픽적인 재미를 가득 줄 수 있으면서도 제작 난이도는 낮고, 무엇보다 모두가 이미 알고 있는 게임이라는 점이 매력적이었다. 물론 같은 이유로 이미 앱스토어에 여러 경쟁 앱들이 있긴 했다. 하지만 나만의 디테일을 한 스푼(?) 얹는다면, 경쟁 속에서도 나름의 역할을 할 수 있지 않을까 생각했다.
&nbsp;

&nbsp; 

## 개발

구조적으로는 간단한 게임이지만, 화면에 이빨을 자연스럽게 배치하는 건 생각보다 신경 써야 할 게 많았다.

디바이스 크기가 제각각인 환경에서도 일관성 있는 화면을 보여주어야 했기에, 전체 너비를 기준으로 잡고 악어 입과 이빨의 크기가 고정된 비율로 계산되도록 구현했다.

<img src="/assets/croco/croco02.jpg">
<figcaption>이빨 배치</figcaption>
&nbsp;

이빨 배치도 난관이 있었는데, 악어 입 구조상 이빨이 일렬이 아니라 호(Arc) 모양으로 휘어져야 했다. 이 부분은 수학적 계산을 통해 궤적을 굴리는 대신 각 이빨의 y축 오프셋 값을 코드에서 정밀하게 수동 조절하는 방식으로 해결했다. 여기에 악어의 윗 얼굴을 입과 살짝 겹치게 배치하는 레이어 디테일을 더해, 평면적인 그래픽임에도 약간의 입체감이 느껴지게 만들었다.
&nbsp;

&nbsp; 

## 긴장감 불어넣기

게임의 핵심 요소 중 하나는 긴장감이다. 이 긴장감을 유도하기 위해 악어의 '눈'을 이용했다. 자꾸 이빨 쪽을 바라보는 악어의 긴장된 눈을 만들기 위해 Lottie를 활용했다.

<img src="/assets/croco/croco03.gif">
<figcaption>움직이는 눈</figcaption>
&nbsp;

그래픽 애셋은 전부 피그마(Figma)에서 제작했다. 사실 개인적으로는 손에 익은 어도비 일러스트레이터를 선호한다. 하지만 요즘은 일러스트레이터를 사용하는 일 자체가 적다 보니 구독을 유지하지 않고 있어서 쓰지 못했다. 아쉬운 대로 피그마에서 다이나믹 스트로크(Dynamic Stroke) 효과를 적극적으로 활용해 외곽선의 밋밋함을 줄였고, 덕분에 귀여운 맛이 사는 디테일한 그래픽을 얻을 수 있었다.

<img src="/assets/croco/croco04.png">
<figcaption>다이나믹 스트로크 유무 차이</figcaption>
&nbsp;

&nbsp; 

## 앱 아이콘과 ASO 전략

앱 아이콘의 배경색을 그라디언트로 넣었다. 사실 전체적인 앱의 그래픽 톤앤매너와 비교하면 굳이 화려한 그라디언트가 나올 이유가 없다.

<img src="/assets/croco/croco05.jpg">
<figcaption>두근두근 악어 앱 아이콘</figcaption>
&nbsp;

그럼에도 이런 선택을 한 이유는 순전히 앱스토어 내에서 돋보이고 싶었기 때문이다. 다소 무난한 앱 아이콘 사이에서 화려한 그라디언트가 시선을 잡아끌기를 바랐다. 나름 앱스토어 최적화(ASO) 전략인데 실제로 효과가 있는지는 잘 모르겠다.
&nbsp;

&nbsp; 

## 마치며

대단한 서비스는 아니지만, 처음 구상했던 바를 정확하게 구현했다는 점이 만족스러운 프로젝트다.

지금은 소소하게 하루의 운을 점치는 용도로도 요긴하게 써먹고 있다.

&nbsp;
<video
src="/assets/croco/croco06.mp4"
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

〈두근두근 악어〉 다운로드 링크

<a href="https://apps.apple.com/kr/app/%EB%91%90%EA%B7%BC%EB%91%90%EA%B7%BC-%EC%95%85%EC%96%B4-croco-tooth/id6760696705" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## 새 글이 올라오면 알려드릴게요

· <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHuizTnOoWGSPrmEpZFMyyVwV7yFAOE-V315bViF04uWnZA/viewform?usp=publish-editor" target="_blank">뉴스레터 신청</a>

· <a href="https://hacokebu.com/ko/rss.xml" target="_blank">RSS 구독</a>

