<template>
	<div id="app">
		<HeaderNav v-if="$route.meta.showHeaderbar && isKeepAlive"></HeaderNav>
		<router-view v-if="isKeepAlive"></router-view>
	</div>
</template>

<script>
	// import {mapGetters, mapMutations, mapActions} from "vuex";
	import HeaderNav from "@/components/HeaderNav";

	export default {
		name: 'App',
		data(){
			return {
				isKeepAlive: true
			}
		},
		mounted(){
			// this.$store.dispatch('editBookId', 123456789);
			// this.$store.commit('editBookId', 987654321);
			// this.editBookId(123456789);
		},
		computed: {
			// ...mapGetters(['bookId']),
		},
		methods: {
			// ...mapMutations(['editBookId']),
			// ...mapActions(['editBookId']),
			reload(){
				this.getSession();
				this.isKeepAlive = false;
				this.$nextTick(() => {
					this.isKeepAlive = true;
				});
			}
		},
		components: {
			HeaderNav
		},
		watch: {
			$route(to, from){
				if(to.params.isGetSession){
					this.$getAxios(`/api/profile`).then(res => {
						res.success && sessionStorage.setItem('profileData', JSON.stringify(res.data));
					});
					this.getSession();
				}
			}
		},
		provide(){
			return {
				reload: this.reload
			}
		},
	}
</script>