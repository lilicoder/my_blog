<template>
	<div class="wrap_w">
		<div class="content read">
			<div class="tit">谈谈杰克·韦尔奇的《赢》</div>
			<div class="des">
					<span>2017.06.15</span>
					<span>字数152</span>
					<span>阅读459</span>
					<span>评论1</span>
					<span>喜欢5</span>
			</div>
			<div class="con">
				杰克·韦尔奇出过三本书，第一本是《杰克·韦尔奇自传》，第二本是《赢》，第三本是《商业的本质》。我很早就看过杰克·韦尔奇的自传，而《赢》是2011年看的。当时我带了一个规模<br/>
			不小的团队，自己也总结了很多带团队的经验，这本书看过之后大有相见恨晚的感觉。因为自己摸索的很多成功经验和失败的教训，在这本书中都有总结。杰克·韦尔奇所倡导的GE管理理<br/>
			念是我高度认同的，我们公司现在也要求管理层学习《赢》。在我们团队，我要求我们的总监、经理、主管、组长都去阅读这本书。《赢》分为四个部分：
			1、第一部分谈到基本的、共通的公司管理和团队管理的原则；<br/>
			2、第二部分谈到公司如何赢得市场竞争，是公司相关的话题；<br/>
			3、第三部分谈到在整个行业中如何确定你的战略以及应对整个行业的竞争；<br/>
			4、第四部分关于个人职业生涯的规划，如何取得工作与生活的平衡。<br/>
			本次分享主要介绍前两部分，也就是前十章关于共同原则和公司管理的部分。首先，为什么我们要学习《赢》？这要回到我们自身来审视：<br/>
			丁香园过去在我的印象中是一家慢公司，尤其是过去我们部门：崇尚不要有管理层级；让每个人自由发挥自我驱动；崇尚无为而治。这颇有一点老子的哲学理念：小国寡民，鸡犬之声相
			闻，老死不相往来。<br/>
			<img src="../assets/images/code.png">
			杰克·韦尔奇出过三本书，第一本是《杰克·韦尔奇自传》，第二本是《赢》，第三本是《商业的本质》。我很早就看过杰克·韦尔奇的自传，而《赢》是2011年看的。当时我带了一个规模<br/>
			不小的团队，自己也总结了很多带团队的经验，这本书看过之后大有相见恨晚的感觉。因为自己摸索的很多成功经验和失败的教训，在这本书中都有总结。杰克·韦尔奇所倡导的GE管理理<br/>
			念是我高度认同的，我们公司现在也要求管理层学习《赢》。在我们团队，我要求我们的总监、经理、主管、组长都去阅读这本书。《赢》分为四个部分：
			1、第一部分谈到基本的、共通的公司管理和团队管理的原则；<br/>
			2、第二部分谈到公司如何赢得市场竞争，是公司相关的话题；<br/>
			3、第三部分谈到在整个行业中如何确定你的战略以及应对整个行业的竞争；<br/>
			4、第四部分关于个人职业生涯的规划，如何取得工作与生活的平衡。<br/>
			本次分享主要介绍前两部分，也就是前十章关于共同原则和公司管理的部分。首先，为什么我们要学习《赢》？这要回到我们自身来审视：<br/>
			丁香园过去在我的印象中是一家慢公司，尤其是过去我们部门：崇尚不要有管理层级；让每个人自由发挥自我驱动；崇尚无为而治。这颇有一点老子的哲学理念：小国寡民，鸡犬之声相
			闻，老死不相往来。<br/>
			</div>
		</div>
		<div class="ds content">
			<div class="tips">如果觉得我的文章对您有帮助，请随意打赏，您的支持将鼓励我继续创作！</div>
			<div class="ds_btn">打赏支持
				<div class="img_con"><img :src="ewm"/></div>
			</div>
			<div class="photo">
				<img src="../assets/images/photo.jpg">
			</div>
		</div>
		<div class="share_con clearfix">
			<div class="like l" @click.once="like_handle"><img :src="like?require('../assets/images/icon/heart_r.png'):require('../assets/images/icon/heart.png')" width="20">喜欢 | {{likenum}}</div>
			<div class="share_way r">
				<a href="item.url" v-for="item in sharelink">
					<div class="img_con">
						<img :src="item.img_g">
						<img :src="item.img_r">
					</div>
				</a>
			</div>
		</div>
		<div class="content">
			<div class="clearfix comments">
				<span class="blue_block l"></span>
				评论<span> ( 已有{{comments_l}}条评论 ) </span>
			</div>
			<div class="my_comment_n" v-if="!islogin">
				<div class="login_btn">登录 以后才能发表评论</div>
			</div>
			<div class="my_comment" v-else>
				<div class="input_area clearfix">
					<img :src="login_info.photo">
					<textarea placeholder="你想说什么..."></textarea>
					<div class="send_comment">发表评论</div>
				</div>
			</div>
			<div class="all_comments" v-if="comments_l!=0">
				<div class="commit_item clearfix" v-for="item in comments">
					<img :src="item.photo" class="l">
					<div class="commit_con l">
						<div class="name">{{item.name}}</div>
						<div class="text">{{item.content}}</div>
						<div class="time">{{item.time}}</div>
					</div>
				</div>
			</div>
			<div class="all_comments" v-else>
				<div class="no_co">
					<img src="../assets/images/icon/pen.png">
					成为第一个评论的人
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{	
				like:false,			
				likenum:7,
				islogin:true,
				login_info:{
					photo:require("../assets/images/user_photo.jpg")
				},
				comments:[
					{
						name:"用户一",
						photo:require("../assets/images/user_photo1.jpg"),
						content:"这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
						time:"2017.03.12 15:12:00"
					},
					{
						name:"用户二",
						photo:require("../assets/images/user_photo1.jpg"),
						content:"这是通过纯css，扩展性强，可以随意增加减少数量，兼容性ie6",
						time:"2017.03.12 15:12:00"
					},
					{
						name:"用户二",
						photo:require("../assets/images/user_photo1.jpg"),
						content:"这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
						time:"2017.03.12 15:12:00"
					},
					{
						name:"用户二",
						photo:require("../assets/images/user_photo1.jpg"),
						content:"这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
						time:"2017.03.12 15:12:00"
					},
					{
						name:"用户二",
						photo:require("../assets/images/user_photo1.jpg"),
						content:"这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6这是通过纯css实现的步骤流程效果，扩展性强，可以随意增加减少数量，兼容性ie6",
						time:"2017.03.12 15:12:00"
					},
					
				],
				comments_l:5
			}
		},
		computed:{
	      ...mapState([
	        "sharelink",
	        "ewm"
	      ])
	    },
	    methods:{
	    	like_handle:function(){
	    		if(!this.like){
	    			this.like=!this.like;
	    		}
	    	}
	    }
	}
