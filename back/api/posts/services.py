from fastapi import HTTPException
from sqlalchemy import select


from sqlalchemy.orm import Session
from api.posts.models import Post
from datetime import datetime
from api.posts.schemas import post_create_schema

async def get_post_list(db: Session):
    data = await db.execute(select(Post).order_by(Post.created_at.desc()))
    return data.scalars().all()

async def get_post(db: Session, post_id: int):
    result = await db.execute(select(Post).where(Post.id == post_id))
    post = result.scalar_one_or_none()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

async def create_post(db: Session, post_create_schema: post_create_schema):
    post = Post(
        title=post_create_schema.title,
        content=post_create_schema.content,
        created_at=datetime.now()
    )
    db.add(post)
    await db.commit()
    return

async def delete_post(db: Session, post: Post):
    await db.delete(post)
    await db.commit()
    return
