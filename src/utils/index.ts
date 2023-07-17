/**
 * 本地开发环境
 * 不可以用于vite.config
 */
export const isLocalEnv = import.meta.env.MODE === 'development'
/**
 * 测试开发环境
 * 不可以用于vite.config
 */
export const isTestEnv = import.meta.env.MODE === 'testing'

/**
 * 生产环境
 * 不可以用于vite.config
 */
export const isProdEnv = import.meta.env.MODE === 'prod'