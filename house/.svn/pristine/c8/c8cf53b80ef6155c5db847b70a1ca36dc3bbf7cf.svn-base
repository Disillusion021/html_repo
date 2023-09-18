<template>
	<Layout :class="'bg-white p-2'">		
		<Row :class="'m-1'">
			        <Col span="4">
						<Input :class="'w-95 m-2'" v-model="searchKey" placeholder="请输入编号/客户名/操作人" clearable style="width: 200px"/>
					</Col>
					<Col span="4">
					<Select :class="'w-75 m-2'" v-model="searchState" placeholder="请选择押金状态"  style="width:200px" @change="aa()" clearable>
						<Option v-for="item in depositState" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					</Col															
					 <Col span="4">
					 	<Button class="m-2" type="primary" shape="circle" @click="search()" icon="ios-search">查询</Button>
					</Col>
		</Row>		
		<Layout :class="'bg-white'">			
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">	
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
				searchState:"",
				depositState:[
					{
						value: '已充值',
						label: '已充值'
					},
					{
						value: '未充值',
						label: '未充值'
					},
					{
						value: '已扣押',
						label: '已扣押'
					},
				],
				tableInfo: {
					currentPage: 1,
					pageSize: 10,
					total: 0,
					columnInfo: [
						{
							title: "序号",													
							render: (h,params) => {
							    return h("span", params.index + (this.tableInfo.currentPage - 1) * this.tableInfo.pageSize + 1);
							},						
							width: 70,							     					
						},
						{
							title: "押金记录编号",
							key: "depositNumber",
							width: 250,														
						},
						{
							title: "客户名",
							key: "clientName",
							width: 150,														
						},
						// {
						// 	title: "押金金额",
						// 	key: "deposit",
						// 	width: 150,
						// },
						{
							title: "押金状态",
							key: "depositState",
							width: 150,
						},
						{
							title: "操作人",
							key: "account",
							width: 150,
						},						
						{
							title: "操作时间",
							key: "time",
							width: 200
						},
						{
							title: "原因",
							key: "reason",
							width: 400,
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
			search: function() {
				this.http.get({
					url: "/deposit-record-client-user-vo/page",					
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						pageSize: this.$data.tableInfo.pageSize,
						searchKey: this.$data.searchKey,
						searchState: this.$data.searchState,
					}
				}).then(data => {					
					// console.log(data)
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;					
					let totalPage = Math.ceil(this.tableInfo.total / this.tableInfo.pageSize);
					totalPage = totalPage < 1 ? 1 : totalPage;
					if( this.tableInfo.currentPage > totalPage) {
						this.$data.tableInfo.currentPage = 1;
						this.search();
					};					
					// for(let i = 0 ; i <= rows.length-1 ;i++){
					// 	if("已充值" === rows[i].depositState){
					// 		rows[i].account = "";
					// 		rows[i].reason = "";
					// 	}
					// }
				});
			},
			pageSearch: function(changedPage) {
				this.$data.tableInfo.currentPage = changedPage;
				this.search();
			}
		},
		created: function() {
			this.init();
		},			
	}
</script>

<style>
	
</style>
