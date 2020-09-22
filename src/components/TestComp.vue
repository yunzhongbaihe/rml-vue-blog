<template>
	<KindeditorComp id="kindeditorComp_1" height="300px" width="500px" :content.sync="editorText" :loadStyleMode="false"></KindeditorComp>
</template>

<script>
	import KindeditorComp from './KindeditorComp.vue';

	export default {
		name: 'TestComp',
		components: {KindeditorComp},
		data(){
			return {
				editorText: '',
			}
		},
	}
</script>

<style scoped>
</style>