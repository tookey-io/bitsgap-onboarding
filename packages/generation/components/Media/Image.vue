<template>
  <component :is="link ? 'a' : 'div'" :class="$style.container" v-bind="link">
    <picture v-if="type === 'image'" v-bind="props" :class="$style.container">
      <source v-if="webp" type="image/webp" :srcset="loadedWebp" />
      <img v-bind="{ ...$attrs, ...props }" :src="loadedSrc" :class="[$style.img, static && $style.img_static]" />
    </picture>
  </component>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import { ImagePresetProps } from './Media.preset.props';
import { useLoadedImage } from './useLoadedImage';

const props = defineProps<ImagePresetProps>();

const { src, webp, aspectRatio, link } = toRefs(props);

const loadedSrc = useLoadedImage(src);
const loadedWebp = useLoadedImage(webp);

const computedAspectRatio = computed(() => {
  if (aspectRatio?.value) {
    return aspectRatio.value;
  }

  return '1/1';
});
</script>

<style lang="scss" module>
.container {
  aspect-ratio: v-bind(computedAspectRatio);
}

.img {
  width: inherit;
  height: inherit;

  &:not(&_static) {
    position: absolute;
    z-index: -1;
  }
}
</style>
