<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="权限编号">
				<label>{{permission.permissionId}}</label>
			</FormItem>
	
			<FormItem class="w-50" label="权限名">
				<Input v-model="permission.name" placeholder="请输入权限名"></Input>
			</FormItem>
			<FormItem v-if="permission.pId > 0" class="w-50" label="权限路径">
				<Input v-model="permission.path" placeholder="请输入路径"></Input>
			</FormItem>
			<FormItem class="w-50" label="父级权限">
				<Select @on-change="changeP" v-model="permission.pId">
					<Option v-for="fPermission in allPermissions" :value="fPermission.permissionId">{{fPermission.name}}</Option>
				</Select>
			</FormItem>
			<FormItem class="text-right">
				<Button @click="submit" type="primary">提交</Button>
				<Button @click="cancel" class="ml-2">取消</Button>
			</FormItem>
		</Form>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				permission: {
					permissionId: "",
					path: "",
					name: "",
					pId: 0,
				},
				allPermissions: []
			}
		},
		methods: {
			changeP: function(selectedPermissionId) {
				if (selectedPermissionId === 0) {
					this.$data.permission.path = "";
				}
			},
			submit: function() {
				let self = this;
				
				if (this.$data.permission.name.length === 0) {
					this.message.error("请输入权限名称");
					return;
				}
				
				if (this.$data.permission.pId !== 0) {
					if (this.$data.permission.path.length === 0) {
						this.message.error("请输入权限路径");
						return;
					}
				}
				
				delete self.$data.permission.cu;
				delete self.$data.permission.ct;
				delete self.$data.permission.uu;
				delete self.$data.permission.ut;
				
				this.http.put({
					url: "/permission/info",
					param: self.$data.permission
				}).then(data => {
					self.message.info("修改成功");
					self.$tabs.close();
				});
				
				
			},
			cancel: function() {
				this.$tabs.close();
			},
			init: function() {
				let self = this;
				this.http.get({
					url: "/permission/all"
				}).then(data => {
					self.$data.allPermissions.push({
						permissionId: 0,
						name: "系统"
					});
					for (let index in data) {
						let permission = {};
						permission.permissionId = data[index].permissionId;
						permission.name = data[index].name;
						self.$data.allPermissions.push(permission);
					}
					console.log(self.$data.allPermissions);
				}).then(() => {
					
					self.http.get({
						url: "/permission/info",
						param: {
							permissionId: self.$data.permission.permissionId
						}
					}).then(data => {
						console.log(data);
						self.$data.permission = data;
					});
					
					
				});
			}
		},
		created: function(){
			this.$data.permission.permissionId = this.$route.params.pId;
			this.init();
		}
	}
</script>