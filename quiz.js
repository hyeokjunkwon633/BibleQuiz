/* ============================================================
   2026 성경퀴즈대회 — 점수대별(10~50점) 최종 선정 문항
   "성경퀴즈대회 문항 최종.md"에 사용자가 직접 부여한
   "문항 : 배점-n" 태그를 유일한 기준으로 재구성했습니다(2026-09-19).

   - 문제(q)·선지·정답(a)은 "성경퀴즈대회 문항 최종.md" 원문과
     완전히 동일한 문구로 작성했습니다(선지 번호가 원본에서 깨져 있던
     20-4번만 ①②③④ 표기로 정리했고, 그 외 문구는 그대로입니다).
   - 그림 문항(10-4, 10-6, 20-3, 20-6, 50-6)은 img 필드에 "문항 이미지/" 경로를 넣었습니다.
     그림이 2장 이상이면 화면에 ①②③… 번호가 붙어 선지 역할을 합니다.
   - 40-1은 최종.md에 태그가 없어(40-2~40-6만 존재) 사용자 확인 결과
     기존 40-1 문항(예은 탭 2번, 공통 빈칸 오답 찾기)을 그대로 유지했습니다.
   ============================================================ */
const QUESTIONS = [

  /* ---------------- 10점 ---------------- */
  { id:"10-1", tier:10, type:`OX퀴즈`,
    q:`28장 1절의 "악인은 쫓아오는 자가 없어도 도망하나 의인은 사자 같이 담대하리라"는 악인의 소심함과 꾸짖고, 의인의 용맹함을 칭찬하고 있다. (O / X)`,
    a:`X`,
    refs:[`잠언 28:1`, `해설: 악인은 소심하고, 의인은 용기롭다는 뜻이 아님. 의인은 하나님 앞에 살기 때문에 담대하다는 것을 저자는 이야기 함`],
    src:`예성 탭 4번 · 성경퀴즈대회 문항 최종.md` },

  { id:"10-2", tier:10, type:`5지선다`,
    q:`잠언 25장 3절(하늘의 높음과 땅의 깊음 같이 왕의 마음은 헤아릴 수 없느니라)와 이사야 43장 18~19절(너희는 이전 일을 기억하지 말며…보라 내가 새 일을 행하리니)의 공통점으로 알맞은 것은?\n\n① 인간의 어리석음을 꾸짖고 있다\n② 하나님은 보이지 않아도 일하신다\n③ 왕의 변덕스러움과 대비되는 하나님의 전지전능하심을 나타낸다\n④ 사람이 현재의 상황만으로 앞으로 일어날 일을 판단해서는 안 된다고 말한다.\n⑤ 인간이 이해할 수 없는 모든 일은 하나님의 뜻으로 받아들여야 한다고 가르친다.`,
    a:`②`,
    refs:[`잠언 25장 3절`, `이사야 43장 18~19절`, `해설: 두 구절 모두 우리가 인지하지 못해도 살아서 일하고 계시는 하나님에 대해 이야기 하고 있으며, 따라서 우린 그분의 일하심을 의심하지 말 것을 권면한다.`],
    src:`예성 탭 1번 · 성경퀴즈대회 문항 최종.md` },

  { id:"10-3", tier:10, type:`4지선다`,
    q:`잠언 16장 3절("너의 행사를 여호와께 맡기라 그리하면 네가 경영하는 것이 이루리라.")에서 "맡기라"는 의미와 다른 것은?\n\n① 무거운 돌을  굴려 가면서 그 무게와 움직임을 땅에 맡기다.\n② 물살에 돌을 던져 그 움직임을 물의 흐름에 맡기다.\n③ 무거운 짐을 수레에 옮겨 싣고, 그 운반을 수레에 맡기다.\n④ 은행에 막대한 예금을 안전하게 맡기다.`,
    a:`④`,
    refs:[`잠언 16:3`, `해설: "맡기라"의 의미는 '굴리다', '옮기다', '뒹굴다', '던지다' 즉 자기포기, 자기 부인, 전적인 신뢰와 순종인데, 즉 내 손에서 하나님의 손으로 넘겨주는 주권이양.`],
    src:`예은 탭 9번 · 성경퀴즈대회 문항 최종.md` },

  { id:"10-4", tier:10, type:`주관식 그림문제`,
    q:`다음 그림이 나타내는 사람은 어떤 사람인가?`,
    img:[`문항 이미지/10-4.jpg`], imgH:`60vh`,
    a:`게으른 자`,
    refs:[`잠언 20:4, 19:24 — 반복적으로 나오는 게으른 자에 대한 설명`],
    src:`혁준 탭 32번 · 성경퀴즈대회 문항 최종.md` },

  { id:"10-5", tier:10, type:`5지선다`,
    q:`잠언 9장에서 지혜가 마련한 집 기둥의 개수는?\n\n①4개\n②5개\n③7개\n④12개\n⑤100개`,
    a:`③`,
    refs:[`잠언 9:1 "지혜가 그의 집을 짓고 일곱 기둥을 다듬고"`],
    src:`은아 탭 44번 · 성경퀴즈대회 문항 최종.md` },

  { id:"10-6", tier:10, type:`그림 선택형`,
    q:`잠언서에서 계속 반복되는 가르침에 비추어 봤을 때 어떤 행동이 솔로몬이 보았을 때 합당할 지 선택하시오`,
    img:[`문항 이미지/10-6_1.png`, `문항 이미지/10-6_2.png`],
    a:`②`,
    refs:[`잠언 23:9 "미련한 자의 귀에 말하지 말지니 이는 그가 네 지혜로운 말을 업신여길 것임이니라."`],
    src:`예성 탭 2번 · 성경퀴즈대회 문항 최종.md` },

  /* ---------------- 20점 ---------------- */
  { id:"20-1", tier:20, type:`4지선다`,
    q:`자녀가 잘못을 저질렀다. 잠언 13장의 가르침에 비추어 볼 때 자식을 사랑하는 부모의 행동은 무엇인가?\n\n① 부모의 뜻을 강요하기보다, 자녀 스스로 깨달을 때까지 기다려 준다.\n② 자녀의 잘못을 지적하지 않고 조용히 감싸 준다.\n③ 잘못에 대한 판단은 하나님께 맡기고 기도한다.\n④ 지체하지 말고 훈계하며 잘못을 고치도록 돕는다.`,
    a:`④ 지체하지 말고 훈계하며 잘못을 고치도록 돕는다.`,
    refs:[`잠언 13장`],
    src:`예은 탭 1번 · 성경퀴즈대회 문항 최종.md` },

  { id:"20-2", tier:20, type:`5지선다`,
    q:`잠언에 나오는 '면류관'에 대한 내용 중 아닌 것은?\n\n① 영화의 면류관\n② 생명의 면류관\n③ 지식의 면류관\n④ 노인의 면류관\n⑤ 지아비의 면류관`,
    a:`② 생명의 면류관 (잠언에는 없고 야고보서 1:12, 요한계시록 2:10 등에 나옴)`,
    refs:[`16:31 영화의 면류관`, `17:6 노인의 면류관`, `14:18 지식의 면류관`, `12:4 지아비의 면류관`],
    src:`예은 탭 8번 · 성경퀴즈대회 문항 최종.md` },

  { id:"20-3", tier:20, type:`4지선다(그림, 빈칸 채우기)`,
    q:`"정녕히 재물은 스스로 날개를 내어 하늘을 나는 (      )처럼 날아가리라"(23:5)에서 저자가 왜 하필 이 대상에 빗대었는지 생각할 때, 빈칸에 들어갈 말로 가장 알맞은 것은?`,
    img:[`문항 이미지/20-3_1.jpg`, `문항 이미지/20-3_2.jpg`, `문항 이미지/20-4_3.jpg`, `문항 이미지/20-4_4.jpg`],
    a:`① 독수리`,
    refs:[`잠언 23:5`, `해설: 그림 퀴즈로 재미있게 접근하면 어떨까...?`],
    src:`혁준 탭 40번 · 성경퀴즈대회 문항 최종.md` },

  { id:"20-4", tier:20, type:`상황 판단형(4지선다)`,
    q:`다음 상황에 대한 설명으로 옳은 것은?\n[어떤 사람이 굶주려 배를 채우려고 도둑질을 했다. 이 사람이 들키면 어떤 일이 일어나는가?]\n\n① 불쌍하니 사람들에게 용서받는다\n② 훔친 것의 두 배를 갚아야 한다.\n③ 칠 배를 갚고, 자기 집의 것을 다 내줄 수도 있다.\n④ 다시는 도둑질하지 않겠다고 약속하면 벌을 면한다.`,
    a:`③ 칠 배를 갚고, 자기 집의 것을 다 내줄 수도 있다.`,
    refs:[`잠언 6:30-31`],
    src:`민주 탭 31번 · 성경퀴즈대회 문항 최종.md (선지 번호만 ①②③④로 정리, 문구는 원문 그대로)` },

  { id:"20-5", tier:20, type:`4지선다`,
    q:`잠언 16장 1절의 "마음의 경영은 사람에게 있어도 말의 응답은 여호와께로부터 나오느니라"는 말씀에 대한 이해로 옳지 않은 것을 고르시오.\n\n①"마음의 경영"은 자신의 내면을 바르게 정돈하고 삶의 우선순위를 세워 계획하는 것을 의미한다.\n② 사람은 자신의 생각으로 계획을 세우기보다 하나님께서 모든 것을 이루어 가시도록 온전히 맡기고 하나님의 뜻을 기다리는 것이 중요하다.\n③ '말의 응답'은 하나님께서 정하신 때와 방법으로 응답하심을 신뢰하며 기다리는 신앙과 관련된다.\n④ "말의 응답"은 인간의 노력에 대한 하나님의 결정적인 개입을 나타내며, 그 결과가 하나님의 주권과 섭리 안에 있음을 뜻한다.`,
    a:`②`,
    refs:[`잠언 16:1`, `해설: 1절 말씀의 의미는 하나님은 우리에게 내 마음의 경영권을 나에게 위탁하셨다. (자유의지를 주셨다) 위탁하신 하나님의 기대는, 스스로 선택하되, 하나님을 선택하는 쪽으로향하길 원하신다. 그리고 하나님을 선택했다면 기도해야한다. 내 경영권이 바로 위탁될 수 있도록. 인간의 계획이 아무리 완벽할지라도 하나님이 만져주실 때 완성될 수 있다.`],
    src:`예은 탭 6번 · 성경퀴즈대회 문항 최종.md` },

  { id:"20-6", tier:20, type:`상황 판단형(그림)`,
    q:`다음은 잠언을 읽은 갑, 을, 병의 대화이다. 갑, 을, 병 중 잠언을 잘 이해한 사람은?`,
    img:[`문항 이미지/20-6.png`],
    a:`병`,
    refs:[`갑: 미련한 자는 당장 분노를 나타내거니와 슬기로운 자는 수욕을 참느니라 (16절)`,
          `을: 성경은 진실을 말할 것을 원칙으로 가르칩니다. (5절, 17절, 19절, 20절) — 십계명 "네 이웃에 대하여 거짓 증거하지 말라"(출20:16), 잠언 "거짓 입술은 여호와께 미움을 받아도 진실하게 행하는 자는 그의 기뻐하심을 받느니라"(잠12:22), "거짓말쟁이는 벌을 면하지 못할 것이요 거짓을 말하는 자도 망할 것이라"(잠19:5)`,
          `병: 미련한 자는 자기 행위를 바른 줄로 여기나 지혜로운 자는 권고를 듣느니라 (15절)`],
    src:`은아 탭 47번 · 성경퀴즈대회 문항 최종.md` },

  /* ---------------- 30점 ---------------- */
  { id:"30-1", tier:30, type:`5지선다`,
    q:`잠언에서 '생명의 샘'이라고 표현된 것이 아닌 것은 무엇일까요?\n\n① 지혜 있는 자의 교훈② 여호와를 경외하는 것③ 의인의 입④ 명철⑤ 의인의 열매`,
    a:`⑤ 의인의 열매는 생명나무라`,
    refs:[`지혜 있는 자의 교훈 → 13:14`, `여호와를 경외하는 것 → 14:27`, `의인의 입 → 10:11`, `명철 → 16:22`, `의인의 열매 → 11:30 "의인의 열매는 생명나무라" → 생명의 샘이 아님`],
    src:`예은 탭 3번 · 성경퀴즈대회 문항 최종.md` },

  { id:"30-2", tier:30, type:`4지선다`,
    q:`잠언 15장의 말씀에 비추어 볼 때, 부적절 한 삶의 모습에 해당하지 않는 것은?\n\n① 재물을 많이 소유한 것\n② 자신의 감정을 즉시 표현하는 것\n③ 준비될 때까지 행동을 미루는 것\n④ 다른 사람의 의견보다 자신의 판단을 우선하는 것`,
    a:`1`,
    refs:[`가산이 적어도 여호와를 경외하는 것이 크게 부하고 (15:16)`,
          `1. 재물을 사랑하는 마음이 해로운 것임. 가산이 적은 게 잘하는 것도 아니고, 재물이 많은 게 죄라는 것도 아님. 그러나 재물은 인생을 번뇌케한다.`,
          `2. 분을 쉽게내는 것     3. 게으름         4. 독단적인 사고`],
    src:`예은 탭 5번 · 성경퀴즈대회 문항 최종.md` },

  { id:"30-3", tier:30, type:`주관식(히브리어 단어)`,
    q:`다음 단어를 히브리어로 하면 무엇인가요?\n\n① 잠언\n② 지혜롭다\n③ 맡기다`,
    a:`① 마샬 ② 호크마 ③ 갈랄`,
    refs:[`성도님들 탭 48·49번(잠언=마샬, 지혜롭다=호크마)`, `맡기다=갈랄(사용자 지정)`],
    src:`성도님들 탭 48·49번 + 사용자 지정(맡기다=갈랄) · 성경퀴즈대회 문항 최종.md` },

  { id:"30-4", tier:30, type:`서술형(3가지 나열)`,
    q:`여호와를 경외하는 것은 생명의 샘이니 사망의 그물에서 벗어나게 하느니라. 경외한다의 의미를 말하세요 (총 3가지)`,
    a:`하나님을 하나님으로 인정해드린다.\n하나님을 하나님으로 존중한다.\n하나님의 말씀대로 순종한다.`,
    refs:[`잠언 14:27`],
    src:`예은 탭 4번(주관식) · 성경퀴즈대회 문항 최종.md` },

  { id:"30-5", tier:30, type:`순서 배열형`,
    q:`다음 구절을 올바른 순서로 배열하시오.\n\nㄱ. 너는 범사에 그를 인정하라\nㄴ. 네 명철을 의지하지 말라\nㄷ. 그리하면 네 길을 지도하시리라\nㄹ. 너는 마음을 다하여 여호와를 신뢰하고`,
    a:`ㄹ-ㄴ-ㄱ-ㄷ (3:5~6)`,
    refs:[`잠언 3:5-6`],
    src:`민주 탭 27번 · 성경퀴즈대회 문항 최종.md` },

  { id:"30-6", tier:30, type:`초성 퀴즈`,
    q:`초성을 이용하여 잠언 8장 17절 말씀을 완성하세요.(단, 한 글자도 틀리지 않아야 인정)\n\n"ㄴㄹ ㅅㄹㅎㄴ ㅈㄷㅇ ㄴㅇ ㅅㄹㅇ ㅇㅇㅁ ㄴㄹ ㄱㅈㅎ ㅊㄴ ㅈㄱ ㄴㄹ ㅁㄴ ㄱㅇㄴㄹ"`,
    a:`나를 사랑하는 자들이 나의 사랑을 입으며, 나를 간절히 찾는 자가 나를 만날 것이니라`,
    refs:[`잠언 8:17`],
    src:`은아 탭 43번 · 성경퀴즈대회 문항 최종.md` },

  /* ---------------- 40점 ---------------- */
  { id:"40-1", tier:40, type:`객관식(정답 2개)`,
    q:`26장 1~16절은 우리가 인생에서 멀리해야 하는 인물에 대해 가르치고 있습니다.\n이때 우리가 멀리해야 하는 사람의 특징으로 잘못된 것은? (정답 2개)\n\n① 미련한 자는 능력이 부족하여 영예를 얻기에 합당하지 않다(잠 26:1)\n② 미련한 자는 귀가 좋지 않아 남의 말을 잘 듣지 못 한다\n③ 미련한 자와 스스로를 지혜롭게 여기는 사람은 똑같이 해롭다 (26:12)\n④ 게으른 자는 나태하여 문제 발생시 원인을 찾는 것조차 귀찮아 한다(26:13)\n⑤ 게으른 자는 스스로를 지혜롭게 여기는 사람이다.(잠 26:16)\n⑥ 사람은 악하여 분란 일으키는 사람을 쫓아내도 또 다른 이가 등장한다(잠 26:20)\n⑦ 마음이 악한 사람은 겉으로도 그 악함이 드러난다(잠 26:23~25)\n⑧ 악한 사람은 자신의 악함으로 인해 결국 패망한다. (잠 26:27~28)`,
    a:`⑤, ⑧`,
    refs:[`잠언 26장 16절`],
    src:`예성 탭 3번 · 성경퀴즈대회 문항 최종.md` },

  { id:"40-2", tier:40, type:`연결형(4쌍)`,
    q:`잠언 13,14장에서 묘사하고 있는 의인과 해당되는 행동을 바르게 연결하세요\n\n㉠ 지혜로운 자             ⓐ 자기 생명을 보전함\n㉡ 입을 지키는 자         ⓑ 아비의 훈계를 받아들임\n㉢ 슬기로운 자             ⓒ 지식으로 면류관을 삼음\n㉣ 정직하게 행하는 자    ⓓ 여호와를 경외함`,
    a:`ㄱ-b       ㄴ-a      ㄷ-c      ㄹ-d`,
    coop:`순차적으로 나와 줄 긋기(원본 운영 메모).`,
    refs:[`잠언 13-14장`],
    src:`예은 탭 4번 · 성경퀴즈대회 문항 최종.md` },

  { id:"40-3", tier:40, type:`연결형(4쌍)`,
    q:`다음 잠언 구절과 그 동물을 옳게 연결하시오.\n\n① 힘이 없지만 먹을 것을 여름에 준비하는 ⓐ 개미\n② 약하지만 집을 바위에 짓는 ⓑ 사반\n③ 임금이 없지만 다 떼를 지어 다니는 ⓒ 메뚜기\n④ 작아도 왕궁에 있는 ⓓ 도마뱀`,
    a:`① - ⓐ               ② - ⓑ             ③ - ⓒ             ④ - ⓓ`,
    refs:[`잠언 30:24-28`],
    src:`예성 탭 5번 · 성경퀴즈대회 문항 최종.md` },

  { id:"40-4", tier:40, type:`연결형(4쌍)`,
    q:`잠언 19장에 나오는 인물(행동)과 그에 따른 결과를 알맞게 연결하시오.\n\n① 노하기를 더디 하는 자 — ⓐ 벌을 면하지 못함(19:5, 19:9)\n② 거짓 증인 — ⓑ 부끄러움과 능욕을 부름(19:26)\n③ 권고를 듣고 훈계를 받는 자 — ⓒ 자기의 슬기와 영광이 됨(19:11)\n④ 부모를 구박·쫓아내는 자식 — ⓓ 지혜롭게 됨(19:20)`,
    a:`①-ⓒ,②-ⓐ,③-ⓓ,④-ⓑ`,
    refs:[`19:5`, `19:9`, `19:11`, `19:16`, `19:26`, `해설: 19장 전반에 흩어진 '행동-결과' 짝을 정확히 매칭할 수 있는지 확인.`],
    src:`혁준 탭 33번 · 성경퀴즈대회 문항 최종.md` },

  { id:"40-5", tier:40, type:`릴레이 단답(4가지, 팀 협동)`,
    q:`잠언 23장 23절 말씀에는 사되, 팔지는 말아야 하는 네 가지를 말합니다.\n네 가지를 차례대로 말하시오.`,
    a:`①진리/지혜/훈계/명철`,
    coop:`네 명이서 차례대로 네 가지 다 말해야 점수 주는 문항으로 구성. 배점: 40점, 문항 중 맞춘 갯수대로 10~40점 부여.`,
    refs:[`잠언 23:23`, `해설: 진리·지혜·훈계·명철을 값을 치르고서라도 지켜야 할 것으로 아는지 확인`],
    src:`혁준 탭 38번 · 성경퀴즈대회 문항 최종.md` },

  { id:"40-6", tier:40, type:`주관식`,
    q:`<질문>\n말씀에서 '이것'이 가리키는 것은 무엇일까요?\n<말씀>\n·'이것'을 네 손가락에 매며 '이것'을 네 마음판에 새기라\n·그리하면 '이것'이 너를 지켜서 음녀에게, 말로 호리는 이방 여인에게 빠지지 않게 하리라`,
    a:`계명`,
    refs:[`1절 내 아들아 내 말을 지키며 내 계명을 간직하라`,
          `2절 내 계명을 지켜 살며 내 법을 네 눈동자처럼 지키라`,
          `3절 이것을 네 손가락에 매며 이것을 네 마음판에 새기라`,
          `4절 지혜에게 너는 내 누이라 하며 명철에게 너는 내 친족이라 하라`,
          `5절 그리하면 이것이 너를 지켜서 음녀에게, 말로 호리는 이방 여인에게 빠지지 않게 하리라`],
    src:`은아 탭 42번 · 성경퀴즈대회 문항 최종.md` },

  /* ---------------- 50점 ---------------- */
  { id:"50-1", tier:50, type:`빈칸 채우기(공통 오답 찾기)`,
    q:`다음 잠언 말씀의 빈칸에 들어가는 말이 나머지와 다른 것은?\n\n① 입을 지키는 자는 자기의 (   )을/를 보전하나 입술을 크게 벌리는 자에게는 멸망이 오느니라 (13:3)\n② 여호와를 경외하는 자에게는 견고한 의뢰가 있나니 그 자녀들에게 (   )가/이 있으리라 (14:26)\n③ (   )의 경계를 듣는 귀는 지혜로운 자 가운데에 있느니라 (15:31)\n④ 왕의 희색은 (   )을/를 뜻하나니 그의 은택이 늦은 비를 내리는 구름과 같으니라 (16:15)\n⑤ 지혜있는 자의 교훈은 (   )의 샘이니 사망의 그물에서 벗어나게 하느니라 (13:14)`,
    a:`② -피난처 (①③④⑤는 모두 "생명", ②만 "생명"이 아님)`,
    refs:[`13:3`, `14:26`, `15:31`, `16:15`, `13:14`],
    src:`예은 탭 2번 · 최종.md에 40-1 태그가 없어 사용자 확인 후 기존 문항 유지(2026-09-19)` },

  { id:"50-2", tier:50, type:`5지선다`,
    q:`잠언을 읽고 성경을 이해한 것 중 옳지 않은 것은?\n\n① 예수님께서 "부자가 천국에 들어가는 것은 낙타가 바늘귀로 들어가는 것보다 어렵다"고 하신 말씀은, 부자가 재물로 인해 교만해지기 쉽기 때문이라 이해할 수 있다.\n② 아간의 죄로 이스라엘이 아이성 점령에 실패한 것은 악인 한 사람으로 공동체가 패망할 수 있음을 보여준다.\n③ "나는 비천에 처할 줄도 알고 풍부에 처할 줄도 안다"는 바울의 고백과, 가난과 부를 언급한 아굴의 생각은 일치한다.\n④ 형제들이 요셉을 팔아버린 사건은 시기심이 자신과 가정을 병들게 함을 보여준다.\n⑤ 하만이 모르드개를 죽이려다 자신이 세운 나무에 매달려 죽은 사건은 악을 꾀하는 자가 스스로 화를 자초함을 보여준다.`,
    a:`③`,
    refs:[`아굴은 환경의 변화로 인해 하나님을 잃을까 걱정한 것이고, 바울은 환경의 변화 속에서도 하나님을 향한 마음이 변하지 않는다는 의미임으로 일치한다고 보긴 힘들다`,
          `④ "평온한 마음은 육신의 생명이나 시기는 뼈를 썩게 하느니라"(잠언 14:30)`,
          `⑤ "함정을 파는 자는 그것에 빠질 것이요 돌을 굴리는 자는 도리어 그것에 치이리라"(잠언 26:27)`],
    src:`예성 탭 6번 · 성경퀴즈대회 문항 최종.md` },

  { id:"50-3", tier:50, type:`OX(5문항, 팀 협동)`,
    q:`잠언 24장 17~18절("네 원수가 넘어질 때에 즐거워하지 말며... 여호와께서... 그의 진노를 그에게서 옮기실까 두려우니라")의 가르침에 비추어 옳게 행동했으면 O 잘못 행동했으면 X\n\n① 자신을 죽이려 한 원수 사울 왕의 전사 소식을 들은 다윗\n② 니느웨에서 회개하라 전한 뒤 니느웨를 바라보는 요나\n③ 자신을 노예로 팔았던 형들을 다시 마주한 요셉\n④ 하루아침에 모든 소유를 잃고 친구들에게도 죄인 취급 받은 욥\n⑤ 형제 국가인 남유다가 멸망하여 포로로 끌려가는 것을 바라보는 에돔 족속`,
    a:`① O  ② X  ③ O  ④ O  ⑤ X`,
    coop:`배점: 최대 50점(맞춘 만큼 점수를 주는 방식 고려, 원본 운영 메모).`,
    refs:[`잠언 24:17-18`, `해설: ① O - 다윗은 원수 사울의 전사 소식에 애통해하며 금식함 ② X - 요나는 니느웨가 멸망하기를 바라다 하나님께 책망받음 ③ O - 요셉은 자신을 판 형들을 용서하며 위로함 ④ O - 욥은 모든 것을 잃고 죄인 취급을 받아도 입술로 범죄하지 않음 ⑤ X - 에돔 족속은 형제 나라 유다의 몰락을 기뻐하다 심판을 받음(오바댜)`],
    src:`혁준 탭 41번 · 성경퀴즈대회 문항 최종.md` },

  { id:"50-4", tier:50, type:`속담 릴레이 퀴즈`,
    q:`속담 릴레이 퀴즈`,
    a:`세 살 버릇 여든까지 간다
벼는 익을수록 고개를 숙인다
가는 말이 고와야 오는 말이 곱다
낮말은 새가 듣고 밤말은 쥐가 듣는다
제 꾀에 제가 넘어간다`,
    slides:[
      { v:`사람이 무엇으로 심든지 그대로 거두리라`, r:`갈라디아서 6:7`, a:`콩 심은 데 콩 나고 팥 심은 데 팥 난다`, ex:true },
      { title:true },
      { v:`마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라`, r:`잠언 22:6`, a:`세 살 버릇 여든까지 간다` },
      { v:`교만이 오면 욕도 따라오거니와 겸손한 자에게는 지혜가 있느니라`, r:`잠언 11:2`, a:`벼는 익을수록 고개를 숙인다` },
      { v:`유순한 대답은 분노를 쉬게 하여도 과격한 말은 노를 격동하느니라`, r:`잠언 15:1`, a:`가는 말이 고와야 오는 말이 곱다` },
      { v:`두루 다니며 한담하는 자는 남의 비밀을 누설하나 마음이 신실한 자는 그런 것을 숨기느니라`, r:`잠언 11:13`, a:`낮말은 새가 듣고 밤말은 쥐가 듣는다` },
      { v:`함정을 파는 자는 그것에 빠질 것이요 돌을 굴리는 자는 도리어 그것에 치이리라`, r:`잠언 26:27`, a:`제 꾀에 제가 넘어간다` }],
    refs:[`22:6 · 마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라 → 세 살 버릇 여든까지 간다`,
          `11:2 · 교만이 오면 욕도 따라오거니와 겸손한 자에게는 지혜가 있느니라 → 벼는 익을수록 고개를 숙인다`,
          `15:1 · 유순한 대답은 분노를 쉬게 하여도 과격한 말은 노를 격동하느니라 → 가는 말이 고와야 오는 말이 곱다`,
          `11:13 · 두루 다니며 한담하는 자는 남의 비밀을 누설하나 마음이 신실한 자는 그런 것을 숨기느니라 → 낮말은 새가 듣고 밤말은 쥐가 듣는다`,
          `26:27 · 함정을 파는 자는 그것에 빠질 것이요 돌을 굴리는 자는 도리어 그것에 치이리라 → 제 꾀에 제가 넘어간다`],
    src:`혁준 탭 · 잠언과 속담 대응 퀴즈(5쌍) · 성경퀴즈대회 문항 최종.md (배점: 최대 50점 배점 가능, 원본 운영 메모)` },

  { id:"50-5", tier:50, type:`협동 문제(4구절 빈칸)`,
    q:`다음은 잠언의 유명한 구절들입니다.\n조에서 한 사람씩 빈칸에 들어갈 답을 말해서 모두 맞히면 성공입니다!\n\nㄱ. 너의 (   )를 여호와께 맡기라 그리하면 네가 (   )하는 것이 이루어지리라(잠16:3)\nㄴ. 모든 지킬 만한 것 중에 더욱 네 (   )을 지키라 (   )이 이에서 남이니라 (잠4:23)\nㄷ. 사람의 행위가 (   )에는 모두 정직하여도 여호와는 마음을 (   )하시느니라 (잠21:2)\nㄹ. (   )하는 것이 지식의 근본이거늘 미련한 자는 지혜와 훈계를 멸시하느니라 (잠1:7)`,
    a:`ㄱ. 각각 행사와 경영   ㄴ. 마음, 생명의 근원   ㄷ. 자기 보기, 감찰   ㄹ. 여호와를 경외`,
    coop:`조별로 한 사람씩 나와 빈칸을 채우는 릴레이 협동 문제.`,
    refs:[`잠16:3`, `잠4:23`, `잠21:2`, `잠1:7`],
    src:`예은 탭 11번 · 성경퀴즈대회 문항 최종.md` },

  { id:"50-6", tier:50, type:`빈칸 채우기`,
    q:`잠언 6장 16~17절에서 여호와께서 미워하시는 것에 해당하는 말을 각 부위에서 하나씩 고르시오`,
    img:[`문항 이미지/50-6.png`],
    a:`교만한 눈, 거짓된 혀, 무죄한 자의 피를 흘리는 손, 악으로 달려가는 발`,
    refs:[`잠언 6:16-19`],
    src:`민주 탭 29번 · 성경퀴즈대회 문항 최종.md (정답 확정됨, 2026-09-19)` },

];



