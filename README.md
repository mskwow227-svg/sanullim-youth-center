# 산울림청소년센터 소개 페이지

QR코드를 스캔해 들어오는 방문자에게 **산울림청소년센터 소개와 6대 사업**을 한 페이지로 요약해서 보여주는 정적 웹페이지입니다.

- 센터 소개(미션·비전·전략목표·주요 인증)
- 사업 소개 6종: 자치기구 · 참여활동 · 생태환경 · 모험활동 · 방과후아카데미 · 참여공간
- 시설 안내, 오시는 길(대중교통·자가용·지도 링크)
- 프로그램 신청 등 상세 정보는 [공식 홈페이지](https://www.bwyf.or.kr/echoyouth/index.do)로 안내

## 기술 구성

빌드 도구·프레임워크 없이 **순수 HTML / CSS / JS**로만 만들어졌습니다. 저장소를 그대로 정적 호스팅에 올리면 배포됩니다.

```
index.html              # 마크업 (전체 콘텐츠)
vercel.json             # Vercel 보안·캐시 헤더 (빌드 없음)
assets/
  css/styles.css        # 디자인 토큰(CSS 변수) + 컴포넌트 스타일
  js/main.js            # 스크롤스파이 · 연도 자동 갱신
  favicon.svg
```

## 콘텐츠 수정하기

모든 텍스트는 [`index.html`](index.html) 안에 직접 작성되어 있습니다. 섹션은 `id`로 구분됩니다.

| 섹션 | id |
|---|---|
| 히어로 | `#top` |
| 센터 소개 | `#about` |
| 사업 소개 | `#programs` |
| 시설 안내 | `#facility` |
| 오시는 길 | `#location` |

색상·간격·폰트는 [`assets/css/styles.css`](assets/css/styles.css) 상단 `:root` 변수에서 바꿀 수 있습니다.

## 로컬에서 미리보기

빌드가 필요 없습니다. `index.html` 을 브라우저로 바로 열면 됩니다.

## 배포 (Vercel)

1. 이 저장소를 GitHub에 올립니다.
2. [vercel.com/new](https://vercel.com/new) → **Import Git Repository** 로 이 저장소를 선택합니다.
3. **Project Name**: 예) `sanullim-youth-center` · **Framework Preset**: `Other` · **Root Directory**: `./` · Build/Output 설정은 비워 둠 (정적)
4. **Deploy**

배포 후 실제 주소가 확정되면:
- `index.html` 의 `canonical` / `og:url` (10·20번째 줄 부근) 을 실제 주소로 바꿔주세요.
- 그 주소로 **QR코드를 생성**해 인쇄물·안내판에 부착하면 됩니다. (QR 생성기 예: [me-qr.com](https://me-qr.com), [qr-code-generator.com](https://www.qr-code-generator.com))

`vercel.json` 에 보안 헤더와 캐시 정책이 정의돼 있어 push 후 내용이 즉시 반영됩니다. 빌드 단계는 없습니다.

## 앞으로 할 일 (선택)

- [ ] 센터 대표 사진 (히어로 배경, 시설 사진)
- [ ] 커스텀 도메인 연결 시 `canonical` / `og:url` 갱신
- [ ] 실제 배포 주소로 QR코드 생성 및 부착

## 문의

산울림청소년센터 032-344-4480
