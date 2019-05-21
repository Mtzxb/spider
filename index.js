const superagent = require('superagent');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const reptileUrl = "https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=%D6%D0%B9%FA";

superagent.get(reptileUrl).end(function (err, res) {
	//var res =  iconv.decode(response,'gb2312');
	let $ = cheerio.load(res.text);
	var Element = $('#wgt-list dl');
	Element.each(function(i, elem) {
		var title = $(elem).attr("data-rank")
		var href = $(elem).find("a").attr("href")
		console.log(href)
	})
});

/*<tr class="hideline">
	<td class="first">
		<span class="num-top">1</span>
	</td>
    <td class="keyword">
        <a class="list-title" target="_blank" href="http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top1000&wd=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB" href_top="./detail?b=1&c=513&w=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB">何猷君文物上涂鸦</a>
        <span class="icon icon-new"></span>			                            
		<a href="./detail?b=1&c=513&w=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB" class="icon-search icon-xiang-imp" target="_blank">search</a>
    </td>
	<td class="tc">
		<a target="_blank" href="http://news.baidu.com/ns?tn=news&from=news&cl=2&rn=20&ct=1&word=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB">新闻</a>
		<a target="_blank" href="http://v.baidu.com/v?ct=301989888&rn=20&pn=0&db=0&s=0&word=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB">视频</a>
		<a target="_blank" href="http://image.baidu.com/i?tn=baiduimage&lm=-1&ct=201326592&cl=2&word=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB&ie=gbk">图片</a>
	</td>
	<td class="last">
		<span class="icon-rise">9729500</span>
	</td>
</tr>
<tr class="item-tr">
	<td colspan="4">
		<div class="shixiaoxinwen item-news">
    	    <div class="item-headline">
				<a class="info-title" href="http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top1000&wd=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB" href_top="./detail?b=1&c=513&w=%BA%CE%E9%E0%BE%FD%CE%C4%CE%EF%C9%CF%CD%BF%D1%BB" title="何猷君为在文物建筑上涂鸦道歉" target="_blank">何猷君为在文物建筑上涂鸦道歉</a>
				<p class="info-text">【何猷君为在文物建筑上涂鸦道歉 】据港媒,何猷君此前和奚梦瑶在录节目时曾在澳门文物建筑的墙上涂鸦,该行为近日被澳媒指可能触犯法律。何猷君19日晚发文道歉...</p>
			</div>
    	</div>
	</td>
</tr>*/