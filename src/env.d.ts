/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AWS_USER_POOL_ID: string
  readonly VITE_AWS_USER_POOL_WEB_CLIENT_ID: string
  readonly VITE_APP_API_ENDPOINT: string
  readonly VITE_APP_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 