import api from './src/service/api.js'
import { handler } from './src/template.js'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors())
app.use('*', logger())
app.get('/api', api)
app.get('/test', handler)
app.get('/', (c) => c.text('你好！访问/test以测试。'))

export default app
