import {
  onMounted,
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
} from 'vue';

export default defineComponent({
  setup() {
    console.log('setup');

    onMounted(() => {
      console.log('mounted');
    });

    onMounted(() => {
      console.log('mounted');
    });
    onUpdated(() => {
      console.log('updated');
    });
    onUnmounted(() => {
      console.log('unmounted');
    });
    onBeforeMount(() => {
      console.log('before mount');
    });
    onBeforeUpdate(() => {
      console.log('before update');
    });
    onBeforeUnmount(() => {
      console.log('before unmount');
    });
    onErrorCaptured(() => {
      console.log('error captured');
    });
    onRenderTracked(() => {
      console.log('render tracked');
    });
    onRenderTriggered(() => {
      console.log('render triggered');
    });
    onActivated(() => {
      console.log('activated');
    });
    onDeactivated(() => {
      console.log('deactivated');
    });
    onServerPrefetch(() => {
      console.log('server prefetch');
    });
  },
});
