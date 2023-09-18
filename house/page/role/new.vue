<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="角色名">
				<Input v-model="role.roleName" placeholder="请输入角色的名称"></Input>
			</FormItem>
			<FormItem class="w-50" label="权限">
				<Tree 
					:data="allPermissions" show-checkbox multiple></Tree>
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
		data: function() {
			return {
				role: {
					roleName: "",
				},
				permissions: [],
				allPermissions: [],
			};
		},
		methods: {
			submit: function() {
				let self = this;
				
				this.$data.permissions = [];
				for (let index in this.$data.allPermissions) {
					let permission = this.$data.allPermissions[index];
					if (permission.indeterminate || permission.checked) {
						this.$data.permissions.push(permission.permissionId);
						
						for (let jndex in permission.children) {
							let subPermission = permission.children[jndex];
							if (subPermission.checked) {
								this.$data.permissions.push(subPermission.permissionId);
							}
						}
					}
				}
			
				if (this.$data.permissions.length === 0) {
					this.message.error("请选择权限");
					return;
				}
				
				if (this.$data.role.roleName.length === 0) {
					this.message.error("请输入角色名");
					return;
				}
				
				this.$data.role.permissions = JSON.stringify(this.$data.permissions);
				console.log(self.$data.role);
				this.http.post({
					url: "/role/info",
					param: self.$data.role
				}).then(data => {
					self.message.info("添加成功");
					self.$tabs.close();
				});
				
				
			},
			cancel: function() {
				this.$tabs.close();
			},
			init: function() {
				this.searchPermission();
			},
			searchPermission: function() {
				let self = this;
				this.http.get({
					url: "/permission/all",
				}).then(data => {
					self.$data.allPermissions = [];
					for (let index in data) {
						let permission = {};
						permission.title = data[index].name;
						permission.expand = true;
						permission.children = [];
						permission.permissionId = data[index].permissionId;
						
						for (let jndex in data[index].permissions) {
							let subPermission = {};
							subPermission.title = data[index].permissions[jndex].name;
							subPermission.permissionId = data[index].permissions[jndex].permissionId;
							permission.children.push(subPermission);
						}
						
						self.$data.allPermissions.push(permission);
					}
				});
			}
		},
		mounted: function(){
			this.init();
		}
	}
</script>

<style>
</style>
