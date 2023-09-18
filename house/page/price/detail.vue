<template>
	<Layout class="p-5 bg-white">
	    <Form class="p-5" :model="price1" :label-width="80">
			<Row>
				<Col span="8">
					<FormItem class="w-50" label="单价" >
						<Input v-model="price1.price" ></Input>
					</FormItem>
				</Col>
			</Row>
			<FormItem>
				<Button @click="commit" style="margin-left: 8px">提交</Button>
			    <Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
	    </Form>
	</Layout>
	
</template>

<script>
	export default {
	    data() {
	        return {
	            price1: {
				
	            }
	        }
	    },
		
	    methods: {
	        cancel: function () {
	            this.$tabs.close();
	        },
	       
	        search: function () {
	          
	            this.http.get({
	                url: "/price/info",
	                param: {
	                    
	                }
	            }).then(data => {
					this.$data.price1 = data; 
					 	
				});	
	        },
			commit: function () {
			  
			    this.http.put({
			       url: "/price/info",
			       param: this.$data.price1
			    }).then(data => {
					this.message.info("修改成功");
					this.search();
					
					 	
				});	
			},
			
		},
	    created: function () {
			this.search()
			
	    }
	    
	}
</script>
<style>
</style>