const QMAP = {};
QUESTIONS.forEach(q => QMAP[q.id] = q);
const ROLE = window.ROLE || "standalone";   // standalone | presenter | projection
const TIERS = [10,20,30,40,50];
const TEAM_COLORS = ["#eb5757","#f2994a","#e0a80d","#27ae60","#2f80ed","#9b51e0"];

/* ============================================================
   상태 (localStorage)
   ============================================================ */
const LS_KEY = "bq2026";
const DEFAULT_STATE = {
  names: ["1조","2조","3조","4조","5조","6조"],
  teamCount: 6,
  solved: {}   // { "10-1": [{team: 0, score: 10, ts: 169...}] } — 문항당 여러 조 동시 부여 가능
};
let state = loadState();

function loadState(){
  try{
    const raw = JSON.parse(localStorage.getItem(LS_KEY));
    if(!raw) return structuredClone(DEFAULT_STATE);
    return normalizeState(raw);
  }catch(e){ return structuredClone(DEFAULT_STATE); }
}
function normalizeSolved(raw){
  const out = {};
  if(!raw || typeof raw !== "object") return out;
  for(const [qid, v] of Object.entries(raw)){
    if(Array.isArray(v)) out[qid] = v.filter(r => r && typeof r.team === "number");
    else if(v && typeof v.team === "number") out[qid] = [v];   // 구버전(단일 조) 데이터 호환
  }
  return out;
}
function normalizeState(raw){
  return {
    names: Array.isArray(raw.names) && raw.names.length===6 ? raw.names : structuredClone(DEFAULT_STATE.names),
    teamCount: [2,3,4,5,6].includes(raw.teamCount) ? raw.teamCount : 6,
    solved: normalizeSolved(raw.solved)
  };
}
function saveState(){
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  if(ROLE === "presenter") dbSet("bq2026/state", state);
}

