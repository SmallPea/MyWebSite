/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 * slrc为歌词文件路径 可有可无,为绝对路径
 */
//获取网易云音乐
function music163(i){
	return "http://music.163.com/song/media/outer/url?id="+i+".mp3"
}
var mplayer_song = [
	[{
			"basic": true,
			"name": "SmallPea歌单1",
			"singer": "SmallPea",
			"img": "images/pic/head.jpg"
		},
		{
			"name": "最后的旅行",
			"singer": "Rainton桐",
			"img": "http://p1.music.126.net/8qhWDWoNejyMcAAwAm2pNA==/17752714742397400.jpg?param=177y177",
			"src": music163("423703394"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/zuihoudeluxin.lrc",
			"time":"04:51"
		},
		{
			"name": "old memory",
			"singer": "Bruno Wen-li",
			"img": "http://p2.music.126.net/OpgpNNPKznDDMxoBqVJy-Q==/2464005557906815.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("477982"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:52"
		},
		{
			"name": "PDD洪荒之力",
			"singer": "-",
			"img": "http://p1.music.126.net/R7SKKpusKiC7i8c3hTwmQQ==/109951163684089221.jpg",
			"src": music163("1328045658"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"02:42"
		},
		{
			"name": "trip",
			"singer": "Axero",
			"img": "http://p2.music.126.net/b0Kgo4m-EnW-X20oYjEb_w==/3383197281284518.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("36492599"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:08"
		},
		{
			"name": "芒种",
			"singer": "殇小谨",
			"img": "http://p1.music.126.net/7ZKMPIvPcwaK08ffDBTjJw==/109951164124664532.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("1369798757"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/mangzhong.lrc",
			"time":"03:36"
		},
		{
			"name": "老街北",
			"singer": "洛天依",
			"img": "http://p1.music.126.net/78Chlbwl9fiH8WTsw3arxg==/109951163443253139.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("1299289240"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/loaojiebei.lrc",
			"time":"03:47"
		
			
		}
        ,{
			"name": "Nevada",
			"singer": "Vicetone、Cozi Zuehlsdorff",
			"img": "http://p1.music.126.net/X_Ukd1BhXdDwsz4NqrisNA==/109951163640412456.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("418602088"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/nevada.lrc",
			"time":"03:28"
		},
		{
			"name": "Bad Apple",
			"singer": "Alstroemeria",
			"img": "http://p1.music.126.net/l6J6zceZI5YtkmD6-PMnmw==/888405395266525.jpg?param=117y117",
		   "src": music163("22645196"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/BadApple.lrc",
			"time":"05:17"
		},
		{
			"name": "希望永远存在",
			"singer": "Christine Welch",
			"img": "http://p2.music.126.net/SSGt30LAVJwW31-qreZDFA==/2532175280446455.jpg",
			"src": music163("29722587"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/xwyycz.lrc",
			"time":"03:12"
		},
		{
			"name": "Undertale",
			"singer": "Toby Fox",
			"img": "http://p4.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg?param=177y177",
			"src": music163("39227624"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"06:21"
		},
		{
			"name": "勾指起誓",
			"singer": "洛天依",
			"img": "http://p2.music.126.net/eMyCr0gv0kPGlew9XTNjyA==/109951163944178164.jpg",
			"src": music163("1345872140"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/GZQS.lrc",
			"time":"03:03"
		}
		
	
	],
	[
	{
			"basic": true,
			"name": "SmallPea歌单2",
			"singer": "SmallPea",
			"img": "images/pic/head.jpg"
		},
		{
			"name": "Way Back Home (Sam Feldt Edit)",
			"singer": "SHAUN、Conor Maynard、Sam Feldt ",
			"img": "http://p2.music.126.net/9tcjJVTvxBl-Hjth0wTMUg==/109951163858600532.jpg",
			"src": music163("1334246005"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/waybackhome.lrc",
			"time":"03:12"
		},
		{
			"name": "take my hand",
			"singer": "DAISHI DANCE、Cecile Corbel",
			"img": "http://p1.music.126.net/AoVFMKkLVMOmTMo_A6x02g==/109951163403515653.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("26092806"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/takemyhand.lrc",
			"time":"04:19"
		},
		{
			"name": "beautiful journey",
			"singer": "平井 大",
			"img": "http://p1.music.126.net/hFEUlWo8k3ywaB6pnaD-WQ==/109951164192344939.jpg",
			"src": music163("1375914761"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/BJ.lrc",
			"time":"04:18"
		},
		{
			"name": "Tony Igy-Astronomia(Jiaye remix)",
			"singer": "Jiaye",
			"img": "http://p1.music.126.net/m0q0Ukc1pdwfTjdYYgmCvg==/109951162821165944.jpg",
			"src": music163("446154202"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:43"
		},
		{
			"name": "ワールドイズマイン",
			"singer": "supercell、初音ミク",
			"img": "http://p2.music.126.net/DiKZO3MM-MMsYhUBR3rS3Q==/805942023183935.jpg",
			"src": music163("22709632"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/worldismine.lrc",
			"time":"04:13"
		},
		{
			"name": "ゴジラ登場/「メカゴジラの逆襲」",
			"singer": "伊福部昭 ",
			"img": "http://p2.music.126.net/_B7bKDKXbo7TLQWXPBNDAA==/2946691201348219.jpg",
			"src":"audio/gsl.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:28"
		
			
		}
        ,{
			"name": "一百万个可能",
			"singer": "Christine Welch",
			"img": "http://p2.music.126.net/SSGt30LAVJwW31-qreZDFA==/2532175280446455.jpg",
			"src": music163("29722582"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/100bkn.lrc",
			"time":"04:35"
		},
		{
			"name": "The Party Troll",
			"singer": "D1ofaquavibe",
			"img": "http://p2.music.126.net/u2sWlV-BqYyqDV7_zskZyw==/6634453163551437.jpg",
		   "src": music163("38358820"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:08"
		},
		{
			"name": "East of Eden",
			"singer": "Zella Day ",
			"img": "http://p2.music.126.net/orDs-AZ0jJjB06uoP0pdMw==/6667438510952720.jpg",
			"src": music163("29009655"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/EOE.lrc",
			"time":"03:05"
		},
		{
			"name": "Masked Heroes",
			"singer": "Vexento",
			"img": "http://p1.music.126.net/GVrvsGeKUDmHRhzdZuv0Jg==/109951163457150536.jpg",
			"src": music163("30854966"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:31"
		},
		{
			"name": "Summertime",
			"singer": " K-391",
			"img": "http://p2.music.126.net/z-QnL7KT3uYVMvJ8Gt7lcg==/2929098977873576.jpg",
			"src": music163("32166628"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"04:45"
		}
		
	
	],
	[
	{
			"basic": true,
			"name": "SmallPea歌单3",
			"singer": "SmallPea",
			"img": "images/pic/head.jpg"
		}
		,
		{
			"name": "Planet",
			"singer": "ラムジ",
			"img": "http://p1.music.126.net/cCyPSxi-BE2h-SmpLBztbA==/18635622580993683.jpg",
			"src": "audio/planet.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/planet.lrc",
			"time":"04:03"
		},
		{
			"name": "摩登世界",
			"singer": "-",
			"src": "audio/mdsj.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:01"
		},
		{
			"name": "未来世界",
			"singer": "-",
			"src":"audio/wlsj.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:02"
		},
		{
			"name": "蒸汽时代",
			"singer": "-",
			"src": "audio/zqsd.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:23"
		},
		{
			"name": "天空之城",
			"singer": "-",
			"src": "audio/tkzc.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:06"
		},
		{
			"name": "巨浪沙滩",
			"singer": "-",
			"src": "audio/jlst.mp3",
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"01:04"
		
			
		}
        ,{
			"name": "一不小心",
			"singer": " 颜小健",
			"img": "http://p1.music.126.net/3BujaUj1OABo1vB5J6M95w==/9030288998935945.jpg",
			"src": music163("28977906"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/ybxx.lrc",
			"time":"03:21"
		},
		{
			"name": "china-x",
			"singer": "Alstroemeria",
			"img": "http://p2.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg",
		   "src": music163("41500546"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:46"
		},
		{
			"name": "ふたりのきもちのほんとのひみつ",
			"singer": " 愛殺寶貝",
			"img": "http://p1.music.126.net/Ygj0jGI0AH3xbaHHUd5Esg==/109951163597240474.jpg",
			"src": music163("28629028"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/asbb.lrc",
			"time":"02:56"
		},
		{
			"name": "最美印记（小米手机官方合作单曲)",
			"singer": "初音ミク",
			"img": "http://p1.music.126.net/GvunKWMdk9mjtRB6y-BYHA==/109951163377283301.jpg",
			"src": music163("571339817"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/zmyj.lrc",
			"time":"04:26"
		},
		{
			"name": "despair",
			"singer": "LookedatHerFore",
			"img": "http://p2.music.126.net/H8WwcIP9WtdU9Sp6SK6CBQ==/109951163231870210.jpg",
			"src": music163("550829288"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/notword.lrc",
			"time":"03:58"
		}
		
	
	]
];