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
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(row.roleId)">详细</Button>
					<Button type="error" size="small" @click="remove(row.roleId)">删除</Button>
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
								title: "角色编号",
								key: "roleId",
							},
							{
								title: "角色名称",
								key: "roleName",
							},
							{
								title: "状态",
								slot: "status",
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
			},
			newRole: function() {
				this.$router.push({
					name: "role_new"
				});
			},
			show: function(roleId) {
				this.$router.push({
					name: "role_detail",
					params: {
						roleId
					}
				});
			},
			search: function() {
				this.http.get({
					url: "/role/list",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						roleName: this.$data.searchKey
					}
				}).then(data => {
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
				});
			},
			pageSearch: function(changedPage) {
				console.log(changedPage);
				this.$data.tableInfo.currentPage = changedPage;
				this.search();
			},
			remove: function(roleId) {
				
				this.message.confirm({
					title: "删除提示",
					content: "即将删除角色，确定吗？",
					onOk: () => {
						this.http.delete({
							url: "/role/info",
							param: {
								roleId
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
