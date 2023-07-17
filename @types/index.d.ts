
// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面标题
     */
    title?: string
  }
}

interface Window {
  session?: string
  UBOX_TOKEN?: string
  ucloud: {
    postMessage: (data: string) => void
    token:()=>string
  }
  uboxClient: {
    getToken: (callback: (token: string) => void) => void
  }
}

