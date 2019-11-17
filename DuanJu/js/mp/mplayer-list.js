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
 * slrc为歌词文件路径 可有可无
 */
//获取网易云音乐
function music163(i){
	return "http://music.163.com/song/media/outer/url?id="+i+".mp3"
}
var mplayer_song = [
	[{
			"basic": true,
			"name": "小马宝莉歌曲",
			"singer": "SmallPea",
			"img": "/images/pic/head.jpg"
		},
		{
			"name": "Let’s Have a Balttle",
			"singer": " Daniel Ingram",
			"img": "http://p1.music.126.net/SWikui-ghtI4sgBe_JAauQ==/7796636953309778.jpg",
			"src": music163("31649693"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"/audio/lrc/zuihoudeluxin.lrc",
			"time":"02:52"
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
			"img": "",
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
		
			
		}	,{
			"name": "Nevada",
			"singer": "Vicetone、Cozi Zuehlsdorff",
			"img": "http://p1.music.126.net/X_Ukd1BhXdDwsz4NqrisNA==/109951163640412456.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0",
			"src": music163("418602088"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc":"audio/lrc/nevada.lrc",
			"time":"03:28"
		}
		
	
	]

];