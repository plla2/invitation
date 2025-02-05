import { MoveDirection } from '@tsparticles/engine';

export const options = {
  fullScreen: { enable: false, zIndex: 0 }, // 전체 화면 비활성화
  particles: {
    color: {
      value: '#7C93C3', // 눈 색상
    },
    number: {
      value: 50, // 눈송이 개수
      density: {
        enable: true,
        area: 800, // 밀도 영역
      },
    },
    shape: {
      type: 'circle', // 눈 모양 (이미지 사용 가능)
    },
    move: {
      direction: MoveDirection.bottom, // 아래로 이동
      enable: true,
      random: false,
      straight: false,
      speed: { min: 1, max: 3 }, // 속도 랜덤화
      angle: {
        offset: 0,
        value: { min: -10, max: 10 }, // 바람 효과
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.8 }, // 투명도 랜덤화
      animation: {
        enable: true,
        speed: 0.3, // 점점 사라지는 효과
        sync: false,
      },
    },
    size: {
      value: { min: 2, max: 8 }, // 눈송이 크기
      animation: {
        enable: true,
        speed: 1, // 크기 변화 속도
        minimumValue: 2,
        sync: false,
      },
    },
    wobble: {
      distance: 30, // 흔들리는 거리
      enable: true,
      speed: { min: -3, max: 3 }, // 흔들리는 속도 랜덤화
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble', // 마우스 오버 시 반응
      },
    },
    modes: {
      bubble: {
        distance: 100,
        size: 10,
        duration: 0.2,
        opacity: 1,
      },
    },
  },
  detectRetina: true,
};
