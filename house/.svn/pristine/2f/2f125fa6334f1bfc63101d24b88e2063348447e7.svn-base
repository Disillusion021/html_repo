<template>
	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
<!-- 			<Button type="error" @click="newUser">新增</Button>
			<Input :class="'w-25 m-2'" v-model="searchKey" placeholder="请输入检索关键字" />
			<Button type="primary" shape="circle" @click="search" icon="ios-search">查询</Button> -->
			<Col span="4">
				<Button class="m-2" type="error" @click="newUser">新增</Button>
			</Col>
			        <Col span="4">
						<Input :class="'w-75 m-2'" v-model="searchKey" placeholder="请输入检索账号" />
					</Col>
			       <Col span="4">
			       	<Input :class="'w-75 m-2'" v-model="searchTel" placeholder="请输入检索电话" />
			       </Col>
				   <Col span="4">
				   	<Input :class="'w-75 m-2'" v-model="searchSec" placeholder="请输入检索身份证号" />
				   </Col>
					 <Col span="4">
					 	<Button class="m-2" type="primary" shape="circle" @click="search" icon="ios-search">查询</Button>
					 </Col>
		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(row.userId)">详细</Button>
					<Button type="error" size="small" @click="remove(row.userId)">删除</Button>
				</template>
			</Table>
			<Page :class="'m-2 text-right'" :page-size="tableInfo.pageSize" @on-change="pageSearch" :total="tableInfo.total" />
		</Layout>
	</Layout>
</template>
<script>
	export default {
		data() {
			return {
				searchKey: "",
				searchTel: "",
				searchSec: "",
				tableInfo: {
					currentPage: 1,
					total: 0,
					columnInfo: [
						{
							title: "用户编号",
							key: "userId",
							width: 70
						},
						{
							title: "账户",
							key: "account",
							width: 200
						},
						{
							title: "电话",
							key: "tel",
							width: 150
						},
						{
							title: "微信OPENID",
							key: "openId",
							width: 150
						},
						{
							title: "身份证",
							key: "secId",
							width: 200
						},
						{
							title: "创建时间",
							key: "ct",
							width: 200
						},
						{
							title: "操作",
							slot: 'action'
						}
					],
					data: []
				}
			}
		},
		methods: {
			init: function() {
				this.$data.tableInfo.currentPage = 0;
				this.search();
			},
			newUser: function() {
				this.$router.push({
					name: "user_new"
				});
			},
			show: function(userId) {
				this.$router.push({
					name: "user_detail",
					params: {
						userId
					}
				});
			},
			update(userId){
				this.$router.push({
					name: "user_update",
					params: {
						userId
					}
				});
			},
			remove: function(userId) {
				
				this.message.confirm({
					title: "删除提示",
					content: "即将删除用户，确定吗？",
					onOk: () => {
						this.http.delete({
							url: "/user/info",
							param: {
								userId
							}
						}).then(data => {
							
							this.search();
						});
					},
					onCancel: () => {
						this.message.info('操作已取消');
					}
				});
			},
			search: function() {
				this.http.get({
					url: "/user/list",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						searchKey: this.$data.searchKey
					}
				}).then(data => {
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
				});
			},
			pageSearch: function(changedPage) {
				this.$data.tableInfo.currentPage = changedPage;
				this.search();
			}
		},
		created: function() {
			this.init();
		}
		
	}
</script>

<style>
	
</style>
