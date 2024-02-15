<template>
  <root />
</template>

<script setup lang="ts">
import './styles.scss';
import { RouteLocationNormalizedLoaded, useRouter } from "vue-router";
import { Root } from '@tok/generation';
import { inject, ref, watch } from "vue";
import { default as config } from './config';
import { useAlerts } from '@tok/ui/use/alerts';
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';

const STORAGE_KEY = 'bitsgap_visited_pages'

const telegram = useTelegramSdk();
const router = useRouter();

localStorage.removeItem(STORAGE_KEY);

watch(router.currentRoute, (value) => {
  const level = config.pages.findIndex((page) => page.path === value.path)
  const visited = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
const currentLevel = visited.reduce((max, path) => Math.max(max, config.pages.findIndex((page) => page.path === path)), -1);

  // Update unique
  visited.push(value.path);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(visited))));

  telegram.showAlert(`Level: ${level} (current: ${currentLevel})`, () => {


    if (currentLevel < level && import.meta.env.VITE_WEBHOOK_URL) {
      fetch(
        import.meta.env.VITE_WEBHOOK_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Math.random().toString(32).substring(2, 9),
            raw: telegram.initData,
            route: {
              ...value,
              meta: {
                level,
              },
              matched: undefined
            },
          }),
        }
      )
    }
  })


  console.log(value.meta)
})

</script>