function teamScores(){
  const s = new Array(state.teamCount).fill(0);
  for(const [qid,recs] of Object.entries(state.solved)){
    const q = QMAP[qid];
    if(!q) continue;
    for(const rec of recs) if(rec.team < state.teamCount) s[rec.team] += (rec.score ?? q.tier);
  }
  return s;
}

/* ============================================================
   라우팅
   ============================================================ */
function parseHash(){
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if(parts[0] === "q" && parts[1]) return { name:"question", id:decodeURIComponent(parts[1]) };
  if(parts[0] === "scoreboard") return { name:"scoreboard" };
  if(parts[0] === "settings") return { name:"settings" };
  return { name:"grid" };
}
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function render(){
  document.onkeydown = null;
  connectApi = null;
  closeModal();
  const route = parseHash();
  if(route.name !== "question" || route.id !== slideQid) slideQid = null;
  renderSidebar(route);
  const app = document.getElementById("app");
  app.className = "content" + ((route.name === "scoreboard" || route.name === "settings") ? " scrollable" : "");
  if(route.name === "question"){
    if(!QMAP[route.id]){ location.hash = "#/"; return; }
    app.innerHTML = viewQuestion(QMAP[route.id]);
    initQuestion(QMAP[route.id]);
  } else if(route.name === "scoreboard"){
    app.innerHTML = viewScoreboard();
  } else if(route.name === "settings"){
    app.innerHTML = viewSettings();
    initSettings();
  } else {
    app.innerHTML = viewGrid();
    initGrid();
  }
  window.scrollTo(0,0);
  if(ROLE === "presenter" && route.name !== "settings") sendRoute();
  applyLive();
}

