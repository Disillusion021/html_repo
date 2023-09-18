<template>

	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
			<Col span="4">
			<Input :class="'w-75 m-2'" v-model="searchkey" placeholder="门店名或客户名" />
			</Col>
			<!-- <Col spen="4">
			<Input :class="'w-75 m-2'" v-model="searchstart" placeholder="请输入锻炼开始时间" />
			</Col>
			<Col spen="4">
			<Input :class="'w-75 m-2'" v-model="searchend" placeholder="请输入锻炼结束时间" />
			</Col> -->
			<Col span="4">
				<DatePicker :class="'w-75 m-2'" type="datetimerange" v-model="searchstart" split-panels placeholder="请输入锻炼开始时间" ></DatePicker>
			</Col>
			<Col span="4">
				<DatePicker :class="'w-75 m-2'" type="datetimerange" v-model="searchend" split-panels placeholder="请输入锻炼结束时间"></DatePicker>
			</Col>
			<!-- <Col spen="4">
				<DatePicker :class="'w-75 m-2'" v-model="searchstart" type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" ></DatePicker>
			</Col> -->
			
			<Col span="4">
			<Select :class="'w-75 m-2'" v-model="searchstatus" placeholder="请选择订单状态"  @change="aa()" clearable>
				<Option v-for="item in depositState" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</Col>
			<!-- <Col span="4">
				<DatePicker type="date" multiple placeholder="Select date"
				 :class="'w-75 m-2'" v-model="searchstart" ></DatePicker>
			 </Col>
			 <Col span="4">
			 	<DatePicker type="date" multiple placeholder="Select date"
			 	 :class="'w-75 m-2'" v-model="searchend" ></DatePicker>
			  </Col> -->
			<!-- <Col spen="4">
			<Input type="datetime-local" :class="'w-75 m-2'" v-model="searchstart"/>
			</Col>
			<Col spen="4">
			<Input type="datetime-local" :class="'w-75 m-2'" v-model="searchend"/>
			</Col> -->
			
			
			<Col span="4">
			<Button class="m-2" type="primary" shape="circle" @click="search()" icon="ios-search">查询</Button>
			</Col>

		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px"
						@click="show(row.buyOrderId)">详细</Button>
					
				</template>
			</Table>
			<Page :class="'m-2 text-right'" :page-size="tableInfo.pageSize" @on-change="pageSearch"
				:total="tableInfo.total" />
		</Layout>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				searchkey: "",
				searchstart:[],
				searchend:[],
				searchstatus: "",
				depositState:[
					{
						value: '已支付',
						label: '已支付'
					},
					{
						value: '待支付',
						label: '待支付'
					},
				],
				tableInfo: {
					currentPage: 1,
					pageSize: 10,
					total: 0,
					columnInfo: [{
							title: "序号",
							/* key: "buyOrderId", */
							render: (h, params) => {
								return h("span", params.index + (this.tableInfo.currentPage - 1) * this.tableInfo
									.pageSize + 1);
							},
							width: 70
						},
						{
							title: "订单单号",
							key: "buyOrderNumber",
							width: 200
						},
						{
							title: "客户名称",
							key: "clientName",
							width: 150
						},
						{
							title: "订单金额",
							key: "orderMoney",
							width: 100
						},
						{
							title: "订单状态",
							key: "orderStatus",
							width: 100
						},
						{
							title: "锻炼开始时间",
							key: "exerciseStart",
							width: 200
						},
						{
							title: "锻炼结束时间",
							key: "exerciseEnd",
							width: 200
						},
						{
							title: "锻炼时长",
							key: "exerciseTime",
							width: 100
						},
						{
							title: "VIP",
							key: "vipDeleteFlag",
							width: 100
						},
						{
							title: "门店",
							key: "shopName",
							width: 200
						},
						{
							title: "操作",
							slot: 'action',
							width: 150
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
			show: function(buyOrderId) {
				this.$router.push({
					name: "buyorder_detail",
					params: {
						buyOrderId
					}
				});
			},
			search: function() {			
				// alert(this.$data.searchkey)
				// alert(this.$data.searchstart)
				let searchstart = "";
				let searchstart1 = "";
				let searchend = "";
				let searchend1 ="";
				if(this.$data.searchstart[0]){
					searchstart = new Date(+this.$data.searchstart[0] + 8 * 3600 * 1000).toISOString();
					searchstart1 =new Date(+this.$data.searchstart[1] + 8 * 3600 * 1000).toISOString();
				}
				if(this.$data.searchend[0]){
					searchend =new Date(+this.$data.searchend[0] + 8 * 3600 * 1000).toISOString();
					searchend1 =new Date(+this.$data.searchend[1] + 8 * 3600 * 1000).toISOString();
				}
				this.http.get({
					url: "/buy-order-client-shop-vo/page",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						pageSize: this.$data.tableInfo.pageSize,
						searchkey: this.$data.searchkey,
						searchstart: searchstart,
						searchstart1:searchstart1,
						searchend: searchend,
						searchend1:searchend1,
						searchstatus: this.$data.searchstatus,
					}
				}).then(data => {
					
					
					this.$data.tableInfo.currentPage = data.current;
					
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
					let totalPage = Math.ceil(this.tableInfo.total / this.tableInfo.pageSize);
					totalPage = totalPage < 1 ? 1 : totalPage;
					if (this.tableInfo.currentPage > totalPage) {
						this.$data.tableInfo.currentPage = totalPage;
						this.search();
					};
					var or = this.$data.tableInfo.data;
					for (var i = 0; i <= or.length - 1; i++) {
						if (or[i].orderStatus) {
							or[i].orderStatus = "已支付";
						} else {
							or[i].orderStatus = "待支付";
						}
					}
					for (var i = 0; i <= or.length - 1; i++) {
						if (or[i].vipDeleteFlag) {
							or[i].vipDeleteFlag = "是";
						} else {
							or[i].vipDeleteFlag = "否";
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
		}
	}
</script>
<style>
</style>