</script>
<style scoped>
	.tit{
		font-size: 36px;
		color: #000;
		font-weight: 700;
		margin-bottom: 10px;
		padding-top: 20px
	}
	.read{
		text-align: left;
	}
	.des{
		font-size: 12px;
	}
	.des span{
		padding-right: 5px;
	}
	.con{
		font-size: 14px;
		line-height: 22px;
		padding: 20px 0
	}
	.con img{
		display: block;
		margin: 10px 0
	}
	.ds{
		border-top: 1px solid #f8f8f8;
		padding: 30px 0;
	}
	.ds .tips{
		padding:30px 0 20px;
	}
	.ds .ds_btn{
		width: 100px;
		line-height: 35px;
		margin: 0 auto 20px;
		background-color: #ea6f5a;
		color: #fff;
		border-radius: 2px;
		cursor: pointer;
	}
	.ds .ds_btn .img_con{
		width: 150px;
		position: relative;
		left: -25px;
		top: 0;
		overflow: hidden;
		height: 0;
		transition: all 500ms ease;
	}
	.ds .ds_btn img{
		max-width: 100%;
	}
	.ds .ds_btn:hover .img_con{
		height: 150px;
	}
	.ds .photo{
		width: 50px;
		height: 50px;
		margin: 0 auto;
		border-radius: 50%;
		overflow: hidden;
	}
	.ds .photo img{
		max-width: 100%;
	}
	.share_con{
		width: 600px;
		margin: 0 auto;
		padding: 20px 0;
		border-top: 1px solid #f8f8f8;		
	}
	.like{
		border: 1px solid #ea6f5a;
		border-radius: 20px;
		line-height: 40px;
		width: 120px;
		color: #ea6f5a
	}
	.share_way{
		width: 180px;
		line-height: 40px;
	}
	.share_way a{
		width: 32px;
		height: 32px;
		overflow: hidden;
		float: left;
		margin-right: 10px;
	}
	.share_way .img_con{
		position: relative;
		top:0;
		transition: all 200ms;
	}
	.share_way a:hover .img_con{
		top:-32px;
	}
	.share_way a img{
		display: block;
	}
	.comments{
		text-align: left;
	}
	.comments span{
		color: #999;
		font-size: 12px
	}
	.my_comment_n{
		border: 1px solid #eee;
		margin: 20px 0;
		padding: 30px 0;
	}
	.login_btn{
		width: 500px;
		background-color: #eee;
		margin: 0 auto;
		font-size: 14px;
		line-height: 30px;
	}
	.input_area{
		position: relative;
		margin: 40px 0 20px;
		padding-left: 20px;
	}
	.input_area>img{
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		top: -25px;
		left: -5px;
	}
	.input_area textarea{
		width: 1136px;
		height: 50px;
		padding: 20px;
		border:1px solid #eee;
		resize: none;
		outline: none;
	}
	.send_comment{
		width: 100px;
		line-height: 35px;
		background-color: #007AFF;
		text-align: center;
		color: #fff;
		float: right;
		border-radius: 3px;
		cursor: pointer;
	}
	.input_area textarea:focus{
	}
	.all_comments{
		text-align: left;
		padding-bottom: 20px;
	}
	.all_comments img{
		width: 60px;
		height: 60px;
	}
	.commit_con{
		padding-left: 10px;
	}
	.commit_item{
		margin-bottom: 20px;
	}
	.all_comments .name,.all_comments .time{
		color: #999;
		font-size: 12px;
	}
	.all_comments .text{
		font-size: 14px;
		margin: 3px 0;
		width: 1100px
	}
	.all_comments .no_co{
		margin: 30px auto 10px;
		width: 300px;
	}
</style>