/* ============================================================
   Firebase 동기화 (presenter ↔ projection)
   ============================================================ */
const FB_CONFIG = {
  apiKey: "AIzaSyCxY3DByIWCh9_PXbl5cQzJeesndIIitF8",
  authDomain: "biblequiz-c77bb.firebaseapp.com",
  databaseURL: "https://biblequiz-c77bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "biblequiz-c77bb",
  storageBucket: "biblequiz-c77bb.firebasestorage.app",
  messagingSenderId: "262498039047",
  appId: "1:262498039047:web:eddb6c5ac20fb1bd8281a2"
};
let db = null;
let live = {};            // bq2026/live 최신값
let connectApi = null;    // 연결형 문항이 화면에 있을 때 { setPairs }
let lastSentRoute = null;
let lastToastTs;
let dbConnected = false;
let slideIdx = 0, slideQid = null;   // 슬라이드 문항(속담 릴레이) 현재 페이지

function dbSet(path, val){
  if(!db) return;
  db.ref(path).set(val).catch(() => { if(ROLE === "presenter") toast("⚠️ 저장 실패 — Firebase 규칙/연결을 확인하세요"); });
}
// 키 순서와 무관하게 비교 (DB는 키를 정렬해서 돌려줌)
function canon(o){
  return JSON.stringify(o, (k, v) => v && typeof v === "object" && !Array.isArray(v)
    ? Object.fromEntries(Object.keys(v).sort().map(key => [key, v[key]])) : v);
}
function currentHash(){ return location.hash || "#/"; }
function sendRoute(){
  const h = currentHash();
  if(h === lastSentRoute) return;
  lastSentRoute = h;
  if(db) db.ref("bq2026/live").update({ route:h, answer:false, connect:null, slide:null }).catch(() => {});
}
function sendToast(msg){ dbSet("bq2026/live/toast", { msg, ts: Date.now() }); }

