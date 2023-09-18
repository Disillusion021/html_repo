<template>
	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
			<Col span="4">
				<Input :class="'w-75 m-2'" v-model="searchKey[0]" placeholder="请输入会员名" clearable/>
			</Col>
			<Col span="4">
				<Select :class="'w-75 m-2'" v-model="searchKey[1]" placeholder="请选择押金状态" clearable>
					<Option v-for="(item, index) in depositState" :value="item" :key="index">{{item}}</Option>
				</Select>
			</Col>
			<Col span="4">
				<Select :class="'w-75 m-2'" v-model="searchKey[2]" placeholder="请选择VIP类别" clearable>
					<Option v-for="(item, index) in cardName" :value="item" :key="index">{{item}}</Option>
				</Select>
			</Col>
			<Col span="4">
				<Input :class="'w-75 m-2'" v-model="searchKey[3]" placeholder="请输入联系电话" clearable/>
			</Col>
			<Col span="4">
				<i-switch :class="'m-3'" v-model="searchKey[4]" size="large" true-color="#0000ff" false-color="#ff0000" clearable>
					<span slot="open" value="true">有效</span>
					<span slot="close" value="false">过期</span>
				</i-switch>
			</Col>		
		</Row>
		<Row :class="'m-2'">
			<Col span="5">
				<DatePicker type="datetimerange" v-model="regRange" split-panels placeholder="请选择VIP注册时间范围" style="width: 300px"></DatePicker>
			</Col>
			<Col span="5">
				<DatePicker type="datetimerange" v-model="deadRange" split-panels placeholder="请选择VIP到期时间范围" style="width: 300px"></DatePicker>
			</Col>
			<Col span="4">
				<Button class="m-0" type="primary" shape="circle" @click="search" icon="ios-search">查询</Button>
			</Col>
		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-2'" :columns="tableInfo.columnInfo" :data="tableInfo.data">
				<template slot-scope="{ row, index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(row.vipId)">详细</Button>
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
				regRange: [],
				deadRange: [],
				cardName: [],
				searchKey: ['','','','',null],
				depositState:[
					'已充值',
					'未充值',
					'已扣押',
				],
				tableInfo: {
					currentPage: 1,
					pageSize: 8,
					total: 0,
					columnInfo: [
						{
							title: "会员编号",
							key: "vipId",
							render: (h, params) => {
								return h('span', params.index + (this.tableInfo.currentPage - 1) * this.tableInfo.pageSize + 1);
							},
							width: 130,
							fixed: 'left',
						},
						{
							title: "会员名",
							key: "clientName",
							fixed: 'left',
							width: 180,
						},
						{
							title: "押金状态",
							key: "depositState",
							width: 200,
						},
						{
							title: "VIP类别",
							key: "cardName",
							width: 200,
						},
						{
							title: "VIP注册时间",
							key: "regDate",
							width: 200,
						},
						{
							title: "VIP到期时间",
							key: "vipDeadline",
							width: 200,
						},
						{
							title: "VIP状态",
							key: "vipDeleteFlag",
							render(h, params){
								let flag;
								if (params.row.vipDeleteFlag == 1) {
									flag = "有效期内";
								} else {
									flag = "已过期";
								}
								return h('span', flag)
							},
							width: 200,
						},
						{
							title: "联系电话",
							key: "phone",
							width: 200,
						},
						{
							title: "操作",
							slot: 'action',
							// fixed: 'right',
							width: 200,
						}
					],
					data: []
				}
			}
		},
		methods: {
			init: function() {
				this.$data.tableInfo.currentPage = 0;
				// this.search();
				this.http.get({
					url: "/card/page",
					param: {
						currentPage: 1,
						pageSize: 99999
					}
				}).then(data => {
					let cardName = [];
					for(var k in data.records) {
						cardName[k] = data.records[k].cardName;
					}
					this.$data.cardName = Array.from(new Set(cardName));
				});
			},
			show: function(vipId) {
				this.$router.push({
					name: "vip_detail",
					params: {
						vipId
					}
				});
			},
			search: function() {
				let deadRange = [];
				let regRange = [];
				// alert(new Date(+this.$data.deadRange[0] + 8 * 3600 * 1000).toISOString());
				// alert(new Date(+this.$data.deadRange[1] + 8 * 3600 * 1000).toISOString());
				if (this.$data.deadRange[0]) {
					deadRange[0] = new Date(+this.$data.deadRange[0] + 8 * 3600 * 1000).toISOString();
					deadRange[1] = new Date(+this.$data.deadRange[1] + 8 * 3600 * 1000).toISOString();
					// alert(deadRange[0]);
					// alert(deadRange[1]);
				}
				if (this.$data.regRange[0]) {
					regRange[0] = new Date(+this.$data.regRange[0] + 8 * 3600 * 1000).toISOString();
					regRange[1] = new Date(+this.$data.regRange[1] + 8 * 3600 * 1000).toISOString();
					// alert(regRange[0]);
					// alert(regRange[1]);
				}
				this.http.get({
					url: "/vip-client-deposit-card-vo/page",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						pageSize: this.$data.tableInfo.pageSize,
						searchKey: JSON.stringify(this.$data.searchKey),
						deadRange: JSON.stringify(deadRange),
						regRange: JSON.stringify(regRange),
					}
				}).then(data => {
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
					let totalPage = Math.ceil(this.tableInfo.total / this.tableInfo.pageSize);
					totalPage = totalPage < 1 ? 1 : totalPage;
					if( this.tableInfo.currentPage > totalPage) {
						this.$data.tableInfo.currentPage = totalPage;
						this.search();
					};
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
		activated: function() {
			console.log("页面激活时调用search方法");
			this.search();
		},
	}
</script>
<style>
</style>
