<template>
	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
			<Button type="error" @click="newRole">新增</Button>
			<Input :class="'w-25 m-2'" v-model="searchKey" placeholder="请输入检索关键字" />
			<Button type="primary" shape="circle" @click="search" icon="ios-search">查询</Button>
		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{ row, index }" slot="status">
					<span v-if="row.statu">开</span>
					<span v-else>关</span>
				</template>
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(row.permissionId)">详细</Button>
					<Button type="error" size="small" @click="remove(row.permissionId)">删除</Button>
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
					tableInfo: {
						currentPage: 1,
						total: 0,
						pageSize: 10,
						columnInfo: [
							{
								title: "权限编号",
								key: "permissionId",							
							},
							{
								title: "权限名称",
								key: "name",
							},
							{
								title: "状态",
								slot: "status",
							},
							{
								title: "权限路径",
								key: "path",
							},
							{
								title: "父级权限编号",
								key: "pId",
							},
							{
								title: "创建时间",
								key: "ct",
							},
							{
								title: "操作",
								slot: 'action',
								width: 150
							}
						],
						data: []
					}
				
			};
		},
		methods: {
			init: function() {
				this.$data.tableInfo.currentPage = 0;
				this.search();
				console.log(123)
				console.log(this.$data.tableInfo.data.name)
				console.log(123)
			},
			newRole: function() {
				this.$router.push({
					name: "permission_new"
				});
			},
			show: function(pId) {
				this.$router.push({
					name: "permission_detail",
					params: {
						pId
					}
				});
			},
			search: function() {
				console.log("进来了")
				this.http.get({
					url: "/permission/list",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						name: this.$data.searchKey
					}
				}).then(data => {
					console.log(data)
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
					// this.$data.tableInfo.data = [123];
					// console.log(this.$data.tableInfo.data+"")
				});
			},
			pageSearch: function(changedPage) {
				console.log(changedPage);
				this.$data.tableInfo.currentPage = changedPage;
				this.search();
			},
			remove: function(pId) {
				
				this.message.confirm({
					title: "删除提示",
					content: "即将删除权限，确定吗？",
					onOk: () => {
						this.http.delete({
							url: "/permission/info",
							param: {
								permissionId: pId
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
		},
		created: function() {
			this.init();
		},
	}
</script>

<style>
</style>
