from sqlalchemy import select
from sqlalchemy.orm import Session
from api.posts.models import Post
from datetime import datetime
from api.posts.schemas import post_create

async def get_post_list(db: Session):
    data = await db.execute(select(Post).order_by(Post.created_at.desc()).limit(10))
    return data.scalars().all()

async def get_post(db: Session, post_id: int):
    data = await db.execute(select(Post).filter(Post.id == post_id))
    return data

async def create_post(db: Session, post_create: post_create):
    post = Post(id=post_create.id, title=post_create.title, content=post_create.content, created_at=datetime.now())
    db.add(post)
    await db.commit()
    return