// 현재 화면에 live 상태(정답 팝업, 연결선)를 입힌다.
function applyLive(){
  if(ROLE === "standalone") return;
  const route = parseHash();
  if(route.name !== "question" || !QMAP[route.id]) return;
  const q = QMAP[route.id];
  if(ROLE === "projection"){
    const open = !!document.querySelector(".answer-modal");
    if(live.answer && !open) openAnswerModal(q, true);
    else if(!live.answer && open) closeModal();
  } else {
    const rb = document.getElementById("revealBtn");
    if(rb) rb.textContent = live.answer ? "📢 공개 해제" : "📢 정답 공개";
  }
  if(q.slides){
    const sl = live.slide;
    const i = sl && sl.qid === route.id ? sl.i : 0;
    if(i !== slideIdx) showSlide(q, i);
  }
  if(connectApi){
    const c = live.connect;
    connectApi.setPairs(c && c.qid === route.id && Array.isArray(c.pairs) ? c.pairs : []);
  }
}

function initSync(){
  if(ROLE === "standalone" || !window.firebase) return;
  firebase.initializeApp(FB_CONFIG);
  db = firebase.database();

  db.ref("bq2026/state").on("value", snap => {
    const v = snap.val();
    if(!v) return;
    const next = normalizeState(v);
    if(canon(next) === canon(state)) return;
    state = next;
    localStorage.setItem(LS_KEY, JSON.stringify(state));
    if(ROLE === "presenter" && parseHash().name === "settings") return; // 편집 중인 입력값 보호
    render();
  });

  db.ref("bq2026/live").on("value", snap => {
    live = snap.val() || {};
    if(ROLE === "projection"){
      const t = live.toast;
      if(t && lastToastTs !== undefined && t.ts !== lastToastTs) toast(t.msg);
      lastToastTs = t ? t.ts : null;
      if(live.route && live.route !== currentHash()){ location.hash = live.route; return; }
    }
    // 다른 발표자 화면이 이동하면 따라감 (설정 편집 중엔 제외)
    if(ROLE === "presenter" && live.route && live.route !== lastSentRoute && parseHash().name !== "settings"){
      lastSentRoute = live.route;
      if(live.route !== currentHash()){ location.hash = live.route; return; }
    }
    applyLive();
  });

  if(ROLE === "presenter"){
    db.ref(".info/connected").on("value", snap => {
      dbConnected = !!snap.val();
      const d = document.getElementById("connDot");
      if(d) d.classList.toggle("on", dbConnected);
    });
    db.ref("bq2026/state").once("value").then(snap => { if(!snap.exists()) saveState(); });
  }
}
initSync();

function renderSidebar(route){
  const items = [
    { hash:"#/", icon:"📖", label:"문항 그리드", on: route.name==="grid"||route.name==="question" },
    { hash:"#/scoreboard", icon:"🏆", label:"점수판", on: route.name==="scoreboard" },
    { hash:"#/settings", icon:"⚙️", label:"설정 · 조 편성", on: route.name==="settings" },
  ];
  document.getElementById("sidebar").innerHTML =
    items.map(i => `<a class="nav-item ${i.on?"active":""}" href="${i.hash}" title="${i.label}">${i.icon}</a>`).join("") +
    (ROLE === "presenter" ? `<span class="conn-dot ${dbConnected?"on":""}" id="connDot" title="Firebase 연결 상태"></span>` : "");
}

/* ============================================================
   그리드 화면
   ============================================================ */
function viewGrid(){
  const scores = teamScores();
  const cols = TIERS.map((tier, ti) => {
    const qs = QUESTIONS.filter(q => q.tier === tier);
    const tiles = qs.map((q, r) => {
      const num = r * 5 + ti + 1;
      const recs = (state.solved[q.id] || []).filter(x => x.team < state.teamCount);
      if(recs.length){
        return `<a class="qtile solved${recs.length>1?" multi":""}" href="#/q/${q.id}">
          ${recs.map(rec => `<span class="solvedtag">✓ ${esc(state.names[rec.team])} +${rec.score ?? q.tier}</span>`).join("")}
        </a>`;
      }
      return `<a class="qtile" href="#/q/${q.id}">
        <div class="qnum">${num}</div>
      </a>`;
    }).join("");
    return `<div class="tier-col t-${tier}">
      <div class="tier-head">${tier}점</div>
      ${tiles}
    </div>`;
  }).join("");

  const lead = Math.max(...scores);
  const chips = state.names.slice(0, state.teamCount).map((n,i) =>
    `<span class="mchip ${scores[i]===lead && lead>0 ? "lead":""}">
      <span class="dot" style="width:8px;height:8px;border-radius:50%;background:${TEAM_COLORS[i]}"></span>
      ${esc(n)} <span class="msc">${scores[i]}</span>
    </span>`).join("");

  return `
    <div class="grid-cols">${cols}</div>
    <div class="mini-wrap">
      <div class="mini-scoreboard" id="miniSb">
        <span class="mlabel">조별 점수</span>
        ${chips}
        <span class="mini-hint">클릭하면 점수판 크게 보기 →</span>
      </div>
    </div>
  `;
}
function initGrid(){
  const m = document.getElementById("miniSb");
  if(m) m.addEventListener("click", () => location.hash = "#/scoreboard");
}

/* ============================================================
   문항 화면
   ============================================================ */
function viewQuestion(q){
  const idx = QUESTIONS.findIndex(x => x.id === q.id);
  const prev = idx > 0 ? QUESTIONS[idx-1] : null;
  const next = idx < QUESTIONS.length-1 ? QUESTIONS[idx+1] : null;
  const recs = (state.solved[q.id] || []).filter(x => x.team < state.teamCount);
  const tierColor = `var(--t${q.tier})`;

  const coop = q.coop ? `<div class="coop-box"><b>협동 방식</b>\n${esc(q.coop)}</div>` : "";
  const imagesHtml = (q.img && q.img.length)
    ? (q.img.length > 1
      ? `<div class="q-images multi" style="--n:${q.img.length}">${q.img.map((src, i) => `<figure><img src="${encodeURI(src)}" alt="${esc(q.id)} 그림 ${i+1}"><span class="img-num">${"①②③④⑤⑥⑦⑧⑨⑩"[i]}</span></figure>`).join("")}</div>`
      : `<div class="q-images"><img src="${encodeURI(q.img[0])}" alt="${esc(q.id)} 그림"${q.imgH ? ` style="max-height:${q.imgH}"` : ""}></div>`)
    : "";

  const connectParsed = (q.type && q.type.includes("연결형")) ? parseConnectQ(q.q) : null;
  const isConnect = !!(connectParsed && connectParsed.left && connectParsed.right);

  const solvedBanner = recs.map(rec => `<div class="solved-banner" style="background:${TEAM_COLORS[rec.team]}">
      ✓ ${esc(state.names[rec.team])} 정답 처리됨 (+${rec.score ?? q.tier}점)
    </div>`).join("");

  const awardBtn = recs.length
    ? `<button class="award-btn undo" id="awardBtn">정답 처리 취소 / 변경</button>`
    : `<button class="award-btn" id="awardBtn" style="background:${tierColor}">정답 처리 · 점수 부여</button>`;

  return `
    <div class="qpage">
      <div class="q-top">
        <a class="q-back" href="#/">← 문항 선택으로</a>
        <div class="q-nav">
          ${prev ? `<a href="#/q/${prev.id}">← ${prev.id}</a>` : `<span class="disabled">← 이전</span>`}
          ${next ? `<a href="#/q/${next.id}">${next.id} →</a>` : `<span class="disabled">다음 →</span>`}
        </div>
      </div>

      <div class="q-meta">
        <span class="q-badge tier" style="background:${tierColor}">${q.tier}점</span>
        <span class="q-badge type">${esc(q.type)}</span>
        <span class="q-badge type" style="background:transparent;color:var(--text-muted)">문항 ${q.id}</span>
      </div>

      <div class="q-main">
        ${q.slides ? `<div class="slide-box" id="slideBox"></div>`
          : isConnect ? renderConnectUI(connectParsed) : `<div class="q-text${q.q.length > 110 ? " long" : ""}">${renderQBlock(q.q)}</div>`}
        ${imagesHtml}
      </div>

      ${coop ? `<div class="q-explain">${coop}</div>` : ""}
      ${solvedBanner}
      ${ROLE === "presenter" ? `<div class="presenter-answer">
        <div class="pa-label">정답 <span>(발표자만 보임)</span></div>
        <div class="pa-text" id="paText">${esc(q.a)}</div>
        ${q.refs.length ? `<div class="pa-refs">${q.refs.map(r => `<div>· ${esc(r)}</div>`).join("")}</div>` : ""}
        ${q.note ? `<div class="pa-note">${esc(q.note)}</div>` : ""}
      </div>` : ""}
      ${q.slides ? `<div class="slide-nav">
        <button class="btn" id="slidePrev">◀ 이전</button>
        <span id="slideCount"></span>
        <button class="btn" id="slideNext">다음 ▶</button>
      </div>` : ""}
      <div class="answer-row">
        <button class="reveal-btn" id="revealBtn">${ROLE === "presenter" ? "📢 정답 공개" : "🔒 정답 보기"}</button>
        ${awardBtn}
      </div>
      <div class="kbd-hint">
        <kbd>A</kbd> 정답 · <kbd>←</kbd> <kbd>→</kbd> ${q.slides ? "구절 넘기기" : "문항 이동"}
      </div>
    </div>
  `;
}

