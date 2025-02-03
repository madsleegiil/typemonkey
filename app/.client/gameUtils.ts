
export const oneBlockWords = [
    "말", "눈", "밤", "달", "빛", "집", "문", "불", "땅", "돌", "강", "개", "산", "꿈", "짐", "몸", "점", "밥", "술", "김", "살",
    "먹", "줍", "참", "봄", "붐", "좁", "넓", "씁", "낮", "덥", "춥", "밝", "작", "많", "늦", "높", "젊", "얇", "검", "저", "너",
    "나", "내", "네", "그", "이", "한", "새", "첫", "참", "좀", "꼭", "더", "덜", "잘", "늘", "또", "막", "홧", "만", "도", "의",
    "랑", "에", "와", "과", "로", "아", "어", "야", "응", "네", "헉", "허", "쉿", "꽃", "삶", "꿈", "잠", "힘", "털", "색", "손",
    "발", "신", "별", "방", "선", "말", "공", "춤", "글", "돈", "냄", "땀"
]

export const twoBlockWords = [
    "사랑", "공부", "학교", "친구", "부모", "가족", "시간", "장소", "목적", "환경", "감정", "생각", "운동", "건강", "음식", "물건", "사전",
    "문화", "역사", "경제", "사회", "미래", "과거", "현재", "세계", "자연", "동물", "식물", "인간", "관계", "소리", "음악", "영화", "드라마",
    "뉴스", "이야기", "표현", "행동", "결정", "변화", "발전", "선택", "노력", "성공", "실패", "경험", "문제", "해결", "방법", "기회", "조건",
    "느낌", "기분", "소망", "희망", "관심", "열정", "도전", "자유", "책임", "계획", "준비", "실행", "결과", "목표", "방식", "모습", "상태",
    "의미", "원인", "이유", "과정", "차이", "관계", "효과", "영향", "실수", "인생", "존재", "기대", "만족", "지원", "보호", "대화", "약속",
    "행복"
]

export const threeBlockWords = [
    "사과나", "바나나", "토마토", "자동차", "비행기", "컴퓨터", "텔레비", "핸드폰", "냉장고", "세탁기", "전화기", "초콜릿", "의자발", "교과서",
    "공책상", "박물관", "도서관", "식탁등", "운동장", "체육관", "수영장", "영화관", "커피숍", "빵가게", "과일집", "문구점", "병원실", "약국문",
    "회사원", "경찰관", "소방관", "은행원", "도로변", "버스정", "지하철", "기차역", "주차장", "놀이터", "장난감", "자전거", "교차로", "신호등",
    "횡단보", "고양이", "강아지", "호랑이", "여우털", "비둘기", "독수리", "물고기", "개구리", "다람쥐", "나무줄", "꽃다발", "해바라", "백합꽃",
    "장미꽃", "벚꽃길", "단풍잎", "돌멩이", "모래사", "햇살빛", "비온뒤", "구름층", "천둥번", "별자리", "은하수", "바다물", "호수면", "강바람",
    "해변길", "산책로", "골목길", "시장길", "마을회", "놀이터", "운동복", "장갑손", "양말발", "모자머", "안경알", "손목시", "휴대폰", "이어폰",
    "마이크", "서랍장", "책상위", "침대옆", "소파끝", "가방끈", "지갑속", "열쇠집", "신발끈", "운동화", "편의점", "백화점", "음식점", "화장실",
    "거실창", "주방문", "방문객", "손님방", "친구집", "부모님", "형제자", "여자친"
]

export const pickRandomWord = (words: string[]): [string, string[]] => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return [randomWord, words.filter((word) => word !== randomWord)]
}

// TODO: Handle JAMO blocks
export const mapLatinToHangeul = (keys: string): string =>
    keys.split("").map((key) => {
        const hangeulKey = latinKeyToHangeul.get(key);
        return hangeulKey ? hangeulKey : key;
    }).join("");

const latinKeyToHangeul = new Map<string, string>([
    ["q" ,"ㅂ"],
    ["w" ,"ㅈ"],
    ["e" ,"ㄷ"],
    ["r" ,"ㄱ"],
    ["t" ,"쇼"],
    ["y" ,"ㅕ"],
    ["u" ,"ㅑ"],
    ["i" ,"ㅐ"],
    ["o" ,"ㅔ"],
    ["a" , "ㅁ"],
    ["s" , "ㄴ"],
    ["d" , "ㅇ"],
    ["f" , "ㄹ"],
    ["g" , "ㅎ"],
    ["h" , "ㅗ"],
    ["j" , "ㅓ"],
    ["k" , "ㅏ"],
    ["l" , "ㅣ"],
    ["z" , "ㅋ"],
    ["x" , "ㅌ"],
    ["c" , "ㅊ"],
    ["v" , "ㅍ"],
    ["b" , "ㅠ"],
    ["n" , "ㅜ"],
    ["m" , "ㅡ"],
    ["Q" , "ㅃ"],
    ["W" , "ㅉ"],
    ["E" , "ㄸ"],
    ["R" , "ㄲ"],
    ["T" , "ㅆ"],
    ["O", "ㅒ"],
    ["P", "ㅖ"],
])
