<template>
	<Layout :class="'bg-white p-2'">		
		<Row :class="'m-1'">
			        <Col span="4">
						<Input :class="'w-75 m-2'" v-model="searchKey" placeholder="请输入客户名" clearable style="width: 200px"/>
					</Col>
					<Col span="4">
						<Input :class="'w-75 m-2'" v-model="searchTel" placeholder="请输入手机号码" clearable style="width: 200px"/>
					</Col>					
					<Col span="4">
					<Select :class="'w-75 m-2'" v-model="searchState" placeholder="请选择押金状态" style="width:200px" @change="aa()" clearable>
						<Option v-for="item in depositState" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					</Col>
					<Col span="4">
						<i-switch :class="'m-2'" v-model="searchVIP"  true-color="#0000ff" false-color="#ff0000" clearable>
						        <span slot="open" value="true">是</span>
						        <span slot="close" value="false">否</span>
						</i-switch>
					</Col>					
					 <Col span="4">
					 	<Button class="m-2" type="primary" shape="circle" @click="search()" icon="ios-search">查询</Button>
					</Col>
		</Row>
		
		<Layout :class="'bg-white'">			
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(row.clientId)">详细</Button>					
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
				searchState:"",	
				searchVIP: "",
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
							// type: 'index',//分页之后序号不连续
							render: (h,params) => {
							    return h("span", params.index + (this.tableInfo.currentPage - 1) * this.tableInfo.pageSize + 1);
							},						
							width: 70,							     					
						},
						{
							title: "客户名",
							key: "clientName",
							width: 200,	
													
						},
						{
							title: "押金状态",
							key: "depositState",
							width: 150,
							// filters: [
                            // {
                            //     label: '已充值',
                            //     value: 1
                            // },
                            // {
                            //     label: '未充值',
                            //     value: 2
                            // },
							// {
							//     label: '已扣押',
							//     value: 3
							// },
							// ],
							// filterMultiple: false,
							// filterMethod (value, row) {
							// 	// alert("value:" + value);
							// 	// alert("row.depositState :" + row.depositState);
							// 	if (value === 1) {
							// 		return row.depositState  == "已充值" ;
							// 	} else if (value === 2) {
							// 		return row.depositState  == "未充值" ;
							// 	}else if (value === 3) {
							// 		return row.depositState  == "已扣押" ;
							// 	}
							// }
						},
						{
							title: "VIP",
							key: "vipDeleteFlag",
							width: 150,
							// filters: [
							// {
							//     label: '是',
							//     value: 1
							// },
							// {
							//     label: '否',
							//     value: 2
							// }							
							// ],
							// filterMultiple: false,
							// filterMethod (value, row) {
							// 	// alert("value:" + value);
							// 	// alert("row.vipDeleteFlag :" + row.vipDeleteFlag);
							// 	if (value === 1) {
							// 		return row.vipDeleteFlag  == "是" ;
							// 	} else if (value === 2) {
							// 		return row.vipDeleteFlag  == "否" ;
							// 	}
							// }
						},
						{
							title: "手机号",
							key: "phone",
							width: 200
						},						
						{
							title: "操作",
							slot: 'action',							
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
			show: function(clientId) {
				this.$router.push({
					name: "client_detail",
					params: {
						clientId
					}
				});
			},
			search: function() {
				// let search = this.$data.searchVIP;
				
				this.http.get({
					url: "/client-vip-deposit-vo/page",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						pageSize: this.$data.tableInfo.pageSize,
						searchKey: this.$data.searchKey,
						searchTel: this.$data.searchTel,
						searchState: this.$data.searchState,						
						searchVIP: this.$data.searchVIP
					}
				}).then(data => {					
					console.log(data)
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
					let rows = this.$data.tableInfo.data;
					for(let i = 0 ; i <= rows.length-1 ;i++){
						if(rows[i].vipDeleteFlag){
							rows[i].vipDeleteFlag = "是";
						}else{
							rows[i].vipDeleteFlag = "否";
						}
					}					
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
