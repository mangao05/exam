<template>
   
</template>
<script>
export default {
    props : ['drawer'],
    name : 'Head',
    methods : {
        openDrawer(){
            this.$emit('openDrawer');
        }
    }
}
</script>