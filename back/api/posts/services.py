from fastapi import HTTPException
from sqlalchemy import select


from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from api.posts.models import Post
from api.comments.models import Comment
from api.posts.schemas import post_create_schema
from sqlalchemy.orm import selectinload

async def get_post_list(db: AsyncSession):
    data = await db.execute(select(Post))
    return data.scalars().all()

async def get_post(db: AsyncSession, post_id: int):
    post = await db.execute(
    select(Post)
        .filter(Post.id == post_id)
        .options(selectinload(Post.comments))
    )
    post = post.scalars().first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

async def create_post(db: AsyncSession, post_create_schema: post_create_schema):
    post = Post(
        title=post_create_schema.title,
        content=post_create_schema.content,
        created_at=datetime.now()
    )
    db.add(post)
    await db.commit()
    await db.refresh(post)
    return

async def delete_post(db: AsyncSession, post: Post):
    await db.delete(post)
    await db.commit()
    await db.close()
    return
