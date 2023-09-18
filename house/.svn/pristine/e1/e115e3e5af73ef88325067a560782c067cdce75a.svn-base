<template>
	<Layout class="p-5 bg-white">
		<Form class="p-5" :model="card" :label-width="100">
			<Row>
				<Col span="8">
				<FormItem class="w-100" label="会员卡名称">
					<Input v-model="card.cardName" />
				</FormItem>
				<FormItem class="w-100" label="有效天数">
					<Input v-model="card.periodDate" />
				</FormItem>
				<FormItem class="w-100" label="价格">
					<Input v-model="card.cardMoney" />
				</FormItem>
				</Col>
			</Row>
			<FormItem class="text-left">
				<Button @click="submit" type="primary">提交</Button>
				<Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
		</Form>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				card: {
					cardName: "",
					periodDate: "",
					cardMoney: "",
					cardId: 0,
				},
			}
		},
		methods: {
			cancel: function() {
				this.$router.go(-1);
				this.$tabs.close();
			},
			submit: function() {
				this.http.put({
					url: "/card/info",
					param: this.card,
				}).then(() => {
					this.message.info("修改成功");
					this.$router.go(-1);
					this.$tabs.close();
				});
			},
			init: function() {
				this.search();
			},
			search: function() {
				this.http.get({
					url: "/card/info",
					param: {
						cardId: this.$data.card.cardId
					}
				}).then(data => {
					this.card = data;
				});
			},
		},
		created: function() {},
		mounted: function() {
			this.$data.card.cardId = this.$route.params.cardId;
			this.init();
		}
	}
</script>
<style>
</style>