function initQuestion(q){
  window.onresize = null;
  if(q.slides){
    if(slideQid !== q.id){ slideQid = q.id; slideIdx = 0; }
    showSlide(q, slideIdx);
    document.getElementById("slidePrev").addEventListener("click", () => goSlide(q, slideIdx - 1));
    document.getElementById("slideNext").addEventListener("click", () => goSlide(q, slideIdx + 1));
  } else if(q.type && q.type.includes("연결형")){
    const parsed = parseConnectQ(q.q);
    if(parsed.left && parsed.right) initConnectUI(parsed);
  } else {
    fitQuestionText();
    window.onresize = fitQuestionText;
  }

  /* ---- 정답 공개 (중앙 팝업, DOM에 미리 넣지 않음) ---- */
  const revealBtn = document.getElementById("revealBtn");
  revealBtn.addEventListener("click", () => {
    if(ROLE === "presenter"){ dbSet("bq2026/live/answer", !live.answer); return; }
    if(document.querySelector(".answer-modal")) closeModal();
    else openAnswerModal(q);
  });

  /* ---- 점수 부여 ---- */
  document.getElementById("awardBtn").addEventListener("click", () => openAwardModal(q));

  /* ---- 단축키 ---- */
  if(ROLE === "projection") return;
  document.onkeydown = (e) => {
    if(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if(e.key === "a" || e.key === "A"){ revealBtn.click(); }
    else if(e.key === "Escape"){ closeModal(); }
    else if(q.slides && (e.key === "ArrowLeft" || e.key === "PageUp")){ goSlide(q, slideIdx - 1); }
    else if(q.slides && (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ")){ e.preventDefault(); goSlide(q, slideIdx + 1); }
    else if(e.key === "ArrowLeft"){ const i = QUESTIONS.findIndex(x=>x.id===q.id); if(i>0) location.hash = "#/q/"+QUESTIONS[i-1].id; }
    else if(e.key === "ArrowRight"){ const i = QUESTIONS.findIndex(x=>x.id===q.id); if(i<QUESTIONS.length-1) location.hash = "#/q/"+QUESTIONS[i+1].id; }
  };
}

/* ============================================================
   슬라이드 문항 — 1페이지 제목, 2페이지부터 구절 하나씩({title:true}면 제목 재표시, ex:true면 예시 표시)
   ============================================================ */
function curAnswer(q){
  if(!q.slides) return q.a;
  const s = q.slides[slideIdx - 1];
  return s && s.a ? s.a : q.a;
}
function showSlide(q, i){
  slideIdx = i;
  const s = q.slides[i - 1];
  const box = document.getElementById("slideBox");
  if(box) box.innerHTML = s && !s.title
    ? `${s.ex ? `<div class="slide-ex">예시</div>` : ""}<div class="slide-verse">${esc(s.v)}</div><div class="slide-ref">${esc(s.r)}</div>`
    : `<div class="slide-title">${esc(q.q)}</div>`;
  const c = document.getElementById("slideCount");
  if(c) c.textContent = `${i + 1} / ${q.slides.length + 1}`;
  const pa = document.getElementById("paText");
  if(pa) pa.textContent = curAnswer(q);
  const at = document.querySelector(".answer-modal .atext");
  if(at) at.textContent = curAnswer(q);
}
function goSlide(q, i){
  if(i < 0 || i > q.slides.length || i === slideIdx) return;
  closeModal();
  showSlide(q, i);
  if(ROLE === "presenter" && db) db.ref("bq2026/live").update({ slide:{ qid:q.id, i }, answer:false }).catch(() => {});
}

/* ============================================================
   연결형 문항 — 드래그/터치로 선 잇기
   ============================================================ */
const CONNECT_COLORS = ["#2383e2","#0f9d58","#d9730d","#9333ea","#e03e3e","#0d9488","#c2185b"];

// F11 전체화면 등 어떤 해상도에서도 스크롤 없이 문제+선지가 한 화면에 들어오도록
// .q-main이 넘치면 .q-text 글자 크기를 조금씩 줄여서 맞춘다.
function fitQuestionText(){
  const qmain = document.querySelector(".q-main");
  const qtext = document.querySelector(".q-text");
  if(!qmain || !qtext) return;
  qtext.style.fontSize = "";
  requestAnimationFrame(() => {
    let size = parseFloat(getComputedStyle(qtext).fontSize);
    const minSize = 14;
    let guard = 0;
    while(qmain.scrollHeight > qmain.clientHeight + 1 && size > minSize && guard < 60){
      size -= 1;
      qtext.style.fontSize = size + "px";
      guard++;
    }
  });
}

// q.q 텍스트에서 마지막 블록이 ①②③④... 선지 목록이면 좌측정렬 블록으로 분리
function renderQBlock(text){
  const blocks = String(text).split(/\n\n+/);
  const last = blocks[blocks.length-1];
  const lines = last.split("\n").filter(l => l.trim());
  if(blocks.length > 1 && lines.length && lines.every(l => /^[①-⑩]/.test(l))){
    const intro = blocks.slice(0,-1).join("\n\n");
    const choicesHtml = lines.map(l => `<div class="q-choice-item">${esc(l)}</div>`).join("");
    return `${esc(intro)}<div class="q-choices">${choicesHtml}</div>`;
  }
  return esc(text);
}

// q.q 텍스트를 "설명 / ①②③④... / ㄱㄴㄷㄹ..." 세 블록으로 분리
function parseConnectQ(text){
  const blocks = String(text).split(/\n\n+/);
  let introParts = [], left = null, right = null;
  blocks.forEach(block => {
    const lines = block.split("\n").filter(l => l.trim());
    if(!lines.length) return;
    if(/[ⓐ-ⓩ]/.test(block) && /[①-⑩㉠-㉭]/.test(block)){
      // "① 좌 — ⓐ 우" 처럼 좌·우가 한 줄(또는 한 덩어리)에 섞인 형식
      left = []; right = [];
      const re = /([①-⑩㉠-㉭ⓐ-ⓩ])([^①-⑩㉠-㉭ⓐ-ⓩ]*)/g; let m;
      while((m = re.exec(block))){
        const item = { key:m[1], text:m[2].replace(/\s*[—–-]\s*$/, "").trim() };
        (/[ⓐ-ⓩ]/.test(m[1]) ? right : left).push(item);
      }
    } else if(lines.every(l => /^[①-⑩]/.test(l))){
      left = lines.map(l => {
        const m = l.match(/^([①-⑩])\s*(.*)$/);
        return m ? { key:m[1], text:m[2] } : { key:l[0], text:l.slice(1).trim() };
      });
    } else if(lines.every(l => /^[ㄱ-ㅎ]\s*[.)]/.test(l))){
      right = lines.map(l => {
        const m = l.match(/^([ㄱ-ㅎ])\s*[.)]\s*(.*)$/);
        return m ? { key:m[1], text:m[2] } : { key:l[0], text:l.slice(1).trim() };
      });
    } else {
      introParts.push(block);
    }
  });
  return { intro: introParts.join("\n\n"), left, right };
}

function renderConnectUI(parsed){
  const leftHtml = parsed.left.map(it => `
    <div class="connect-item" data-side="left" data-key="${esc(it.key)}">
      <span class="connect-label">${esc(it.key)}</span>
      <span class="connect-text">${esc(it.text)}</span>
      <span class="connect-dot" data-side="left" data-key="${esc(it.key)}"></span>
    </div>`).join("");
  const rightHtml = parsed.right.map(it => `
    <div class="connect-item" data-side="right" data-key="${esc(it.key)}">
      <span class="connect-dot" data-side="right" data-key="${esc(it.key)}"></span>
      <span class="connect-label">${esc(it.key)}</span>
      <span class="connect-text">${esc(it.text)}</span>
    </div>`).join("");
  return `
    <div class="connect-box">
      ${parsed.intro ? `<div class="connect-intro">${esc(parsed.intro)}</div>` : ""}
      <div class="connect-wrap" id="connectWrap">
        <svg class="connect-svg" id="connectSvg"></svg>
        <div class="connect-col left">${leftHtml}</div>
        <div class="connect-col right">${rightHtml}</div>
      </div>
      <button type="button" class="connect-reset" id="connectReset">↺ 연결선 지우기</button>
    </div>
  `;
}

function initConnectUI(parsed){
  const wrap = document.getElementById("connectWrap");
  if(!wrap) return;
  const svg = document.getElementById("connectSvg");
  const colorMap = {};
  parsed.left.forEach((it,i) => { colorMap[it.key] = CONNECT_COLORS[i % CONNECT_COLORS.length]; });

  let connections = []; // {leftKey, rightKey, color}
  let pending = null;   // {side,key} — 탭-탭 방식으로 선택된 항목
  let drag = null;      // 진행 중인 드래그 상태

  const dotEl = (side,key) => wrap.querySelector(`.connect-dot[data-side="${side}"][data-key="${key}"]`);

  function dotCenter(el){
    const r = el.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
    return { x: r.left + r.width/2 - wr.left, y: r.top + r.height/2 - wr.top };
  }

  function redraw(){
    const wr = wrap.getBoundingClientRect();
    svg.setAttribute("width", wr.width);
    svg.setAttribute("height", wr.height);
    let html = "";
    connections.forEach(c => {
      const a = dotCenter(dotEl("left", c.leftKey)), b = dotCenter(dotEl("right", c.rightKey));
      html += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${c.color}" stroke-width="4" stroke-linecap="round"/>`;
    });
    if(drag){
      html += `<line x1="${drag.x0}" y1="${drag.y0}" x2="${drag.x1}" y2="${drag.y1}" stroke="#9b9a97" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round"/>`;
    }
    svg.innerHTML = html;
  }

  function updateLinkedClasses(){
    wrap.querySelectorAll(".connect-item").forEach(el => {
      const side = el.dataset.side, key = el.dataset.key;
      const conn = connections.find(c => (side === "left" ? c.leftKey : c.rightKey) === key);
      el.classList.toggle("linked", !!conn);
      const dot = dotEl(side,key);
      dot.style.background = conn ? conn.color : "";
      dot.style.borderColor = conn ? conn.color : "";
    });
  }

  function clearSelected(){
    wrap.querySelectorAll(".connect-item.selected").forEach(el => el.classList.remove("selected"));
  }

  function connect(a,b){
    const leftKey = a.side === "left" ? a.key : b.key;
    const rightKey = a.side === "left" ? b.key : a.key;
    connections = connections.filter(c => c.leftKey !== leftKey && c.rightKey !== rightKey);
    connections.push({ leftKey, rightKey, color: colorMap[leftKey] || "#888" });
    updateLinkedClasses();
    sendPairs();
  }

  // 선 상태를 다른 기기와 동기화
  function sendPairs(){
    const route = parseHash();
    if(ROLE !== "standalone" && route.name === "question")
      dbSet("bq2026/live/connect", { qid: route.id, pairs: connections.map(c => [c.leftKey, c.rightKey]) });
  }
  connectApi = {
    setPairs(pairs){
      connections = pairs
        .filter(p => dotEl("left", p[0]) && dotEl("right", p[1]))
        .map(p => ({ leftKey:p[0], rightKey:p[1], color: colorMap[p[0]] || "#888" }));
      updateLinkedClasses();
      redraw();
    }
  };

  wrap.querySelectorAll(".connect-item").forEach(el => {
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const side = el.dataset.side, key = el.dataset.key;

      if(pending && pending.side !== side){
        connect(pending, {side,key});
        pending = null; clearSelected(); redraw();
        return;
      }
      pending = null; clearSelected();

      const p0 = dotCenter(dotEl(side,key));
      drag = { side, key, moved:false, x0:p0.x, y0:p0.y, x1:p0.x, y1:p0.y, sx:e.clientX, sy:e.clientY };
      el.classList.add("dragging");
      try{ el.setPointerCapture(e.pointerId); }catch(_){}

      const onMove = (ev) => {
        if(!drag) return;
        if(Math.abs(ev.clientX-drag.sx) > 4 || Math.abs(ev.clientY-drag.sy) > 4) drag.moved = true;
        const wr = wrap.getBoundingClientRect();
        drag.x1 = ev.clientX - wr.left; drag.y1 = ev.clientY - wr.top;
        redraw();
      };
      const onUp = (ev) => {
        cleanup();
        el.classList.remove("dragging");
        const targetItem = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".connect-item");
        if(drag && drag.moved && targetItem && targetItem.dataset.side !== side){
          connect({side,key}, {side:targetItem.dataset.side, key:targetItem.dataset.key});
        } else if(drag && !drag.moved){
          pending = {side,key};
          el.classList.add("selected");
        }
        drag = null;
        redraw();
      };
      const onCancel = () => { cleanup(); el.classList.remove("dragging"); drag = null; redraw(); };
      function cleanup(){
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerup", onUp);
        el.removeEventListener("pointercancel", onCancel);
        try{ el.releasePointerCapture(e.pointerId); }catch(_){}
      }
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerup", onUp);
      el.addEventListener("pointercancel", onCancel);
    });
  });

  document.getElementById("connectReset").addEventListener("click", () => {
    connections = [];
    pending = null;
    clearSelected();
    updateLinkedClasses();
    redraw();
    sendPairs();
  });

  fitConnectText();
  window.onresize = () => { fitConnectText(); redraw(); };
  requestAnimationFrame(redraw);
}

