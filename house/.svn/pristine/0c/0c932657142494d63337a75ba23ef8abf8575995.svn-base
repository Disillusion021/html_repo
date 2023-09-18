<template>
	<Layout :class="'bg-white p-2'">
		<Row :class="'m-1'">
			<Col span="4">
			<Input :class="'w-75 m-2'" v-model="searchKey" placeholder="请输入检索条件" />
			</Col>
			<Col span="4">
				<Button class="m-2" type="primary" shape="circle" @click="init()" icon="ios-search">查询</Button>
			</Col>
		</Row>
		<Layout :class="'bg-white'">
			<Table border :class="'m-1'" :columns="tableInfo.columnInfo" :data="tableInfo.data"></Table>
			<Page :class="'m-2 text-right'" :page-size="tableInfo.pageSize" @on-change="pageSearch"
				:total="tableInfo.total" />
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
					columnInfo: [{
							title: "编号",
							key: "pingzhengId",
							//每页的每一条数据序号从1开始，而不是显示数据库的主键
							render: (h, params) => {
								let nowPage = params.index + (this.tableInfo.currentPage - 1) * this.tableInfo
									.pageSize + 1;
								return h('span', nowPage);
							},
							width: 65
						},
						{
							title: "公众号APPID",
							key: "appid",
							width: 100
						},
						{
							title: "商户号",
							key: "mchid",
							width: 100
						},
						{
							title: "订单号",
							key: "outTradeNo",
							width: 133
						},
						{
							title: "微信支付单号",
							key: "transactionId",
							width: 100
						},
						{
							title: "微信OPENID",
							key: "openid",
							width: 110
						},
						{
							title: "付款银行",
							key: "bankType",
							width: 100
						},
						{
							title: "总金额",
							key: "total",
							//页面显示金额以元为单位，而不是数据储存的以分为单位
							render: (h, params) => {
								let yuan = params.row.total / 100;
								return h('span', yuan);
							},
							width: 79
						},
						{
							title: "订单完成时间",
							key: "createTime",
							width: 110
						},
						{
							title: "支付完成时间",
							key: "successTime",
							width: 110
						},
						{
							title: "状态",
							key: "dingdanType",
							width: 100
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
					url: "/yuanshipingzhengbiao/page",
					param: {
						currentPage: this.$data.tableInfo.currentPage,
						pageSize: this.$data.tableInfo.pageSize,
						searchKey: this.$data.searchKey,
					}
				}).then(data => {
					this.$data.tableInfo.currentPage = data.current;
					this.$data.tableInfo.total = data.total;
					this.$data.tableInfo.pageSize = data.size;
					this.$data.tableInfo.data = data.records;
					//防止模糊查询时分页查询被污染
					let totalPage = Math.ceil(this.tableInfo.total / this.tableInfo.pageSize);
					totalPage = totalPage < 1 ? 1 : totalPage;
					if (this.tableInfo.currentPage > totalPage) {
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
		}
	}
</script>

<style>
	#t {
		border: 1px inset rgb(230, 230, 230);
		width: 100%;
		height: auto;
	}
</style>
