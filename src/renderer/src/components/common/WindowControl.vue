<script setup>
import { NFlex, NAvatar, NTooltip, useThemeVars } from 'naive-ui'
import { computed } from 'vue'
import iconUrl from '@renderer/assets/electron.svg'
import WindowMinBtn from './icons/WindowMinBtn.vue'
import WindowMaxBtn from './icons/WindowMaxBtn.vue'
import WindowCloseBtn from './icons/WindowCloseBtn.vue'

const themeVars = useThemeVars()

const props = defineProps({
  size: {
    type: Number,
    default: 35
  },
  maximised: {
    type: Boolean
  }
})

const buttonSize = computed(() => {
  return props.size + 'px'
})

const windowMinimze = () => {
  window.api.windowMinimze()
}

const windowMaximize = () => {
  window.api.windowMaximize()
}

const windowClose = () => {
  window.api.windowClose()
}
</script>
<template>
  <n-flex wrap="false" justify="space-between" class="window-top-panel">
    <n-flex align="center">
      <n-avatar :size="28" :src="iconUrl" color="#0000" style="min-width: 28px" />
      <div style="white-space: nowrap; font-weight: 800">
        <p>Simple RDM</p>
      </div>
    </n-flex>
    <div></div>
    <n-flex :size="0" :wrap="false">
      <n-tooltip :delay="1000" :show-arrow="false">
        <template #trigger>
          <div class="btn-wrapper" @click="windowMinimze">
            <window-min-btn />
          </div>
        </template>
        最小化
      </n-tooltip>
      <n-tooltip :delay="1000" :show-arrow="false">
        <template #trigger>
          <div class="btn-wrapper" @click="windowMaximize">
            <window-max-btn />
          </div>
        </template>
        最大化
      </n-tooltip>
      <n-tooltip :delay="1000" :show-arrow="false">
        <template #trigger>
          <div class="btn-wrapper" @click="windowClose">
            <window-close-btn />
          </div>
        </template>
        关闭程序
      </n-tooltip>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.window-top-panel {
  -webkit-app-region: drag;
}

.btn-wrapper {
  cursor: pointer;
  width: v-bind('buttonSize');
  height: v-bind('buttonSize');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: v-bind('themeVars.closeColorHover');
  }

  &:active {
    background-color: v-bind('themeVars.closeColorPressed');
  }
}
</style>
