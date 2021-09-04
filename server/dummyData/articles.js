const articles = [
	{
		id: 1,
		category: ["html-css"],
		date: "21.8.17",
		author: "hyo",
		title: "html, css 기초",
		description:
			"화면구성의 기초인 것들. 페이지의 뼈대를 html이 담당하고, css는 이쁘게 만들어 주는 거라고 생각하면 쉽다. 아. 얘네들은 프로그래밍 언어가 아니니 프로그래머라고 착각하지 말자.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iahbYjphVbjSQaWHFCTOlgHaDj%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 2,
		category: ["react"],
		date: "21.8.17",
		author: "hyo",
		title: "react 기초",
		description:
			"요즘 유행인 리액트를 배워 보자. 남들 다 쓴다는데 나도 써봐야겠다. 사실 자바스크립트 잘하면 리액트는 참 괜찮은 라이브러리다. 자바스크립트로 전부 다 해결할 수 있다는 건 참 좋다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EntHChgUyirgbZ9A3zTxkAHaFj%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 3,
		category: ["mysql"],
		date: "21.8.17",
		author: "hyo",
		title: "mysql 기초",
		description:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3of4QJ65oynrDrNpgHYXTgHaD4%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 4,
		category: ["personal"],
		date: "21.8.17",
		author: "hyo",
		title: "오늘의 일기",
		description:
			"며칠간 비가 오다 말았다. 날이 너무 좋은데 비가 또 올까봐 세차는 못하고 있다. 대신 차 지붕에 허옇게 눌러붙은 센물자국을 오늘 드디어 지워버렸다. ",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.p4PedUSIPTyRyztLE0wvAwHaEo%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 5,
		category: ["html-css"],
		date: "21.8.17",
		author: "hyo",
		title: "css 그리드, 플렉스박스",
		description:
			"이걸 모른다면 css 할 줄 안다고 할 수 없다. 색깔놀이는 누구나 할 수 있고, 에니메이션은 모르면 찾아보면 그만이다. 하지만 화면구성에 있어 그리드와 플렉스박스는 필수적.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-UxRkS1XKkPRaBTG5aGVSAHaHa%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 6,
		category: ["react"],
		date: "21.8.17",
		author: "hyo",
		title: "react hooks",
		description:
			"클래스 컴포넌트와 객체지향형 프로그래밍에서의 탈출을 제안한다. hooks는 리액트를 깔끔한 함수형 프로그래밍으로 만질 수 있게 해준다. 자바스크립트에 더 맞는 방식이며, 인간과 컴퓨터 모두 이해하기 쉽다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1l0eeLVAkg-9Y4n2I2GuqgHaFS%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 7,
		category: ["mysql"],
		date: "21.8.17",
		author: "hyo",
		title: "mysql join",
		description:
			"sql의 꽃인 join이다. 개인적으로 sql은 공부하다 말았다. 재미없어서.. 프론트라 쓸일도 없어보이고. 하지만 언젠가는 쓸모가 있을거고, 문법도 어렵지 않아서 금방 배워봄직 하다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.91J3P-jXD2bRklvC2s92uwHaDr%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 8,
		category: ["personal"],
		date: "21.8.17",
		author: "hyo",
		title: "혼자서 공부를 지속하는 방법",
		description:
			"독학을 고수하며 공부하고 있다. 혼자서 해보니 굳이 학원까지 다녀가며 공부해야 하는지도 의문이고, 돈도 없다. 하지만 혼자 하는게 지칠 때도 있고, 우물 안 개구리가 되어버리는 건 아닌가 하는 불안감도 있다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nBeBfa7LNZh43JjMULFdyAAAAA%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 9,
		category: ["html-css"],
		date: "21.8.17",
		author: "hyo",
		title: "html의 시멘틱 태그",
		description:
			"페이지를 무작정 div 떡칠하는 것보다 시멘틱 태그를 사용해 페이지를 구성하면 가독성도 좋고 브라우져도 이해하기 편해진다. 아직 잘 모르겠지만 남들이 그렇다니까 그러려니 하고 있는데 배워야 되는데..",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iBVkT9tHAeHZrv6g8R4oHwHaEC%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 10,
		category: ["react"],
		date: "21.8.17",
		author: "hyo",
		title: "props and state",
		description:
			"리액트 안에서 데이터를 보내는 방법이다. 프롭으로 하위 컴포넌트에 데이터를 전송한다. 그 반대는 불가능하니 조심하도록 하자.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3d0jsQppieVP5XL6KGK6YAHaED%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 11,
		category: ["mysql"],
		date: "21.8.17",
		author: "hyo",
		title: "express와 연결하기",
		description:
			"데이터베이스를 실제 서버와 연결하는 작업이다. express로 제작한 서버에서 db에 접속하여 데이터를 찾고, 요청에 따라 그것들을 가공해 보내주면 된다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JvXMtEkpqT4Sa18_Hq-jjgHaE8%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
	{
		id: 12,
		category: ["personal"],
		date: "21.8.17",
		author: "hyo",
		title: "자바스크립트 면접질문 모음",
		description:
			"프론트엔드 개발자의 자바스크립트 역량은 굉장히 중요하다. 자바스크립트는 다른 언어들과 차별화되는 점들이 은근 많아서 이것들을 제대로 알고 있는 것이 개발에 도움이 된다.",
		img_url:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HyIvBqx_A0TwICLGpN6s3QHaD3%26pid%3DApi&f=1",
		content:
			"사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
		views: 0,
		comment: {
			comment_count: 0,
			comment_list: [],
		},
	},
];

export default articles;
