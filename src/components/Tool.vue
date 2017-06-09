<template>
	<div class="wrap_w">
		<div class="content tools">
			<div class="tools_contain"  v-for="items in tools">
				<div class="clearfix navkind">
					<span class="blue_block l"></span>
					{{items.name}}
				</div>
				<div class="tools_con">
					<ul class="clearfix">
						<li v-for="item in items.content">
							<img :src="item.logo"/>
							<p><a href='javascript:void(0)' @click="confirm(item.url64,item.name+'64位')">ps 64位下载</a></p>
							<p><a href='javascript:void(0)' @click="confirm(item.url32,item.name+'32位')">ps 32位下载</a></p>
						</li>
					</ul>
				</div>
				<div class="layer" v-if="layershow">
					<div  class="layer_tit">提示</div>
					<div class="layer_con">{{tips}}</div>
					<div class="btn_con">
						<a :href="downUrl" @click="close_layer">确定</a>
						<a href="javascript:void(0)" class="cancel"  @click="close_layer">取消</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				tips:"hhhhhhhhhhh",
				layershow:false,
				downUrl:'',
				tools:[{
						"name":"设计相关",
						"content":[
								{
									logo:require("../assets/images/tool/ps.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"ps"
								},
								{
									logo:require("../assets/images/tool/axsure.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"axsure"
								},
								{
									logo:require("../assets/images/tool/sublime.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"sublime"
								},
								{
									logo:require("../assets/images/tool/ps.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"ps"
								},
								{
									logo:require("../assets/images/tool/axsure.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"axsure"
								},
								{
									logo:require("../assets/images/tool/sublime.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"sublime"
								},

						]
					},
					{
						"name":"编辑器",
						"content":[
								{
									logo:require("../assets/images/tool/ps.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"ps"
								},
								{
									logo:require("../assets/images/tool/axsure.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"axsure"
								},
								{
									logo:require("../assets/images/tool/sublime.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"sublime"
								},
								{
									logo:require("../assets/images/tool/ps.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"ps"
								},
								{
									logo:require("../assets/images/tool/axsure.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"axsure"
								},
								{
									logo:require("../assets/images/tool/sublime.png"),
									url64:"https://www.91guoxin.com",
									url32:"https://www.baidu.com",
									name:"sublime"
								},

						]
					}
					
				]
			}
		},
		methods:{
			confirm(url,text){
				this.layershow=true;
				this.downUrl=url;
				this.tips="您确定下载"+text+"吗？";
			},
			close_layer(){
				this.layershow=false
			}
		}
	}
</script>
<style scoped>
	.tools{
		padding-bottom:50px;
	}
	.tools_con ul li{
		width: 25%;
		float: left;
		font-size: 12px;
		margin-bottom: 30px;
	}
	.tools_con ul li img{
		padding: 30px 0 15px;
	}
	.tools_con ul li a{
		color: #333;
	}
	.tools_con ul li a:hover{
		text-decoration: underline;
	}
	.layer{
		position: fixed;
		top: 200px;
		left: 50%;
		margin-left: -200px;
		width: 400px;
		height: 200px;
		background-color: #fff;
		border-top: 2px solid #a2c71c;
		box-shadow: 0 0 15px 0 #ccc
	}
	.layer_tit{
		line-height: 40px;
		border-bottom: 1px solid #eee;
	}
	.layer_con{
		line-height: 80px;
	}
	.btn_con>a{
		padding: 0 10px;
		background-color: #a2c71a;
		padding: 5px 20px;
		color: #fff;
		margin: 0 10px;
		border-radius: 2px;
	}
	.btn_con>a.cancel{
		background-color: #ccc
	}
</style>