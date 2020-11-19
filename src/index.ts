import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/post'
import microConfig from './mikro-orm.config'

const main = async () => {
  const orm = await MikroORM.init(microConfig)

  // Create post
  const post = orm.em.create(Post, { title: 'my first post' })
  // Send post to DB
  await orm.em.persistAndFlush(post)
}

main().catch((err) => {
  console.error(err)
})