// F11 전체화면 등에서 연결형 문항의 설명 텍스트가 길어 넘칠 때 글자 크기를 줄여 스크롤 없이 맞춘다.
function fitConnectText(){
  const qmain = document.querySelector(".q-main");
  const intro = document.querySelector(".connect-intro");
  if(!qmain || !intro) return;
  intro.style.fontSize = "";
  let size = parseFloat(getComputedStyle(intro).fontSize);
  const minSize = 14;
  let guard = 0;
  while(qmain.scrollHeight > qmain.clientHeight + 1 && size > minSize && guard < 60){
    size -= 1;
    intro.style.fontSize = size + "px";
    guard++;
  }
}

/* ============================================================
   점수 부여 모달
   ============================================================ */
let awardPick = { qid:null, score:null };   // 모달 세션 동안 마지막으로 고른 점수 기억

function openAwardModal(q){
  if(awardPick.qid !== q.id) awardPick = { qid:q.id, score:q.tier };
  const recs = (state.solved[q.id] || []).filter(x => x.team < state.teamCount);
  const maxScore = q.tier;
  const scoreOptions = [];
  for(let s = maxScore; s >= 10; s -= 10) scoreOptions.push(s);
  const chosenScore = scoreOptions.includes(awardPick.score) ? awardPick.score : maxScore;

  const scorePickHtml = scoreOptions.length > 1
    ? `<div class="score-pick" id="scorePick">
        ${scoreOptions.map(s => `<button data-score="${s}" class="${s===chosenScore?"on":""}">${s}점</button>`).join("")}
      </div>`
    : "";

  const teamBtns = state.names.slice(0, state.teamCount).map((n,i) => {
    const r = recs.find(x => x.team === i);
    return `<button data-team="${i}" ${r ? 'style="outline:2px solid '+TEAM_COLORS[i]+';outline-offset:-1px"' : ""}>
      <span class="dot" style="background:${TEAM_COLORS[i]}"></span>${esc(n)}${r ? ` <span class="team-pick-score">+${r.score}</span>` : ""}
    </button>`;
  }).join("");

  const undo = recs.length ? `<button class="btn danger" id="mUndo">전체 취소</button>` : "";

  document.getElementById("overlay").innerHTML = `
    <div class="modal-back" id="modalBack">
      <div class="modal">
        <h3>정답을 맞춘 조 선택</h3>
        <p>문항 ${q.id} · 최대 ${maxScore}점 — 여러 조를 동시에 선택할 수 있습니다. 이미 선택된 조를 다시 누르면 취소되고, 다른 점수를 고른 뒤 누르면 점수가 바뀝니다.</p>
        ${scorePickHtml}
        <div class="team-pick">${teamBtns}</div>
        <div class="modal-actions">
          ${undo}
          <button class="btn primary confirm-btn" id="mCancel">확인</button>
        </div>
      </div>
    </div>`;

  document.getElementById("modalBack").addEventListener("click", (e) => { if(e.target.id === "modalBack") closeAwardModal(); });
  document.getElementById("mCancel").addEventListener("click", closeAwardModal);
  const u = document.getElementById("mUndo");
  if(u) u.addEventListener("click", () => {
    delete state.solved[q.id]; saveState();
    toast(`${q.id} 정답 처리 취소`);
    sendToast(`${q.id} 정답 처리 취소`);
    closeAwardModal();
  });
  document.querySelectorAll(".score-pick button").forEach(b =>
    b.addEventListener("click", () => {
      awardPick.score = parseInt(b.dataset.score, 10);
      openAwardModal(q);
    }));
  document.querySelectorAll(".team-pick button").forEach(b =>
    b.addEventListener("click", () => {
      const t = parseInt(b.dataset.team,10);
      const list = state.solved[q.id] || [];
      const idx = list.findIndex(x => x.team === t);
      if(idx >= 0 && list[idx].score === chosenScore){
        list.splice(idx, 1);
        toast(`${esc(state.names[t])} 정답 처리 취소`);
        sendToast(`${esc(state.names[t])} 정답 처리 취소`);
      } else if(idx >= 0){
        list[idx] = { team:t, score:chosenScore, ts:Date.now() };
        toast(`${esc(state.names[t])}  ${chosenScore}점으로 수정`);
        sendToast(`${esc(state.names[t])}  ${chosenScore}점으로 수정`);
      } else {
        list.push({ team:t, score:chosenScore, ts:Date.now() });
        toast(`${esc(state.names[t])}  +${chosenScore}점`);
        sendToast(`${esc(state.names[t])}  +${chosenScore}점`);
      }
      if(list.length) state.solved[q.id] = list; else delete state.solved[q.id];
      saveState();
      openAwardModal(q);
    }));
}
function closeAwardModal(){ awardPick = { qid:null, score:null }; closeModal(); render(); }
function closeModal(){
  document.getElementById("overlay").innerHTML = "";
  const rb = document.getElementById("revealBtn");
  if(rb && ROLE !== "presenter") rb.textContent = "🔒 정답 보기";
}

