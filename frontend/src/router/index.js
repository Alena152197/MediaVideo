import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'
import SubscriptionsView from '@/views/user/subscriptions.vue'
import WatchlistView from '@/views/user/watchlist.vue'
import LikedView from '@/views/user/liked.vue'
import HistoryView from '@/views/user/history.vue'
import PlaylistsView from '@/views/user/playlists.vue'
import VideosView from '@/views/user/videos.vue'
import ChannelProfileView from '@/views/channel/profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/user/subscriptions',
      component: SubscriptionsView,
    },
    {
      path: '/user/watchlist',
      component: WatchlistView,
    },
    {
      path: '/user/liked',
      component: LikedView,
    },
    {
      path: '/user/history',
      component: HistoryView,
    },
    {
      path: '/user/playlists',
      component: PlaylistsView,
    },
    {
      path: '/user/videos',
      component: VideosView,
    },
    {
      path: '/channel/mediavideo',
      component: ChannelProfileView,
    },
  ],
})

export default router
