<template>
	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
			<Col span="4">
				<Button class="m-2" type="error" @click="newMenjin()">新增</Button>
			</Col>
			<Col span="4">
				<Input :class="'w-75 m-2'" v-model="searchKey"  placeholder="门禁设备编号或门店名称"></Input>
			</Col>
			<Col span="4">
				<Button class="m-2" type="primary" shape="circle" @click="init()" icon="ios-search"></Button>
			</Col>
		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{row,index}" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px;" @click="show(row.menjinId)">详情</Button>
					<Button type="error" size="small" @click="remove(row.menjinId)">删除</Button>
				</template>
			</Table>
			<Page :class="'m-2 text-right'" :page-size="tableInfo.pageSize" @on-change="pageSearch" :total="tableInfo.total"></Page>
		</Layout>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				searchKey: "",
				tableInfo: {
					currentInteger: 1,
					pageSize: 0,
					total: 0,
					columnInfo: [
						{
							title:"编号",
							render: (h,params) =>{
								return h("span",params.index + (this.tableInfo.currentInteger - 1) * this.tableInfo.pageSize + 1);
							},
							width:100
						},
						{
							title:"门店名称",
							key:"shopName",
							width:200
						},
						{
							title:"门禁型号",
							key:"menjinxinghao",
							width:200
						},
						{
							title:"门禁设备编号",
							key:"menjinshebeibianhao",
							width:200
						},
						{
							title:"维修电话",
							key:"tel",
							width:200
						},
						{
							title:"操作",
							slot:'action'
						}
					],
					data: []
				}
			}
		},
		methods: {
			init: function() {
				this.$data.tableInfo.currentInteger = 0;
				this.search();
			},
			newMenjin: function() {
				this.$router.push({
					name:"menjin_new"
				});
			},
			show: function(menjinId) {
				this.$router.push({
					name:"menjin_detail",
					params:{
						menjinId
					}
				});
			},
			update(menjinId){
				this.$router.push({
					name:"menjin_update",
					params:{
						menjinId
					}
				});
			},
			remove: function(menjinId){
				this.message.confirm({
					title:"删除提示",
					content:"即将删除用户，确定吗？",
					onOk: () => {
						this.http.delete({
							url:"/shop-menjin-vo/info",
							param:{
								menjinId
							}
						}).then(data=> {
							this.search();
						});
					},
					onCancel: () => {
						this.message.info('操作已取消');
					}
				});
			},
			search: function(current) {
				this.http.get({
					url: "/shop-menjin-vo/page",
					param: {
								currentInteger: this.$data.tableInfo.currentInteger,
								searchKey: this.$data.searchKey
							}
								}).then(data => {
									this.$data.tableInfo.currentInteger = data.current;
									this.$data.tableInfo.total = data.total;
									this.$data.tableInfo.pageSize = data.size;
									this.$data.tableInfo.data = data.records;
								});
							},
							pageSearch: function(changedPage) {
								this.$data.tableInfo.currentInteger = changedPage;
								this.search();
							}
						},
			created: function() {
				this.init();
			},
			watch: {
				$route(){
					this.init();
		}
	}						
}
</script>
<style>
</style>