/* ============================================================
   정답 팝업 (중앙)
   ============================================================ */
function openAnswerModal(q, answerOnly){
  document.getElementById("overlay").innerHTML = `
    <div class="modal-back" id="ansBack">
      <div class="modal answer-modal">
        <div class="alabel">정답</div>
        <div class="atext">${esc(curAnswer(q))}</div>
        ${answerOnly ? "" : `<div class="refs">${q.refs.map(r => `<div>· ${esc(r)}</div>`).join("")}</div>
        ${q.note ? `<div class="note">${esc(q.note)}</div>` : ""}
        <div class="modal-actions"><button class="btn" id="ansClose">닫기</button></div>`}
      </div>
    </div>`;
  document.getElementById("ansBack").addEventListener("click", (e) => { if(e.target.id === "ansBack") closeModal(); });
  document.getElementById("ansClose")?.addEventListener("click", closeModal);
  const rb = document.getElementById("revealBtn");
  if(rb) rb.textContent = "🔓 정답 숨기기";
}

/* ============================================================
   점수판 (크게)
   ============================================================ */
function viewScoreboard(){
  const scores = teamScores();
  const rows = state.names.slice(0, state.teamCount).map((n,i) => ({ n, i, sc: scores[i] }));
  rows.sort((a,b) => b.sc - a.sc);
  const max = Math.max(10, ...scores);
  const solvedCount = Object.keys(state.solved).filter(id => (state.solved[id]||[]).some(r => r.team < state.teamCount)).length;

  let rank = 0, prevScore = null;
  const list = rows.map((r, idx) => {
    if(r.sc !== prevScore){ rank = idx + 1; prevScore = r.sc; }
    const rc = rank <= 3 ? "r"+rank : "";
    const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "";
    return `<div class="sb-row">
      <div class="sb-rank ${rc}">${medal || rank}</div>
      <div class="sb-main">
        <div class="sb-name"><span style="width:12px;height:12px;border-radius:50%;background:${TEAM_COLORS[r.i]};display:inline-block"></span>${esc(r.n)}</div>
        <div class="sb-bar-track"><div class="sb-bar" style="width:${(r.sc/max*100)}%;background:${TEAM_COLORS[r.i]}"></div></div>
      </div>
      <div class="sb-score">${r.sc}</div>
    </div>`;
  }).join("");

  return `
    <div class="q-top"><a class="q-back" href="#/">← 문항 선택으로</a><span></span></div>
    <h1 class="page-title">점수판</h1>
    <p class="page-sub">푼 문항 ${solvedCount} / ${QUESTIONS.length} · 합계 ${scores.reduce((a,b)=>a+b,0)}점</p>
    <div class="sb-list">${list}</div>
  `;
}

/* ============================================================
   설정 · 조 편성
   ============================================================ */
function viewSettings(){
  const countBtns = [2,3,4,5,6].map(c =>
    `<button data-count="${c}" class="${state.teamCount===c?"on":""}">${c}조</button>`).join("");
  const inputs = state.names.map((n,i) =>
    `<div class="team-input-row ${i>=state.teamCount?"off":""}">
      <span class="dot" style="background:${TEAM_COLORS[i]}"></span>
      <input type="text" data-idx="${i}" value="${esc(n)}" ${i>=state.teamCount?"disabled":""} maxlength="20" />
    </div>`).join("");

  return `
    <h1 class="page-title">설정 · 조 편성</h1>
    <p class="page-sub">여기서 정한 조와 점수는 이 브라우저에 저장되어 새로고침해도 유지됩니다.</p>

    <div class="set-block">
      <h3>조 수</h3>
      <p class="hint">참가하는 조의 수를 고르세요. (최대 6조)</p>
      <div class="count-btns" id="countBtns">${countBtns}</div>

      <h3>조 이름</h3>
      <p class="hint">기본값은 "1조 ~ 6조"입니다. 필요하면 팀명으로 바꾸세요.</p>
      ${inputs}
      <div style="margin-top:16px;display:flex;gap:8px">
        <button class="btn primary" id="saveTeams">저장</button>
        <span id="saveMsg" style="align-self:center;font-size:13px;color:var(--t20);font-weight:600"></span>
      </div>
    </div>

    <div class="set-block log-block">
      <h3>점수 부여 로그</h3>
      <p class="hint">최근 부여 순으로 표시됩니다. 잘못 부여했다면 조·점수를 바꾸거나 삭제하세요.</p>
      ${logRowsHtml()}
    </div>

    <div class="set-block">
      <h3>진행 초기화</h3>
      <p class="hint">모든 문항의 정답 처리 기록과 점수를 지웁니다. 조 이름은 유지됩니다.</p>
      <button class="btn danger" id="resetProgress">점수 · 진행 상황 초기화</button>
    </div>
  `;
}
function scoreLog(){
  const entries = [];
  for(const [qid, recs] of Object.entries(state.solved)){
    const q = QMAP[qid];
    if(!q) continue;
    recs.forEach((r,i) => { if(r.team < state.teamCount) entries.push({ qid, q, idx:i, team:r.team, score:r.score ?? q.tier, ts:r.ts||0 }); });
  }
  entries.sort((a,b) => b.ts - a.ts);
  return entries;
}
function logRowsHtml(){
  const entries = scoreLog();
  if(!entries.length) return `<p class="hint">아직 부여된 점수가 없습니다.</p>`;
  return `<div class="log-list" id="logList">${entries.map(e => {
    const scoreOpts = [];
    for(let s = e.q.tier; s >= 10; s -= 10) scoreOpts.push(s);
    return `<div class="log-row" data-qid="${esc(e.qid)}" data-idx="${e.idx}">
      <span class="log-qid">${esc(e.qid)}</span>
      <select class="log-team">
        ${state.names.slice(0, state.teamCount).map((n,i) => `<option value="${i}" ${i===e.team?"selected":""}>${esc(n)}</option>`).join("")}
      </select>
      <select class="log-score">
        ${scoreOpts.map(s => `<option value="${s}" ${s===e.score?"selected":""}>${s}점</option>`).join("")}
      </select>
      <button class="btn danger log-del">삭제</button>
    </div>`;
  }).join("")}</div>`;
}
function initSettings(){
  document.querySelectorAll("#countBtns button").forEach(b =>
    b.addEventListener("click", () => {
      state.teamCount = parseInt(b.dataset.count,10);
      // 빈 이름 자동 채움
      state.names = state.names.map((n,i) => n && n.trim() ? n : `${i+1}조`);
      saveState(); render();
    }));
  document.getElementById("saveTeams").addEventListener("click", () => {
    document.querySelectorAll(".team-input-row input").forEach(inp => {
      const i = parseInt(inp.dataset.idx,10);
      const v = inp.value.trim();
      state.names[i] = v || `${i+1}조`;
    });
    saveState();
    const m = document.getElementById("saveMsg");
    m.textContent = "저장되었습니다 ✓";
    setTimeout(() => { m.textContent = ""; }, 2000);
    renderSidebar(parseHash());
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    if(confirm("모든 조의 점수와 정답 처리 기록을 지웁니다. 계속할까요?")){
      state.solved = {}; saveState(); render();
      toast("진행 상황을 초기화했습니다");
    }
  });
  document.querySelectorAll(".log-row").forEach(row => {
    const qid = row.dataset.qid;
    const idx = parseInt(row.dataset.idx, 10);
    row.querySelector(".log-team").addEventListener("change", (e) => {
      state.solved[qid][idx].team = parseInt(e.target.value, 10);
      saveState(); render();
      toast("점수 기록을 수정했습니다");
    });
    row.querySelector(".log-score").addEventListener("change", (e) => {
      state.solved[qid][idx].score = parseInt(e.target.value, 10);
      saveState(); render();
      toast("점수 기록을 수정했습니다");
    });
    row.querySelector(".log-del").addEventListener("click", () => {
      state.solved[qid].splice(idx, 1);
      if(!state.solved[qid].length) delete state.solved[qid];
      saveState(); render();
      toast("점수 기록을 삭제했습니다");
    });
  });
}

/* ============================================================
   유틸
   ============================================================ */
function esc(s){
  return String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
}
let toastTimer = null;
function toast(msg){
  const el = document.getElementById("toast");
  el.innerHTML = `<div class="toast">${msg}</div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.innerHTML = ""; }, 2200);
}
